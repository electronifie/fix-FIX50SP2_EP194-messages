var invert = require('invert-obj');

function ProvisionOptionMaximumNumber (provisionOptionMaximumNumber) {
  this.message = provisionOptionMaximumNumber;
}

ProvisionOptionMaximumNumber.prototype.value = function () {
  return this.message;
};

ProvisionOptionMaximumNumber.Tag = '40106';

ProvisionOptionMaximumNumber.Type = 'INT';

module.exports = ProvisionOptionMaximumNumber;