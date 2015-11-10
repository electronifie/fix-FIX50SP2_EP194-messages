var invert = require('invert-obj');

function MDStatisticRatioType (mdstatisticRatioType) {
  this.message = mdstatisticRatioType;
}

MDStatisticRatioType.prototype.value = function () {
  return this.message;
};


MDStatisticRatioType.Keys = {
  'BUYERS_TO_SELLERS': '1',
  'UPTICKS_TO_DOWNTICKS': '2',
  'MARKET_MAKER_TO_NON_MARKET_MAKER': '3',
  'AUTOMATED_TO_NON_AUTOMATED': '4',
  'ORDERS_TO_TRADES': '5',
  'QUOTES_TO_TRADES': '6',
  'ORDERS_AND_QUOTES_TO_TRADES': '7',
};

MDStatisticRatioType.Tag = '2472';

MDStatisticRatioType.Type = 'INT';

MDStatisticRatioType.Values = invert(MDStatisticRatioType.Keys);

module.exports = MDStatisticRatioType;