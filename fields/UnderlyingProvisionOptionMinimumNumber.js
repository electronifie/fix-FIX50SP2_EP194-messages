var invert = require('invert-obj');

function UnderlyingProvisionOptionMinimumNumber (underlyingProvisionOptionMinimumNumber) {
  this.message = underlyingProvisionOptionMinimumNumber;
}

UnderlyingProvisionOptionMinimumNumber.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionMinimumNumber.Tag = '42163';

UnderlyingProvisionOptionMinimumNumber.Type = 'INT';

module.exports = UnderlyingProvisionOptionMinimumNumber;