var NoDeliveryScheduleSettlDays = require('../fields/NoDeliveryScheduleSettlDays');
var DeliveryScheduleSettlTimeGrp = require('../components/DeliveryScheduleSettlTimeGrp');
var DeliveryScheduleSettlDay = require('../fields/DeliveryScheduleSettlDay');
var DeliveryScheduleSettlTotalHours = require('../fields/DeliveryScheduleSettlTotalHours');

function DeliveryScheduleSettlDayGrp (deliveryScheduleSettlDayGrp) {
  this.message = deliveryScheduleSettlDayGrp;
}

/* group */

/* component */
DeliveryScheduleSettlDayGrp.prototype.deliveryScheduleSettlTimeGrp = function () {
  return this.message.groups[DeliveryScheduleSettlTimeGrp.Tag]
    .map(function (deliveryScheduleSettlTimeGrp) {
      return new DeliveryScheduleSettlTimeGrp(deliveryScheduleSettlTimeGrp);
  });
};

/* field */
DeliveryScheduleSettlDayGrp.prototype.deliveryScheduleSettlDay = function () {
  return new DeliveryScheduleSettlDay(this.message.tags[DeliveryScheduleSettlDay.Tag]);
};

/* field */
DeliveryScheduleSettlDayGrp.prototype.deliveryScheduleSettlTotalHours = function () {
  return new DeliveryScheduleSettlTotalHours(this.message.tags[DeliveryScheduleSettlTotalHours.Tag]);
};

/* end group */

DeliveryScheduleSettlDayGrp.Tag = '41051';

module.exports = DeliveryScheduleSettlDayGrp;