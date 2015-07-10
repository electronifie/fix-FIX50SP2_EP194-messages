var NoUnderlyingDeliveryScheduleSettlDays = require('../fields/NoUnderlyingDeliveryScheduleSettlDays');
var UnderlyingDeliveryScheduleSettlTimeGrp = require('../components/UnderlyingDeliveryScheduleSettlTimeGrp');
var UnderlyingDeliveryScheduleSettlDay = require('../fields/UnderlyingDeliveryScheduleSettlDay');
var UnderlyingDeliveryScheduleSettlTotalHours = require('../fields/UnderlyingDeliveryScheduleSettlTotalHours');

function UnderlyingDeliveryScheduleSettlDayGrp (underlyingDeliveryScheduleSettlDayGrp) {
  this.message = underlyingDeliveryScheduleSettlDayGrp;
}

/* group */

/* component */
UnderlyingDeliveryScheduleSettlDayGrp.prototype.underlyingDeliveryScheduleSettlTimeGrp = function () {
  return this.message.groups[UnderlyingDeliveryScheduleSettlTimeGrp.Tag]
    .map(function (underlyingDeliveryScheduleSettlTimeGrp) {
      return new UnderlyingDeliveryScheduleSettlTimeGrp(underlyingDeliveryScheduleSettlTimeGrp);
  });
};

/* field */
UnderlyingDeliveryScheduleSettlDayGrp.prototype.underlyingDeliveryScheduleSettlDay = function () {
  return new UnderlyingDeliveryScheduleSettlDay(this.message.tags[UnderlyingDeliveryScheduleSettlDay.Tag]);
};

/* field */
UnderlyingDeliveryScheduleSettlDayGrp.prototype.underlyingDeliveryScheduleSettlTotalHours = function () {
  return new UnderlyingDeliveryScheduleSettlTotalHours(this.message.tags[UnderlyingDeliveryScheduleSettlTotalHours.Tag]);
};

/* end group */

UnderlyingDeliveryScheduleSettlDayGrp.Tag = '41770';

module.exports = UnderlyingDeliveryScheduleSettlDayGrp;