var NoStreams = require('../fields/NoStreams');
var StreamCommodity = require('../components/StreamCommodity');
var StreamEffectiveDate = require('../components/StreamEffectiveDate');
var StreamTerminationDate = require('../components/StreamTerminationDate');
var StreamCalculationPeriodDates = require('../components/StreamCalculationPeriodDates');
var PaymentStream = require('../components/PaymentStream');
var PaymentScheduleGrp = require('../components/PaymentScheduleGrp');
var PaymentStubGrp = require('../components/PaymentStubGrp');
var DeliveryStream = require('../components/DeliveryStream');
var DeliveryScheduleGrp = require('../components/DeliveryScheduleGrp');
var StreamType = require('../fields/StreamType');
var StreamXID = require('../fields/StreamXID');
var StreamDesc = require('../fields/StreamDesc');
var StreamPaySide = require('../fields/StreamPaySide');
var StreamReceiveSide = require('../fields/StreamReceiveSide');
var StreamNotionalXIDRef = require('../fields/StreamNotionalXIDRef');
var StreamNotional = require('../fields/StreamNotional');
var StreamCurrency = require('../fields/StreamCurrency');
var StreamNotionalFrequencyPeriod = require('../fields/StreamNotionalFrequencyPeriod');
var StreamNotionalFrequencyUnit = require('../fields/StreamNotionalFrequencyUnit');
var StreamNotionalCommodityFrequency = require('../fields/StreamNotionalCommodityFrequency');
var StreamNotionalUnitOfMeasure = require('../fields/StreamNotionalUnitOfMeasure');
var StreamTotalNotional = require('../fields/StreamTotalNotional');
var StreamTotalNotionalUnitOfMeasure = require('../fields/StreamTotalNotionalUnitOfMeasure');
var StreamText = require('../fields/StreamText');
var EncodedStreamTextLen = require('../fields/EncodedStreamTextLen');
var EncodedStreamText = require('../fields/EncodedStreamText');

function StreamGrp (streamGrp) {
  this.message = streamGrp;
}

/* group */

/* component */
StreamGrp.prototype.streamCommodity = function () {
  return this.message.groups[StreamCommodity.Tag]
    .map(function (streamCommodity) {
      return new StreamCommodity(streamCommodity);
  });
};

/* component */
StreamGrp.prototype.streamEffectiveDate = function () {
  return this.message.groups[StreamEffectiveDate.Tag]
    .map(function (streamEffectiveDate) {
      return new StreamEffectiveDate(streamEffectiveDate);
  });
};

/* component */
StreamGrp.prototype.streamTerminationDate = function () {
  return this.message.groups[StreamTerminationDate.Tag]
    .map(function (streamTerminationDate) {
      return new StreamTerminationDate(streamTerminationDate);
  });
};

/* component */
StreamGrp.prototype.streamCalculationPeriodDates = function () {
  return this.message.groups[StreamCalculationPeriodDates.Tag]
    .map(function (streamCalculationPeriodDates) {
      return new StreamCalculationPeriodDates(streamCalculationPeriodDates);
  });
};

/* component */
StreamGrp.prototype.paymentStream = function () {
  return this.message.groups[PaymentStream.Tag]
    .map(function (paymentStream) {
      return new PaymentStream(paymentStream);
  });
};

/* component */
StreamGrp.prototype.paymentScheduleGrp = function () {
  return this.message.groups[PaymentScheduleGrp.Tag]
    .map(function (paymentScheduleGrp) {
      return new PaymentScheduleGrp(paymentScheduleGrp);
  });
};

/* component */
StreamGrp.prototype.paymentStubGrp = function () {
  return this.message.groups[PaymentStubGrp.Tag]
    .map(function (paymentStubGrp) {
      return new PaymentStubGrp(paymentStubGrp);
  });
};

/* component */
StreamGrp.prototype.deliveryStream = function () {
  return this.message.groups[DeliveryStream.Tag]
    .map(function (deliveryStream) {
      return new DeliveryStream(deliveryStream);
  });
};

/* component */
StreamGrp.prototype.deliveryScheduleGrp = function () {
  return this.message.groups[DeliveryScheduleGrp.Tag]
    .map(function (deliveryScheduleGrp) {
      return new DeliveryScheduleGrp(deliveryScheduleGrp);
  });
};

/* field */
StreamGrp.prototype.streamType = function () {
  return new StreamType(this.message.tags[StreamType.Tag]);
};

/* field */
StreamGrp.prototype.streamXid = function () {
  return new StreamXID(this.message.tags[StreamXID.Tag]);
};

/* field */
StreamGrp.prototype.streamDesc = function () {
  return new StreamDesc(this.message.tags[StreamDesc.Tag]);
};

/* field */
StreamGrp.prototype.streamPaySide = function () {
  return new StreamPaySide(this.message.tags[StreamPaySide.Tag]);
};

/* field */
StreamGrp.prototype.streamReceiveSide = function () {
  return new StreamReceiveSide(this.message.tags[StreamReceiveSide.Tag]);
};

/* field */
StreamGrp.prototype.streamNotionalXidref = function () {
  return new StreamNotionalXIDRef(this.message.tags[StreamNotionalXIDRef.Tag]);
};

/* field */
StreamGrp.prototype.streamNotional = function () {
  return new StreamNotional(this.message.tags[StreamNotional.Tag]);
};

/* field */
StreamGrp.prototype.streamCurrency = function () {
  return new StreamCurrency(this.message.tags[StreamCurrency.Tag]);
};

/* field */
StreamGrp.prototype.streamNotionalFrequencyPeriod = function () {
  return new StreamNotionalFrequencyPeriod(this.message.tags[StreamNotionalFrequencyPeriod.Tag]);
};

/* field */
StreamGrp.prototype.streamNotionalFrequencyUnit = function () {
  return new StreamNotionalFrequencyUnit(this.message.tags[StreamNotionalFrequencyUnit.Tag]);
};

/* field */
StreamGrp.prototype.streamNotionalCommodityFrequency = function () {
  return new StreamNotionalCommodityFrequency(this.message.tags[StreamNotionalCommodityFrequency.Tag]);
};

/* field */
StreamGrp.prototype.streamNotionalUnitOfMeasure = function () {
  return new StreamNotionalUnitOfMeasure(this.message.tags[StreamNotionalUnitOfMeasure.Tag]);
};

/* field */
StreamGrp.prototype.streamTotalNotional = function () {
  return new StreamTotalNotional(this.message.tags[StreamTotalNotional.Tag]);
};

/* field */
StreamGrp.prototype.streamTotalNotionalUnitOfMeasure = function () {
  return new StreamTotalNotionalUnitOfMeasure(this.message.tags[StreamTotalNotionalUnitOfMeasure.Tag]);
};

/* field */
StreamGrp.prototype.streamText = function () {
  return new StreamText(this.message.tags[StreamText.Tag]);
};

/* field */
StreamGrp.prototype.encodedStreamTextLen = function () {
  return new EncodedStreamTextLen(this.message.tags[EncodedStreamTextLen.Tag]);
};

/* field */
StreamGrp.prototype.encodedStreamText = function () {
  return new EncodedStreamText(this.message.tags[EncodedStreamText.Tag]);
};

/* end group */

StreamGrp.Tag = '40049';

module.exports = StreamGrp;