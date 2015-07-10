var NoProvisions = require('../fields/NoProvisions');
var ProvisionDateBusinessCenterGrp = require('../components/ProvisionDateBusinessCenterGrp');
var ProvisionCashSettlValueDates = require('../components/ProvisionCashSettlValueDates');
var ProvisionOptionExerciseDates = require('../components/ProvisionOptionExerciseDates');
var ProvisionOptionExpirationDate = require('../components/ProvisionOptionExpirationDate');
var ProvisionOptionRelevantUnderlyingDate = require('../components/ProvisionOptionRelevantUnderlyingDate');
var ProvisionCashSettlPaymentDates = require('../components/ProvisionCashSettlPaymentDates');
var ProvisionCashSettlQuoteSource = require('../components/ProvisionCashSettlQuoteSource');
var ProvisionParties = require('../components/ProvisionParties');
var ProvisionType = require('../fields/ProvisionType');
var ProvisionDateUnadjusted = require('../fields/ProvisionDateUnadjusted');
var ProvisionDateBusinessDayConvention = require('../fields/ProvisionDateBusinessDayConvention');
var ProvisionDateAdjusted = require('../fields/ProvisionDateAdjusted');
var ProvisionDateTenorPeriod = require('../fields/ProvisionDateTenorPeriod');
var ProvisionDateTenorUnit = require('../fields/ProvisionDateTenorUnit');
var ProvisionCalculationAgent = require('../fields/ProvisionCalculationAgent');
var ProvisionOptionSinglePartyBuyerSide = require('../fields/ProvisionOptionSinglePartyBuyerSide');
var ProvisionOptionSinglePartySellerSide = require('../fields/ProvisionOptionSinglePartySellerSide');
var ProvisionOptionExerciseStyle = require('../fields/ProvisionOptionExerciseStyle');
var ProvisionOptionExerciseMultipleNotional = require('../fields/ProvisionOptionExerciseMultipleNotional');
var ProvisionOptionExerciseMinimumNotional = require('../fields/ProvisionOptionExerciseMinimumNotional');
var ProvisionOptionExerciseMaximumNotional = require('../fields/ProvisionOptionExerciseMaximumNotional');
var ProvisionOptionMinimumNumber = require('../fields/ProvisionOptionMinimumNumber');
var ProvisionOptionMaximumNumber = require('../fields/ProvisionOptionMaximumNumber');
var ProvisionOptionExerciseConfirmation = require('../fields/ProvisionOptionExerciseConfirmation');
var ProvisionCashSettlMethod = require('../fields/ProvisionCashSettlMethod');
var ProvisionCashSettlCurrency = require('../fields/ProvisionCashSettlCurrency');
var ProvisionCashSettlCurrency2 = require('../fields/ProvisionCashSettlCurrency2');
var ProvisionCashSettlQuoteType = require('../fields/ProvisionCashSettlQuoteType');
var ProvisionText = require('../fields/ProvisionText');
var EncodedProvisionTextLen = require('../fields/EncodedProvisionTextLen');
var EncodedProvisionText = require('../fields/EncodedProvisionText');

function ProvisionGrp (provisionGrp) {
  this.message = provisionGrp;
}

/* group */

/* component */
ProvisionGrp.prototype.provisionDateBusinessCenterGrp = function () {
  return this.message.groups[ProvisionDateBusinessCenterGrp.Tag]
    .map(function (provisionDateBusinessCenterGrp) {
      return new ProvisionDateBusinessCenterGrp(provisionDateBusinessCenterGrp);
  });
};

/* component */
ProvisionGrp.prototype.provisionCashSettlValueDates = function () {
  return this.message.groups[ProvisionCashSettlValueDates.Tag]
    .map(function (provisionCashSettlValueDates) {
      return new ProvisionCashSettlValueDates(provisionCashSettlValueDates);
  });
};

/* component */
ProvisionGrp.prototype.provisionOptionExerciseDates = function () {
  return this.message.groups[ProvisionOptionExerciseDates.Tag]
    .map(function (provisionOptionExerciseDates) {
      return new ProvisionOptionExerciseDates(provisionOptionExerciseDates);
  });
};

/* component */
ProvisionGrp.prototype.provisionOptionExpirationDate = function () {
  return this.message.groups[ProvisionOptionExpirationDate.Tag]
    .map(function (provisionOptionExpirationDate) {
      return new ProvisionOptionExpirationDate(provisionOptionExpirationDate);
  });
};

/* component */
ProvisionGrp.prototype.provisionOptionRelevantUnderlyingDate = function () {
  return this.message.groups[ProvisionOptionRelevantUnderlyingDate.Tag]
    .map(function (provisionOptionRelevantUnderlyingDate) {
      return new ProvisionOptionRelevantUnderlyingDate(provisionOptionRelevantUnderlyingDate);
  });
};

/* component */
ProvisionGrp.prototype.provisionCashSettlPaymentDates = function () {
  return this.message.groups[ProvisionCashSettlPaymentDates.Tag]
    .map(function (provisionCashSettlPaymentDates) {
      return new ProvisionCashSettlPaymentDates(provisionCashSettlPaymentDates);
  });
};

/* component */
ProvisionGrp.prototype.provisionCashSettlQuoteSource = function () {
  return this.message.groups[ProvisionCashSettlQuoteSource.Tag]
    .map(function (provisionCashSettlQuoteSource) {
      return new ProvisionCashSettlQuoteSource(provisionCashSettlQuoteSource);
  });
};

/* component */
ProvisionGrp.prototype.provisionParties = function () {
  return this.message.groups[ProvisionParties.Tag]
    .map(function (provisionParties) {
      return new ProvisionParties(provisionParties);
  });
};

/* field */
ProvisionGrp.prototype.provisionType = function () {
  return new ProvisionType(this.message.tags[ProvisionType.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionDateUnadjusted = function () {
  return new ProvisionDateUnadjusted(this.message.tags[ProvisionDateUnadjusted.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionDateBusinessDayConvention = function () {
  return new ProvisionDateBusinessDayConvention(this.message.tags[ProvisionDateBusinessDayConvention.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionDateAdjusted = function () {
  return new ProvisionDateAdjusted(this.message.tags[ProvisionDateAdjusted.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionDateTenorPeriod = function () {
  return new ProvisionDateTenorPeriod(this.message.tags[ProvisionDateTenorPeriod.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionDateTenorUnit = function () {
  return new ProvisionDateTenorUnit(this.message.tags[ProvisionDateTenorUnit.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionCalculationAgent = function () {
  return new ProvisionCalculationAgent(this.message.tags[ProvisionCalculationAgent.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionSinglePartyBuyerSide = function () {
  return new ProvisionOptionSinglePartyBuyerSide(this.message.tags[ProvisionOptionSinglePartyBuyerSide.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionSinglePartySellerSide = function () {
  return new ProvisionOptionSinglePartySellerSide(this.message.tags[ProvisionOptionSinglePartySellerSide.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionExerciseStyle = function () {
  return new ProvisionOptionExerciseStyle(this.message.tags[ProvisionOptionExerciseStyle.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionExerciseMultipleNotional = function () {
  return new ProvisionOptionExerciseMultipleNotional(this.message.tags[ProvisionOptionExerciseMultipleNotional.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionExerciseMinimumNotional = function () {
  return new ProvisionOptionExerciseMinimumNotional(this.message.tags[ProvisionOptionExerciseMinimumNotional.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionExerciseMaximumNotional = function () {
  return new ProvisionOptionExerciseMaximumNotional(this.message.tags[ProvisionOptionExerciseMaximumNotional.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionMinimumNumber = function () {
  return new ProvisionOptionMinimumNumber(this.message.tags[ProvisionOptionMinimumNumber.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionMaximumNumber = function () {
  return new ProvisionOptionMaximumNumber(this.message.tags[ProvisionOptionMaximumNumber.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionOptionExerciseConfirmation = function () {
  return new ProvisionOptionExerciseConfirmation(this.message.tags[ProvisionOptionExerciseConfirmation.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionCashSettlMethod = function () {
  return new ProvisionCashSettlMethod(this.message.tags[ProvisionCashSettlMethod.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionCashSettlCurrency = function () {
  return new ProvisionCashSettlCurrency(this.message.tags[ProvisionCashSettlCurrency.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionCashSettlCurrency2 = function () {
  return new ProvisionCashSettlCurrency2(this.message.tags[ProvisionCashSettlCurrency2.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionCashSettlQuoteType = function () {
  return new ProvisionCashSettlQuoteType(this.message.tags[ProvisionCashSettlQuoteType.Tag]);
};

/* field */
ProvisionGrp.prototype.provisionText = function () {
  return new ProvisionText(this.message.tags[ProvisionText.Tag]);
};

/* field */
ProvisionGrp.prototype.encodedProvisionTextLen = function () {
  return new EncodedProvisionTextLen(this.message.tags[EncodedProvisionTextLen.Tag]);
};

/* field */
ProvisionGrp.prototype.encodedProvisionText = function () {
  return new EncodedProvisionText(this.message.tags[EncodedProvisionText.Tag]);
};

/* end group */

ProvisionGrp.Tag = '40090';

module.exports = ProvisionGrp;