var invert = require('invert-obj');

function PrivateQuote (privateQuote) {
  this.message = privateQuote;
}

PrivateQuote.prototype.value = function () {
  return this.message;
};


PrivateQuote.Keys = {
  'PRIVATE_QUOTE': 'Y',
  'PUBLIC_QUOTE': 'N',
};

PrivateQuote.Tag = '1171';

PrivateQuote.Type = 'BOOLEAN';

PrivateQuote.Values = invert(PrivateQuote.Keys);

module.exports = PrivateQuote;