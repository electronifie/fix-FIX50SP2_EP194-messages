var invert = require('invert-obj');

function StreamFirstPeriodStartDateBusinessDayConvention (streamFirstPeriodStartDateBusinessDayConvention) {
  this.message = streamFirstPeriodStartDateBusinessDayConvention;
}

StreamFirstPeriodStartDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

StreamFirstPeriodStartDateBusinessDayConvention.Tag = '40076';

StreamFirstPeriodStartDateBusinessDayConvention.Type = 'INT';

module.exports = StreamFirstPeriodStartDateBusinessDayConvention;