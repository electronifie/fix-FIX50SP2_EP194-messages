var invert = require('invert-obj');

function MasterConfirmationAnnexDate (masterConfirmationAnnexDate) {
  this.message = masterConfirmationAnnexDate;
}

MasterConfirmationAnnexDate.prototype.value = function () {
  return this.message;
};

MasterConfirmationAnnexDate.Tag = '1965';

MasterConfirmationAnnexDate.Type = 'LOCALMKTDATE';

module.exports = MasterConfirmationAnnexDate;