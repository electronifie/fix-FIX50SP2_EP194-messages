var invert = require('invert-obj');

function UnderlyingProvisionDateTenorPeriod (underlyingProvisionDateTenorPeriod) {
  this.message = underlyingProvisionDateTenorPeriod;
}

UnderlyingProvisionDateTenorPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionDateTenorPeriod.Tag = '42154';

UnderlyingProvisionDateTenorPeriod.Type = 'INT';

module.exports = UnderlyingProvisionDateTenorPeriod;