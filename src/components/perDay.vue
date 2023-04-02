<template>
  <div class="main__week-day">
    <h3 class="main__week-title">{{getWeek}}</h3>
    <p class="main__week-date">{{getDay}} {{getMonth}}</p>
    <div class="main__week-img">
        <img src="@/assets/img/weather-icons/sun.svg" alt="" v-if="getDescr == 'Clear'">
        <img src="@/assets/img/weather-icons/mainly_cloudy.svg" alt="" v-if="getDescr =='Clouds'">
        <img src="@/assets/img/weather-icons/small_rain.svg" alt="" v-if="getDescr == 'Drizzle'">
        <img src="@/assets/img/weather-icons/rain.svg" alt="" v-if="getDescr == 'Rain'">
    </div>
    <p class="main__week-temp">+{{Math.round(day.temp.day)}}°</p>
    <p class="main__week-descr">{{getDescription}}</p>
  </div>
</template>

<script>
import unix from "@/timestamp";
import { computed } from 'vue';
export default {
props:{
  day: Object
},
computed:{
  getDescr(){
    return this.day.weather[0].main
  },
  getDescription(){
    return this.day.weather[0].description
  },
  getWeek(){
    return unix(this.day.dt, 'weekday')
  },
  getDay(){
    return unix(this.day.dt, 'day')
  },
  getMonth(){
    return unix(this.day.dt, 'month')
  }
}
}
</script>

<style>

</style>