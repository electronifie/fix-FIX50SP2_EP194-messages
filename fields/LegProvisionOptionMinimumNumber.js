var invert = require('invert-obj');

function LegProvisionOptionMinimumNumber (legProvisionOptionMinimumNumber) {
  this.message = legProvisionOptionMinimumNumber;
}

LegProvisionOptionMinimumNumber.prototype.value = function () {
  return this.message;
};

LegProvisionOptionMinimumNumber.Tag = '40463';

LegProvisionOptionMinimumNumber.Type = 'INT';

module.exports = LegProvisionOptionMinimumNumber;