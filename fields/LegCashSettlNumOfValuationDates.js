var invert = require('invert-obj');

function LegCashSettlNumOfValuationDates (legCashSettlNumOfValuationDates) {
  this.message = legCashSettlNumOfValuationDates;
}

LegCashSettlNumOfValuationDates.prototype.value = function () {
  return this.message;
};

LegCashSettlNumOfValuationDates.Tag = '41348';

LegCashSettlNumOfValuationDates.Type = 'INT';

module.exports = LegCashSettlNumOfValuationDates;