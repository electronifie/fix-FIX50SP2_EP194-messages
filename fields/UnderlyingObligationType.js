var invert = require('invert-obj');

function UnderlyingObligationType (underlyingObligationType) {
  this.message = underlyingObligationType;
}

UnderlyingObligationType.prototype.value = function () {
  return this.message;
};


UnderlyingObligationType.Keys = {
  'BOND': '0',
  'CONVERTIBLE_BOND': '1',
  'MORTGAGE': '2',
  'LOAN': '3',
};

UnderlyingObligationType.Tag = '2012';

UnderlyingObligationType.Type = 'STRING';

UnderlyingObligationType.Values = invert(UnderlyingObligationType.Keys);

module.exports = UnderlyingObligationType;