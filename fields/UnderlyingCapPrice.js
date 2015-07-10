var invert = require('invert-obj');

function UnderlyingCapPrice (underlyingCapPrice) {
  this.message = underlyingCapPrice;
}

UnderlyingCapPrice.prototype.value = function () {
  return this.message;
};

UnderlyingCapPrice.Tag = '2033';

UnderlyingCapPrice.Type = 'PRICE';

module.exports = UnderlyingCapPrice;