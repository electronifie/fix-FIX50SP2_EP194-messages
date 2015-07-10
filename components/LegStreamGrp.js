var NoLegStreams = require('../fields/NoLegStreams');
var LegStreamCommodity = require('../components/LegStreamCommodity');
var LegStreamEffectiveDate = require('../components/LegStreamEffectiveDate');
var LegStreamTerminationDate = require('../components/LegStreamTerminationDate');
var LegStreamCalculationPeriodDates = require('../components/LegStreamCalculationPeriodDates');
var LegPaymentStream = require('../components/LegPaymentStream');
var LegPaymentScheduleGrp = require('../components/LegPaymentScheduleGrp');
var LegPaymentStubGrp = require('../components/LegPaymentStubGrp');
var LegDeliveryStream = require('../components/LegDeliveryStream');
var LegDeliveryScheduleGrp = require('../components/LegDeliveryScheduleGrp');
var LegStreamType = require('../fields/LegStreamType');
var LegStreamXID = require('../fields/LegStreamXID');
var LegStreamDesc = require('../fields/LegStreamDesc');
var LegStreamPaySide = require('../fields/LegStreamPaySide');
var LegStreamReceiveSide = require('../fields/LegStreamReceiveSide');
var LegStreamNotionalXIDRef = require('../fields/LegStreamNotionalXIDRef');
var LegStreamNotional = require('../fields/LegStreamNotional');
var LegStreamCurrency = require('../fields/LegStreamCurrency');
var LegStreamNotionalFrequencyPeriod = require('../fields/LegStreamNotionalFrequencyPeriod');
var LegStreamNotionalFrequencyUnit = require('../fields/LegStreamNotionalFrequencyUnit');
var LegStreamNotionalCommodityFrequency = require('../fields/LegStreamNotionalCommodityFrequency');
var LegStreamNotionalUnitOfMeasure = require('../fields/LegStreamNotionalUnitOfMeasure');
var LegStreamTotalNotional = require('../fields/LegStreamTotalNotional');
var LegStreamTotalNotionalUnitOfMeasure = require('../fields/LegStreamTotalNotionalUnitOfMeasure');
var LegStreamText = require('../fields/LegStreamText');
var EncodedLegStreamTextLen = require('../fields/EncodedLegStreamTextLen');
var EncodedLegStreamText = require('../fields/EncodedLegStreamText');

function LegStreamGrp (legStreamGrp) {
  this.message = legStreamGrp;
}

/* group */

/* component */
LegStreamGrp.prototype.legStreamCommodity = function () {
  return this.message.groups[LegStreamCommodity.Tag]
    .map(function (legStreamCommodity) {
      return new LegStreamCommodity(legStreamCommodity);
  });
};

/* component */
LegStreamGrp.prototype.legStreamEffectiveDate = function () {
  return this.message.groups[LegStreamEffectiveDate.Tag]
    .map(function (legStreamEffectiveDate) {
      return new LegStreamEffectiveDate(legStreamEffectiveDate);
  });
};

/* component */
LegStreamGrp.prototype.legStreamTerminationDate = function () {
  return this.message.groups[LegStreamTerminationDate.Tag]
    .map(function (legStreamTerminationDate) {
      return new LegStreamTerminationDate(legStreamTerminationDate);
  });
};

/* component */
LegStreamGrp.prototype.legStreamCalculationPeriodDates = function () {
  return this.message.groups[LegStreamCalculationPeriodDates.Tag]
    .map(function (legStreamCalculationPeriodDates) {
      return new LegStreamCalculationPeriodDates(legStreamCalculationPeriodDates);
  });
};

/* component */
LegStreamGrp.prototype.legPaymentStream = function () {
  return this.message.groups[LegPaymentStream.Tag]
    .map(function (legPaymentStream) {
      return new LegPaymentStream(legPaymentStream);
  });
};

/* component */
LegStreamGrp.prototype.legPaymentScheduleGrp = function () {
  return this.message.groups[LegPaymentScheduleGrp.Tag]
    .map(function (legPaymentScheduleGrp) {
      return new LegPaymentScheduleGrp(legPaymentScheduleGrp);
  });
};

/* component */
LegStreamGrp.prototype.legPaymentStubGrp = function () {
  return this.message.groups[LegPaymentStubGrp.Tag]
    .map(function (legPaymentStubGrp) {
      return new LegPaymentStubGrp(legPaymentStubGrp);
  });
};

/* component */
LegStreamGrp.prototype.legDeliveryStream = function () {
  return this.message.groups[LegDeliveryStream.Tag]
    .map(function (legDeliveryStream) {
      return new LegDeliveryStream(legDeliveryStream);
  });
};

/* component */
LegStreamGrp.prototype.legDeliveryScheduleGrp = function () {
  return this.message.groups[LegDeliveryScheduleGrp.Tag]
    .map(function (legDeliveryScheduleGrp) {
      return new LegDeliveryScheduleGrp(legDeliveryScheduleGrp);
  });
};

/* field */
LegStreamGrp.prototype.legStreamType = function () {
  return new LegStreamType(this.message.tags[LegStreamType.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamXid = function () {
  return new LegStreamXID(this.message.tags[LegStreamXID.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamDesc = function () {
  return new LegStreamDesc(this.message.tags[LegStreamDesc.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamPaySide = function () {
  return new LegStreamPaySide(this.message.tags[LegStreamPaySide.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamReceiveSide = function () {
  return new LegStreamReceiveSide(this.message.tags[LegStreamReceiveSide.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotionalXidref = function () {
  return new LegStreamNotionalXIDRef(this.message.tags[LegStreamNotionalXIDRef.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotional = function () {
  return new LegStreamNotional(this.message.tags[LegStreamNotional.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamCurrency = function () {
  return new LegStreamCurrency(this.message.tags[LegStreamCurrency.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotionalFrequencyPeriod = function () {
  return new LegStreamNotionalFrequencyPeriod(this.message.tags[LegStreamNotionalFrequencyPeriod.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotionalFrequencyUnit = function () {
  return new LegStreamNotionalFrequencyUnit(this.message.tags[LegStreamNotionalFrequencyUnit.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotionalCommodityFrequency = function () {
  return new LegStreamNotionalCommodityFrequency(this.message.tags[LegStreamNotionalCommodityFrequency.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamNotionalUnitOfMeasure = function () {
  return new LegStreamNotionalUnitOfMeasure(this.message.tags[LegStreamNotionalUnitOfMeasure.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamTotalNotional = function () {
  return new LegStreamTotalNotional(this.message.tags[LegStreamTotalNotional.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamTotalNotionalUnitOfMeasure = function () {
  return new LegStreamTotalNotionalUnitOfMeasure(this.message.tags[LegStreamTotalNotionalUnitOfMeasure.Tag]);
};

/* field */
LegStreamGrp.prototype.legStreamText = function () {
  return new LegStreamText(this.message.tags[LegStreamText.Tag]);
};

/* field */
LegStreamGrp.prototype.encodedLegStreamTextLen = function () {
  return new EncodedLegStreamTextLen(this.message.tags[EncodedLegStreamTextLen.Tag]);
};

/* field */
LegStreamGrp.prototype.encodedLegStreamText = function () {
  return new EncodedLegStreamText(this.message.tags[EncodedLegStreamText.Tag]);
};

/* end group */

LegStreamGrp.Tag = '40241';

module.exports = LegStreamGrp;