var invert = require('invert-obj');

function SidePriceDifferential (sidePriceDifferential) {
  this.message = sidePriceDifferential;
}

SidePriceDifferential.prototype.value = function () {
  return this.message;
};

SidePriceDifferential.Tag = '1599';

SidePriceDifferential.Type = 'PRICE';

module.exports = SidePriceDifferential;