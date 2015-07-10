var NoLegStreamCommoditySettlPeriods = require('../fields/NoLegStreamCommoditySettlPeriods');
var LegStreamCommoditySettlDayGrp = require('../components/LegStreamCommoditySettlDayGrp');
var LegStreamCommoditySettlCountry = require('../fields/LegStreamCommoditySettlCountry');
var LegStreamCommoditySettlTimeZone = require('../fields/LegStreamCommoditySettlTimeZone');
var LegStreamCommoditySettlFlowType = require('../fields/LegStreamCommoditySettlFlowType');
var LegStreamCommoditySettlPeriodNotional = require('../fields/LegStreamCommoditySettlPeriodNotional');
var LegStreamCommoditySettlPeriodNotionalUnitOfMeasure = require('../fields/LegStreamCommoditySettlPeriodNotionalUnitOfMeasure');
var LegStreamCommoditySettlPeriodFrequencyPeriod = require('../fields/LegStreamCommoditySettlPeriodFrequencyPeriod');
var LegStreamCommoditySettlPeriodFrequencyUnit = require('../fields/LegStreamCommoditySettlPeriodFrequencyUnit');
var LegStreamCommoditySettlPeriodPrice = require('../fields/LegStreamCommoditySettlPeriodPrice');
var LegStreamCommoditySettlPeriodPriceUnitOfMeasure = require('../fields/LegStreamCommoditySettlPeriodPriceUnitOfMeasure');
var LegStreamCommoditySettlPeriodPriceCurrency = require('../fields/LegStreamCommoditySettlPeriodPriceCurrency');
var LegStreamCommoditySettlHolidaysProcessingInstruction = require('../fields/LegStreamCommoditySettlHolidaysProcessingInstruction');
var LegStreamCommoditySettlPeriodXID = require('../fields/LegStreamCommoditySettlPeriodXID');
var LegStreamCommoditySettlPeriodXIDRef = require('../fields/LegStreamCommoditySettlPeriodXIDRef');

function LegStreamCommoditySettlPeriodGrp (legStreamCommoditySettlPeriodGrp) {
  this.message = legStreamCommoditySettlPeriodGrp;
}

/* group */

/* component */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlDayGrp = function () {
  return this.message.groups[LegStreamCommoditySettlDayGrp.Tag]
    .map(function (legStreamCommoditySettlDayGrp) {
      return new LegStreamCommoditySettlDayGrp(legStreamCommoditySettlDayGrp);
  });
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlCountry = function () {
  return new LegStreamCommoditySettlCountry(this.message.tags[LegStreamCommoditySettlCountry.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlTimeZone = function () {
  return new LegStreamCommoditySettlTimeZone(this.message.tags[LegStreamCommoditySettlTimeZone.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlFlowType = function () {
  return new LegStreamCommoditySettlFlowType(this.message.tags[LegStreamCommoditySettlFlowType.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodNotional = function () {
  return new LegStreamCommoditySettlPeriodNotional(this.message.tags[LegStreamCommoditySettlPeriodNotional.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodNotionalUnitOfMeasure = function () {
  return new LegStreamCommoditySettlPeriodNotionalUnitOfMeasure(this.message.tags[LegStreamCommoditySettlPeriodNotionalUnitOfMeasure.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodFrequencyPeriod = function () {
  return new LegStreamCommoditySettlPeriodFrequencyPeriod(this.message.tags[LegStreamCommoditySettlPeriodFrequencyPeriod.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodFrequencyUnit = function () {
  return new LegStreamCommoditySettlPeriodFrequencyUnit(this.message.tags[LegStreamCommoditySettlPeriodFrequencyUnit.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodPrice = function () {
  return new LegStreamCommoditySettlPeriodPrice(this.message.tags[LegStreamCommoditySettlPeriodPrice.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodPriceUnitOfMeasure = function () {
  return new LegStreamCommoditySettlPeriodPriceUnitOfMeasure(this.message.tags[LegStreamCommoditySettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodPriceCurrency = function () {
  return new LegStreamCommoditySettlPeriodPriceCurrency(this.message.tags[LegStreamCommoditySettlPeriodPriceCurrency.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlHolidaysProcessingInstruction = function () {
  return new LegStreamCommoditySettlHolidaysProcessingInstruction(this.message.tags[LegStreamCommoditySettlHolidaysProcessingInstruction.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodXid = function () {
  return new LegStreamCommoditySettlPeriodXID(this.message.tags[LegStreamCommoditySettlPeriodXID.Tag]);
};

/* field */
LegStreamCommoditySettlPeriodGrp.prototype.legStreamCommoditySettlPeriodXidref = function () {
  return new LegStreamCommoditySettlPeriodXIDRef(this.message.tags[LegStreamCommoditySettlPeriodXIDRef.Tag]);
};

/* end group */

LegStreamCommoditySettlPeriodGrp.Tag = '41686';

module.exports = LegStreamCommoditySettlPeriodGrp;