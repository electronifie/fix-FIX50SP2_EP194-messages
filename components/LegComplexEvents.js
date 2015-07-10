var NoLegComplexEvents = require('../fields/NoLegComplexEvents');
var LegComplexEventDates = require('../components/LegComplexEventDates');
var LegComplexEventRateSourceGrp = require('../components/LegComplexEventRateSourceGrp');
var LegComplexEventRelativeDate = require('../components/LegComplexEventRelativeDate');
var LegComplexEventPeriodGrp = require('../components/LegComplexEventPeriodGrp');
var LegComplexEventCreditEventSourceGrp = require('../components/LegComplexEventCreditEventSourceGrp');
var LegComplexEventCreditEventGrp = require('../components/LegComplexEventCreditEventGrp');
var LegComplexEventType = require('../fields/LegComplexEventType');
var LegComplexOptPayoutPaySide = require('../fields/LegComplexOptPayoutPaySide');
var LegComplexOptPayoutReceiveSide = require('../fields/LegComplexOptPayoutReceiveSide');
var LegComplexOptPayoutUnderlier = require('../fields/LegComplexOptPayoutUnderlier');
var LegComplexOptPayoutAmount = require('../fields/LegComplexOptPayoutAmount');
var LegComplexOptPayoutPercentage = require('../fields/LegComplexOptPayoutPercentage');
var LegComplexOptPayoutTime = require('../fields/LegComplexOptPayoutTime');
var LegComplexOptPayoutCurrency = require('../fields/LegComplexOptPayoutCurrency');
var LegComplexEventPrice = require('../fields/LegComplexEventPrice');
var LegComplexEventPricePercentage = require('../fields/LegComplexEventPricePercentage');
var LegComplexEventPriceBoundaryMethod = require('../fields/LegComplexEventPriceBoundaryMethod');
var LegComplexEventPriceBoundaryPrecision = require('../fields/LegComplexEventPriceBoundaryPrecision');
var LegComplexEventPriceTimeType = require('../fields/LegComplexEventPriceTimeType');
var LegComplexEventCondition = require('../fields/LegComplexEventCondition');
var LegComplexEventCurrencyOne = require('../fields/LegComplexEventCurrencyOne');
var LegComplexEventCurrencyTwo = require('../fields/LegComplexEventCurrencyTwo');
var LegComplexEventQuoteBasis = require('../fields/LegComplexEventQuoteBasis');
var LegComplexEventFixedFXRate = require('../fields/LegComplexEventFixedFXRate');
var LegComplexEventSpotRate = require('../fields/LegComplexEventSpotRate');
var LegComplexEventForwardPoints = require('../fields/LegComplexEventForwardPoints');
var LegComplexEventDeterminationMethod = require('../fields/LegComplexEventDeterminationMethod');
var LegComplexEventCalculationAgent = require('../fields/LegComplexEventCalculationAgent');
var LegComplexEventStrikePrice = require('../fields/LegComplexEventStrikePrice');
var LegComplexEventStrikeFactor = require('../fields/LegComplexEventStrikeFactor');
var LegComplexEventStrikeNumberOfOptions = require('../fields/LegComplexEventStrikeNumberOfOptions');
var LegComplexEventCreditEventsXIDRef = require('../fields/LegComplexEventCreditEventsXIDRef');
var LegComplexEventCreditEventNotifyingParty = require('../fields/LegComplexEventCreditEventNotifyingParty');
var LegComplexEventCreditEventBusinessCenter = require('../fields/LegComplexEventCreditEventBusinessCenter');
var LegComplexEventCreditEventStandardSources = require('../fields/LegComplexEventCreditEventStandardSources');
var LegComplexEventCreditEventMinimumSources = require('../fields/LegComplexEventCreditEventMinimumSources');
var LegComplexEventXID = require('../fields/LegComplexEventXID');
var LegComplexEventXIDRef = require('../fields/LegComplexEventXIDRef');

function LegComplexEvents (legComplexEvents) {
  this.message = legComplexEvents;
}

/* group */

/* component */
LegComplexEvents.prototype.legComplexEventDates = function () {
  return this.message.groups[LegComplexEventDates.Tag]
    .map(function (legComplexEventDates) {
      return new LegComplexEventDates(legComplexEventDates);
  });
};

/* component */
LegComplexEvents.prototype.legComplexEventRateSourceGrp = function () {
  return this.message.groups[LegComplexEventRateSourceGrp.Tag]
    .map(function (legComplexEventRateSourceGrp) {
      return new LegComplexEventRateSourceGrp(legComplexEventRateSourceGrp);
  });
};

/* component */
LegComplexEvents.prototype.legComplexEventRelativeDate = function () {
  return this.message.groups[LegComplexEventRelativeDate.Tag]
    .map(function (legComplexEventRelativeDate) {
      return new LegComplexEventRelativeDate(legComplexEventRelativeDate);
  });
};

/* component */
LegComplexEvents.prototype.legComplexEventPeriodGrp = function () {
  return this.message.groups[LegComplexEventPeriodGrp.Tag]
    .map(function (legComplexEventPeriodGrp) {
      return new LegComplexEventPeriodGrp(legComplexEventPeriodGrp);
  });
};

/* component */
LegComplexEvents.prototype.legComplexEventCreditEventSourceGrp = function () {
  return this.message.groups[LegComplexEventCreditEventSourceGrp.Tag]
    .map(function (legComplexEventCreditEventSourceGrp) {
      return new LegComplexEventCreditEventSourceGrp(legComplexEventCreditEventSourceGrp);
  });
};

/* component */
LegComplexEvents.prototype.legComplexEventCreditEventGrp = function () {
  return this.message.groups[LegComplexEventCreditEventGrp.Tag]
    .map(function (legComplexEventCreditEventGrp) {
      return new LegComplexEventCreditEventGrp(legComplexEventCreditEventGrp);
  });
};

/* field */
LegComplexEvents.prototype.legComplexEventType = function () {
  return new LegComplexEventType(this.message.tags[LegComplexEventType.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutPaySide = function () {
  return new LegComplexOptPayoutPaySide(this.message.tags[LegComplexOptPayoutPaySide.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutReceiveSide = function () {
  return new LegComplexOptPayoutReceiveSide(this.message.tags[LegComplexOptPayoutReceiveSide.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutUnderlier = function () {
  return new LegComplexOptPayoutUnderlier(this.message.tags[LegComplexOptPayoutUnderlier.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutAmount = function () {
  return new LegComplexOptPayoutAmount(this.message.tags[LegComplexOptPayoutAmount.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutPercentage = function () {
  return new LegComplexOptPayoutPercentage(this.message.tags[LegComplexOptPayoutPercentage.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutTime = function () {
  return new LegComplexOptPayoutTime(this.message.tags[LegComplexOptPayoutTime.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexOptPayoutCurrency = function () {
  return new LegComplexOptPayoutCurrency(this.message.tags[LegComplexOptPayoutCurrency.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventPrice = function () {
  return new LegComplexEventPrice(this.message.tags[LegComplexEventPrice.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventPricePercentage = function () {
  return new LegComplexEventPricePercentage(this.message.tags[LegComplexEventPricePercentage.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventPriceBoundaryMethod = function () {
  return new LegComplexEventPriceBoundaryMethod(this.message.tags[LegComplexEventPriceBoundaryMethod.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventPriceBoundaryPrecision = function () {
  return new LegComplexEventPriceBoundaryPrecision(this.message.tags[LegComplexEventPriceBoundaryPrecision.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventPriceTimeType = function () {
  return new LegComplexEventPriceTimeType(this.message.tags[LegComplexEventPriceTimeType.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCondition = function () {
  return new LegComplexEventCondition(this.message.tags[LegComplexEventCondition.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCurrencyOne = function () {
  return new LegComplexEventCurrencyOne(this.message.tags[LegComplexEventCurrencyOne.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCurrencyTwo = function () {
  return new LegComplexEventCurrencyTwo(this.message.tags[LegComplexEventCurrencyTwo.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventQuoteBasis = function () {
  return new LegComplexEventQuoteBasis(this.message.tags[LegComplexEventQuoteBasis.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventFixedFxrate = function () {
  return new LegComplexEventFixedFXRate(this.message.tags[LegComplexEventFixedFXRate.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventSpotRate = function () {
  return new LegComplexEventSpotRate(this.message.tags[LegComplexEventSpotRate.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventForwardPoints = function () {
  return new LegComplexEventForwardPoints(this.message.tags[LegComplexEventForwardPoints.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventDeterminationMethod = function () {
  return new LegComplexEventDeterminationMethod(this.message.tags[LegComplexEventDeterminationMethod.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCalculationAgent = function () {
  return new LegComplexEventCalculationAgent(this.message.tags[LegComplexEventCalculationAgent.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventStrikePrice = function () {
  return new LegComplexEventStrikePrice(this.message.tags[LegComplexEventStrikePrice.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventStrikeFactor = function () {
  return new LegComplexEventStrikeFactor(this.message.tags[LegComplexEventStrikeFactor.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventStrikeNumberOfOptions = function () {
  return new LegComplexEventStrikeNumberOfOptions(this.message.tags[LegComplexEventStrikeNumberOfOptions.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCreditEventsXidref = function () {
  return new LegComplexEventCreditEventsXIDRef(this.message.tags[LegComplexEventCreditEventsXIDRef.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCreditEventNotifyingParty = function () {
  return new LegComplexEventCreditEventNotifyingParty(this.message.tags[LegComplexEventCreditEventNotifyingParty.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCreditEventBusinessCenter = function () {
  return new LegComplexEventCreditEventBusinessCenter(this.message.tags[LegComplexEventCreditEventBusinessCenter.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCreditEventStandardSources = function () {
  return new LegComplexEventCreditEventStandardSources(this.message.tags[LegComplexEventCreditEventStandardSources.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventCreditEventMinimumSources = function () {
  return new LegComplexEventCreditEventMinimumSources(this.message.tags[LegComplexEventCreditEventMinimumSources.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventXid = function () {
  return new LegComplexEventXID(this.message.tags[LegComplexEventXID.Tag]);
};

/* field */
LegComplexEvents.prototype.legComplexEventXidref = function () {
  return new LegComplexEventXIDRef(this.message.tags[LegComplexEventXIDRef.Tag]);
};

/* end group */

LegComplexEvents.Tag = '2218';

module.exports = LegComplexEvents;