var NoRequestedRiskLimitType = require('../fields/NoRequestedRiskLimitType');
var RiskLimitType = require('../fields/RiskLimitType');

function RequestedRiskLimitTypesGrp (requestedRiskLimitTypesGrp) {
  this.message = requestedRiskLimitTypesGrp;
}

/* group */

/* field */
RequestedRiskLimitTypesGrp.prototype.riskLimitType = function () {
  return new RiskLimitType(this.message.tags[RiskLimitType.Tag]);
};

/* end group */

RequestedRiskLimitTypesGrp.Tag = '1668';

module.exports = RequestedRiskLimitTypesGrp;