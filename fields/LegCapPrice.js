var invert = require('invert-obj');

function LegCapPrice (legCapPrice) {
  this.message = legCapPrice;
}

LegCapPrice.prototype.value = function () {
  return this.message;
};

LegCapPrice.Tag = '2200';

LegCapPrice.Type = 'PRICE';

module.exports = LegCapPrice;