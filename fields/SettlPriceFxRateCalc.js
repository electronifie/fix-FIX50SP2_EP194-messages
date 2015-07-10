var invert = require('invert-obj');

function SettlPriceFxRateCalc (settlPriceFxRateCalc) {
  this.message = settlPriceFxRateCalc;
}

SettlPriceFxRateCalc.prototype.value = function () {
  return this.message;
};

SettlPriceFxRateCalc.Tag = '2366';

SettlPriceFxRateCalc.Type = 'CHAR';

module.exports = SettlPriceFxRateCalc;