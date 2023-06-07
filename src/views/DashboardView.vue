<template>
  <div class="dashboard" style="background-color: beige;">
    <div class="content">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h2>Chart 1</h2>
            <div class="chart-small">
              <apexchart type="bar" :options="chartOptions1" :series="series1"></apexchart>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Chart 2</h2>
            <div class="chart-small">
              <apexchart type="bar" :options="chartOptions2" :series="series2"></apexchart>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Chart 3</h2>
            <div class="chart-small">
              <apexchart type="bar" :options="chartOptions3" :series="series3"></apexchart>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Chart 4</h2>
            <div class="chart-small">
              <!-- Gradient Donut Chart -->
              <apexchart type="donut" :options="chartOptions4" :series="series4"></apexchart>
            </div>
          </div>
        </div>
        <div class="card big-card">
          <div class="card-content">
            <h2>Stacked Columns 100</h2>
            <div class="chart-big">
              <apexchart type="bar" :options="chartOptions5" :series="series5"></apexchart>
            </div>
          </div>
        </div>
        <div class="card big-card">
          <div class="card-content">
            <h2>Simple Bubble</h2>
            <div class="chart-big">
              <apexchart type="bubble" :options="chartOptions6" :series="series6"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'DashboardView',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series1: [44, 55, 41, 17, 15],
      chartOptions1: {
        chart: {
          type: 'bar',
          height: 200,
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        },
      },
      series2: [30, 40, 45, 50, 49, 60, 70, 91],
      chartOptions2: {
        chart: {
          type: 'bar',
          height: 200,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
      },
      series3: [10, 15, 12, 8, 7],
      chartOptions3: {
        chart: {
          type: 'bar',
          height: 200,
        },
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E'],
        },
      },
      series4: [44, 55, 41, 17, 15],
      chartOptions4: {
        chart: {
          type: 'donut',
          height: 200, // Adjusted height
        },
        plotOptions: {
          pie: {
            donut: {
              size: '80%',
            },
          },
        },
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
      },
      series5: [
        {
          name: 'Series 1',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Series 2',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Series 3',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Series 4',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chartOptions5: {
        chart: {
          type: 'bar',
          height: 400, // Adjusted height
          stacked: true,
          stackType: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'],
        },
        fill: {
          opacity: 1,
        },
      },
      series6: [
        {
          name: 'Bubble1',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
        },
        {
          name: 'Bubble2',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
        },
      ],
      chartOptions6: {
        chart: {
          height: 400, // Adjusted height
          type: 'bubble',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        title: {
          text: 'Simple Bubble Chart',
        },
        xaxis: {
          tickAmount: 12,
          type: 'category',
        },
        yaxis: {
          max: 70,
        },
      },
    };
  },
  methods: {
    generateData(baseval, count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push({ x, y, z });
        baseval += 86400000;
        i++;
      }
      return series;
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
}

.card {
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.big-card {
  width: 100%;
  grid-column: span 2;
}

.card-content {
  padding: 20px;
  text-align: center;
  height: auto;
}

.chart-big {
  height: 400px;
}

.chart-small {
  height: 200px;
  position: relative;
}

.chart-small .gradient-donut {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-small .gradient-donut .apexcharts-canvas {
  height: 80%;
}

.chart-small .gradient-donut .apexcharts-legend {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

</style>
