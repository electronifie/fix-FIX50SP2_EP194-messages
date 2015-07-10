var invert = require('invert-obj');

function MasterConfirmationDate (masterConfirmationDate) {
  this.message = masterConfirmationDate;
}

MasterConfirmationDate.prototype.value = function () {
  return this.message;
};

MasterConfirmationDate.Tag = '1963';

MasterConfirmationDate.Type = 'LOCALMKTDATE';

module.exports = MasterConfirmationDate;