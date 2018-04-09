<template>
  <div class="everest" :style="{ backgroundImage: 'url(' + images.backdrop +')'}" v-on:click="registerLadder()">

    <div id="logo">
    </div>

    <div id="altitude">
      <p>Our current altitude:</p>
      <h1>{{text.altitudeText}}</h1>
    </div>

    <div class="gap"></div>

    <div id="summit">
      <p>{{text.laddersUntilSummitText}}</p>
    </div>

    <div class="gap"></div>

    <div id="milestone">
      <img v-bind:src="images.milestoneImage" id="milestoneImage" alt="Thumbnail of current milestone">
      <div id="milestoneInfo">
        <p>{{text.laddersUntilMilestoneText}}</p>
        <h2>{{text.milestoneTitle}}</h2>
        <p>{{text.milestoneInfo}}</p>
      </div>
    </div>

    <div class="gap"></div>

    <div id="timer">
      <div class="duration">{{duration.seconds}}<br>
        <p class="durationLabel">Seconds</p></div>
      <div class="duration">{{duration.minutes}}<br>
        <p class="durationLabel">Minutes</p></div>
      <div class="duration">{{duration.hours}}<br>
        <p class="durationLabel">Hours</p></div>
    </div>

  </div>
</template>

<script>
import { VirtualEverestClimb } from './Virtual-everest-climb'
import { parseImages, parseText } from './info-parsers'

export default {
  name: 'Everest',
  methods: {
    time: function processTimeEvent () {
      const result = this.vec.parseDuration()
      this.duration = {
        hours: result.hours,
        minutes: result.minutes,
        seconds: result.seconds
      }
    },
    registerLadder: function registerLadder () {
      this.vec.registerLadderAscent()
      const info = this.vec.getCurrentAltitudeInfo()
      this.text = parseText(info)
      this.images = parseImages(info)
    }
  },

  mounted () {
    this.interval = setInterval(this.time, 1000)
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  data () {
    const vec = new VirtualEverestClimb(
      {
        numberOfLadders: 10,
        ladderHeightInMetres: 7.3,
        startNumberOfLadders: 0
      }
    )
    const info = vec.getCurrentAltitudeInfo()
    return {
      vec: vec,
      text: parseText(info),
      images: parseImages(info),
      duration: vec.parseDuration()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .everest {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .gap {
    clear: both;
    padding: 1em;
  }

  h1 {
    padding: 15px;
    margin: -40px 0 -40px 0;
    font-family: 'Baloo Thambi', cursive;
    font-size: 500%;
  }

  h2 {
    padding: 0;
    margin: -5px 10px -5px 10px;
    font-family: 'Baloo Thambi', cursive;
    font-size: 300%;
  }

  p {
    padding: 0 20px 0 20px;
    margin: 0;
    font-family: 'Jaldi', sans-serif;
    font-size: 200%;
  }

  #logo {
    float: left;
    margin: 15px;
    width: 220px;
    height: 92px;
    background-repeat: no-repeat;
    background-image: url(../assets/logo-inverse.png);
  }

  #altitude {
    float: right;
    display: inline-block;
    padding: 0;
    margin: 15px 0 0 0;
    background-color: white
  }

  #summit {
    float: right;
    display: inline-block;
    padding: 0;
    margin: 0;
    background-color: white
  }

  #milestoneImage {
    display: inline-block;
    height: 180px;
    width: auto;
    background-color: indianred;
    float: left;
  }

  #milestoneInfo {
    display: inline-block;
    float: left;
  }

  #milestone {
    float: right;
    display: inline-block;
    padding: 0;
    margin: 0;
    background-color: white
  }

  #timer {
    float: right;
    display: inline-block;
    padding: 0;
    margin: 0;
    background-color: white;
    font-family: 'Oxygen Mono', monospace;
    font-size: 300%;
    height: auto;
  }

  .duration {
    padding: 0;
    margin: 0;
    width: 100px;
    height: 80px;
    float: right;
  }

  .durationLabel {
    font-family: 'Jaldi', sans-serif;
    font-size: 20px;
    margin-top: -10px;
  }

</style>
