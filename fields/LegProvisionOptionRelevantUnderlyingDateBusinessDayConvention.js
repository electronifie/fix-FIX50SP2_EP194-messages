var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention (legProvisionOptionRelevantUnderlyingDateBusinessDayConvention) {
  this.message = legProvisionOptionRelevantUnderlyingDateBusinessDayConvention;
}

LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag = '40509';

LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention;