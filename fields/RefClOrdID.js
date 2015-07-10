var invert = require('invert-obj');

function RefClOrdID (refClOrdId) {
  this.message = refClOrdId;
}

RefClOrdID.prototype.value = function () {
  return this.message;
};

RefClOrdID.Tag = '1806';

RefClOrdID.Type = 'STRING';

module.exports = RefClOrdID;