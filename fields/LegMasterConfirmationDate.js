var invert = require('invert-obj');

function LegMasterConfirmationDate (legMasterConfirmationDate) {
  this.message = legMasterConfirmationDate;
}

LegMasterConfirmationDate.prototype.value = function () {
  return this.message;
};

LegMasterConfirmationDate.Tag = '2510';

LegMasterConfirmationDate.Type = 'LOCALMKTDATE';

module.exports = LegMasterConfirmationDate;