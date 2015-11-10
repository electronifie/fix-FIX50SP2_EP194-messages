var invert = require('invert-obj');

function LegalConfirm (legalConfirm) {
  this.message = legalConfirm;
}

LegalConfirm.prototype.value = function () {
  return this.message;
};


LegalConfirm.Keys = {
  'DOES_NOT_CONSITUTE_A_LEGAL_CONFIRM': 'N',
  'LEGAL_CONFIRM': 'Y',
};

LegalConfirm.Tag = '650';

LegalConfirm.Type = 'BOOLEAN';

LegalConfirm.Values = invert(LegalConfirm.Keys);

module.exports = LegalConfirm;