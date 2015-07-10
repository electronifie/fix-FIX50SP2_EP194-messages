var NoUnderlyingProvisions = require('../fields/NoUnderlyingProvisions');
var UnderlyingProvisionDateBusinessCenterGrp = require('../components/UnderlyingProvisionDateBusinessCenterGrp');
var UnderlyingProvisionCashSettlValueDates = require('../components/UnderlyingProvisionCashSettlValueDates');
var UnderlyingProvisionOptionExerciseDates = require('../components/UnderlyingProvisionOptionExerciseDates');
var UnderlyingProvisionOptionExpirationDate = require('../components/UnderlyingProvisionOptionExpirationDate');
var UnderlyingProvisionOptionRelevantUnderlyingDate = require('../components/UnderlyingProvisionOptionRelevantUnderlyingDate');
var UnderlyingProvisionCashSettlPaymentDates = require('../components/UnderlyingProvisionCashSettlPaymentDates');
var UnderlyingProvisionCashSettlQuoteSource = require('../components/UnderlyingProvisionCashSettlQuoteSource');
var UnderlyingProvisionParties = require('../components/UnderlyingProvisionParties');
var UnderlyingProvisionType = require('../fields/UnderlyingProvisionType');
var UnderlyingProvisionDateUnadjusted = require('../fields/UnderlyingProvisionDateUnadjusted');
var UnderlyingProvisionDateBusinessDayConvention = require('../fields/UnderlyingProvisionDateBusinessDayConvention');
var UnderlyingProvisionDateAdjusted = require('../fields/UnderlyingProvisionDateAdjusted');
var UnderlyingProvisionDateTenorPeriod = require('../fields/UnderlyingProvisionDateTenorPeriod');
var UnderlyingProvisionDateTenorUnit = require('../fields/UnderlyingProvisionDateTenorUnit');
var UnderlyingProvisionCalculationAgent = require('../fields/UnderlyingProvisionCalculationAgent');
var UnderlyingProvisionOptionSinglePartyBuyerSide = require('../fields/UnderlyingProvisionOptionSinglePartyBuyerSide');
var UnderlyingProvisionOptionSinglePartySellerSide = require('../fields/UnderlyingProvisionOptionSinglePartySellerSide');
var UnderlyingProvisionOptionExerciseStyle = require('../fields/UnderlyingProvisionOptionExerciseStyle');
var UnderlyingProvisionOptionExerciseMultipleNotional = require('../fields/UnderlyingProvisionOptionExerciseMultipleNotional');
var UnderlyingProvisionOptionExerciseMinimumNotional = require('../fields/UnderlyingProvisionOptionExerciseMinimumNotional');
var UnderlyingProvisionOptionExerciseMaximumNotional = require('../fields/UnderlyingProvisionOptionExerciseMaximumNotional');
var UnderlyingProvisionOptionMinimumNumber = require('../fields/UnderlyingProvisionOptionMinimumNumber');
var UnderlyingProvisionOptionMaximumNumber = require('../fields/UnderlyingProvisionOptionMaximumNumber');
var UnderlyingProvisionOptionExerciseConfirmation = require('../fields/UnderlyingProvisionOptionExerciseConfirmation');
var UnderlyingProvisionCashSettlMethod = require('../fields/UnderlyingProvisionCashSettlMethod');
var UnderlyingProvisionCashSettlCurrency = require('../fields/UnderlyingProvisionCashSettlCurrency');
var UnderlyingProvisionCashSettlCurrency2 = require('../fields/UnderlyingProvisionCashSettlCurrency2');
var UnderlyingProvisionCashSettlQuoteType = require('../fields/UnderlyingProvisionCashSettlQuoteType');
var UnderlyingProvisionText = require('../fields/UnderlyingProvisionText');
var EncodedUnderlyingProvisionTextLen = require('../fields/EncodedUnderlyingProvisionTextLen');
var EncodedUnderlyingProvisionText = require('../fields/EncodedUnderlyingProvisionText');

function UnderlyingProvisionGrp (underlyingProvisionGrp) {
  this.message = underlyingProvisionGrp;
}

/* group */

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionDateBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionDateBusinessCenterGrp) {
      return new UnderlyingProvisionDateBusinessCenterGrp(underlyingProvisionDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlValueDates = function () {
  return this.message.groups[UnderlyingProvisionCashSettlValueDates.Tag]
    .map(function (underlyingProvisionCashSettlValueDates) {
      return new UnderlyingProvisionCashSettlValueDates(underlyingProvisionCashSettlValueDates);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseDates = function () {
  return this.message.groups[UnderlyingProvisionOptionExerciseDates.Tag]
    .map(function (underlyingProvisionOptionExerciseDates) {
      return new UnderlyingProvisionOptionExerciseDates(underlyingProvisionOptionExerciseDates);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExpirationDate = function () {
  return this.message.groups[UnderlyingProvisionOptionExpirationDate.Tag]
    .map(function (underlyingProvisionOptionExpirationDate) {
      return new UnderlyingProvisionOptionExpirationDate(underlyingProvisionOptionExpirationDate);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionRelevantUnderlyingDate = function () {
  return this.message.groups[UnderlyingProvisionOptionRelevantUnderlyingDate.Tag]
    .map(function (underlyingProvisionOptionRelevantUnderlyingDate) {
      return new UnderlyingProvisionOptionRelevantUnderlyingDate(underlyingProvisionOptionRelevantUnderlyingDate);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlPaymentDates = function () {
  return this.message.groups[UnderlyingProvisionCashSettlPaymentDates.Tag]
    .map(function (underlyingProvisionCashSettlPaymentDates) {
      return new UnderlyingProvisionCashSettlPaymentDates(underlyingProvisionCashSettlPaymentDates);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlQuoteSource = function () {
  return this.message.groups[UnderlyingProvisionCashSettlQuoteSource.Tag]
    .map(function (underlyingProvisionCashSettlQuoteSource) {
      return new UnderlyingProvisionCashSettlQuoteSource(underlyingProvisionCashSettlQuoteSource);
  });
};

/* component */
UnderlyingProvisionGrp.prototype.underlyingProvisionParties = function () {
  return this.message.groups[UnderlyingProvisionParties.Tag]
    .map(function (underlyingProvisionParties) {
      return new UnderlyingProvisionParties(underlyingProvisionParties);
  });
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionType = function () {
  return new UnderlyingProvisionType(this.message.tags[UnderlyingProvisionType.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateUnadjusted = function () {
  return new UnderlyingProvisionDateUnadjusted(this.message.tags[UnderlyingProvisionDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateBusinessDayConvention = function () {
  return new UnderlyingProvisionDateBusinessDayConvention(this.message.tags[UnderlyingProvisionDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateAdjusted = function () {
  return new UnderlyingProvisionDateAdjusted(this.message.tags[UnderlyingProvisionDateAdjusted.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateTenorPeriod = function () {
  return new UnderlyingProvisionDateTenorPeriod(this.message.tags[UnderlyingProvisionDateTenorPeriod.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionDateTenorUnit = function () {
  return new UnderlyingProvisionDateTenorUnit(this.message.tags[UnderlyingProvisionDateTenorUnit.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionCalculationAgent = function () {
  return new UnderlyingProvisionCalculationAgent(this.message.tags[UnderlyingProvisionCalculationAgent.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionSinglePartyBuyerSide = function () {
  return new UnderlyingProvisionOptionSinglePartyBuyerSide(this.message.tags[UnderlyingProvisionOptionSinglePartyBuyerSide.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionSinglePartySellerSide = function () {
  return new UnderlyingProvisionOptionSinglePartySellerSide(this.message.tags[UnderlyingProvisionOptionSinglePartySellerSide.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseStyle = function () {
  return new UnderlyingProvisionOptionExerciseStyle(this.message.tags[UnderlyingProvisionOptionExerciseStyle.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseMultipleNotional = function () {
  return new UnderlyingProvisionOptionExerciseMultipleNotional(this.message.tags[UnderlyingProvisionOptionExerciseMultipleNotional.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseMinimumNotional = function () {
  return new UnderlyingProvisionOptionExerciseMinimumNotional(this.message.tags[UnderlyingProvisionOptionExerciseMinimumNotional.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseMaximumNotional = function () {
  return new UnderlyingProvisionOptionExerciseMaximumNotional(this.message.tags[UnderlyingProvisionOptionExerciseMaximumNotional.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionMinimumNumber = function () {
  return new UnderlyingProvisionOptionMinimumNumber(this.message.tags[UnderlyingProvisionOptionMinimumNumber.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionMaximumNumber = function () {
  return new UnderlyingProvisionOptionMaximumNumber(this.message.tags[UnderlyingProvisionOptionMaximumNumber.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionOptionExerciseConfirmation = function () {
  return new UnderlyingProvisionOptionExerciseConfirmation(this.message.tags[UnderlyingProvisionOptionExerciseConfirmation.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlMethod = function () {
  return new UnderlyingProvisionCashSettlMethod(this.message.tags[UnderlyingProvisionCashSettlMethod.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlCurrency = function () {
  return new UnderlyingProvisionCashSettlCurrency(this.message.tags[UnderlyingProvisionCashSettlCurrency.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlCurrency2 = function () {
  return new UnderlyingProvisionCashSettlCurrency2(this.message.tags[UnderlyingProvisionCashSettlCurrency2.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionCashSettlQuoteType = function () {
  return new UnderlyingProvisionCashSettlQuoteType(this.message.tags[UnderlyingProvisionCashSettlQuoteType.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.underlyingProvisionText = function () {
  return new UnderlyingProvisionText(this.message.tags[UnderlyingProvisionText.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.encodedUnderlyingProvisionTextLen = function () {
  return new EncodedUnderlyingProvisionTextLen(this.message.tags[EncodedUnderlyingProvisionTextLen.Tag]);
};

/* field */
UnderlyingProvisionGrp.prototype.encodedUnderlyingProvisionText = function () {
  return new EncodedUnderlyingProvisionText(this.message.tags[EncodedUnderlyingProvisionText.Tag]);
};

/* end group */

UnderlyingProvisionGrp.Tag = '42149';

module.exports = UnderlyingProvisionGrp;