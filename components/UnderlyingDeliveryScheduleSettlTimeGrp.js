var NoUnderlyingDeliveryScheduleSettlTimes = require('../fields/NoUnderlyingDeliveryScheduleSettlTimes');
var UnderlyingDeliveryScheduleSettlStart = require('../fields/UnderlyingDeliveryScheduleSettlStart');
var UnderlyingDeliveryScheduleSettlEnd = require('../fields/UnderlyingDeliveryScheduleSettlEnd');
var UnderlyingDeliveryScheduleSettlTimeType = require('../fields/UnderlyingDeliveryScheduleSettlTimeType');

function UnderlyingDeliveryScheduleSettlTimeGrp (underlyingDeliveryScheduleSettlTimeGrp) {
  this.message = underlyingDeliveryScheduleSettlTimeGrp;
}

/* group */

/* field */
UnderlyingDeliveryScheduleSettlTimeGrp.prototype.underlyingDeliveryScheduleSettlStart = function () {
  return new UnderlyingDeliveryScheduleSettlStart(this.message.tags[UnderlyingDeliveryScheduleSettlStart.Tag]);
};

/* field */
UnderlyingDeliveryScheduleSettlTimeGrp.prototype.underlyingDeliveryScheduleSettlEnd = function () {
  return new UnderlyingDeliveryScheduleSettlEnd(this.message.tags[UnderlyingDeliveryScheduleSettlEnd.Tag]);
};

/* field */
UnderlyingDeliveryScheduleSettlTimeGrp.prototype.underlyingDeliveryScheduleSettlTimeType = function () {
  return new UnderlyingDeliveryScheduleSettlTimeType(this.message.tags[UnderlyingDeliveryScheduleSettlTimeType.Tag]);
};

/* end group */

UnderlyingDeliveryScheduleSettlTimeGrp.Tag = '41773';

module.exports = UnderlyingDeliveryScheduleSettlTimeGrp;