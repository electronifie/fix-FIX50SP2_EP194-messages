var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateBusinessDayConvention (provisionOptionRelevantUnderlyingDateBusinessDayConvention) {
  this.message = provisionOptionRelevantUnderlyingDateBusinessDayConvention;
}

ProvisionOptionRelevantUnderlyingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag = '40156';

ProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Type = 'INT';

module.exports = ProvisionOptionRelevantUnderlyingDateBusinessDayConvention;