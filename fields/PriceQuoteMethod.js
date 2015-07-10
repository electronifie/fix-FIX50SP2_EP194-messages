var invert = require('invert-obj');

function PriceQuoteMethod (priceQuoteMethod) {
  this.message = priceQuoteMethod;
}

PriceQuoteMethod.prototype.value = function () {
  return this.message;
};


PriceQuoteMethod.Keys = {
  STANDARD_MONEY_PER_UNIT_OF_A_PHYSICAL: 'STD',
  INDEX: 'INX',
  INTEREST_RATE_INDEX: 'INT',
  PERCENT_OF_PAR: 'PCTPAR',
};

PriceQuoteMethod.Tag = '1196';

PriceQuoteMethod.Type = 'STRING';

PriceQuoteMethod.Values = invert(PriceQuoteMethod.Keys);

module.exports = PriceQuoteMethod;