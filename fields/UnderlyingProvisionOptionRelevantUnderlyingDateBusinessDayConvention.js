var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention (underlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention;
}

UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag = '42143';

UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention;