const a = require('../data/sounds/a')
const ah = require('../data/sounds/ah')
const air = require('../data/sounds/air')
const ar = require('../data/sounds/ar')
const ay = require('../data/sounds/ay')
const ee = require('../data/sounds/ee')
const eer = require('../data/sounds/eer')
const eh = require('../data/sounds/eh')
const er = require('../data/sounds/er')
const i = require('../data/sounds/i')
const ie = require('../data/sounds/ie')
const o = require('../data/sounds/o')
const oh = require('../data/sounds/oh')
const or = require('../data/sounds/or')
const oy = require('../data/sounds/oy')
const uh = require('../data/sounds/uh')
const ure = require('../data/sounds/ure')

const sounds = ['a', 'ah', 'air', 'ar', 'ay', 'ee', 'eer', 'eh', 'er', 'i', 'ie', 'o', 'oh', 'or', 'oy', 'uh', 'ure']

const soundCollections = [a, ah, air, ar, ay, ee, eer, eh, er, i, ie, o, oh, or, oy, uh, ure].map((collection, i)=>{
  return collection.map((word)=>{
    return {word:word.word, sound:sounds[i]}
  })
})
const masterList = [].concat.apply([], soundCollections)

exports.seed = function(knex, Promise) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert(masterList);
    });
};
