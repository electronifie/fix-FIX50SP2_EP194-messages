var invert = require('invert-obj');

function UnderlyingProvisionOptionMaximumNumber (underlyingProvisionOptionMaximumNumber) {
  this.message = underlyingProvisionOptionMaximumNumber;
}

UnderlyingProvisionOptionMaximumNumber.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionMaximumNumber.Tag = '42164';

UnderlyingProvisionOptionMaximumNumber.Type = 'INT';

module.exports = UnderlyingProvisionOptionMaximumNumber;