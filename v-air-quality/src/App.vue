<template>
  <v-app>
    <v-app-bar app color="rgb(98, 147, 252)">
      <v-toolbar-title class="headline text-uppercase" style="color:white;">
          <span>City of Lewisville&nbsp;<span style="color:#ffcc22">|</span></span>
          <span class="font-weight-light">&nbsp;Air Quality Index</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2" @click="dispatchAQIStatus">Dispatch</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Dashboard :index="index"/>
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  data: () => ({
    index: []
  }),
  methods: {
    dispatchAQIStatus() {

    },
    getAQI() {
      axios.post('https://query.cityoflewisville.com/v2/?webservice=MiscPrograms/GET Air Quality Index')
        .then(response => {
          this.index = response.data[0]
        })
    }
  },
  mounted() {
    this.getAQI()
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
</style>