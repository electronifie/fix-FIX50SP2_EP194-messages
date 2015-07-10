var invert = require('invert-obj');

function TotNoOrderEntries (totNoOrderEntries) {
  this.message = totNoOrderEntries;
}

TotNoOrderEntries.prototype.value = function () {
  return this.message;
};

TotNoOrderEntries.Tag = '2432';

TotNoOrderEntries.Type = 'INT';

module.exports = TotNoOrderEntries;