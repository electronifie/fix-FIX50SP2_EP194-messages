var invert = require('invert-obj');

function UnderlyingCashSettlNumOfValuationDates (underlyingCashSettlNumOfValuationDates) {
  this.message = underlyingCashSettlNumOfValuationDates;
}

UnderlyingCashSettlNumOfValuationDates.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlNumOfValuationDates.Tag = '42045';

UnderlyingCashSettlNumOfValuationDates.Type = 'INT';

module.exports = UnderlyingCashSettlNumOfValuationDates;