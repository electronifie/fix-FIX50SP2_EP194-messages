var invert = require('invert-obj');

function CashSettlNumOfValuationDates (cashSettlNumOfValuationDates) {
  this.message = cashSettlNumOfValuationDates;
}

CashSettlNumOfValuationDates.prototype.value = function () {
  return this.message;
};

CashSettlNumOfValuationDates.Tag = '40917';

CashSettlNumOfValuationDates.Type = 'INT';

module.exports = CashSettlNumOfValuationDates;