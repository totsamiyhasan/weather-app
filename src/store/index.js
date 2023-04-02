import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        apiKey:'cacd87404968795cec3b720ae4d00b99',
        getFullWeather:null
    },
    mutations: {
        getWeather(state, payload ){
            state.getFullWeather = payload
        }
    },
    actions: {
        async  getWeather({commit, state},city = 'Tashkent') {
          try {
            const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
            let  wearther = res.data[0]
            let {lat,lon,name} = wearther
            const fullRes = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&units=metric&lang=ru`)
            let weatherInfo = fullRes.data
            let weatherObj = {...weatherInfo, name}
            commit('getWeather',weatherObj)
            console.log(weatherObj);
          } catch (error) {
            console.log(error);
          }
        }
    },
    getters: {
      getFullWeather:state=>state.getFullWeather,
      getDailyWeather:state=>state.getFullWeather.daily.filter((day, i)=> i != 0) ,
    }
})
export default store