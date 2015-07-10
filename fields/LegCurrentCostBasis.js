var invert = require('invert-obj');

function LegCurrentCostBasis (legCurrentCostBasis) {
  this.message = legCurrentCostBasis;
}

LegCurrentCostBasis.prototype.value = function () {
  return this.message;
};

LegCurrentCostBasis.Tag = '1759';

LegCurrentCostBasis.Type = 'AMT';

module.exports = LegCurrentCostBasis;