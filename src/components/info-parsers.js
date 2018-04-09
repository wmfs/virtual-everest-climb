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
    laddersUntilSummitText: `Just ${laddersUntilSummit} more ladder${plurals(laddersUntilSummit)} to the summit!`,
    laddersUntilMilestoneText: `We've ${info.laddersToNextMilestone} ladder${plurals(info.laddersToNextMilestone)} until`,
    milestoneTitle: info.nextMilestone.title,
    milestoneInfo: info.nextMilestone.description
  }
}

export function parseImages (info) {
  return {
    // https://wmfs.github.io/virtual-everest-climb/static/backdrops/backdrop-001.png
    backdrop: '\'./static/backdrops/backdrop-001.png\'',
    milestoneImage: `static/milestones/${info.nextMilestone.thumbnail}`
  }
}
