var invert = require('invert-obj');

function SideRiskLimitCheckStatus (sideRiskLimitCheckStatus) {
  this.message = sideRiskLimitCheckStatus;
}

SideRiskLimitCheckStatus.prototype.value = function () {
  return this.message;
};

SideRiskLimitCheckStatus.Tag = '2344';

SideRiskLimitCheckStatus.Type = 'INT';

module.exports = SideRiskLimitCheckStatus;