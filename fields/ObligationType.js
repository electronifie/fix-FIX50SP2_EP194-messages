var invert = require('invert-obj');

function ObligationType (obligationType) {
  this.message = obligationType;
}

ObligationType.prototype.value = function () {
  return this.message;
};


ObligationType.Keys = {
  'BOND': '0',
  'CONVERTIBLE_BOND': '1',
  'MORTGAGE': '2',
  'LOAN': '3',
};

ObligationType.Tag = '1739';

ObligationType.Type = 'STRING';

ObligationType.Values = invert(ObligationType.Keys);

module.exports = ObligationType;