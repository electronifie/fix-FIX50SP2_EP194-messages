var invert = require('invert-obj');

function LegStreamFirstPeriodStartDateBusinessCenter (legStreamFirstPeriodStartDateBusinessCenter) {
  this.message = legStreamFirstPeriodStartDateBusinessCenter;
}

LegStreamFirstPeriodStartDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegStreamFirstPeriodStartDateBusinessCenter.Tag = '40269';

LegStreamFirstPeriodStartDateBusinessCenter.Type = 'STRING';

module.exports = LegStreamFirstPeriodStartDateBusinessCenter;