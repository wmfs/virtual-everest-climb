export function parseText (info) {
  function plurals (value) {
    if (value === 1) {
      return ''
    } else {
      return 's'
    }
  }

  const altitudeText = `${Math.ceil(info.currentAltitude).toLocaleString()}m`

  let laddersUntilSummit = info.targetAltitude - info.currentAltitude
  if (laddersUntilSummit < 0) {
    laddersUntilSummit = 0
  }
  laddersUntilSummit = Math.ceil(laddersUntilSummit / info.ladderHeight).toLocaleString()

  return {
    altitudeText: altitudeText,
    laddersUntilSummitText: `Just ${laddersUntilSummit} ladder${plurals(laddersUntilSummit)} to Everest summit!`,
    laddersUntilMilestoneText: `We've ${info.laddersToNextMilestone} ladder${plurals(info.laddersToNextMilestone)} until`,
    milestoneTitle: info.nextMilestone.title,
    milestoneInfo: info.nextMilestone.description
  }
}

export function parseImages (info) {
  let backdropPercentage = info.percentageComplete.toFixed(0)
  if (backdropPercentage > 100) {
    backdropPercentage = 100
  }
  const padded = backdropPercentage.padStart(3, '0')
  return {
    backdrop: `'./static/backdrops/backdrop-${padded}.png'`,
    milestoneImage: `static/milestones/${info.nextMilestone.thumbnail}`
  }
}
