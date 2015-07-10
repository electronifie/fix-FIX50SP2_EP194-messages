var NoRiskLimits = require('../fields/NoRiskLimits');
var RiskLimitTypesGrp = require('../components/RiskLimitTypesGrp');
var RiskInstrumentScopeGrp = require('../components/RiskInstrumentScopeGrp');

function RiskLimitsGrp (riskLimitsGrp) {
  this.message = riskLimitsGrp;
}

/* group */

/* component */
RiskLimitsGrp.prototype.riskLimitTypesGrp = function () {
  return this.message.groups[RiskLimitTypesGrp.Tag]
    .map(function (riskLimitTypesGrp) {
      return new RiskLimitTypesGrp(riskLimitTypesGrp);
  });
};

/* component */
RiskLimitsGrp.prototype.riskInstrumentScopeGrp = function () {
  return this.message.groups[RiskInstrumentScopeGrp.Tag]
    .map(function (riskInstrumentScopeGrp) {
      return new RiskInstrumentScopeGrp(riskInstrumentScopeGrp);
  });
};

/* end group */

RiskLimitsGrp.Tag = '1669';

module.exports = RiskLimitsGrp;