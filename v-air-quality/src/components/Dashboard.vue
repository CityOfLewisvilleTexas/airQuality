<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Air Quality Index
        </h1>
        
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <bar-chart :dates="forecastDates" :numbers="categoryNumbers"></bar-chart>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Bar from '../charts/BarChart'
export default {
  components: {
    'bar-chart': Bar
  },
  props: ['index'],
  data: () => ({
    //
  }),
  computed: {
    forecastDates() {
      return this.index
        .map(item => item.DateForecast)
        // .filter( (value, index, self) => {
        //    return self.indexOf(value) === index
        //   })
      },
      categoryNumbers() {
        return this.index
          .map(item => parseInt(item.CategoryNumber))
          // .filter( (value, index, self) => {
          //   return self.indexOf(value) === index
          // }) 
      }
  },
  mounted() {
   console.log('nums', this.categoryNumbers)
   console.log('dates', this.forecastDates)
  }
};
</script>
