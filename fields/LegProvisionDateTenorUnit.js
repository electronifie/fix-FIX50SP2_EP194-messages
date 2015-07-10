var invert = require('invert-obj');

function LegProvisionDateTenorUnit (legProvisionDateTenorUnit) {
  this.message = legProvisionDateTenorUnit;
}

LegProvisionDateTenorUnit.prototype.value = function () {
  return this.message;
};

LegProvisionDateTenorUnit.Tag = '40455';

LegProvisionDateTenorUnit.Type = 'STRING';

module.exports = LegProvisionDateTenorUnit;