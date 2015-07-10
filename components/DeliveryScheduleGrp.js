var NoDeliverySchedules = require('../fields/NoDeliverySchedules');
var DeliveryScheduleSettlDayGrp = require('../components/DeliveryScheduleSettlDayGrp');
var DeliveryScheduleType = require('../fields/DeliveryScheduleType');
var DeliveryScheduleXID = require('../fields/DeliveryScheduleXID');
var DeliveryScheduleNotional = require('../fields/DeliveryScheduleNotional');
var DeliveryScheduleNotionalUnitOfMeasure = require('../fields/DeliveryScheduleNotionalUnitOfMeasure');
var DeliveryScheduleNotionalCommodityFrequency = require('../fields/DeliveryScheduleNotionalCommodityFrequency');
var DeliveryScheduleNegativeTolerance = require('../fields/DeliveryScheduleNegativeTolerance');
var DeliverySchedulePositiveTolerance = require('../fields/DeliverySchedulePositiveTolerance');
var DeliveryScheduleToleranceUnitOfMeasure = require('../fields/DeliveryScheduleToleranceUnitOfMeasure');
var DeliveryScheduleToleranceType = require('../fields/DeliveryScheduleToleranceType');
var DeliveryScheduleSettlCountry = require('../fields/DeliveryScheduleSettlCountry');
var DeliveryScheduleSettlTimeZone = require('../fields/DeliveryScheduleSettlTimeZone');
var DeliveryScheduleSettlFlowType = require('../fields/DeliveryScheduleSettlFlowType');
var DeliveryScheduleSettlHolidaysProcessingInstruction = require('../fields/DeliveryScheduleSettlHolidaysProcessingInstruction');

function DeliveryScheduleGrp (deliveryScheduleGrp) {
  this.message = deliveryScheduleGrp;
}

/* group */

/* component */
DeliveryScheduleGrp.prototype.deliveryScheduleSettlDayGrp = function () {
  return this.message.groups[DeliveryScheduleSettlDayGrp.Tag]
    .map(function (deliveryScheduleSettlDayGrp) {
      return new DeliveryScheduleSettlDayGrp(deliveryScheduleSettlDayGrp);
  });
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleType = function () {
  return new DeliveryScheduleType(this.message.tags[DeliveryScheduleType.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleXid = function () {
  return new DeliveryScheduleXID(this.message.tags[DeliveryScheduleXID.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleNotional = function () {
  return new DeliveryScheduleNotional(this.message.tags[DeliveryScheduleNotional.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleNotionalUnitOfMeasure = function () {
  return new DeliveryScheduleNotionalUnitOfMeasure(this.message.tags[DeliveryScheduleNotionalUnitOfMeasure.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleNotionalCommodityFrequency = function () {
  return new DeliveryScheduleNotionalCommodityFrequency(this.message.tags[DeliveryScheduleNotionalCommodityFrequency.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleNegativeTolerance = function () {
  return new DeliveryScheduleNegativeTolerance(this.message.tags[DeliveryScheduleNegativeTolerance.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliverySchedulePositiveTolerance = function () {
  return new DeliverySchedulePositiveTolerance(this.message.tags[DeliverySchedulePositiveTolerance.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleToleranceUnitOfMeasure = function () {
  return new DeliveryScheduleToleranceUnitOfMeasure(this.message.tags[DeliveryScheduleToleranceUnitOfMeasure.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleToleranceType = function () {
  return new DeliveryScheduleToleranceType(this.message.tags[DeliveryScheduleToleranceType.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleSettlCountry = function () {
  return new DeliveryScheduleSettlCountry(this.message.tags[DeliveryScheduleSettlCountry.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleSettlTimeZone = function () {
  return new DeliveryScheduleSettlTimeZone(this.message.tags[DeliveryScheduleSettlTimeZone.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleSettlFlowType = function () {
  return new DeliveryScheduleSettlFlowType(this.message.tags[DeliveryScheduleSettlFlowType.Tag]);
};

/* field */
DeliveryScheduleGrp.prototype.deliveryScheduleSettlHolidaysProcessingInstruction = function () {
  return new DeliveryScheduleSettlHolidaysProcessingInstruction(this.message.tags[DeliveryScheduleSettlHolidaysProcessingInstruction.Tag]);
};

/* end group */

DeliveryScheduleGrp.Tag = '41037';

module.exports = DeliveryScheduleGrp;