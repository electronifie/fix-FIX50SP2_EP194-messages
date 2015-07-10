var invert = require('invert-obj');

function LegNTPositionLimit (legNtpositionLimit) {
  this.message = legNtpositionLimit;
}

LegNTPositionLimit.prototype.value = function () {
  return this.message;
};

LegNTPositionLimit.Tag = '2206';

LegNTPositionLimit.Type = 'INT';

module.exports = LegNTPositionLimit;