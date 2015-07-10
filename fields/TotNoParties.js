var invert = require('invert-obj');

function TotNoParties (totNoParties) {
  this.message = totNoParties;
}

TotNoParties.prototype.value = function () {
  return this.message;
};

TotNoParties.Tag = '1512';

TotNoParties.Type = 'INT';

module.exports = TotNoParties;