(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const facts = [
  {
    altitudeInMetres: 0,
    title: 'Sea level',
    description: 'Good luck everyone!'
  },
  {
    altitudeInMetres: 306,
    title: 'The shard',
    description: "Currently Europe's tallest building!"
  },
  {
    altitudeInMetres: 324,
    title: 'The Eiffel Tower',
    description: 'Takes 1,665 steps to reach the top!'
  },
  {
    altitudeInMetres: 631,
    title: 'Shanghai Tower',
    description: 'Which is home to the longest elevator!'
  },
  {
    altitudeInMetres: 828,
    title: 'Burj Khalifa (Dubai)',
    description: "Currently the World's tallest building!"
  },
  {
    altitudeInMetres: 1343,
    title: 'Ben Nevis',
    description: "The UK's highest mountain!"
  },
  {
    altitudeInMetres: 3776,
    title: 'Mount Fuji',
    description: 'First climbed by a monk in 663!'
  },
  {
    altitudeInMetres: 3810,
    title: '12,500 ft!',
    description: 'Standard skydiving altitude!'
  },
  {
    altitudeInMetres: 5098,
    title: 'La Rinconada',
    description: "The World's highest human habitation!"
  },
  {
    altitudeInMetres: 5486,
    title: 'Cloud level',
    description: 'So high that clouds start forming!'
  },
  {
    altitudeInMetres: 6887,
    title: 'Ojos del Salado',
    description: "The World's highest active volcano!"
  },
  {
    altitudeInMetres: 7925,
    title: 'Death Zone!',
    description: "Oxygen levels can't sustain human life!"
  },
  {
    altitudeInMetres: 8850,
    title: 'MOUNT EVEREST SUMMIT!',
    description: "Earth's highest point!"
  },
  {
    altitudeInMetres: 10668,
    title: 'Airplanes',
    description: 'Commercial airplanes fly at this height!'
  },
  {
    altitudeInMetres: 100000,
    title: 'Space!',
    description: 'So high that space begins...'
  }
]

module.exports = class VirtualEverestClimb {
  constructor (options) {
    this.options = options
    console.log('Boo!')
  }
}
},{}],2:[function(require,module,exports){
const VirtualEverestClimb = require('./Virtual-everest-climb')

const vec = new VirtualEverestClimb(
  {}
)

console.log('DONE!')

},{"./Virtual-everest-climb":1}]},{},[2]);
