var NoOrderEntries = require('../fields/NoOrderEntries');
var OrderQtyData = require('../components/OrderQtyData');
var Instrument = require('../components/Instrument');
var OrderEntryAction = require('../fields/OrderEntryAction');
var OrderEntryID = require('../fields/OrderEntryID');
var ClOrdID = require('../fields/ClOrdID');
var OrigClOrdID = require('../fields/OrigClOrdID');
var OrderID = require('../fields/OrderID');
var OrdType = require('../fields/OrdType');
var Price = require('../fields/Price');
var Side = require('../fields/Side');
var TimeInForce = require('../fields/TimeInForce');

function OrderEntryGrp (orderEntryGrp) {
  this.message = orderEntryGrp;
}

/* group */

/* component */
OrderEntryGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
OrderEntryGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* field */
OrderEntryGrp.prototype.orderEntryAction = function () {
  return new OrderEntryAction(this.message.tags[OrderEntryAction.Tag]);
};

/* field */
OrderEntryGrp.prototype.orderEntryId = function () {
  return new OrderEntryID(this.message.tags[OrderEntryID.Tag]);
};

/* field */
OrderEntryGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
OrderEntryGrp.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrigClOrdID.Tag]);
};

/* field */
OrderEntryGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
OrderEntryGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
OrderEntryGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
OrderEntryGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
OrderEntryGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* end group */

OrderEntryGrp.Tag = '2428';

module.exports = OrderEntryGrp;