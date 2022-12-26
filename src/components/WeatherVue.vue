<template>
  <div class="weather color">
    <div class="CurrIcon">
      <span>
        <i class='weatherIcon[icon]'></i>
      </span>
    </div>
    <div class="CurrTemp">{{ temp }}</div>
    {{ weatherIcon[icon] }}
    {{ icon }}
  </div>
</template>
<script>
export default {
  data: function () {
    return {
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
        '09': 'fas fa-cloud-sun-rain'
        // 10: 'fas fa-cloud-showers-heavy',
        // 11: 'fas fa-poo-storm',
        // 13: 'far fa-snowflake',
        // 50: 'fas fa-smog'
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
.color {
  color: white;
  font-size: 1rem;
  font-weight: bolder;
}
</style>
