var NoCashSettlTerms = require('../fields/NoCashSettlTerms');
var CashSettlDealerGrp = require('../components/CashSettlDealerGrp');
var CashSettlCurrency = require('../fields/CashSettlCurrency');
var CashSettlValuationFirstBusinessDayOffset = require('../fields/CashSettlValuationFirstBusinessDayOffset');
var CashSettlValuationSubsequentBusinessDaysOffset = require('../fields/CashSettlValuationSubsequentBusinessDaysOffset');
var CashSettlNumOfValuationDates = require('../fields/CashSettlNumOfValuationDates');
var CashSettlValuationTime = require('../fields/CashSettlValuationTime');
var CashSettlBusinessCenter = require('../fields/CashSettlBusinessCenter');
var CashSettlQuoteMethod = require('../fields/CashSettlQuoteMethod');
var CashSettlQuoteAmount = require('../fields/CashSettlQuoteAmount');
var CashSettlQuoteCurrency = require('../fields/CashSettlQuoteCurrency');
var CashSettlMinimumQuoteAmount = require('../fields/CashSettlMinimumQuoteAmount');
var CashSettlMinimumQuoteCurrency = require('../fields/CashSettlMinimumQuoteCurrency');
var CashSettlBusinessDays = require('../fields/CashSettlBusinessDays');
var CashSettlAmount = require('../fields/CashSettlAmount');
var CashSettlRecoveryFactor = require('../fields/CashSettlRecoveryFactor');
var CashSettlFixedTermIndicator = require('../fields/CashSettlFixedTermIndicator');
var CashSettlAccruedInterestIndicator = require('../fields/CashSettlAccruedInterestIndicator');
var CashSettlValuationMethod = require('../fields/CashSettlValuationMethod');
var CashSettlTermXID = require('../fields/CashSettlTermXID');

function CashSettlTermGrp (cashSettlTermGrp) {
  this.message = cashSettlTermGrp;
}

/* group */

/* component */
CashSettlTermGrp.prototype.cashSettlDealerGrp = function () {
  return this.message.groups[CashSettlDealerGrp.Tag]
    .map(function (cashSettlDealerGrp) {
      return new CashSettlDealerGrp(cashSettlDealerGrp);
  });
};

/* field */
CashSettlTermGrp.prototype.cashSettlCurrency = function () {
  return new CashSettlCurrency(this.message.tags[CashSettlCurrency.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlValuationFirstBusinessDayOffset = function () {
  return new CashSettlValuationFirstBusinessDayOffset(this.message.tags[CashSettlValuationFirstBusinessDayOffset.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlValuationSubsequentBusinessDaysOffset = function () {
  return new CashSettlValuationSubsequentBusinessDaysOffset(this.message.tags[CashSettlValuationSubsequentBusinessDaysOffset.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlNumOfValuationDates = function () {
  return new CashSettlNumOfValuationDates(this.message.tags[CashSettlNumOfValuationDates.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlValuationTime = function () {
  return new CashSettlValuationTime(this.message.tags[CashSettlValuationTime.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlBusinessCenter = function () {
  return new CashSettlBusinessCenter(this.message.tags[CashSettlBusinessCenter.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlQuoteMethod = function () {
  return new CashSettlQuoteMethod(this.message.tags[CashSettlQuoteMethod.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlQuoteAmount = function () {
  return new CashSettlQuoteAmount(this.message.tags[CashSettlQuoteAmount.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlQuoteCurrency = function () {
  return new CashSettlQuoteCurrency(this.message.tags[CashSettlQuoteCurrency.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlMinimumQuoteAmount = function () {
  return new CashSettlMinimumQuoteAmount(this.message.tags[CashSettlMinimumQuoteAmount.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlMinimumQuoteCurrency = function () {
  return new CashSettlMinimumQuoteCurrency(this.message.tags[CashSettlMinimumQuoteCurrency.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlBusinessDays = function () {
  return new CashSettlBusinessDays(this.message.tags[CashSettlBusinessDays.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlAmount = function () {
  return new CashSettlAmount(this.message.tags[CashSettlAmount.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlRecoveryFactor = function () {
  return new CashSettlRecoveryFactor(this.message.tags[CashSettlRecoveryFactor.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlFixedTermIndicator = function () {
  return new CashSettlFixedTermIndicator(this.message.tags[CashSettlFixedTermIndicator.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlAccruedInterestIndicator = function () {
  return new CashSettlAccruedInterestIndicator(this.message.tags[CashSettlAccruedInterestIndicator.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlValuationMethod = function () {
  return new CashSettlValuationMethod(this.message.tags[CashSettlValuationMethod.Tag]);
};

/* field */
CashSettlTermGrp.prototype.cashSettlTermXid = function () {
  return new CashSettlTermXID(this.message.tags[CashSettlTermXID.Tag]);
};

/* end group */

CashSettlTermGrp.Tag = '40022';

module.exports = CashSettlTermGrp;