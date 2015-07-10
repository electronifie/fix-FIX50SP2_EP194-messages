var NoTradeQtys = require('../fields/NoTradeQtys');
var TradeQtyType = require('../fields/TradeQtyType');
var TradeQty = require('../fields/TradeQty');

function TradeQtyGrp (tradeQtyGrp) {
  this.message = tradeQtyGrp;
}

/* group */

/* field */
TradeQtyGrp.prototype.tradeQtyType = function () {
  return new TradeQtyType(this.message.tags[TradeQtyType.Tag]);
};

/* field */
TradeQtyGrp.prototype.tradeQty = function () {
  return new TradeQty(this.message.tags[TradeQty.Tag]);
};

/* end group */

TradeQtyGrp.Tag = '1841';

module.exports = TradeQtyGrp;