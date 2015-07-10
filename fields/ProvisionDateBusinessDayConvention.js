var invert = require('invert-obj');

function ProvisionDateBusinessDayConvention (provisionDateBusinessDayConvention) {
  this.message = provisionDateBusinessDayConvention;
}

ProvisionDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionDateBusinessDayConvention.Tag = '40093';

ProvisionDateBusinessDayConvention.Type = 'INT';

module.exports = ProvisionDateBusinessDayConvention;