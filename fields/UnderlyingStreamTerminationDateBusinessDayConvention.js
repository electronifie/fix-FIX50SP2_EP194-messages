var invert = require('invert-obj');

function UnderlyingStreamTerminationDateBusinessDayConvention (underlyingStreamTerminationDateBusinessDayConvention) {
  this.message = underlyingStreamTerminationDateBusinessDayConvention;
}

UnderlyingStreamTerminationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateBusinessDayConvention.Tag = '40549';

UnderlyingStreamTerminationDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingStreamTerminationDateBusinessDayConvention;