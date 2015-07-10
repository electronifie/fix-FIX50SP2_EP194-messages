var OrderQtyData = require('../components/OrderQtyData');
var MatchingInstructions = require('../components/MatchingInstructions');
var DisplayInstruction = require('../components/DisplayInstruction');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ListID = require('../fields/ListID');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var RefOrdIDReason = require('../fields/RefOrdIDReason');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var OrdType = require('../fields/OrdType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var ExecInst = require('../fields/ExecInst');
var OrdStatus = require('../fields/OrdStatus');
var LeavesQty = require('../fields/LeavesQty');
var CumQty = require('../fields/CumQty');
var TimeInForce = require('../fields/TimeInForce');
var ExpireTime = require('../fields/ExpireTime');
var ExposureDuration = require('../fields/ExposureDuration');
var ExposureDurationUnit = require('../fields/ExposureDurationUnit');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var BookingType = require('../fields/BookingType');
var OrigCustOrderCapacity = require('../fields/OrigCustOrderCapacity');
var OrderInputDevice = require('../fields/OrderInputDevice');
var LotType = require('../fields/LotType');
var TransBkdTime = require('../fields/TransBkdTime');
var OrigOrdModTime = require('../fields/OrigOrdModTime');

function TradeReportOrderDetail (tradeReportOrderDetail) {
  this.message = tradeReportOrderDetail;
}
/* component */
TradeReportOrderDetail.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
TradeReportOrderDetail.prototype.matchingInstructions = function () {
  return this.message.groups[MatchingInstructions.Tag]
    .map(function (matchingInstructions) {
      return new MatchingInstructions(matchingInstructions);
  });
};

/* component */
TradeReportOrderDetail.prototype.displayInstruction = function () {
  return this.message.groups[DisplayInstruction.Tag]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

/* field */
TradeReportOrderDetail.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[RefOrderID.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[RefOrderIDSource.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.refOrdIdreason = function () {
  return new RefOrdIDReason(this.message.tags[RefOrdIDReason.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[PreTradeAnonymity.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.stopPx = function () {
  return new StopPx(this.message.tags[StopPx.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.ordStatus = function () {
  return new OrdStatus(this.message.tags[OrdStatus.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.leavesQty = function () {
  return new LeavesQty(this.message.tags[LeavesQty.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.cumQty = function () {
  return new CumQty(this.message.tags[CumQty.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[ExposureDuration.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[ExposureDurationUnit.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.bookingType = function () {
  return new BookingType(this.message.tags[BookingType.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.origCustOrderCapacity = function () {
  return new OrigCustOrderCapacity(this.message.tags[OrigCustOrderCapacity.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.orderInputDevice = function () {
  return new OrderInputDevice(this.message.tags[OrderInputDevice.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[TransBkdTime.Tag]);
};

/* field */
TradeReportOrderDetail.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[OrigOrdModTime.Tag]);
};



TradeReportOrderDetail.Tag = '37';

module.exports = TradeReportOrderDetail;