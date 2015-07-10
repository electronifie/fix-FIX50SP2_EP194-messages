var NoUnderlyingStreams = require('../fields/NoUnderlyingStreams');
var UnderlyingStreamCommodity = require('../components/UnderlyingStreamCommodity');
var UnderlyingStreamEffectiveDate = require('../components/UnderlyingStreamEffectiveDate');
var UnderlyingStreamTerminationDate = require('../components/UnderlyingStreamTerminationDate');
var UnderlyingStreamCalculationPeriodDates = require('../components/UnderlyingStreamCalculationPeriodDates');
var UnderlyingPaymentStream = require('../components/UnderlyingPaymentStream');
var UnderlyingPaymentScheduleGrp = require('../components/UnderlyingPaymentScheduleGrp');
var UnderlyingPaymentStubGrp = require('../components/UnderlyingPaymentStubGrp');
var UnderlyingDeliveryStream = require('../components/UnderlyingDeliveryStream');
var UnderlyingDeliveryScheduleGrp = require('../components/UnderlyingDeliveryScheduleGrp');
var UnderlyingStreamType = require('../fields/UnderlyingStreamType');
var UnderlyingStreamXID = require('../fields/UnderlyingStreamXID');
var UnderlyingStreamDesc = require('../fields/UnderlyingStreamDesc');
var UnderlyingStreamPaySide = require('../fields/UnderlyingStreamPaySide');
var UnderlyingStreamReceiveSide = require('../fields/UnderlyingStreamReceiveSide');
var UnderlyingStreamNotionalXIDRef = require('../fields/UnderlyingStreamNotionalXIDRef');
var UnderlyingStreamNotional = require('../fields/UnderlyingStreamNotional');
var UnderlyingStreamCurrency = require('../fields/UnderlyingStreamCurrency');
var UnderlyingStreamNotionalFrequencyPeriod = require('../fields/UnderlyingStreamNotionalFrequencyPeriod');
var UnderlyingStreamNotionalFrequencyUnit = require('../fields/UnderlyingStreamNotionalFrequencyUnit');
var UnderlyingStreamNotionalCommodityFrequency = require('../fields/UnderlyingStreamNotionalCommodityFrequency');
var UnderlyingStreamNotionalUnitOfMeasure = require('../fields/UnderlyingStreamNotionalUnitOfMeasure');
var UnderlyingStreamTotalNotional = require('../fields/UnderlyingStreamTotalNotional');
var UnderlyingStreamTotalNotionalUnitOfMeasure = require('../fields/UnderlyingStreamTotalNotionalUnitOfMeasure');
var UnderlyingStreamText = require('../fields/UnderlyingStreamText');
var EncodedUnderlyingStreamTextLen = require('../fields/EncodedUnderlyingStreamTextLen');
var EncodedUnderlyingStreamText = require('../fields/EncodedUnderlyingStreamText');

function UnderlyingStreamGrp (underlyingStreamGrp) {
  this.message = underlyingStreamGrp;
}

/* group */

/* component */
UnderlyingStreamGrp.prototype.underlyingStreamCommodity = function () {
  return this.message.groups[UnderlyingStreamCommodity.Tag]
    .map(function (underlyingStreamCommodity) {
      return new UnderlyingStreamCommodity(underlyingStreamCommodity);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingStreamEffectiveDate = function () {
  return this.message.groups[UnderlyingStreamEffectiveDate.Tag]
    .map(function (underlyingStreamEffectiveDate) {
      return new UnderlyingStreamEffectiveDate(underlyingStreamEffectiveDate);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingStreamTerminationDate = function () {
  return this.message.groups[UnderlyingStreamTerminationDate.Tag]
    .map(function (underlyingStreamTerminationDate) {
      return new UnderlyingStreamTerminationDate(underlyingStreamTerminationDate);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingStreamCalculationPeriodDates = function () {
  return this.message.groups[UnderlyingStreamCalculationPeriodDates.Tag]
    .map(function (underlyingStreamCalculationPeriodDates) {
      return new UnderlyingStreamCalculationPeriodDates(underlyingStreamCalculationPeriodDates);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingPaymentStream = function () {
  return this.message.groups[UnderlyingPaymentStream.Tag]
    .map(function (underlyingPaymentStream) {
      return new UnderlyingPaymentStream(underlyingPaymentStream);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingPaymentScheduleGrp = function () {
  return this.message.groups[UnderlyingPaymentScheduleGrp.Tag]
    .map(function (underlyingPaymentScheduleGrp) {
      return new UnderlyingPaymentScheduleGrp(underlyingPaymentScheduleGrp);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingPaymentStubGrp = function () {
  return this.message.groups[UnderlyingPaymentStubGrp.Tag]
    .map(function (underlyingPaymentStubGrp) {
      return new UnderlyingPaymentStubGrp(underlyingPaymentStubGrp);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingDeliveryStream = function () {
  return this.message.groups[UnderlyingDeliveryStream.Tag]
    .map(function (underlyingDeliveryStream) {
      return new UnderlyingDeliveryStream(underlyingDeliveryStream);
  });
};

/* component */
UnderlyingStreamGrp.prototype.underlyingDeliveryScheduleGrp = function () {
  return this.message.groups[UnderlyingDeliveryScheduleGrp.Tag]
    .map(function (underlyingDeliveryScheduleGrp) {
      return new UnderlyingDeliveryScheduleGrp(underlyingDeliveryScheduleGrp);
  });
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamType = function () {
  return new UnderlyingStreamType(this.message.tags[UnderlyingStreamType.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamXid = function () {
  return new UnderlyingStreamXID(this.message.tags[UnderlyingStreamXID.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamDesc = function () {
  return new UnderlyingStreamDesc(this.message.tags[UnderlyingStreamDesc.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamPaySide = function () {
  return new UnderlyingStreamPaySide(this.message.tags[UnderlyingStreamPaySide.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamReceiveSide = function () {
  return new UnderlyingStreamReceiveSide(this.message.tags[UnderlyingStreamReceiveSide.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotionalXidref = function () {
  return new UnderlyingStreamNotionalXIDRef(this.message.tags[UnderlyingStreamNotionalXIDRef.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotional = function () {
  return new UnderlyingStreamNotional(this.message.tags[UnderlyingStreamNotional.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamCurrency = function () {
  return new UnderlyingStreamCurrency(this.message.tags[UnderlyingStreamCurrency.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotionalFrequencyPeriod = function () {
  return new UnderlyingStreamNotionalFrequencyPeriod(this.message.tags[UnderlyingStreamNotionalFrequencyPeriod.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotionalFrequencyUnit = function () {
  return new UnderlyingStreamNotionalFrequencyUnit(this.message.tags[UnderlyingStreamNotionalFrequencyUnit.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotionalCommodityFrequency = function () {
  return new UnderlyingStreamNotionalCommodityFrequency(this.message.tags[UnderlyingStreamNotionalCommodityFrequency.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamNotionalUnitOfMeasure = function () {
  return new UnderlyingStreamNotionalUnitOfMeasure(this.message.tags[UnderlyingStreamNotionalUnitOfMeasure.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamTotalNotional = function () {
  return new UnderlyingStreamTotalNotional(this.message.tags[UnderlyingStreamTotalNotional.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamTotalNotionalUnitOfMeasure = function () {
  return new UnderlyingStreamTotalNotionalUnitOfMeasure(this.message.tags[UnderlyingStreamTotalNotionalUnitOfMeasure.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.underlyingStreamText = function () {
  return new UnderlyingStreamText(this.message.tags[UnderlyingStreamText.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.encodedUnderlyingStreamTextLen = function () {
  return new EncodedUnderlyingStreamTextLen(this.message.tags[EncodedUnderlyingStreamTextLen.Tag]);
};

/* field */
UnderlyingStreamGrp.prototype.encodedUnderlyingStreamText = function () {
  return new EncodedUnderlyingStreamText(this.message.tags[EncodedUnderlyingStreamText.Tag]);
};

/* end group */

UnderlyingStreamGrp.Tag = '40540';

module.exports = UnderlyingStreamGrp;