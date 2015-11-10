var invert = require('invert-obj');

function ConfirmRejReason (confirmRejReason) {
  this.message = confirmRejReason;
}

ConfirmRejReason.prototype.value = function () {
  return this.message;
};


ConfirmRejReason.Keys = {
  'INCORRECT_OR_MISSING_ACCOUNT': '1',
  'INCORRECT_OR_MISSING_SETTLEMENT_INSTRUCTIONS': '2',
  'UNKNOWN_OR_MISSING_INDIVIDUALALLOCID': '3',
  'TRANSACTION_NOT_RECOGNIZED': '4',
  'DUPLICATE_TRANSACTION': '5',
  'INCORRECT_OR_MISSING_INSTRUMENT': '6',
  'INCORRECT_OR_MISSING_PRICE': '7',
  'INCORRECT_OR_MISSING_COMMISSION': '8',
  'INCORRECT_OR_MISSING_SETTLEMENT_DATE': '9',
  'INCORRECT_OR_MISSING_FUND_ID_OR_FUND_NAME': '10',
  'INCORRECT_OR_MISSING_QUANTITY': '11',
  'INCORRECT_OR_MISSING_FEES': '12',
  'INCORRECT_OR_MISSING_TAX': '13',
  'INCORRECT_OR_MISSING_PARTY': '14',
  'INCORRECT_OR_MISSING_SIDE': '15',
  'INCORRECT_OR_MISSING_NET_MONEY': '16',
  'INCORRECT_OR_MISSING_TRADE_DATE': '17',
  'INCORRECT_OR_MISSING_SETTLEMENT_CURRENCY_INSTRUCTIONS': '18',
  'INCORRECT_OR_MISSING_CAPACITY': '19',
  'OTHER': '99',
};

ConfirmRejReason.Tag = '774';

ConfirmRejReason.Type = 'INT';

ConfirmRejReason.Values = invert(ConfirmRejReason.Keys);

module.exports = ConfirmRejReason;