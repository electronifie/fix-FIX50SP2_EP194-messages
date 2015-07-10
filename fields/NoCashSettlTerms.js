var invert = require('invert-obj');

function NoCashSettlTerms (noCashSettlTerms) {
  this.message = noCashSettlTerms;
}

NoCashSettlTerms.prototype.value = function () {
  return this.message;
};

NoCashSettlTerms.Tag = '40022';

NoCashSettlTerms.Type = 'NUMINGROUP';

module.exports = NoCashSettlTerms;