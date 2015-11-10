var invert = require('invert-obj');

function IRSDirection (irsdirection) {
  this.message = irsdirection;
}

IRSDirection.prototype.value = function () {
  return this.message;
};


IRSDirection.Keys = {
  'PRINCIPAL_IS_PAYING_FIXED_RATE': 'PAY',
  'PRINCIPAL_IS_RECEIVING_FIXED_RATE': 'RCV',
  'SWAP_IS_FLOAT_FLOAT_OR_FIXED_FIXED': 'NA',
};

IRSDirection.Tag = '1933';

IRSDirection.Type = 'STRING';

IRSDirection.Values = invert(IRSDirection.Keys);

module.exports = IRSDirection;