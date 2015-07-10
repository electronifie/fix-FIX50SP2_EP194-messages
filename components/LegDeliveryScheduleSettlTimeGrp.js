var NoLegDeliveryScheduleSettlTimes = require('../fields/NoLegDeliveryScheduleSettlTimes');
var LegDeliveryScheduleSettlStart = require('../fields/LegDeliveryScheduleSettlStart');
var LegDeliveryScheduleSettlEnd = require('../fields/LegDeliveryScheduleSettlEnd');
var LegDeliveryScheduleSettlTimeType = require('../fields/LegDeliveryScheduleSettlTimeType');

function LegDeliveryScheduleSettlTimeGrp (legDeliveryScheduleSettlTimeGrp) {
  this.message = legDeliveryScheduleSettlTimeGrp;
}

/* group */

/* field */
LegDeliveryScheduleSettlTimeGrp.prototype.legDeliveryScheduleSettlStart = function () {
  return new LegDeliveryScheduleSettlStart(this.message.tags[LegDeliveryScheduleSettlStart.Tag]);
};

/* field */
LegDeliveryScheduleSettlTimeGrp.prototype.legDeliveryScheduleSettlEnd = function () {
  return new LegDeliveryScheduleSettlEnd(this.message.tags[LegDeliveryScheduleSettlEnd.Tag]);
};

/* field */
LegDeliveryScheduleSettlTimeGrp.prototype.legDeliveryScheduleSettlTimeType = function () {
  return new LegDeliveryScheduleSettlTimeType(this.message.tags[LegDeliveryScheduleSettlTimeType.Tag]);
};

/* end group */

LegDeliveryScheduleSettlTimeGrp.Tag = '41425';

module.exports = LegDeliveryScheduleSettlTimeGrp;