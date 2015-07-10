var NoUnderlyingDeliverySchedules = require('../fields/NoUnderlyingDeliverySchedules');
var UnderlyingDeliveryScheduleSettlDayGrp = require('../components/UnderlyingDeliveryScheduleSettlDayGrp');
var UnderlyingDeliveryScheduleType = require('../fields/UnderlyingDeliveryScheduleType');
var UnderlyingDeliveryScheduleXID = require('../fields/UnderlyingDeliveryScheduleXID');
var UnderlyingDeliveryScheduleNotional = require('../fields/UnderlyingDeliveryScheduleNotional');
var UnderlyingDeliveryScheduleNotionalUnitOfMeasure = require('../fields/UnderlyingDeliveryScheduleNotionalUnitOfMeasure');
var UnderlyingDeliveryScheduleNotionalCommodityFrequency = require('../fields/UnderlyingDeliveryScheduleNotionalCommodityFrequency');
var UnderlyingDeliveryScheduleNegativeTolerance = require('../fields/UnderlyingDeliveryScheduleNegativeTolerance');
var UnderlyingDeliverySchedulePositiveTolerance = require('../fields/UnderlyingDeliverySchedulePositiveTolerance');
var UnderlyingDeliveryScheduleToleranceUnitOfMeasure = require('../fields/UnderlyingDeliveryScheduleToleranceUnitOfMeasure');
var UnderlyingDeliveryScheduleToleranceType = require('../fields/UnderlyingDeliveryScheduleToleranceType');
var UnderlyingDeliveryScheduleSettlCountry = require('../fields/UnderlyingDeliveryScheduleSettlCountry');
var UnderlyingDeliveryScheduleSettlTimeZone = require('../fields/UnderlyingDeliveryScheduleSettlTimeZone');
var UnderlyingDeliveryScheduleSettlFlowType = require('../fields/UnderlyingDeliveryScheduleSettlFlowType');
var UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction = require('../fields/UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction');

function UnderlyingDeliveryScheduleGrp (underlyingDeliveryScheduleGrp) {
  this.message = underlyingDeliveryScheduleGrp;
}

/* group */

/* component */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleSettlDayGrp = function () {
  return this.message.groups[UnderlyingDeliveryScheduleSettlDayGrp.Tag]
    .map(function (underlyingDeliveryScheduleSettlDayGrp) {
      return new UnderlyingDeliveryScheduleSettlDayGrp(underlyingDeliveryScheduleSettlDayGrp);
  });
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleType = function () {
  return new UnderlyingDeliveryScheduleType(this.message.tags[UnderlyingDeliveryScheduleType.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleXid = function () {
  return new UnderlyingDeliveryScheduleXID(this.message.tags[UnderlyingDeliveryScheduleXID.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleNotional = function () {
  return new UnderlyingDeliveryScheduleNotional(this.message.tags[UnderlyingDeliveryScheduleNotional.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleNotionalUnitOfMeasure = function () {
  return new UnderlyingDeliveryScheduleNotionalUnitOfMeasure(this.message.tags[UnderlyingDeliveryScheduleNotionalUnitOfMeasure.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleNotionalCommodityFrequency = function () {
  return new UnderlyingDeliveryScheduleNotionalCommodityFrequency(this.message.tags[UnderlyingDeliveryScheduleNotionalCommodityFrequency.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleNegativeTolerance = function () {
  return new UnderlyingDeliveryScheduleNegativeTolerance(this.message.tags[UnderlyingDeliveryScheduleNegativeTolerance.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliverySchedulePositiveTolerance = function () {
  return new UnderlyingDeliverySchedulePositiveTolerance(this.message.tags[UnderlyingDeliverySchedulePositiveTolerance.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleToleranceUnitOfMeasure = function () {
  return new UnderlyingDeliveryScheduleToleranceUnitOfMeasure(this.message.tags[UnderlyingDeliveryScheduleToleranceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleToleranceType = function () {
  return new UnderlyingDeliveryScheduleToleranceType(this.message.tags[UnderlyingDeliveryScheduleToleranceType.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleSettlCountry = function () {
  return new UnderlyingDeliveryScheduleSettlCountry(this.message.tags[UnderlyingDeliveryScheduleSettlCountry.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleSettlTimeZone = function () {
  return new UnderlyingDeliveryScheduleSettlTimeZone(this.message.tags[UnderlyingDeliveryScheduleSettlTimeZone.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleSettlFlowType = function () {
  return new UnderlyingDeliveryScheduleSettlFlowType(this.message.tags[UnderlyingDeliveryScheduleSettlFlowType.Tag]);
};

/* field */
UnderlyingDeliveryScheduleGrp.prototype.underlyingDeliveryScheduleSettlHolidaysProcessingInstruction = function () {
  return new UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction(this.message.tags[UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction.Tag]);
};

/* end group */

UnderlyingDeliveryScheduleGrp.Tag = '41756';

module.exports = UnderlyingDeliveryScheduleGrp;