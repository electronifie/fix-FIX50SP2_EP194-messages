var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegFinancingDetails = require('../components/LegFinancingDetails');
var LegPositionAmountData = require('../components/LegPositionAmountData');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var TradeCapLegUnderlyingsGrp = require('../components/TradeCapLegUnderlyingsGrp');
var LegOrderQty = require('../fields/LegOrderQty');
var LegQty = require('../fields/LegQty');
var LegMidPx = require('../fields/LegMidPx');
var LegSwapType = require('../fields/LegSwapType');
var LegReportID = require('../fields/LegReportID');
var LegNumber = require('../fields/LegNumber');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegLastPx = require('../fields/LegLastPx');
var LegPriceType = require('../fields/LegPriceType');
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
var LegQtyType = require('../fields/LegQtyType');
var LegLastMultipliedQty = require('../fields/LegLastMultipliedQty');
var LegTotalTradeQty = require('../fields/LegTotalTradeQty');
var LegTotalTradeMultipliedQty = require('../fields/LegTotalTradeMultipliedQty');
var LegTotalGrossTradeAmt = require('../fields/LegTotalGrossTradeAmt');

function TrdInstrmtLegGrp (trdInstrmtLegGrp) {
  this.message = trdInstrmtLegGrp;
}

/* group */

/* component */
TrdInstrmtLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.legFinancingDetails = function () {
  return this.message.groups[LegFinancingDetails.Tag]
    .map(function (legFinancingDetails) {
      return new LegFinancingDetails(legFinancingDetails);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.legPositionAmountData = function () {
  return this.message.groups[LegPositionAmountData.Tag]
    .map(function (legPositionAmountData) {
      return new LegPositionAmountData(legPositionAmountData);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.tradeCapLegUnderlyingsGrp = function () {
  return this.message.groups[TradeCapLegUnderlyingsGrp.Tag]
    .map(function (tradeCapLegUnderlyingsGrp) {
      return new TradeCapLegUnderlyingsGrp(tradeCapLegUnderlyingsGrp);
  });
};

/* field */
TrdInstrmtLegGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legMidPx = function () {
  return new LegMidPx(this.message.tags[LegMidPx.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legReportId = function () {
  return new LegReportID(this.message.tags[LegReportID.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legNumber = function () {
  return new LegNumber(this.message.tags[LegNumber.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legPriceType = function () {
  return new LegPriceType(this.message.tags[LegPriceType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastForwardPoints = function () {
  return new LegLastForwardPoints(this.message.tags[LegLastForwardPoints.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCalculatedCcyLastQty = function () {
  return new LegCalculatedCcyLastQty(this.message.tags[LegCalculatedCcyLastQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legGrossTradeAmt = function () {
  return new LegGrossTradeAmt(this.message.tags[LegGrossTradeAmt.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legShortSaleExemptionReason = function () {
  return new LegShortSaleExemptionReason(this.message.tags[LegShortSaleExemptionReason.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legVolatility = function () {
  return new LegVolatility(this.message.tags[LegVolatility.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legDividendYield = function () {
  return new LegDividendYield(this.message.tags[LegDividendYield.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCurrencyRatio = function () {
  return new LegCurrencyRatio(this.message.tags[LegCurrencyRatio.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legExecInst = function () {
  return new LegExecInst(this.message.tags[LegExecInst.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastQty = function () {
  return new LegLastQty(this.message.tags[LegLastQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legQtyType = function () {
  return new LegQtyType(this.message.tags[LegQtyType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastMultipliedQty = function () {
  return new LegLastMultipliedQty(this.message.tags[LegLastMultipliedQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legTotalTradeQty = function () {
  return new LegTotalTradeQty(this.message.tags[LegTotalTradeQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legTotalTradeMultipliedQty = function () {
  return new LegTotalTradeMultipliedQty(this.message.tags[LegTotalTradeMultipliedQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legTotalGrossTradeAmt = function () {
  return new LegTotalGrossTradeAmt(this.message.tags[LegTotalGrossTradeAmt.Tag]);
};

/* end group */

TrdInstrmtLegGrp.Tag = '555';

module.exports = TrdInstrmtLegGrp;