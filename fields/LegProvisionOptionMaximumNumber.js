var invert = require('invert-obj');

function LegProvisionOptionMaximumNumber (legProvisionOptionMaximumNumber) {
  this.message = legProvisionOptionMaximumNumber;
}

LegProvisionOptionMaximumNumber.prototype.value = function () {
  return this.message;
};

LegProvisionOptionMaximumNumber.Tag = '40464';

LegProvisionOptionMaximumNumber.Type = 'INT';

module.exports = LegProvisionOptionMaximumNumber;