const facts = [
  {
    altitudeInMetres: 0,
    title: 'Sea level',
    description: 'A long way to go yet!',
    target: false
  },
  {
    altitudeInMetres: 306,
    title: 'The shard',
    description: 'Currently Europe\'s tallest building!',
    target: false
  },
  {
    altitudeInMetres: 324,
    title: 'The Eiffel Tower',
    description: 'Takes 1,665 steps to reach the top!',
    target: false
  },
  {
    altitudeInMetres: 631,
    title: 'Shanghai Tower',
    description: 'Which is home to the longest elevator!',
    target: false
  },
  {
    altitudeInMetres: 828,
    title: 'Burj Khalifa (Dubai)',
    description: 'Currently the World\'s tallest building!',
    target: false
  },
  {
    altitudeInMetres: 1343,
    title: 'Ben Nevis',
    description: 'The UK\'s highest mountain!',
    target: false
  },
  {
    altitudeInMetres: 3776,
    title: 'Mount Fuji',
    description: 'First climbed by a monk in 663!',
    target: false
  },
  {
    altitudeInMetres: 3810,
    title: '12,500 ft!',
    description: 'Standard skydiving altitude!',
    target: false
  },
  {
    altitudeInMetres: 5098,
    title: 'La Rinconada',
    description: 'The World\'s highest human habitation!',
    target: false
  },
  {
    altitudeInMetres: 5486,
    title: 'Cloud level',
    description: 'So high that clouds start forming!',
    target: false
  },
  {
    altitudeInMetres: 6887,
    title: 'Ojos del Salado',
    description: 'The World\'s highest active volcano!',
    target: false
  },
  {
    altitudeInMetres: 7925,
    title: 'Death Zone!',
    description: 'Oxygen levels can\'t sustain human life!',
    target: false
  },
  {
    altitudeInMetres: 8850,
    title: 'MOUNT EVEREST SUMMIT!',
    description: 'Earth\'s highest point!',
    target: true
  },
  {
    altitudeInMetres: 10668,
    title: 'Airplanes',
    description: 'Commercial airplanes fly at this height!',
    target: false
  },
  {
    altitudeInMetres: 100000,
    title: 'Space!',
    description: 'So high that space begins...',
    target: false
  }
]

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
