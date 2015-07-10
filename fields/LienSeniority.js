var invert = require('invert-obj');

function LienSeniority (lienSeniority) {
  this.message = lienSeniority;
}

LienSeniority.prototype.value = function () {
  return this.message;
};


LienSeniority.Keys = {
  UNKNOWN: '0',
  FIRST_LIEN: '1',
  SECOND_LIEN: '2',
  THIRD_LIEN: '3',
};

LienSeniority.Tag = '1954';

LienSeniority.Type = 'INT';

LienSeniority.Values = invert(LienSeniority.Keys);

module.exports = LienSeniority;