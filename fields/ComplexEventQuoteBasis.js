var invert = require('invert-obj');

function ComplexEventQuoteBasis (complexEventQuoteBasis) {
  this.message = complexEventQuoteBasis;
}

ComplexEventQuoteBasis.prototype.value = function () {
  return this.message;
};


ComplexEventQuoteBasis.Keys = {
  CURRENCY_1_PER_CURRENCY_2: '0',
  CURRENCY_2_PER_CURRENCY_1: '1',
};

ComplexEventQuoteBasis.Tag = '2126';

ComplexEventQuoteBasis.Type = 'INT';

ComplexEventQuoteBasis.Values = invert(ComplexEventQuoteBasis.Keys);

module.exports = ComplexEventQuoteBasis;