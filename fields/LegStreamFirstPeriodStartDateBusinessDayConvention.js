var invert = require('invert-obj');

function LegStreamFirstPeriodStartDateBusinessDayConvention (legStreamFirstPeriodStartDateBusinessDayConvention) {
  this.message = legStreamFirstPeriodStartDateBusinessDayConvention;
}

LegStreamFirstPeriodStartDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegStreamFirstPeriodStartDateBusinessDayConvention.Tag = '40268';

LegStreamFirstPeriodStartDateBusinessDayConvention.Type = 'INT';

module.exports = LegStreamFirstPeriodStartDateBusinessDayConvention;