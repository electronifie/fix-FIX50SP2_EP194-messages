var invert = require('invert-obj');

function OrderEntryID (orderEntryId) {
  this.message = orderEntryId;
}

OrderEntryID.prototype.value = function () {
  return this.message;
};

OrderEntryID.Tag = '2430';

OrderEntryID.Type = 'INT';

module.exports = OrderEntryID;