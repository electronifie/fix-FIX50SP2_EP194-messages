var invert = require('invert-obj');

function SideLiquidityInd (sideLiquidityInd) {
  this.message = sideLiquidityInd;
}

SideLiquidityInd.prototype.value = function () {
  return this.message;
};

SideLiquidityInd.Tag = '1444';

SideLiquidityInd.Type = 'INT';

module.exports = SideLiquidityInd;