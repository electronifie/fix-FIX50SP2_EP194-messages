var NoLegExecs = require('../fields/NoLegExecs');
var NestedParties3 = require('../components/NestedParties3');
var LegRefID = require('../fields/LegRefID');
var LegExecID = require('../fields/LegExecID');
var LegExecRefID = require('../fields/LegExecRefID');
var LegTradeID = require('../fields/LegTradeID');
var LegTradeReportID = require('../fields/LegTradeReportID');
var LegOrderQty = require('../fields/LegOrderQty');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegLastPx = require('../fields/LegLastPx');
var LegPriceType = require('../fields/LegPriceType');
var LegSettlCurrency = require('../fields/LegSettlCurrency');
var LegShortSaleExemptionReason = require('../fields/LegShortSaleExemptionReason');
var LegLastQty = require('../fields/LegLastQty');
var LegQtyType = require('../fields/LegQtyType');

function TrdInstrmtLegExecGrp (trdInstrmtLegExecGrp) {
  this.message = trdInstrmtLegExecGrp;
}

/* group */

/* component */
TrdInstrmtLegExecGrp.prototype.nestedParties3 = function () {
  return this.message.groups[NestedParties3.Tag]
    .map(function (nestedParties3) {
      return new NestedParties3(nestedParties3);
  });
};

/* field */
TrdInstrmtLegExecGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legExecId = function () {
  return new LegExecID(this.message.tags[LegExecID.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legExecRefId = function () {
  return new LegExecRefID(this.message.tags[LegExecRefID.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legTradeId = function () {
  return new LegTradeID(this.message.tags[LegTradeID.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legTradeReportId = function () {
  return new LegTradeReportID(this.message.tags[LegTradeReportID.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legPriceType = function () {
  return new LegPriceType(this.message.tags[LegPriceType.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legShortSaleExemptionReason = function () {
  return new LegShortSaleExemptionReason(this.message.tags[LegShortSaleExemptionReason.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legLastQty = function () {
  return new LegLastQty(this.message.tags[LegLastQty.Tag]);
};

/* field */
TrdInstrmtLegExecGrp.prototype.legQtyType = function () {
  return new LegQtyType(this.message.tags[LegQtyType.Tag]);
};

/* end group */

TrdInstrmtLegExecGrp.Tag = '1892';

module.exports = TrdInstrmtLegExecGrp;