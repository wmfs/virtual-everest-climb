export function parseText (info) {
  function plurals (value) {
    if (value === 1) {
      return ''
    } else {
      return 's'
    }
  }

  const altitudeText = `${Math.floor(info.currentAltitude).toLocaleString()}m`

  let laddersUntilSummit = info.targetAltitude - info.currentAltitude
  if (laddersUntilSummit < 0) {
    laddersUntilSummit = 0
  }
  laddersUntilSummit = Math.ceil(laddersUntilSummit / info.ladderHeight).toLocaleString()

  let laddersUntilSummitText
  if (laddersUntilSummit === '0') {
    laddersUntilSummitText = 'We made it! Well done everyone!'
  } else {
    laddersUntilSummitText = `Just ${laddersUntilSummit} ladder${plurals(laddersUntilSummit)} to Everest summit!`
  }

  return {
    altitudeText: altitudeText,
    laddersUntilSummitText: laddersUntilSummitText,
    laddersUntilMilestoneText: `We've ${info.laddersToNextMilestone} ladder${plurals(info.laddersToNextMilestone)} until`,
    milestoneTitle: info.nextMilestone.title,
    milestoneInfo: info.nextMilestone.description
  }
}

export function parseImages (info) {
  let backdropPercentage = info.percentageComplete.toFixed(0)
  backdropPercentage = parseInt(backdropPercentage)
  if (backdropPercentage > 100) {
    backdropPercentage = 100
  }

  if (backdropPercentage === 100 && info.currentAltitude < info.targetAltitude) {
    backdropPercentage = 99
  }

  backdropPercentage = backdropPercentage.toString()

  const padded = backdropPercentage.padStart(3, '0')
  return {
    backdrop: `'./static/backdrops/backdrop-${padded}.png'`,
    milestoneImage: `static/milestones/${info.nextMilestone.thumbnail}`
  }
}
