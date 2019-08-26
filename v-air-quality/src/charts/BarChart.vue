<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    props: ['dates', 'numbers'],
    data() {
        return {
            collection: {
                labels: this.dates,
                datasets: [{
                    label: 'Air Quality Index', 
                    pointBackgroundColor: '#fff',
                    borderWidth: 1,
                    pointBorderColor: '#249EBF',
                    data: this.numbers,
                    backgroundColor: []
                }]
            },
            options: {
	            scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single'
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
            }
        }
    },
    mounted() {
         this.setBackgroundColor(),
        this.renderChart(this.collection, this.options)
    },
    methods: {
        setBackgroundColor() {
        let backgroundColors = this.collection.datasets[0].backgroundColor
        for(let i = 0; i < this.collection.datasets[0].data.length; i++) {
            if(this.collection.datasets[0].data[i] === 1) {
                backgroundColors.push('rgba(60, 180, 13, 0.7)')
            }
            else if(this.collection.datasets[0].data[i] === 2) {
                backgroundColors.push('rgba(240, 233, 40, 0.7)')
            }
            else if (this.collection.datasets[0].data[i] === 3) {
                backgroundColors.push('rgba(240, 153, 40, 0.7)')
            }
            else if(this.collection.datasets[0].data[i] === 4) {
                backgroundColors.push('rgba(240, 40, 40, 0.7)')
            }
            else if(this.collection.datasets[0].data[i] === 5) {
                backgroundColors.push('rgba(200, 40, 240, 0.7)')
            }
            else {
                backgroundColors.push('#999')
            }
        }
    }
    }
}
</script>