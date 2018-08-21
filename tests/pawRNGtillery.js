'use strict'

let randomIDGen = function(context, events, done) {
  context.vars.rngId = Math.ceil(Math.random() * 10000000);
  return done();
}

module.exports = {
  randomIDGen:randomIDGen
}