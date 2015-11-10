var invert = require('invert-obj');

function RateSourceType (rateSourceType) {
  this.message = rateSourceType;
}

RateSourceType.prototype.value = function () {
  return this.message;
};


RateSourceType.Keys = {
  'PRIMARY': '0',
  'SECONDARY': '1',
};

RateSourceType.Tag = '1447';

RateSourceType.Type = 'INT';

RateSourceType.Values = invert(RateSourceType.Keys);

module.exports = RateSourceType;