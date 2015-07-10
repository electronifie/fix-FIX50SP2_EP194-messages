var invert = require('invert-obj');

function CurrentCostBasis (currentCostBasis) {
  this.message = currentCostBasis;
}

CurrentCostBasis.prototype.value = function () {
  return this.message;
};

CurrentCostBasis.Tag = '1755';

CurrentCostBasis.Type = 'AMT';

module.exports = CurrentCostBasis;