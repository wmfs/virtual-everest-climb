const facts = require('./facts').facts
const SECOND_DURATIONS = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

export class VirtualEverestClimb {
  constructor (providedOptions) {
    const _this = this
    const options = providedOptions || {}
    this.firstLadderDate = null
    this.ladders = options.numberOfLadders || 10
    this.ladderHeight = options.ladderHeightInMetres || 7.3
    this.ladderCount = options.startNumberOfLadders || 0
    this.currentAltitude = this.ladderCount * this.ladderHeight

    facts.forEach(
      function (fact) {
        if (fact.target) {
          _this.targetAltitude = fact.altitudeInMetres
        }
      }
    )
  }

  registerLadderAscent () {
    this.ladderCount++
    this.currentAltitude = this.currentAltitude + this.ladderHeight
    if (!this.firstLadderDate) {
      this.firstLadderDate = new Date()
    }
  }

  parseDuration () {
    if (this.firstLadderDate) {
      let delta = Math.abs(new Date() - this.firstLadderDate) / 1000
      const result = {}

      Object.keys(SECOND_DURATIONS).forEach(function (key) {
        result[key] = Math.floor(delta / SECOND_DURATIONS[key])
        delta -= result[key] * SECOND_DURATIONS[key]
      })
      let hours = result.hour.toString()
      if (hours.length === 1) {
        hours = '0' + hours
      }
      let minutes = result.minute.toString()
      if (minutes.length === 1) {
        minutes = '0' + minutes
      }
      let seconds = result.second.toString()
      if (seconds.length === 1) {
        seconds = '0' + seconds
      }
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    } else {
      return {
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
    }
  }

  getCurrentAltitudeInfo () {
    const percentageComplete = (this.currentAltitude / this.targetAltitude) * 100

    let reachedIndex = 0
    for (let i = 0; i < facts.length; i++) {
      if (facts[i].altitudeInMetres < this.currentAltitude) {
        reachedIndex = i
      }
    }
    const reachedFact = facts[reachedIndex]
    const nextMilestone = facts[reachedIndex + 1]
    const distanceToNextMilestone = nextMilestone.altitudeInMetres - this.currentAltitude
    const laddersToNextMilestone = Math.ceil((distanceToNextMilestone / this.ladderHeight))

    return {
      ladderHeight: this.ladderHeight,
      ladderCount: this.ladderCount,
      currentAltitude: this.currentAltitude,
      targetAltitude: this.targetAltitude,
      percentageComplete: percentageComplete,
      percentageCompleteText: percentageComplete.toFixed(0).toString() + '%',
      reachedFact: {
        altitude: reachedFact.altitudeInMetres,
        title: reachedFact.title,
        description: reachedFact.description
      },
      nextMilestone: {
        thumbnail: nextMilestone.thumbnail,
        altitude: nextMilestone.altitudeInMetres,
        title: nextMilestone.title,
        description: nextMilestone.description
      },
      distanceToNextMilestone: distanceToNextMilestone,
      laddersToNextMilestone: laddersToNextMilestone,
      firstLadderDate: this.firstLadderDate
    }
  }
}
