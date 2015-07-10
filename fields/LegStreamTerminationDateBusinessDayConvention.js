var invert = require('invert-obj');

function LegStreamTerminationDateBusinessDayConvention (legStreamTerminationDateBusinessDayConvention) {
  this.message = legStreamTerminationDateBusinessDayConvention;
}

LegStreamTerminationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateBusinessDayConvention.Tag = '40258';

LegStreamTerminationDateBusinessDayConvention.Type = 'INT';

module.exports = LegStreamTerminationDateBusinessDayConvention;