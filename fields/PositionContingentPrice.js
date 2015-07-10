var invert = require('invert-obj');

function PositionContingentPrice (positionContingentPrice) {
  this.message = positionContingentPrice;
}

PositionContingentPrice.prototype.value = function () {
  return this.message;
};

PositionContingentPrice.Tag = '1595';

PositionContingentPrice.Type = 'PRICE';

module.exports = PositionContingentPrice;