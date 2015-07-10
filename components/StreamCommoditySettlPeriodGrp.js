var NoStreamCommoditySettlPeriods = require('../fields/NoStreamCommoditySettlPeriods');
var StreamCommoditySettlDayGrp = require('../components/StreamCommoditySettlDayGrp');
var StreamCommoditySettlCountry = require('../fields/StreamCommoditySettlCountry');
var StreamCommoditySettlTimeZone = require('../fields/StreamCommoditySettlTimeZone');
var StreamCommoditySettlFlowType = require('../fields/StreamCommoditySettlFlowType');
var StreamCommoditySettlPeriodNotional = require('../fields/StreamCommoditySettlPeriodNotional');
var StreamCommoditySettlPeriodNotionalUnitOfMeasure = require('../fields/StreamCommoditySettlPeriodNotionalUnitOfMeasure');
var StreamCommoditySettlPeriodFrequencyPeriod = require('../fields/StreamCommoditySettlPeriodFrequencyPeriod');
var StreamCommoditySettlPeriodFrequencyUnit = require('../fields/StreamCommoditySettlPeriodFrequencyUnit');
var StreamCommoditySettlPeriodPrice = require('../fields/StreamCommoditySettlPeriodPrice');
var StreamCommoditySettlPeriodPriceUnitOfMeasure = require('../fields/StreamCommoditySettlPeriodPriceUnitOfMeasure');
var StreamCommoditySettlPeriodPriceCurrency = require('../fields/StreamCommoditySettlPeriodPriceCurrency');
var StreamCommoditySettlHolidaysProcessingInstruction = require('../fields/StreamCommoditySettlHolidaysProcessingInstruction');
var StreamCommoditySettlPeriodXID = require('../fields/StreamCommoditySettlPeriodXID');
var StreamCommoditySettlPeriodXIDRef = require('../fields/StreamCommoditySettlPeriodXIDRef');

function StreamCommoditySettlPeriodGrp (streamCommoditySettlPeriodGrp) {
  this.message = streamCommoditySettlPeriodGrp;
}

/* group */

/* component */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlDayGrp = function () {
  return this.message.groups[StreamCommoditySettlDayGrp.Tag]
    .map(function (streamCommoditySettlDayGrp) {
      return new StreamCommoditySettlDayGrp(streamCommoditySettlDayGrp);
  });
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlCountry = function () {
  return new StreamCommoditySettlCountry(this.message.tags[StreamCommoditySettlCountry.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlTimeZone = function () {
  return new StreamCommoditySettlTimeZone(this.message.tags[StreamCommoditySettlTimeZone.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlFlowType = function () {
  return new StreamCommoditySettlFlowType(this.message.tags[StreamCommoditySettlFlowType.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodNotional = function () {
  return new StreamCommoditySettlPeriodNotional(this.message.tags[StreamCommoditySettlPeriodNotional.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodNotionalUnitOfMeasure = function () {
  return new StreamCommoditySettlPeriodNotionalUnitOfMeasure(this.message.tags[StreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodFrequencyPeriod = function () {
  return new StreamCommoditySettlPeriodFrequencyPeriod(this.message.tags[StreamCommoditySettlPeriodFrequencyPeriod.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodFrequencyUnit = function () {
  return new StreamCommoditySettlPeriodFrequencyUnit(this.message.tags[StreamCommoditySettlPeriodFrequencyUnit.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodPrice = function () {
  return new StreamCommoditySettlPeriodPrice(this.message.tags[StreamCommoditySettlPeriodPrice.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodPriceUnitOfMeasure = function () {
  return new StreamCommoditySettlPeriodPriceUnitOfMeasure(this.message.tags[StreamCommoditySettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodPriceCurrency = function () {
  return new StreamCommoditySettlPeriodPriceCurrency(this.message.tags[StreamCommoditySettlPeriodPriceCurrency.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlHolidaysProcessingInstruction = function () {
  return new StreamCommoditySettlHolidaysProcessingInstruction(this.message.tags[StreamCommoditySettlHolidaysProcessingInstruction.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodXid = function () {
  return new StreamCommoditySettlPeriodXID(this.message.tags[StreamCommoditySettlPeriodXID.Tag]);
};

/* field */
StreamCommoditySettlPeriodGrp.prototype.streamCommoditySettlPeriodXidref = function () {
  return new StreamCommoditySettlPeriodXIDRef(this.message.tags[StreamCommoditySettlPeriodXIDRef.Tag]);
};

/* end group */

StreamCommoditySettlPeriodGrp.Tag = '41289';

module.exports = StreamCommoditySettlPeriodGrp;