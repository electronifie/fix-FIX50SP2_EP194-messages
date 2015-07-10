var NoPositions = require('../fields/NoPositions');
var PosType = require('../fields/PosType');
var LongQty = require('../fields/LongQty');
var ShortQty = require('../fields/ShortQty');
var CoveredQty = require('../fields/CoveredQty');
var PosQtyStatus = require('../fields/PosQtyStatus');
var QuantityDate = require('../fields/QuantityDate');

function TradePositionQty (tradePositionQty) {
  this.message = tradePositionQty;
}

/* group */

/* field */
TradePositionQty.prototype.posType = function () {
  return new PosType(this.message.tags[PosType.Tag]);
};

/* field */
TradePositionQty.prototype.longQty = function () {
  return new LongQty(this.message.tags[LongQty.Tag]);
};

/* field */
TradePositionQty.prototype.shortQty = function () {
  return new ShortQty(this.message.tags[ShortQty.Tag]);
};

/* field */
TradePositionQty.prototype.coveredQty = function () {
  return new CoveredQty(this.message.tags[CoveredQty.Tag]);
};

/* field */
TradePositionQty.prototype.posQtyStatus = function () {
  return new PosQtyStatus(this.message.tags[PosQtyStatus.Tag]);
};

/* field */
TradePositionQty.prototype.quantityDate = function () {
  return new QuantityDate(this.message.tags[QuantityDate.Tag]);
};

/* end group */

TradePositionQty.Tag = '702';

module.exports = TradePositionQty;