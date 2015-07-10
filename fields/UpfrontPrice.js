var invert = require('invert-obj');

function UpfrontPrice (upfrontPrice) {
  this.message = upfrontPrice;
}

UpfrontPrice.prototype.value = function () {
  return this.message;
};

UpfrontPrice.Tag = '1742';

UpfrontPrice.Type = 'PRICE';

module.exports = UpfrontPrice;