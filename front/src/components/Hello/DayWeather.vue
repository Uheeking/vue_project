<template>
  <div class="weather">
    <div class="day">{{ today }}</div>
    <div class="CurrIcon">
      <span>
        <i :class="weatherIcon[icon]"></i>
      </span>
    </div>
    <div class="CurrTemp">{{ temp }}</div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  component: {
    dayjs
  },
  data: function () {
    return {
      today: dayjs().format('YYYY-MM-DD'),
      api_key: '688d07929ce4506e63cb5e391511a3eb',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      weather: {},
      code: '',
      temp: 0,
      // 날씨 표현 시 사용될 icon 배열
      weatherIcon: {
        '01': 'fas fa-sun',
        '02': 'fas fa-cloud-sun',
        '03': 'fas fa-cloud',
        '04': 'fas fa-cloud-meatball',
        '09': 'fas fa-cloud-sun-rain',
        10: 'fas fa-cloud-showers-heavy',
        11: 'fas fa-poo-storm',
        13: 'far fa-snowflake',
        50: 'fas fa-smog'
      }
    }
  },
  mounted() {
    // API 요청 URL (지역 Seoul 고정)
    const fetchUrl = `${this.url_base}weather?q=Seoul&units=metric&APPID=${this.api_key}`
    fetch(fetchUrl)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.icon = result.weather[0].icon.substr(0, 2) // 날씨 정보
        this.temp = Math.floor(result.main.temp) + 'º' // 기온
        // weatherIcon[$Icon]
      })
    console.log(this.icon)
  }
}
</script>

<style scoped>
.day{
  font-size: 2rem;
  margin-right: 25px;
  margin-bottom: 10px;
}
.weather {
  color: white;
  font-weight: bolder;
  display: flex;
  position: absolute;
  left: 54%;
  top: 50%;
  margin-left: -175px;
  margin-top: -261px;
  justify-content: center;
}
.CurrIcon {
  font-size: 2em;
  padding-right: 5px;
}
.CurrTemp {
  font-size: 2em;
}
</style>
