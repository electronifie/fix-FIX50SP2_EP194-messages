var invert = require('invert-obj');

function LegComplexEventFixingTime (legComplexEventFixingTime) {
  this.message = legComplexEventFixingTime;
}

LegComplexEventFixingTime.prototype.value = function () {
  return this.message;
};

LegComplexEventFixingTime.Tag = '41396';

LegComplexEventFixingTime.Type = 'LOCALMKTTIME';

module.exports = LegComplexEventFixingTime;