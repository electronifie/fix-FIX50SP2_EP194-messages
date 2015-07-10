var NoUnderlyingStreamCommoditySettlPeriods = require('../fields/NoUnderlyingStreamCommoditySettlPeriods');
var UnderlyingStreamCommoditySettlDayGrp = require('../components/UnderlyingStreamCommoditySettlDayGrp');
var UnderlyingStreamCommoditySettlCountry = require('../fields/UnderlyingStreamCommoditySettlCountry');
var UnderlyingStreamCommoditySettlTimeZone = require('../fields/UnderlyingStreamCommoditySettlTimeZone');
var UnderlyingStreamCommoditySettlFlowType = require('../fields/UnderlyingStreamCommoditySettlFlowType');
var UnderlyingStreamCommoditySettlPeriodNotional = require('../fields/UnderlyingStreamCommoditySettlPeriodNotional');
var UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure = require('../fields/UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure');
var UnderlyingStreamCommoditySettlPeriodFrequencyPeriod = require('../fields/UnderlyingStreamCommoditySettlPeriodFrequencyPeriod');
var UnderlyingStreamCommoditySettlPeriodFrequencyUnit = require('../fields/UnderlyingStreamCommoditySettlPeriodFrequencyUnit');
var UnderlyingStreamCommoditySettlPeriodPrice = require('../fields/UnderlyingStreamCommoditySettlPeriodPrice');
var UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure = require('../fields/UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure');
var UnderlyingStreamCommoditySettlPeriodPriceCurrency = require('../fields/UnderlyingStreamCommoditySettlPeriodPriceCurrency');
var UnderlyingStreamCommoditySettlHolidaysProcessingInstruction = require('../fields/UnderlyingStreamCommoditySettlHolidaysProcessingInstruction');
var UnderlyingStreamCommoditySettlPeriodXID = require('../fields/UnderlyingStreamCommoditySettlPeriodXID');
var UnderlyingStreamCommoditySettlPeriodXIDRef = require('../fields/UnderlyingStreamCommoditySettlPeriodXIDRef');

function UnderlyingStreamCommoditySettlPeriodGrp (underlyingStreamCommoditySettlPeriodGrp) {
  this.message = underlyingStreamCommoditySettlPeriodGrp;
}

/* group */

/* component */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlDayGrp = function () {
  return this.message.groups[UnderlyingStreamCommoditySettlDayGrp.Tag]
    .map(function (underlyingStreamCommoditySettlDayGrp) {
      return new UnderlyingStreamCommoditySettlDayGrp(underlyingStreamCommoditySettlDayGrp);
  });
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlCountry = function () {
  return new UnderlyingStreamCommoditySettlCountry(this.message.tags[UnderlyingStreamCommoditySettlCountry.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlTimeZone = function () {
  return new UnderlyingStreamCommoditySettlTimeZone(this.message.tags[UnderlyingStreamCommoditySettlTimeZone.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlFlowType = function () {
  return new UnderlyingStreamCommoditySettlFlowType(this.message.tags[UnderlyingStreamCommoditySettlFlowType.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodNotional = function () {
  return new UnderlyingStreamCommoditySettlPeriodNotional(this.message.tags[UnderlyingStreamCommoditySettlPeriodNotional.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure = function () {
  return new UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure(this.message.tags[UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodFrequencyPeriod = function () {
  return new UnderlyingStreamCommoditySettlPeriodFrequencyPeriod(this.message.tags[UnderlyingStreamCommoditySettlPeriodFrequencyPeriod.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodFrequencyUnit = function () {
  return new UnderlyingStreamCommoditySettlPeriodFrequencyUnit(this.message.tags[UnderlyingStreamCommoditySettlPeriodFrequencyUnit.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodPrice = function () {
  return new UnderlyingStreamCommoditySettlPeriodPrice(this.message.tags[UnderlyingStreamCommoditySettlPeriodPrice.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodPriceUnitOfMeasure = function () {
  return new UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure(this.message.tags[UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodPriceCurrency = function () {
  return new UnderlyingStreamCommoditySettlPeriodPriceCurrency(this.message.tags[UnderlyingStreamCommoditySettlPeriodPriceCurrency.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlHolidaysProcessingInstruction = function () {
  return new UnderlyingStreamCommoditySettlHolidaysProcessingInstruction(this.message.tags[UnderlyingStreamCommoditySettlHolidaysProcessingInstruction.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodXid = function () {
  return new UnderlyingStreamCommoditySettlPeriodXID(this.message.tags[UnderlyingStreamCommoditySettlPeriodXID.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlPeriodGrp.prototype.underlyingStreamCommoditySettlPeriodXidref = function () {
  return new UnderlyingStreamCommoditySettlPeriodXIDRef(this.message.tags[UnderlyingStreamCommoditySettlPeriodXIDRef.Tag]);
};

/* end group */

UnderlyingStreamCommoditySettlPeriodGrp.Tag = '42002';

module.exports = UnderlyingStreamCommoditySettlPeriodGrp;