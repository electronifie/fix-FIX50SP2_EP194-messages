var NoRiskLimitTypes = require('../fields/NoRiskLimitTypes');
var RiskWarningLevelGrp = require('../components/RiskWarningLevelGrp');
var RiskLimitType = require('../fields/RiskLimitType');
var RiskLimitAmount = require('../fields/RiskLimitAmount');
var RiskLimitAction = require('../fields/RiskLimitAction');
var RiskLimitUtilizationAmount = require('../fields/RiskLimitUtilizationAmount');
var RiskLimitUtilizationPercent = require('../fields/RiskLimitUtilizationPercent');
var RiskLimitCurrency = require('../fields/RiskLimitCurrency');
var RiskLimitPlatform = require('../fields/RiskLimitPlatform');
var RiskLimitVelocityPeriod = require('../fields/RiskLimitVelocityPeriod');
var RiskLimitVelocityUnit = require('../fields/RiskLimitVelocityUnit');

function RiskLimitTypesGrp (riskLimitTypesGrp) {
  this.message = riskLimitTypesGrp;
}

/* group */

/* component */
RiskLimitTypesGrp.prototype.riskWarningLevelGrp = function () {
  return this.message.groups[RiskWarningLevelGrp.Tag]
    .map(function (riskWarningLevelGrp) {
      return new RiskWarningLevelGrp(riskWarningLevelGrp);
  });
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitType = function () {
  return new RiskLimitType(this.message.tags[RiskLimitType.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitAmount = function () {
  return new RiskLimitAmount(this.message.tags[RiskLimitAmount.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitAction = function () {
  return new RiskLimitAction(this.message.tags[RiskLimitAction.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitUtilizationAmount = function () {
  return new RiskLimitUtilizationAmount(this.message.tags[RiskLimitUtilizationAmount.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitUtilizationPercent = function () {
  return new RiskLimitUtilizationPercent(this.message.tags[RiskLimitUtilizationPercent.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitCurrency = function () {
  return new RiskLimitCurrency(this.message.tags[RiskLimitCurrency.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitPlatform = function () {
  return new RiskLimitPlatform(this.message.tags[RiskLimitPlatform.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitVelocityPeriod = function () {
  return new RiskLimitVelocityPeriod(this.message.tags[RiskLimitVelocityPeriod.Tag]);
};

/* field */
RiskLimitTypesGrp.prototype.riskLimitVelocityUnit = function () {
  return new RiskLimitVelocityUnit(this.message.tags[RiskLimitVelocityUnit.Tag]);
};

/* end group */

RiskLimitTypesGrp.Tag = '1529';

module.exports = RiskLimitTypesGrp;