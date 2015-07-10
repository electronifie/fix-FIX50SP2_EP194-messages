var NoComplexEvents = require('../fields/NoComplexEvents');
var ComplexEventDates = require('../components/ComplexEventDates');
var ComplexEventRateSourceGrp = require('../components/ComplexEventRateSourceGrp');
var ComplexEventRelativeDate = require('../components/ComplexEventRelativeDate');
var ComplexEventPeriodGrp = require('../components/ComplexEventPeriodGrp');
var ComplexEventCreditEventSourceGrp = require('../components/ComplexEventCreditEventSourceGrp');
var ComplexEventCreditEventGrp = require('../components/ComplexEventCreditEventGrp');
var ComplexEventType = require('../fields/ComplexEventType');
var ComplexOptPayoutPaySide = require('../fields/ComplexOptPayoutPaySide');
var ComplexOptPayoutReceiveSide = require('../fields/ComplexOptPayoutReceiveSide');
var ComplexOptPayoutUnderlier = require('../fields/ComplexOptPayoutUnderlier');
var ComplexOptPayoutAmount = require('../fields/ComplexOptPayoutAmount');
var ComplexOptPayoutPercentage = require('../fields/ComplexOptPayoutPercentage');
var ComplexOptPayoutTime = require('../fields/ComplexOptPayoutTime');
var ComplexOptPayoutCurrency = require('../fields/ComplexOptPayoutCurrency');
var ComplexEventPrice = require('../fields/ComplexEventPrice');
var ComplexEventPricePercentage = require('../fields/ComplexEventPricePercentage');
var ComplexEventPriceBoundaryMethod = require('../fields/ComplexEventPriceBoundaryMethod');
var ComplexEventPriceBoundaryPrecision = require('../fields/ComplexEventPriceBoundaryPrecision');
var ComplexEventPriceTimeType = require('../fields/ComplexEventPriceTimeType');
var ComplexEventCondition = require('../fields/ComplexEventCondition');
var ComplexEventCurrencyOne = require('../fields/ComplexEventCurrencyOne');
var ComplexEventCurrencyTwo = require('../fields/ComplexEventCurrencyTwo');
var ComplexEventQuoteBasis = require('../fields/ComplexEventQuoteBasis');
var ComplexEventFixedFXRate = require('../fields/ComplexEventFixedFXRate');
var ComplexEventSpotRate = require('../fields/ComplexEventSpotRate');
var ComplexEventForwardPoints = require('../fields/ComplexEventForwardPoints');
var ComplexEventDeterminationMethod = require('../fields/ComplexEventDeterminationMethod');
var ComplexEventCalculationAgent = require('../fields/ComplexEventCalculationAgent');
var ComplexEventStrikePrice = require('../fields/ComplexEventStrikePrice');
var ComplexEventStrikeFactor = require('../fields/ComplexEventStrikeFactor');
var ComplexEventStrikeNumberOfOptions = require('../fields/ComplexEventStrikeNumberOfOptions');
var ComplexEventCreditEventsXIDRef = require('../fields/ComplexEventCreditEventsXIDRef');
var ComplexEventCreditEventNotifyingParty = require('../fields/ComplexEventCreditEventNotifyingParty');
var ComplexEventCreditEventBusinessCenter = require('../fields/ComplexEventCreditEventBusinessCenter');
var ComplexEventCreditEventStandardSources = require('../fields/ComplexEventCreditEventStandardSources');
var ComplexEventCreditEventMinimumSources = require('../fields/ComplexEventCreditEventMinimumSources');
var ComplexEventXID = require('../fields/ComplexEventXID');
var ComplexEventXIDRef = require('../fields/ComplexEventXIDRef');

function ComplexEvents (complexEvents) {
  this.message = complexEvents;
}

/* group */

/* component */
ComplexEvents.prototype.complexEventDates = function () {
  return this.message.groups[ComplexEventDates.Tag]
    .map(function (complexEventDates) {
      return new ComplexEventDates(complexEventDates);
  });
};

/* component */
ComplexEvents.prototype.complexEventRateSourceGrp = function () {
  return this.message.groups[ComplexEventRateSourceGrp.Tag]
    .map(function (complexEventRateSourceGrp) {
      return new ComplexEventRateSourceGrp(complexEventRateSourceGrp);
  });
};

/* component */
ComplexEvents.prototype.complexEventRelativeDate = function () {
  return this.message.groups[ComplexEventRelativeDate.Tag]
    .map(function (complexEventRelativeDate) {
      return new ComplexEventRelativeDate(complexEventRelativeDate);
  });
};

/* component */
ComplexEvents.prototype.complexEventPeriodGrp = function () {
  return this.message.groups[ComplexEventPeriodGrp.Tag]
    .map(function (complexEventPeriodGrp) {
      return new ComplexEventPeriodGrp(complexEventPeriodGrp);
  });
};

/* component */
ComplexEvents.prototype.complexEventCreditEventSourceGrp = function () {
  return this.message.groups[ComplexEventCreditEventSourceGrp.Tag]
    .map(function (complexEventCreditEventSourceGrp) {
      return new ComplexEventCreditEventSourceGrp(complexEventCreditEventSourceGrp);
  });
};

/* component */
ComplexEvents.prototype.complexEventCreditEventGrp = function () {
  return this.message.groups[ComplexEventCreditEventGrp.Tag]
    .map(function (complexEventCreditEventGrp) {
      return new ComplexEventCreditEventGrp(complexEventCreditEventGrp);
  });
};

/* field */
ComplexEvents.prototype.complexEventType = function () {
  return new ComplexEventType(this.message.tags[ComplexEventType.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutPaySide = function () {
  return new ComplexOptPayoutPaySide(this.message.tags[ComplexOptPayoutPaySide.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutReceiveSide = function () {
  return new ComplexOptPayoutReceiveSide(this.message.tags[ComplexOptPayoutReceiveSide.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutUnderlier = function () {
  return new ComplexOptPayoutUnderlier(this.message.tags[ComplexOptPayoutUnderlier.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutAmount = function () {
  return new ComplexOptPayoutAmount(this.message.tags[ComplexOptPayoutAmount.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutPercentage = function () {
  return new ComplexOptPayoutPercentage(this.message.tags[ComplexOptPayoutPercentage.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutTime = function () {
  return new ComplexOptPayoutTime(this.message.tags[ComplexOptPayoutTime.Tag]);
};

/* field */
ComplexEvents.prototype.complexOptPayoutCurrency = function () {
  return new ComplexOptPayoutCurrency(this.message.tags[ComplexOptPayoutCurrency.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventPrice = function () {
  return new ComplexEventPrice(this.message.tags[ComplexEventPrice.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventPricePercentage = function () {
  return new ComplexEventPricePercentage(this.message.tags[ComplexEventPricePercentage.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventPriceBoundaryMethod = function () {
  return new ComplexEventPriceBoundaryMethod(this.message.tags[ComplexEventPriceBoundaryMethod.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventPriceBoundaryPrecision = function () {
  return new ComplexEventPriceBoundaryPrecision(this.message.tags[ComplexEventPriceBoundaryPrecision.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventPriceTimeType = function () {
  return new ComplexEventPriceTimeType(this.message.tags[ComplexEventPriceTimeType.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCondition = function () {
  return new ComplexEventCondition(this.message.tags[ComplexEventCondition.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCurrencyOne = function () {
  return new ComplexEventCurrencyOne(this.message.tags[ComplexEventCurrencyOne.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCurrencyTwo = function () {
  return new ComplexEventCurrencyTwo(this.message.tags[ComplexEventCurrencyTwo.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventQuoteBasis = function () {
  return new ComplexEventQuoteBasis(this.message.tags[ComplexEventQuoteBasis.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventFixedFxrate = function () {
  return new ComplexEventFixedFXRate(this.message.tags[ComplexEventFixedFXRate.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventSpotRate = function () {
  return new ComplexEventSpotRate(this.message.tags[ComplexEventSpotRate.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventForwardPoints = function () {
  return new ComplexEventForwardPoints(this.message.tags[ComplexEventForwardPoints.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventDeterminationMethod = function () {
  return new ComplexEventDeterminationMethod(this.message.tags[ComplexEventDeterminationMethod.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCalculationAgent = function () {
  return new ComplexEventCalculationAgent(this.message.tags[ComplexEventCalculationAgent.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventStrikePrice = function () {
  return new ComplexEventStrikePrice(this.message.tags[ComplexEventStrikePrice.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventStrikeFactor = function () {
  return new ComplexEventStrikeFactor(this.message.tags[ComplexEventStrikeFactor.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventStrikeNumberOfOptions = function () {
  return new ComplexEventStrikeNumberOfOptions(this.message.tags[ComplexEventStrikeNumberOfOptions.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCreditEventsXidref = function () {
  return new ComplexEventCreditEventsXIDRef(this.message.tags[ComplexEventCreditEventsXIDRef.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCreditEventNotifyingParty = function () {
  return new ComplexEventCreditEventNotifyingParty(this.message.tags[ComplexEventCreditEventNotifyingParty.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCreditEventBusinessCenter = function () {
  return new ComplexEventCreditEventBusinessCenter(this.message.tags[ComplexEventCreditEventBusinessCenter.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCreditEventStandardSources = function () {
  return new ComplexEventCreditEventStandardSources(this.message.tags[ComplexEventCreditEventStandardSources.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventCreditEventMinimumSources = function () {
  return new ComplexEventCreditEventMinimumSources(this.message.tags[ComplexEventCreditEventMinimumSources.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventXid = function () {
  return new ComplexEventXID(this.message.tags[ComplexEventXID.Tag]);
};

/* field */
ComplexEvents.prototype.complexEventXidref = function () {
  return new ComplexEventXIDRef(this.message.tags[ComplexEventXIDRef.Tag]);
};

/* end group */

ComplexEvents.Tag = '1483';

module.exports = ComplexEvents;