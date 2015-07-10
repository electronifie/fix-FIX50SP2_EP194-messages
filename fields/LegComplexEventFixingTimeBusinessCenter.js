var invert = require('invert-obj');

function LegComplexEventFixingTimeBusinessCenter (legComplexEventFixingTimeBusinessCenter) {
  this.message = legComplexEventFixingTimeBusinessCenter;
}

LegComplexEventFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegComplexEventFixingTimeBusinessCenter.Tag = '41397';

LegComplexEventFixingTimeBusinessCenter.Type = 'STRING';

module.exports = LegComplexEventFixingTimeBusinessCenter;