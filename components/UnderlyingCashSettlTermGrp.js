var NoUnderlyingCashSettlTerms = require('../fields/NoUnderlyingCashSettlTerms');
var UnderlyingCashSettlDealerGrp = require('../components/UnderlyingCashSettlDealerGrp');
var UnderlyingCashSettlCurrency = require('../fields/UnderlyingCashSettlCurrency');
var UnderlyingCashSettlValuationFirstBusinessDayOffset = require('../fields/UnderlyingCashSettlValuationFirstBusinessDayOffset');
var UnderlyingCashSettlValuationSubsequentBusinessDaysOffset = require('../fields/UnderlyingCashSettlValuationSubsequentBusinessDaysOffset');
var UnderlyingCashSettlNumOfValuationDates = require('../fields/UnderlyingCashSettlNumOfValuationDates');
var UnderlyingCashSettlValuationTime = require('../fields/UnderlyingCashSettlValuationTime');
var UnderlyingCashSettlBusinessCenter = require('../fields/UnderlyingCashSettlBusinessCenter');
var UnderlyingCashSettlQuoteMethod = require('../fields/UnderlyingCashSettlQuoteMethod');
var UnderlyingCashSettlQuoteAmount = require('../fields/UnderlyingCashSettlQuoteAmount');
var UnderlyingCashSettlQuoteCurrency = require('../fields/UnderlyingCashSettlQuoteCurrency');
var UnderlyingCashSettlMinimumQuoteAmount = require('../fields/UnderlyingCashSettlMinimumQuoteAmount');
var UnderlyingCashSettlMinimumQuoteCurrency = require('../fields/UnderlyingCashSettlMinimumQuoteCurrency');
var UnderlyingCashSettlBusinessDays = require('../fields/UnderlyingCashSettlBusinessDays');
var UnderlyingCashSettlAmount = require('../fields/UnderlyingCashSettlAmount');
var UnderlyingCashSettlRecoveryFactor = require('../fields/UnderlyingCashSettlRecoveryFactor');
var UnderlyingCashSettlFixedTermIndicator = require('../fields/UnderlyingCashSettlFixedTermIndicator');
var UnderlyingCashSettlAccruedInterestIndicator = require('../fields/UnderlyingCashSettlAccruedInterestIndicator');
var UnderlyingCashSettlValuationMethod = require('../fields/UnderlyingCashSettlValuationMethod');
var UnderlyingCashSettlTermXID = require('../fields/UnderlyingCashSettlTermXID');

function UnderlyingCashSettlTermGrp (underlyingCashSettlTermGrp) {
  this.message = underlyingCashSettlTermGrp;
}

/* group */

/* component */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlDealerGrp = function () {
  return this.message.groups[UnderlyingCashSettlDealerGrp.Tag]
    .map(function (underlyingCashSettlDealerGrp) {
      return new UnderlyingCashSettlDealerGrp(underlyingCashSettlDealerGrp);
  });
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlCurrency = function () {
  return new UnderlyingCashSettlCurrency(this.message.tags[UnderlyingCashSettlCurrency.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlValuationFirstBusinessDayOffset = function () {
  return new UnderlyingCashSettlValuationFirstBusinessDayOffset(this.message.tags[UnderlyingCashSettlValuationFirstBusinessDayOffset.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlValuationSubsequentBusinessDaysOffset = function () {
  return new UnderlyingCashSettlValuationSubsequentBusinessDaysOffset(this.message.tags[UnderlyingCashSettlValuationSubsequentBusinessDaysOffset.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlNumOfValuationDates = function () {
  return new UnderlyingCashSettlNumOfValuationDates(this.message.tags[UnderlyingCashSettlNumOfValuationDates.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlValuationTime = function () {
  return new UnderlyingCashSettlValuationTime(this.message.tags[UnderlyingCashSettlValuationTime.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlBusinessCenter = function () {
  return new UnderlyingCashSettlBusinessCenter(this.message.tags[UnderlyingCashSettlBusinessCenter.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlQuoteMethod = function () {
  return new UnderlyingCashSettlQuoteMethod(this.message.tags[UnderlyingCashSettlQuoteMethod.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlQuoteAmount = function () {
  return new UnderlyingCashSettlQuoteAmount(this.message.tags[UnderlyingCashSettlQuoteAmount.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlQuoteCurrency = function () {
  return new UnderlyingCashSettlQuoteCurrency(this.message.tags[UnderlyingCashSettlQuoteCurrency.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlMinimumQuoteAmount = function () {
  return new UnderlyingCashSettlMinimumQuoteAmount(this.message.tags[UnderlyingCashSettlMinimumQuoteAmount.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlMinimumQuoteCurrency = function () {
  return new UnderlyingCashSettlMinimumQuoteCurrency(this.message.tags[UnderlyingCashSettlMinimumQuoteCurrency.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlBusinessDays = function () {
  return new UnderlyingCashSettlBusinessDays(this.message.tags[UnderlyingCashSettlBusinessDays.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlAmount = function () {
  return new UnderlyingCashSettlAmount(this.message.tags[UnderlyingCashSettlAmount.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlRecoveryFactor = function () {
  return new UnderlyingCashSettlRecoveryFactor(this.message.tags[UnderlyingCashSettlRecoveryFactor.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlFixedTermIndicator = function () {
  return new UnderlyingCashSettlFixedTermIndicator(this.message.tags[UnderlyingCashSettlFixedTermIndicator.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlAccruedInterestIndicator = function () {
  return new UnderlyingCashSettlAccruedInterestIndicator(this.message.tags[UnderlyingCashSettlAccruedInterestIndicator.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlValuationMethod = function () {
  return new UnderlyingCashSettlValuationMethod(this.message.tags[UnderlyingCashSettlValuationMethod.Tag]);
};

/* field */
UnderlyingCashSettlTermGrp.prototype.underlyingCashSettlTermXid = function () {
  return new UnderlyingCashSettlTermXID(this.message.tags[UnderlyingCashSettlTermXID.Tag]);
};

/* end group */

UnderlyingCashSettlTermGrp.Tag = '42041';

module.exports = UnderlyingCashSettlTermGrp;