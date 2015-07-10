var invert = require('invert-obj');

function LegMasterConfirmationAnnexDate (legMasterConfirmationAnnexDate) {
  this.message = legMasterConfirmationAnnexDate;
}

LegMasterConfirmationAnnexDate.prototype.value = function () {
  return this.message;
};

LegMasterConfirmationAnnexDate.Tag = '2509';

LegMasterConfirmationAnnexDate.Type = 'LOCALMKTDATE';

module.exports = LegMasterConfirmationAnnexDate;