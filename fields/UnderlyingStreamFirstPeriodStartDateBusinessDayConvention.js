var invert = require('invert-obj');

function UnderlyingStreamFirstPeriodStartDateBusinessDayConvention (underlyingStreamFirstPeriodStartDateBusinessDayConvention) {
  this.message = underlyingStreamFirstPeriodStartDateBusinessDayConvention;
}

UnderlyingStreamFirstPeriodStartDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstPeriodStartDateBusinessDayConvention.Tag = '40559';

UnderlyingStreamFirstPeriodStartDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingStreamFirstPeriodStartDateBusinessDayConvention;