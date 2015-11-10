var invert = require('invert-obj');

function TradePriceCondition (tradePriceCondition) {
  this.message = tradePriceCondition;
}

TradePriceCondition.prototype.value = function () {
  return this.message;
};


TradePriceCondition.Keys = {
  'SPECIAL_CUM_DIVIDEND': '0',
  'SPECIAL_CUM_RIGHTS': '1',
  'SPECIAL_EX_DIVIDEND': '2',
  'SPECIAL_EX_RIGHTS': '3',
  'SPECIAL_CUM_COUPON': '4',
  'SPECIAL_CUM_CAPITAL_REPAYMENTS': '5',
  'SPECIAL_EX_COUPON': '6',
  'SPECIAL_EX_CAPITAL_REPAYMENTS': '7',
  'CASH_SETTLEMENT': '8',
  'SPECIAL_CUM_BONUS': '9',
  'SPECIAL_PRICE': '10',
  'SPECIAL_EX_BONUS': '11',
  'GUARANTEED_DELIVERY': '12',
};

TradePriceCondition.Tag = '1839';

TradePriceCondition.Type = 'INT';

TradePriceCondition.Values = invert(TradePriceCondition.Keys);

module.exports = TradePriceCondition;