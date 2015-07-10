var NoDeliveryScheduleSettlTimes = require('../fields/NoDeliveryScheduleSettlTimes');
var DeliveryScheduleSettlStart = require('../fields/DeliveryScheduleSettlStart');
var DeliveryScheduleSettlEnd = require('../fields/DeliveryScheduleSettlEnd');
var DeliveryScheduleSettlTimeType = require('../fields/DeliveryScheduleSettlTimeType');

function DeliveryScheduleSettlTimeGrp (deliveryScheduleSettlTimeGrp) {
  this.message = deliveryScheduleSettlTimeGrp;
}

/* group */

/* field */
DeliveryScheduleSettlTimeGrp.prototype.deliveryScheduleSettlStart = function () {
  return new DeliveryScheduleSettlStart(this.message.tags[DeliveryScheduleSettlStart.Tag]);
};

/* field */
DeliveryScheduleSettlTimeGrp.prototype.deliveryScheduleSettlEnd = function () {
  return new DeliveryScheduleSettlEnd(this.message.tags[DeliveryScheduleSettlEnd.Tag]);
};

/* field */
DeliveryScheduleSettlTimeGrp.prototype.deliveryScheduleSettlTimeType = function () {
  return new DeliveryScheduleSettlTimeType(this.message.tags[DeliveryScheduleSettlTimeType.Tag]);
};

/* end group */

DeliveryScheduleSettlTimeGrp.Tag = '41054';

module.exports = DeliveryScheduleSettlTimeGrp;