<template>
  <div class="main__week">
    <div class="main__week-btns">
        <button class="main__week-button">На неделю</button>
        <button class="main__week-button" @click="getWeather()">Отменить</button>
    </div>
    <div class="main__week-days">
        <perDay v-for="day,index in getDailyWeather" :key="index" :day="day"></perDay>
    </div>
  </div>
</template>

<script>
import PerDay from "@/components/perDay.vue";
import { mapGetters,mapActions } from 'vuex';
export default {
components:{
    PerDay,
},
computed:{
    ...mapGetters(['getDailyWeather'])
},
methods:{
    ...mapActions(['getWeather'])
}
}
</script>

<style>

</style>