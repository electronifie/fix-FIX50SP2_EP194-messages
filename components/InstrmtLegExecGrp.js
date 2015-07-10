var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var LegPreAllocGrp = require('../components/LegPreAllocGrp');
var NestedParties3 = require('../components/NestedParties3');
var LegOrderQty = require('../fields/LegOrderQty');
var LegQty = require('../fields/LegQty');
var LegMidPx = require('../fields/LegMidPx');
var LegSwapType = require('../fields/LegSwapType');
var LegAllocID = require('../fields/LegAllocID');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegLastPx = require('../fields/LegLastPx');
var LegSettlCurrency = require('../fields/LegSettlCurrency');
var LegLastForwardPoints = require('../fields/LegLastForwardPoints');
var LegCalculatedCcyLastQty = require('../fields/LegCalculatedCcyLastQty');
var LegGrossTradeAmt = require('../fields/LegGrossTradeAmt');
var LegShortSaleExemptionReason = require('../fields/LegShortSaleExemptionReason');
var LegVolatility = require('../fields/LegVolatility');
var LegDividendYield = require('../fields/LegDividendYield');
var LegCurrencyRatio = require('../fields/LegCurrencyRatio');
var LegExecInst = require('../fields/LegExecInst');
var LegLastQty = require('../fields/LegLastQty');
var FillRefID = require('../fields/FillRefID');

function InstrmtLegExecGrp (instrmtLegExecGrp) {
  this.message = instrmtLegExecGrp;
}

/* group */

/* component */
InstrmtLegExecGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
InstrmtLegExecGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
InstrmtLegExecGrp.prototype.legPreAllocGrp = function () {
  return this.message.groups[LegPreAllocGrp.Tag]
    .map(function (legPreAllocGrp) {
      return new LegPreAllocGrp(legPreAllocGrp);
  });
};

/* component */
InstrmtLegExecGrp.prototype.nestedParties3 = function () {
  return this.message.groups[NestedParties3.Tag]
    .map(function (nestedParties3) {
      return new NestedParties3(nestedParties3);
  });
};

/* field */
InstrmtLegExecGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legMidPx = function () {
  return new LegMidPx(this.message.tags[LegMidPx.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legAllocId = function () {
  return new LegAllocID(this.message.tags[LegAllocID.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legLastForwardPoints = function () {
  return new LegLastForwardPoints(this.message.tags[LegLastForwardPoints.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legCalculatedCcyLastQty = function () {
  return new LegCalculatedCcyLastQty(this.message.tags[LegCalculatedCcyLastQty.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legGrossTradeAmt = function () {
  return new LegGrossTradeAmt(this.message.tags[LegGrossTradeAmt.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legShortSaleExemptionReason = function () {
  return new LegShortSaleExemptionReason(this.message.tags[LegShortSaleExemptionReason.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legVolatility = function () {
  return new LegVolatility(this.message.tags[LegVolatility.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legDividendYield = function () {
  return new LegDividendYield(this.message.tags[LegDividendYield.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legCurrencyRatio = function () {
  return new LegCurrencyRatio(this.message.tags[LegCurrencyRatio.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legExecInst = function () {
  return new LegExecInst(this.message.tags[LegExecInst.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legLastQty = function () {
  return new LegLastQty(this.message.tags[LegLastQty.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.fillRefId = function () {
  return new FillRefID(this.message.tags[FillRefID.Tag]);
};

/* end group */

InstrmtLegExecGrp.Tag = '555';

module.exports = InstrmtLegExecGrp;