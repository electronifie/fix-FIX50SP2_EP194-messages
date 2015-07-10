var invert = require('invert-obj');

function LegMasterConfirmationAnnexDesc (legMasterConfirmationAnnexDesc) {
  this.message = legMasterConfirmationAnnexDesc;
}

LegMasterConfirmationAnnexDesc.prototype.value = function () {
  return this.message;
};

LegMasterConfirmationAnnexDesc.Tag = '2512';

LegMasterConfirmationAnnexDesc.Type = 'STRING';

module.exports = LegMasterConfirmationAnnexDesc;