var NoLegCashSettlTerms = require('../fields/NoLegCashSettlTerms');
var LegCashSettlDealerGrp = require('../components/LegCashSettlDealerGrp');
var LegCashSettlCurrency = require('../fields/LegCashSettlCurrency');
var LegCasSettlValuationFirstBusinessDayOffset = require('../fields/LegCasSettlValuationFirstBusinessDayOffset');
var LegCashSettlValuationSubsequentBusinessDaysOffset = require('../fields/LegCashSettlValuationSubsequentBusinessDaysOffset');
var LegCashSettlNumOfValuationDates = require('../fields/LegCashSettlNumOfValuationDates');
var LegCashSettlValuationTime = require('../fields/LegCashSettlValuationTime');
var LegCashSettlBusinessCenter = require('../fields/LegCashSettlBusinessCenter');
var LegCashSettlQuoteMethod = require('../fields/LegCashSettlQuoteMethod');
var LegCashSettlQuoteAmount = require('../fields/LegCashSettlQuoteAmount');
var LegCashSettlQuoteCurrency = require('../fields/LegCashSettlQuoteCurrency');
var LegCashSettlMinimumQuoteAmount = require('../fields/LegCashSettlMinimumQuoteAmount');
var LegCashSettlMinimumQuoteCurrency = require('../fields/LegCashSettlMinimumQuoteCurrency');
var LegCashSettlBusinessDays = require('../fields/LegCashSettlBusinessDays');
var LegCashSettlAmount = require('../fields/LegCashSettlAmount');
var LegCashSettlRecoveryFactor = require('../fields/LegCashSettlRecoveryFactor');
var LegCashSettlFixedTermIndicator = require('../fields/LegCashSettlFixedTermIndicator');
var LegCashSettlAccruedInterestIndicator = require('../fields/LegCashSettlAccruedInterestIndicator');
var LegCashSettlValuationMethod = require('../fields/LegCashSettlValuationMethod');
var LegCashSettlTermXID = require('../fields/LegCashSettlTermXID');

function LegCashSettlTermGrp (legCashSettlTermGrp) {
  this.message = legCashSettlTermGrp;
}

/* group */

/* component */
LegCashSettlTermGrp.prototype.legCashSettlDealerGrp = function () {
  return this.message.groups[LegCashSettlDealerGrp.Tag]
    .map(function (legCashSettlDealerGrp) {
      return new LegCashSettlDealerGrp(legCashSettlDealerGrp);
  });
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlCurrency = function () {
  return new LegCashSettlCurrency(this.message.tags[LegCashSettlCurrency.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCasSettlValuationFirstBusinessDayOffset = function () {
  return new LegCasSettlValuationFirstBusinessDayOffset(this.message.tags[LegCasSettlValuationFirstBusinessDayOffset.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlValuationSubsequentBusinessDaysOffset = function () {
  return new LegCashSettlValuationSubsequentBusinessDaysOffset(this.message.tags[LegCashSettlValuationSubsequentBusinessDaysOffset.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlNumOfValuationDates = function () {
  return new LegCashSettlNumOfValuationDates(this.message.tags[LegCashSettlNumOfValuationDates.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlValuationTime = function () {
  return new LegCashSettlValuationTime(this.message.tags[LegCashSettlValuationTime.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlBusinessCenter = function () {
  return new LegCashSettlBusinessCenter(this.message.tags[LegCashSettlBusinessCenter.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlQuoteMethod = function () {
  return new LegCashSettlQuoteMethod(this.message.tags[LegCashSettlQuoteMethod.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlQuoteAmount = function () {
  return new LegCashSettlQuoteAmount(this.message.tags[LegCashSettlQuoteAmount.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlQuoteCurrency = function () {
  return new LegCashSettlQuoteCurrency(this.message.tags[LegCashSettlQuoteCurrency.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlMinimumQuoteAmount = function () {
  return new LegCashSettlMinimumQuoteAmount(this.message.tags[LegCashSettlMinimumQuoteAmount.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlMinimumQuoteCurrency = function () {
  return new LegCashSettlMinimumQuoteCurrency(this.message.tags[LegCashSettlMinimumQuoteCurrency.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlBusinessDays = function () {
  return new LegCashSettlBusinessDays(this.message.tags[LegCashSettlBusinessDays.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlAmount = function () {
  return new LegCashSettlAmount(this.message.tags[LegCashSettlAmount.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlRecoveryFactor = function () {
  return new LegCashSettlRecoveryFactor(this.message.tags[LegCashSettlRecoveryFactor.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlFixedTermIndicator = function () {
  return new LegCashSettlFixedTermIndicator(this.message.tags[LegCashSettlFixedTermIndicator.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlAccruedInterestIndicator = function () {
  return new LegCashSettlAccruedInterestIndicator(this.message.tags[LegCashSettlAccruedInterestIndicator.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlValuationMethod = function () {
  return new LegCashSettlValuationMethod(this.message.tags[LegCashSettlValuationMethod.Tag]);
};

/* field */
LegCashSettlTermGrp.prototype.legCashSettlTermXid = function () {
  return new LegCashSettlTermXID(this.message.tags[LegCashSettlTermXID.Tag]);
};

/* end group */

LegCashSettlTermGrp.Tag = '41344';

module.exports = LegCashSettlTermGrp;