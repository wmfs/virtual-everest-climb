const facts = require('./facts').facts

module.exports = class VirtualEverestClimb {
  constructor (providedOptions) {
    const _this = this
    const options = providedOptions || {}
    this.firstLadderDate = null
    this.ladders = options.numberOfLadders || 10
    this.ladderHeight = options.ladderHeightInMetres || 8
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
    const distanceToNextMilestone = nextMilestone.altitudeInMetres - reachedFact.altitudeInMetres
    const laddersToNextMilestone = Math.ceil((distanceToNextMilestone / this.ladderHeight))

    return {
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
