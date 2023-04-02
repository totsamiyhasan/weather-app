<template>
  <div class="main__content">
    <div class="main__content-left">
        <p class="main__content-degree">{{Math.round(getFullWeather.current.temp)}}°</p>
        <p class="main__content-today">Сегодня</p>
        <p class="main__content-time">Время: {{getTime}}</p>
        <p class="main__content-city">Город: {{ getFullWeather.name }}</p>
        <div class="main__content-img">
            <img src="@/assets/img/weather-icons/sun.svg" alt="" v-if="getDescr == 'ясно'">
            <img src="@/assets/img/weather-icons/mainly_cloudy.svg" alt="" v-if="getDescr =='пасмурно'">
            <img src="@/assets/img/weather-icons/small_rain.svg" alt="" v-if="getDescr == 'небольшой дождь'">
            <img src="@/assets/img/weather-icons/rain.svg" alt="" v-if="getDescr == 'дождь'">
            <img src="@/assets/img/weather-icons/small_rain_sun.svg" alt="" v-if="getDescr == 'небольшая облачность'">
            
        </div>
    </div>
    <div class="main__content-right">
        <img src="@/assets/img/Cloud-image.svg" alt="" class="main__content-bg">
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/img/temp.svg" alt="">
            </div>
            <span class="main__content-span">Температура</span>
            <span>{{Math.round(getFullWeather.current.temp)}}° - ощущается как {{Math.round(getFullWeather.current.feels_like)}}°</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/img/pressure.svg" alt="">
            </div>
            <span class="main__content-span">Давление </span>
            <span>{{ getFullWeather.current.pressure }} мм ртутного столба - нормальное</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/img/osadki.svg" alt="">
            </div>
            <span class="main__content-span">Осадки</span>
            <span>{{  getFullWeather.current.humidity }}%</span>
        </div>
        <div class="main__content-item">
            <div class="main__content-icon">
                <img src="@/assets/img/veter.svg" alt="">
            </div>
            <span class="main__content-span">Ветер</span>
            <span>{{  getFullWeather.current.wind_speed }} м/с {{ getFullWeather.current.wind_deg}} - легкий ветер</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions,mapGetters} from "vuex";
export default {
computed:{
    ...mapGetters(['getFullWeather']),
    getDescr(){
        return this.getFullWeather.current.weather[0].description
    },
    getTime(){
        return new Date().toLocaleString('ru-RU', {
            timeZone: this.getFullWeather.timezone,
            timeStyle:"short",
            hourCycle:"h24"
        })
    }
},
methods:{
   ...mapActions(['getWeather']) 
},
}
</script>

<style>

</style>