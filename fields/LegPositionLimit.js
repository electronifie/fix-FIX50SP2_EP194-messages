var invert = require('invert-obj');

function LegPositionLimit (legPositionLimit) {
  this.message = legPositionLimit;
}

LegPositionLimit.prototype.value = function () {
  return this.message;
};

LegPositionLimit.Tag = '2205';

LegPositionLimit.Type = 'INT';

module.exports = LegPositionLimit;