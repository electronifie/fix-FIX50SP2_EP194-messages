var invert = require('invert-obj');

function LegComplexEventDateOffsetPeriod (legComplexEventDateOffsetPeriod) {
  this.message = legComplexEventDateOffsetPeriod;
}

LegComplexEventDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegComplexEventDateOffsetPeriod.Tag = '41391';

LegComplexEventDateOffsetPeriod.Type = 'INT';

module.exports = LegComplexEventDateOffsetPeriod;