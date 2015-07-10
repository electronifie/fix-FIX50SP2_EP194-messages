var invert = require('invert-obj');

function LastUpfrontPrice (lastUpfrontPrice) {
  this.message = lastUpfrontPrice;
}

LastUpfrontPrice.prototype.value = function () {
  return this.message;
};

LastUpfrontPrice.Tag = '1743';

LastUpfrontPrice.Type = 'PRICE';

module.exports = LastUpfrontPrice;