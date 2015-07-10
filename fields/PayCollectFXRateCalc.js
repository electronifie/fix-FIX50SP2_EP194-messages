var invert = require('invert-obj');

function PayCollectFXRateCalc (payCollectFxrateCalc) {
  this.message = payCollectFxrateCalc;
}

PayCollectFXRateCalc.prototype.value = function () {
  return this.message;
};

PayCollectFXRateCalc.Tag = '2095';

PayCollectFXRateCalc.Type = 'CHAR';

module.exports = PayCollectFXRateCalc;