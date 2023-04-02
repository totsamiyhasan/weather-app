<template>
  <header class="header">
      <nav class="header__nav">
          <a href="" class="logo">
              <img src="@/assets/img/header-logo.svg" alt="">
              vue weather
          </a>
          <div class="header__search">
              <img src="@/assets/img/water.svg" alt="">
              <input 
              class="header__input" 
              placeholder="Выбрать город"
              v-model="query"
              @keydown.enter="sendInfo"
              >
          </div>
      </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
data(){
    return{
        query:null,
    }
},
methods:{
    ...mapActions(['getWeather']),
    sendInfo(){
        if (this.query != null) {
            this.getWeather(this.query),
            this.query = null
        }
    }
},
created(){
    this.getWeather()
}
}
</script>

<style>

</style>