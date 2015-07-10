var invert = require('invert-obj');

function ProvisionDateTenorPeriod (provisionDateTenorPeriod) {
  this.message = provisionDateTenorPeriod;
}

ProvisionDateTenorPeriod.prototype.value = function () {
  return this.message;
};

ProvisionDateTenorPeriod.Tag = '40096';

ProvisionDateTenorPeriod.Type = 'INT';

module.exports = ProvisionDateTenorPeriod;