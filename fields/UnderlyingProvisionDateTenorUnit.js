var invert = require('invert-obj');

function UnderlyingProvisionDateTenorUnit (underlyingProvisionDateTenorUnit) {
  this.message = underlyingProvisionDateTenorUnit;
}

UnderlyingProvisionDateTenorUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateTenorUnit.Tag = '42155';

UnderlyingProvisionDateTenorUnit.Type = 'STRING';

module.exports = UnderlyingProvisionDateTenorUnit;