var NoOrderEvents = require('../fields/NoOrderEvents');
var OrderEventType = require('../fields/OrderEventType');
var OrderEventExecID = require('../fields/OrderEventExecID');
var OrderEventReason = require('../fields/OrderEventReason');
var OrderEventPx = require('../fields/OrderEventPx');
var OrderEventQty = require('../fields/OrderEventQty');
var OrderEventLiquidityIndicator = require('../fields/OrderEventLiquidityIndicator');
var OrderEventText = require('../fields/OrderEventText');

function OrderEventGrp (orderEventGrp) {
  this.message = orderEventGrp;
}

/* group */

/* field */
OrderEventGrp.prototype.orderEventType = function () {
  return new OrderEventType(this.message.tags[OrderEventType.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventExecId = function () {
  return new OrderEventExecID(this.message.tags[OrderEventExecID.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventReason = function () {
  return new OrderEventReason(this.message.tags[OrderEventReason.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventPx = function () {
  return new OrderEventPx(this.message.tags[OrderEventPx.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventQty = function () {
  return new OrderEventQty(this.message.tags[OrderEventQty.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventLiquidityIndicator = function () {
  return new OrderEventLiquidityIndicator(this.message.tags[OrderEventLiquidityIndicator.Tag]);
};

/* field */
OrderEventGrp.prototype.orderEventText = function () {
  return new OrderEventText(this.message.tags[OrderEventText.Tag]);
};

/* end group */

OrderEventGrp.Tag = '1795';

module.exports = OrderEventGrp;