var invert = require('invert-obj');

function AllocRefRiskLimitCheckIDType (allocRefRiskLimitCheckIdtype) {
  this.message = allocRefRiskLimitCheckIdtype;
}

AllocRefRiskLimitCheckIDType.prototype.value = function () {
  return this.message;
};

AllocRefRiskLimitCheckIDType.Tag = '2393';

AllocRefRiskLimitCheckIDType.Type = 'INT';

module.exports = AllocRefRiskLimitCheckIDType;