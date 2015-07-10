var NoOrderEntries = require('../fields/NoOrderEntries');
var OrderQtyData = require('../components/OrderQtyData');
var Instrument = require('../components/Instrument');
var OrdStatus = require('../fields/OrdStatus');
var ExecType = require('../fields/ExecType');
var ExecTypeReason = require('../fields/ExecTypeReason');
var OrderEntryAction = require('../fields/OrderEntryAction');
var OrderEntryID = require('../fields/OrderEntryID');
var ClOrdID = require('../fields/ClOrdID');
var OrigClOrdID = require('../fields/OrigClOrdID');
var OrderID = require('../fields/OrderID');
var OrdRejReason = require('../fields/OrdRejReason');
var CumQty = require('../fields/CumQty');
var LeavesQty = require('../fields/LeavesQty');
var CxlQty = require('../fields/CxlQty');
var OrdType = require('../fields/OrdType');
var Price = require('../fields/Price');
var Side = require('../fields/Side');
var TimeInForce = require('../fields/TimeInForce');

function OrderEntryAckGrp (orderEntryAckGrp) {
  this.message = orderEntryAckGrp;
}

/* group */

/* component */
OrderEntryAckGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
OrderEntryAckGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* field */
OrderEntryAckGrp.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[OrdStatus.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.execType = function () {
  return new ExecType(this.message.tags[ExecType.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.execTypeReason = function () {
  return new ExecTypeReason(this.message.tags[ExecTypeReason.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.orderEntryAction = function () {
  return new OrderEntryAction(this.message.tags[OrderEntryAction.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.orderEntryId = function () {
  return new OrderEntryID(this.message.tags[OrderEntryID.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrigClOrdID.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.ordRejReason = function () {
  return new OrdRejReason(this.message.tags[OrdRejReason.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.cumQty = function () {
  return new CumQty(this.message.tags[CumQty.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.leavesQty = function () {
  return new LeavesQty(this.message.tags[LeavesQty.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.cxlQty = function () {
  return new CxlQty(this.message.tags[CxlQty.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
OrderEntryAckGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* end group */

OrderEntryAckGrp.Tag = '2428';

module.exports = OrderEntryAckGrp;