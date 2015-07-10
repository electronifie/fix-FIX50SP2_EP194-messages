var invert = require('invert-obj');

function RefTickTableID (refTickTableId) {
  this.message = refTickTableId;
}

RefTickTableID.prototype.value = function () {
  return this.message;
};

RefTickTableID.Tag = '1787';

RefTickTableID.Type = 'INT';

module.exports = RefTickTableID;