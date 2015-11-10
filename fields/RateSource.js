var invert = require('invert-obj');

function RateSource (rateSource) {
  this.message = rateSource;
}

RateSource.prototype.value = function () {
  return this.message;
};


RateSource.Keys = {
  'BLOOMBERG': '0',
  'REUTERS': '1',
  'TELERATE': '2',
  'ISDA_SETTLEMENT_RATE_OPTION': '3',
  'OTHER': '99',
};

RateSource.Tag = '1446';

RateSource.Type = 'INT';

RateSource.Values = invert(RateSource.Keys);

module.exports = RateSource;