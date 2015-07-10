var invert = require('invert-obj');

function LegPosCurrency (legPosCurrency) {
  this.message = legPosCurrency;
}

LegPosCurrency.prototype.value = function () {
  return this.message;
};

LegPosCurrency.Tag = '1589';

LegPosCurrency.Type = 'CURRENCY';

module.exports = LegPosCurrency;