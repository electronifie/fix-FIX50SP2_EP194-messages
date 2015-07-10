var NoCrossLegs = require('../fields/NoCrossLegs');
var LegStipulations = require('../components/LegStipulations');
var LegPreAllocGrp = require('../components/LegPreAllocGrp');
var NestedParties3 = require('../components/NestedParties3');
var LegRefID = require('../fields/LegRefID');
var LegOrderQty = require('../fields/LegOrderQty');
var LegSwapType = require('../fields/LegSwapType');
var LegAllocID = require('../fields/LegAllocID');
var LegClearingAccountType = require('../fields/LegClearingAccountType');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegSettlCurrency = require('../fields/LegSettlCurrency');
var LegVolatility = require('../fields/LegVolatility');
var LegDividendYield = require('../fields/LegDividendYield');
var LegCurrencyRatio = require('../fields/LegCurrencyRatio');
var LegExecInst = require('../fields/LegExecInst');
var LegShortSaleExemptionReason = require('../fields/LegShortSaleExemptionReason');

function SideCrossLegGrp (sideCrossLegGrp) {
  this.message = sideCrossLegGrp;
}

/* group */

/* component */
SideCrossLegGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
SideCrossLegGrp.prototype.legPreAllocGrp = function () {
  return this.message.groups[LegPreAllocGrp.Tag]
    .map(function (legPreAllocGrp) {
      return new LegPreAllocGrp(legPreAllocGrp);
  });
};

/* component */
SideCrossLegGrp.prototype.nestedParties3 = function () {
  return this.message.groups[NestedParties3.Tag]
    .map(function (nestedParties3) {
      return new NestedParties3(nestedParties3);
  });
};

/* field */
SideCrossLegGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legAllocId = function () {
  return new LegAllocID(this.message.tags[LegAllocID.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legClearingAccountType = function () {
  return new LegClearingAccountType(this.message.tags[LegClearingAccountType.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legVolatility = function () {
  return new LegVolatility(this.message.tags[LegVolatility.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legDividendYield = function () {
  return new LegDividendYield(this.message.tags[LegDividendYield.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legCurrencyRatio = function () {
  return new LegCurrencyRatio(this.message.tags[LegCurrencyRatio.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legExecInst = function () {
  return new LegExecInst(this.message.tags[LegExecInst.Tag]);
};

/* field */
SideCrossLegGrp.prototype.legShortSaleExemptionReason = function () {
  return new LegShortSaleExemptionReason(this.message.tags[LegShortSaleExemptionReason.Tag]);
};

/* end group */

SideCrossLegGrp.Tag = '1829';

module.exports = SideCrossLegGrp;