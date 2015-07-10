var invert = require('invert-obj');

function ProvisionDateTenorUnit (provisionDateTenorUnit) {
  this.message = provisionDateTenorUnit;
}

ProvisionDateTenorUnit.prototype.value = function () {
  return this.message;
};


ProvisionDateTenorUnit.Keys = {
  DAY: 'D',
  WEEK: 'Wk',
  MONTH: 'Mo',
  YEAR: 'Yr',
};

ProvisionDateTenorUnit.Tag = '40097';

ProvisionDateTenorUnit.Type = 'STRING';

ProvisionDateTenorUnit.Values = invert(ProvisionDateTenorUnit.Keys);

module.exports = ProvisionDateTenorUnit;