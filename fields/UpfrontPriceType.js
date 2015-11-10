var invert = require('invert-obj');

function UpfrontPriceType (upfrontPriceType) {
  this.message = upfrontPriceType;
}

UpfrontPriceType.prototype.value = function () {
  return this.message;
};


UpfrontPriceType.Keys = {
  'PERCENTAGE': '1',
  'FIXED_AMOUNT': '3',
};

UpfrontPriceType.Tag = '1741';

UpfrontPriceType.Type = 'INT';

UpfrontPriceType.Values = invert(UpfrontPriceType.Keys);

module.exports = UpfrontPriceType;