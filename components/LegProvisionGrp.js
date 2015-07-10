var NoLegProvisions = require('../fields/NoLegProvisions');
var LegProvisionDateBusinessCenterGrp = require('../components/LegProvisionDateBusinessCenterGrp');
var LegProvisionCashSettlValueDates = require('../components/LegProvisionCashSettlValueDates');
var LegProvisionOptionExerciseDates = require('../components/LegProvisionOptionExerciseDates');
var LegProvisionOptionExpirationDate = require('../components/LegProvisionOptionExpirationDate');
var LegProvisionOptionRelevantUnderlyingDate = require('../components/LegProvisionOptionRelevantUnderlyingDate');
var LegProvisionCashSettlPaymentDates = require('../components/LegProvisionCashSettlPaymentDates');
var LegProvisionCashSettlQuoteSource = require('../components/LegProvisionCashSettlQuoteSource');
var LegProvisionParties = require('../components/LegProvisionParties');
var LegProvisionType = require('../fields/LegProvisionType');
var LegProvisionDateUnadjusted = require('../fields/LegProvisionDateUnadjusted');
var LegProvisionDateBusinessDayConvention = require('../fields/LegProvisionDateBusinessDayConvention');
var LegProvisionDateAdjusted = require('../fields/LegProvisionDateAdjusted');
var LegProvisionDateTenorPeriod = require('../fields/LegProvisionDateTenorPeriod');
var LegProvisionDateTenorUnit = require('../fields/LegProvisionDateTenorUnit');
var LegProvisionCalculationAgent = require('../fields/LegProvisionCalculationAgent');
var LegProvisionOptionSinglePartyBuyerSide = require('../fields/LegProvisionOptionSinglePartyBuyerSide');
var LegProvisionOptionSinglePartySellerSide = require('../fields/LegProvisionOptionSinglePartySellerSide');
var LegProvisionOptionExerciseStyle = require('../fields/LegProvisionOptionExerciseStyle');
var LegProvisionOptionExerciseMultipleNotional = require('../fields/LegProvisionOptionExerciseMultipleNotional');
var LegProvisionOptionExerciseMinimumNotional = require('../fields/LegProvisionOptionExerciseMinimumNotional');
var LegProvisionOptionExerciseMaximumNotional = require('../fields/LegProvisionOptionExerciseMaximumNotional');
var LegProvisionOptionMinimumNumber = require('../fields/LegProvisionOptionMinimumNumber');
var LegProvisionOptionMaximumNumber = require('../fields/LegProvisionOptionMaximumNumber');
var LegProvisionOptionExerciseConfirmation = require('../fields/LegProvisionOptionExerciseConfirmation');
var LegProvisionCashSettlMethod = require('../fields/LegProvisionCashSettlMethod');
var LegProvisionCashSettlCurrency = require('../fields/LegProvisionCashSettlCurrency');
var LegProvisionCashSettlCurrency2 = require('../fields/LegProvisionCashSettlCurrency2');
var LegProvisionCashSettlQuoteType = require('../fields/LegProvisionCashSettlQuoteType');
var LegProvisionText = require('../fields/LegProvisionText');
var EncodedLegProvisionTextLen = require('../fields/EncodedLegProvisionTextLen');
var EncodedLegProvisionText = require('../fields/EncodedLegProvisionText');

function LegProvisionGrp (legProvisionGrp) {
  this.message = legProvisionGrp;
}

/* group */

/* component */
LegProvisionGrp.prototype.legProvisionDateBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionDateBusinessCenterGrp.Tag]
    .map(function (legProvisionDateBusinessCenterGrp) {
      return new LegProvisionDateBusinessCenterGrp(legProvisionDateBusinessCenterGrp);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionCashSettlValueDates = function () {
  return this.message.groups[LegProvisionCashSettlValueDates.Tag]
    .map(function (legProvisionCashSettlValueDates) {
      return new LegProvisionCashSettlValueDates(legProvisionCashSettlValueDates);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionOptionExerciseDates = function () {
  return this.message.groups[LegProvisionOptionExerciseDates.Tag]
    .map(function (legProvisionOptionExerciseDates) {
      return new LegProvisionOptionExerciseDates(legProvisionOptionExerciseDates);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionOptionExpirationDate = function () {
  return this.message.groups[LegProvisionOptionExpirationDate.Tag]
    .map(function (legProvisionOptionExpirationDate) {
      return new LegProvisionOptionExpirationDate(legProvisionOptionExpirationDate);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionOptionRelevantUnderlyingDate = function () {
  return this.message.groups[LegProvisionOptionRelevantUnderlyingDate.Tag]
    .map(function (legProvisionOptionRelevantUnderlyingDate) {
      return new LegProvisionOptionRelevantUnderlyingDate(legProvisionOptionRelevantUnderlyingDate);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionCashSettlPaymentDates = function () {
  return this.message.groups[LegProvisionCashSettlPaymentDates.Tag]
    .map(function (legProvisionCashSettlPaymentDates) {
      return new LegProvisionCashSettlPaymentDates(legProvisionCashSettlPaymentDates);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionCashSettlQuoteSource = function () {
  return this.message.groups[LegProvisionCashSettlQuoteSource.Tag]
    .map(function (legProvisionCashSettlQuoteSource) {
      return new LegProvisionCashSettlQuoteSource(legProvisionCashSettlQuoteSource);
  });
};

/* component */
LegProvisionGrp.prototype.legProvisionParties = function () {
  return this.message.groups[LegProvisionParties.Tag]
    .map(function (legProvisionParties) {
      return new LegProvisionParties(legProvisionParties);
  });
};

/* field */
LegProvisionGrp.prototype.legProvisionType = function () {
  return new LegProvisionType(this.message.tags[LegProvisionType.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionDateUnadjusted = function () {
  return new LegProvisionDateUnadjusted(this.message.tags[LegProvisionDateUnadjusted.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionDateBusinessDayConvention = function () {
  return new LegProvisionDateBusinessDayConvention(this.message.tags[LegProvisionDateBusinessDayConvention.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionDateAdjusted = function () {
  return new LegProvisionDateAdjusted(this.message.tags[LegProvisionDateAdjusted.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionDateTenorPeriod = function () {
  return new LegProvisionDateTenorPeriod(this.message.tags[LegProvisionDateTenorPeriod.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionDateTenorUnit = function () {
  return new LegProvisionDateTenorUnit(this.message.tags[LegProvisionDateTenorUnit.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionCalculationAgent = function () {
  return new LegProvisionCalculationAgent(this.message.tags[LegProvisionCalculationAgent.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionSinglePartyBuyerSide = function () {
  return new LegProvisionOptionSinglePartyBuyerSide(this.message.tags[LegProvisionOptionSinglePartyBuyerSide.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionSinglePartySellerSide = function () {
  return new LegProvisionOptionSinglePartySellerSide(this.message.tags[LegProvisionOptionSinglePartySellerSide.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionExerciseStyle = function () {
  return new LegProvisionOptionExerciseStyle(this.message.tags[LegProvisionOptionExerciseStyle.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionExerciseMultipleNotional = function () {
  return new LegProvisionOptionExerciseMultipleNotional(this.message.tags[LegProvisionOptionExerciseMultipleNotional.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionExerciseMinimumNotional = function () {
  return new LegProvisionOptionExerciseMinimumNotional(this.message.tags[LegProvisionOptionExerciseMinimumNotional.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionExerciseMaximumNotional = function () {
  return new LegProvisionOptionExerciseMaximumNotional(this.message.tags[LegProvisionOptionExerciseMaximumNotional.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionMinimumNumber = function () {
  return new LegProvisionOptionMinimumNumber(this.message.tags[LegProvisionOptionMinimumNumber.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionMaximumNumber = function () {
  return new LegProvisionOptionMaximumNumber(this.message.tags[LegProvisionOptionMaximumNumber.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionOptionExerciseConfirmation = function () {
  return new LegProvisionOptionExerciseConfirmation(this.message.tags[LegProvisionOptionExerciseConfirmation.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionCashSettlMethod = function () {
  return new LegProvisionCashSettlMethod(this.message.tags[LegProvisionCashSettlMethod.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionCashSettlCurrency = function () {
  return new LegProvisionCashSettlCurrency(this.message.tags[LegProvisionCashSettlCurrency.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionCashSettlCurrency2 = function () {
  return new LegProvisionCashSettlCurrency2(this.message.tags[LegProvisionCashSettlCurrency2.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionCashSettlQuoteType = function () {
  return new LegProvisionCashSettlQuoteType(this.message.tags[LegProvisionCashSettlQuoteType.Tag]);
};

/* field */
LegProvisionGrp.prototype.legProvisionText = function () {
  return new LegProvisionText(this.message.tags[LegProvisionText.Tag]);
};

/* field */
LegProvisionGrp.prototype.encodedLegProvisionTextLen = function () {
  return new EncodedLegProvisionTextLen(this.message.tags[EncodedLegProvisionTextLen.Tag]);
};

/* field */
LegProvisionGrp.prototype.encodedLegProvisionText = function () {
  return new EncodedLegProvisionText(this.message.tags[EncodedLegProvisionText.Tag]);
};

/* end group */

LegProvisionGrp.Tag = '40448';

module.exports = LegProvisionGrp;