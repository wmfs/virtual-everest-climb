export function parseText (info) {
  function plurals (value) {
    if (value === 1) {
      return ''
    } else {
      return 's'
    }
  }

  let laddersUntilSummit = info.targetAltitude - info.currentAltitude
  if (laddersUntilSummit < 0) {
    laddersUntilSummit = 0
  }
  laddersUntilSummit = Math.floor(laddersUntilSummit / 8).toLocaleString()

  return {
    altitudeText: `${info.currentAltitude}m`,
    laddersUntilSummitText: `Just ${laddersUntilSummit} more ladder${plurals(laddersUntilSummit)} to the summit!`,
    laddersUntilMilestoneText: `We've ${info.laddersToNextMilestone} ladder${plurals(info.laddersToNextMilestone)} until`,
    milestoneTitle: info.nextMilestone.title,
    milestoneInfo: info.nextMilestone.description
  }
}

export function parseImages (info) {
  return {
    backdrop: '\'/static/backdrops/backdrop-001.png\'',
    milestoneImage: ''
  }
}
