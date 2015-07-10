var invert = require('invert-obj');

function MasterConfirmationAnnexDesc (masterConfirmationAnnexDesc) {
  this.message = masterConfirmationAnnexDesc;
}

MasterConfirmationAnnexDesc.prototype.value = function () {
  return this.message;
};

MasterConfirmationAnnexDesc.Tag = '1964';

MasterConfirmationAnnexDesc.Type = 'STRING';

module.exports = MasterConfirmationAnnexDesc;