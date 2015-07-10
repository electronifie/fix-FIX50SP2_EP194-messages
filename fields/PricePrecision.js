var invert = require('invert-obj');

function PricePrecision (pricePrecision) {
  this.message = pricePrecision;
}

PricePrecision.prototype.value = function () {
  return this.message;
};

PricePrecision.Tag = '2349';

PricePrecision.Type = 'INT';

module.exports = PricePrecision;