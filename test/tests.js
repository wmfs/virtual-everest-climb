/* eslint-env mocha */

'use strict'
const VirtualEverestClimb = require('./../lib/Virtual-everest-climb')

describe('Virtual Everest Climb tests', function () {
  let vec = new VirtualEverestClimb(
    {
      numberOfLadders: 10,
      ladderHeightInMetres: 8,
      startNumberOfLadders: 0
    }
  )

  it('should make a new vec instance', function () {
    const info = vec.getCurrentAltitudeInfo()
    console.log(info)
  })

  it('should simulate a climb', function () {
  })
})
