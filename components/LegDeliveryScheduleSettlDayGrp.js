var NoLegDeliveryScheduleSettlDays = require('../fields/NoLegDeliveryScheduleSettlDays');
var LegDeliveryScheduleSettlTimeGrp = require('../components/LegDeliveryScheduleSettlTimeGrp');
var LegDeliveryScheduleSettlDay = require('../fields/LegDeliveryScheduleSettlDay');
var LegDeliveryScheduleSettlTotalHours = require('../fields/LegDeliveryScheduleSettlTotalHours');

function LegDeliveryScheduleSettlDayGrp (legDeliveryScheduleSettlDayGrp) {
  this.message = legDeliveryScheduleSettlDayGrp;
}

/* group */

/* component */
LegDeliveryScheduleSettlDayGrp.prototype.legDeliveryScheduleSettlTimeGrp = function () {
  return this.message.groups[LegDeliveryScheduleSettlTimeGrp.Tag]
    .map(function (legDeliveryScheduleSettlTimeGrp) {
      return new LegDeliveryScheduleSettlTimeGrp(legDeliveryScheduleSettlTimeGrp);
  });
};

/* field */
LegDeliveryScheduleSettlDayGrp.prototype.legDeliveryScheduleSettlDay = function () {
  return new LegDeliveryScheduleSettlDay(this.message.tags[LegDeliveryScheduleSettlDay.Tag]);
};

/* field */
LegDeliveryScheduleSettlDayGrp.prototype.legDeliveryScheduleSettlTotalHours = function () {
  return new LegDeliveryScheduleSettlTotalHours(this.message.tags[LegDeliveryScheduleSettlTotalHours.Tag]);
};

/* end group */

LegDeliveryScheduleSettlDayGrp.Tag = '41422';

module.exports = LegDeliveryScheduleSettlDayGrp;