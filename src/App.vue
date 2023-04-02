<template>
  <div class="container" v-if="getFullWeather">
    <Header />
    <Main />    
    
  
  </div>
  <Preloader v-else/>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Preloader from "@/components/Preloader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Header,
    Main,
    Preloader,
  },
  computed: {
    ...mapGetters(["getFullWeather"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  created() {
    setTimeout(() => {
      this.getWeather();
    }, 1000);
  },
};
</script>

<style>
</style>