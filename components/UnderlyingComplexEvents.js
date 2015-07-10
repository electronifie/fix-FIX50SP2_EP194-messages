var NoUnderlyingComplexEvents = require('../fields/NoUnderlyingComplexEvents');
var UnderlyingComplexEventDates = require('../components/UnderlyingComplexEventDates');
var UnderlyingComplexEventRateSourceGrp = require('../components/UnderlyingComplexEventRateSourceGrp');
var UnderlyingComplexEventRelativeDate = require('../components/UnderlyingComplexEventRelativeDate');
var UnderlyingComplexEventPeriodGrp = require('../components/UnderlyingComplexEventPeriodGrp');
var UnderlyingComplexEventCreditEventSourceGrp = require('../components/UnderlyingComplexEventCreditEventSourceGrp');
var UnderlyingComplexEventCreditEventGrp = require('../components/UnderlyingComplexEventCreditEventGrp');
var UnderlyingComplexEventType = require('../fields/UnderlyingComplexEventType');
var UnderlyingComplexOptPayoutPaySide = require('../fields/UnderlyingComplexOptPayoutPaySide');
var UnderlyingComplexOptPayoutReceiveSide = require('../fields/UnderlyingComplexOptPayoutReceiveSide');
var UnderlyingComplexOptPayoutUnderlier = require('../fields/UnderlyingComplexOptPayoutUnderlier');
var UnderlyingComplexOptPayoutAmount = require('../fields/UnderlyingComplexOptPayoutAmount');
var UnderlyingComplexOptPayoutPercentage = require('../fields/UnderlyingComplexOptPayoutPercentage');
var UnderlyingComplexOptPayoutTime = require('../fields/UnderlyingComplexOptPayoutTime');
var UnderlyingComplexOptPayoutCurrency = require('../fields/UnderlyingComplexOptPayoutCurrency');
var UnderlyingComplexEventPrice = require('../fields/UnderlyingComplexEventPrice');
var UnderlyingComplexEventPricePercentage = require('../fields/UnderlyingComplexEventPricePercentage');
var UnderlyingComplexEventPriceBoundaryMethod = require('../fields/UnderlyingComplexEventPriceBoundaryMethod');
var UnderlyingComplexEventPriceBoundaryPrecision = require('../fields/UnderlyingComplexEventPriceBoundaryPrecision');
var UnderlyingComplexEventPriceTimeType = require('../fields/UnderlyingComplexEventPriceTimeType');
var UnderlyingComplexEventCondition = require('../fields/UnderlyingComplexEventCondition');
var UnderlyingComplexEventCurrencyOne = require('../fields/UnderlyingComplexEventCurrencyOne');
var UnderlyingComplexEventCurrencyTwo = require('../fields/UnderlyingComplexEventCurrencyTwo');
var UnderlyingComplexEventQuoteBasis = require('../fields/UnderlyingComplexEventQuoteBasis');
var UnderlyingComplexEventFixedFXRate = require('../fields/UnderlyingComplexEventFixedFXRate');
var UnderlyingComplexEventSpotRate = require('../fields/UnderlyingComplexEventSpotRate');
var UnderlyingComplexEventForwardPoints = require('../fields/UnderlyingComplexEventForwardPoints');
var UnderlyingComplexEventDeterminationMethod = require('../fields/UnderlyingComplexEventDeterminationMethod');
var UnderlyingComplexEventCalculationAgent = require('../fields/UnderlyingComplexEventCalculationAgent');
var UnderlyingComplexEventStrikePrice = require('../fields/UnderlyingComplexEventStrikePrice');
var UnderlyingComplexEventStrikeFactor = require('../fields/UnderlyingComplexEventStrikeFactor');
var UnderlyingComplexEventStrikeNumberOfOptions = require('../fields/UnderlyingComplexEventStrikeNumberOfOptions');
var UnderlyingComplexEventCreditEventsXIDRef = require('../fields/UnderlyingComplexEventCreditEventsXIDRef');
var UnderlyingComplexEventCreditEventNotifyingParty = require('../fields/UnderlyingComplexEventCreditEventNotifyingParty');
var UnderlyingComplexEventCreditEventBusinessCenter = require('../fields/UnderlyingComplexEventCreditEventBusinessCenter');
var UnderlyingComplexEventCreditEventStandardSources = require('../fields/UnderlyingComplexEventCreditEventStandardSources');
var UnderlyingComplexEventCreditEventMinimumSources = require('../fields/UnderlyingComplexEventCreditEventMinimumSources');
var UnderlyingComplexEventXID = require('../fields/UnderlyingComplexEventXID');
var UnderlyingComplexEventXIDRef = require('../fields/UnderlyingComplexEventXIDRef');

function UnderlyingComplexEvents (underlyingComplexEvents) {
  this.message = underlyingComplexEvents;
}

/* group */

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventDates = function () {
  return this.message.groups[UnderlyingComplexEventDates.Tag]
    .map(function (underlyingComplexEventDates) {
      return new UnderlyingComplexEventDates(underlyingComplexEventDates);
  });
};

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventRateSourceGrp = function () {
  return this.message.groups[UnderlyingComplexEventRateSourceGrp.Tag]
    .map(function (underlyingComplexEventRateSourceGrp) {
      return new UnderlyingComplexEventRateSourceGrp(underlyingComplexEventRateSourceGrp);
  });
};

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventRelativeDate = function () {
  return this.message.groups[UnderlyingComplexEventRelativeDate.Tag]
    .map(function (underlyingComplexEventRelativeDate) {
      return new UnderlyingComplexEventRelativeDate(underlyingComplexEventRelativeDate);
  });
};

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventPeriodGrp = function () {
  return this.message.groups[UnderlyingComplexEventPeriodGrp.Tag]
    .map(function (underlyingComplexEventPeriodGrp) {
      return new UnderlyingComplexEventPeriodGrp(underlyingComplexEventPeriodGrp);
  });
};

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventSourceGrp = function () {
  return this.message.groups[UnderlyingComplexEventCreditEventSourceGrp.Tag]
    .map(function (underlyingComplexEventCreditEventSourceGrp) {
      return new UnderlyingComplexEventCreditEventSourceGrp(underlyingComplexEventCreditEventSourceGrp);
  });
};

/* component */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventGrp = function () {
  return this.message.groups[UnderlyingComplexEventCreditEventGrp.Tag]
    .map(function (underlyingComplexEventCreditEventGrp) {
      return new UnderlyingComplexEventCreditEventGrp(underlyingComplexEventCreditEventGrp);
  });
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventType = function () {
  return new UnderlyingComplexEventType(this.message.tags[UnderlyingComplexEventType.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutPaySide = function () {
  return new UnderlyingComplexOptPayoutPaySide(this.message.tags[UnderlyingComplexOptPayoutPaySide.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutReceiveSide = function () {
  return new UnderlyingComplexOptPayoutReceiveSide(this.message.tags[UnderlyingComplexOptPayoutReceiveSide.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutUnderlier = function () {
  return new UnderlyingComplexOptPayoutUnderlier(this.message.tags[UnderlyingComplexOptPayoutUnderlier.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutAmount = function () {
  return new UnderlyingComplexOptPayoutAmount(this.message.tags[UnderlyingComplexOptPayoutAmount.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutPercentage = function () {
  return new UnderlyingComplexOptPayoutPercentage(this.message.tags[UnderlyingComplexOptPayoutPercentage.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutTime = function () {
  return new UnderlyingComplexOptPayoutTime(this.message.tags[UnderlyingComplexOptPayoutTime.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexOptPayoutCurrency = function () {
  return new UnderlyingComplexOptPayoutCurrency(this.message.tags[UnderlyingComplexOptPayoutCurrency.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventPrice = function () {
  return new UnderlyingComplexEventPrice(this.message.tags[UnderlyingComplexEventPrice.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventPricePercentage = function () {
  return new UnderlyingComplexEventPricePercentage(this.message.tags[UnderlyingComplexEventPricePercentage.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventPriceBoundaryMethod = function () {
  return new UnderlyingComplexEventPriceBoundaryMethod(this.message.tags[UnderlyingComplexEventPriceBoundaryMethod.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventPriceBoundaryPrecision = function () {
  return new UnderlyingComplexEventPriceBoundaryPrecision(this.message.tags[UnderlyingComplexEventPriceBoundaryPrecision.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventPriceTimeType = function () {
  return new UnderlyingComplexEventPriceTimeType(this.message.tags[UnderlyingComplexEventPriceTimeType.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCondition = function () {
  return new UnderlyingComplexEventCondition(this.message.tags[UnderlyingComplexEventCondition.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCurrencyOne = function () {
  return new UnderlyingComplexEventCurrencyOne(this.message.tags[UnderlyingComplexEventCurrencyOne.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCurrencyTwo = function () {
  return new UnderlyingComplexEventCurrencyTwo(this.message.tags[UnderlyingComplexEventCurrencyTwo.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventQuoteBasis = function () {
  return new UnderlyingComplexEventQuoteBasis(this.message.tags[UnderlyingComplexEventQuoteBasis.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventFixedFxrate = function () {
  return new UnderlyingComplexEventFixedFXRate(this.message.tags[UnderlyingComplexEventFixedFXRate.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventSpotRate = function () {
  return new UnderlyingComplexEventSpotRate(this.message.tags[UnderlyingComplexEventSpotRate.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventForwardPoints = function () {
  return new UnderlyingComplexEventForwardPoints(this.message.tags[UnderlyingComplexEventForwardPoints.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventDeterminationMethod = function () {
  return new UnderlyingComplexEventDeterminationMethod(this.message.tags[UnderlyingComplexEventDeterminationMethod.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCalculationAgent = function () {
  return new UnderlyingComplexEventCalculationAgent(this.message.tags[UnderlyingComplexEventCalculationAgent.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventStrikePrice = function () {
  return new UnderlyingComplexEventStrikePrice(this.message.tags[UnderlyingComplexEventStrikePrice.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventStrikeFactor = function () {
  return new UnderlyingComplexEventStrikeFactor(this.message.tags[UnderlyingComplexEventStrikeFactor.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventStrikeNumberOfOptions = function () {
  return new UnderlyingComplexEventStrikeNumberOfOptions(this.message.tags[UnderlyingComplexEventStrikeNumberOfOptions.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventsXidref = function () {
  return new UnderlyingComplexEventCreditEventsXIDRef(this.message.tags[UnderlyingComplexEventCreditEventsXIDRef.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventNotifyingParty = function () {
  return new UnderlyingComplexEventCreditEventNotifyingParty(this.message.tags[UnderlyingComplexEventCreditEventNotifyingParty.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventBusinessCenter = function () {
  return new UnderlyingComplexEventCreditEventBusinessCenter(this.message.tags[UnderlyingComplexEventCreditEventBusinessCenter.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventStandardSources = function () {
  return new UnderlyingComplexEventCreditEventStandardSources(this.message.tags[UnderlyingComplexEventCreditEventStandardSources.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventCreditEventMinimumSources = function () {
  return new UnderlyingComplexEventCreditEventMinimumSources(this.message.tags[UnderlyingComplexEventCreditEventMinimumSources.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventXid = function () {
  return new UnderlyingComplexEventXID(this.message.tags[UnderlyingComplexEventXID.Tag]);
};

/* field */
UnderlyingComplexEvents.prototype.underlyingComplexEventXidref = function () {
  return new UnderlyingComplexEventXIDRef(this.message.tags[UnderlyingComplexEventXIDRef.Tag]);
};

/* end group */

UnderlyingComplexEvents.Tag = '2045';

module.exports = UnderlyingComplexEvents;