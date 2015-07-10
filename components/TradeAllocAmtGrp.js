var NoTradeAllocAmts = require('../fields/NoTradeAllocAmts');
var TradeAllocAmtType = require('../fields/TradeAllocAmtType');
var TradeAllocAmt = require('../fields/TradeAllocAmt');
var TradeAllocCurrency = require('../fields/TradeAllocCurrency');
var TradeAllocAmtReason = require('../fields/TradeAllocAmtReason');

function TradeAllocAmtGrp (tradeAllocAmtGrp) {
  this.message = tradeAllocAmtGrp;
}

/* group */

/* field */
TradeAllocAmtGrp.prototype.tradeAllocAmtType = function () {
  return new TradeAllocAmtType(this.message.tags[TradeAllocAmtType.Tag]);
};

/* field */
TradeAllocAmtGrp.prototype.tradeAllocAmt = function () {
  return new TradeAllocAmt(this.message.tags[TradeAllocAmt.Tag]);
};

/* field */
TradeAllocAmtGrp.prototype.tradeAllocCurrency = function () {
  return new TradeAllocCurrency(this.message.tags[TradeAllocCurrency.Tag]);
};

/* field */
TradeAllocAmtGrp.prototype.tradeAllocAmtReason = function () {
  return new TradeAllocAmtReason(this.message.tags[TradeAllocAmtReason.Tag]);
};

/* end group */

TradeAllocAmtGrp.Tag = '1844';

module.exports = TradeAllocAmtGrp;