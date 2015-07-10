var invert = require('invert-obj');

function FillLiquidityInd (fillLiquidityInd) {
  this.message = fillLiquidityInd;
}

FillLiquidityInd.prototype.value = function () {
  return this.message;
};

FillLiquidityInd.Tag = '1443';

FillLiquidityInd.Type = 'INT';

module.exports = FillLiquidityInd;