var invert = require('invert-obj');

function ProvisionOptionMinimumNumber (provisionOptionMinimumNumber) {
  this.message = provisionOptionMinimumNumber;
}

ProvisionOptionMinimumNumber.prototype.value = function () {
  return this.message;
};

ProvisionOptionMinimumNumber.Tag = '40105';

ProvisionOptionMinimumNumber.Type = 'INT';

module.exports = ProvisionOptionMinimumNumber;