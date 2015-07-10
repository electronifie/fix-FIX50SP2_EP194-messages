var invert = require('invert-obj');

function AllocRiskLimitCheckStatus (allocRiskLimitCheckStatus) {
  this.message = allocRiskLimitCheckStatus;
}

AllocRiskLimitCheckStatus.prototype.value = function () {
  return this.message;
};

AllocRiskLimitCheckStatus.Tag = '2483';

AllocRiskLimitCheckStatus.Type = 'INT';

module.exports = AllocRiskLimitCheckStatus;