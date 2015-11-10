var invert = require('invert-obj');

function ShortSaleExemptionReason (shortSaleExemptionReason) {
  this.message = shortSaleExemptionReason;
}

ShortSaleExemptionReason.prototype.value = function () {
  return this.message;
};


ShortSaleExemptionReason.Keys = {
  'EXEMPTION_REASON_UNKNOWN': '0',
  'INCOME_SELL_SHORT_EXEMPT': '1',
  'ABOVE_NATIONAL_BEST_BID': '2',
  'DELAYED_DELIVERY': '3',
  'ODD_LOT': '4',
  'DOMESTIC_ARBITRAGE': '5',
  'INTERNATIONAL_ARBITRAGE': '6',
  'UNDERWRITER_OR_SYNDICATE_DISTRIBUTION': '7',
  'RISKLESS_PRINCIPAL': '8',
  'VWAP': '9',
};

ShortSaleExemptionReason.Tag = '1688';

ShortSaleExemptionReason.Type = 'INT';

ShortSaleExemptionReason.Values = invert(ShortSaleExemptionReason.Keys);

module.exports = ShortSaleExemptionReason;