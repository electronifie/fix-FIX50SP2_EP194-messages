var invert = require('invert-obj');

function LegProvisionDateTenorPeriod (legProvisionDateTenorPeriod) {
  this.message = legProvisionDateTenorPeriod;
}

LegProvisionDateTenorPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionDateTenorPeriod.Tag = '40454';

LegProvisionDateTenorPeriod.Type = 'INT';

module.exports = LegProvisionDateTenorPeriod;