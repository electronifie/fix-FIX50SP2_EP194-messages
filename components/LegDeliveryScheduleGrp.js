var NoLegDeliverySchedules = require('../fields/NoLegDeliverySchedules');
var LegDeliveryScheduleSettlDayGrp = require('../components/LegDeliveryScheduleSettlDayGrp');
var LegDeliveryScheduleType = require('../fields/LegDeliveryScheduleType');
var LegDeliveryScheduleXID = require('../fields/LegDeliveryScheduleXID');
var LegDeliveryScheduleNotional = require('../fields/LegDeliveryScheduleNotional');
var LegDeliveryScheduleNotionalUnitOfMeasure = require('../fields/LegDeliveryScheduleNotionalUnitOfMeasure');
var LegDeliveryScheduleNotionalCommodityFrequency = require('../fields/LegDeliveryScheduleNotionalCommodityFrequency');
var LegDeliveryScheduleNegativeTolerance = require('../fields/LegDeliveryScheduleNegativeTolerance');
var LegDeliverySchedulePositiveTolerance = require('../fields/LegDeliverySchedulePositiveTolerance');
var LegDeliveryScheduleToleranceUnitOfMeasure = require('../fields/LegDeliveryScheduleToleranceUnitOfMeasure');
var LegDeliveryScheduleToleranceType = require('../fields/LegDeliveryScheduleToleranceType');
var LegDeliveryScheduleSettlCountry = require('../fields/LegDeliveryScheduleSettlCountry');
var LegDeliveryScheduleSettlTimeZone = require('../fields/LegDeliveryScheduleSettlTimeZone');
var LegDeliveryScheduleSettlFlowType = require('../fields/LegDeliveryScheduleSettlFlowType');
var LegDeliveryScheduleSettlHolidaysProcessingInstruction = require('../fields/LegDeliveryScheduleSettlHolidaysProcessingInstruction');

function LegDeliveryScheduleGrp (legDeliveryScheduleGrp) {
  this.message = legDeliveryScheduleGrp;
}

/* group */

/* component */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleSettlDayGrp = function () {
  return this.message.groups[LegDeliveryScheduleSettlDayGrp.Tag]
    .map(function (legDeliveryScheduleSettlDayGrp) {
      return new LegDeliveryScheduleSettlDayGrp(legDeliveryScheduleSettlDayGrp);
  });
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleType = function () {
  return new LegDeliveryScheduleType(this.message.tags[LegDeliveryScheduleType.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleXid = function () {
  return new LegDeliveryScheduleXID(this.message.tags[LegDeliveryScheduleXID.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleNotional = function () {
  return new LegDeliveryScheduleNotional(this.message.tags[LegDeliveryScheduleNotional.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleNotionalUnitOfMeasure = function () {
  return new LegDeliveryScheduleNotionalUnitOfMeasure(this.message.tags[LegDeliveryScheduleNotionalUnitOfMeasure.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleNotionalCommodityFrequency = function () {
  return new LegDeliveryScheduleNotionalCommodityFrequency(this.message.tags[LegDeliveryScheduleNotionalCommodityFrequency.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleNegativeTolerance = function () {
  return new LegDeliveryScheduleNegativeTolerance(this.message.tags[LegDeliveryScheduleNegativeTolerance.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliverySchedulePositiveTolerance = function () {
  return new LegDeliverySchedulePositiveTolerance(this.message.tags[LegDeliverySchedulePositiveTolerance.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleToleranceUnitOfMeasure = function () {
  return new LegDeliveryScheduleToleranceUnitOfMeasure(this.message.tags[LegDeliveryScheduleToleranceUnitOfMeasure.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleToleranceType = function () {
  return new LegDeliveryScheduleToleranceType(this.message.tags[LegDeliveryScheduleToleranceType.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleSettlCountry = function () {
  return new LegDeliveryScheduleSettlCountry(this.message.tags[LegDeliveryScheduleSettlCountry.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleSettlTimeZone = function () {
  return new LegDeliveryScheduleSettlTimeZone(this.message.tags[LegDeliveryScheduleSettlTimeZone.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleSettlFlowType = function () {
  return new LegDeliveryScheduleSettlFlowType(this.message.tags[LegDeliveryScheduleSettlFlowType.Tag]);
};

/* field */
LegDeliveryScheduleGrp.prototype.legDeliveryScheduleSettlHolidaysProcessingInstruction = function () {
  return new LegDeliveryScheduleSettlHolidaysProcessingInstruction(this.message.tags[LegDeliveryScheduleSettlHolidaysProcessingInstruction.Tag]);
};

/* end group */

LegDeliveryScheduleGrp.Tag = '41408';

module.exports = LegDeliveryScheduleGrp;