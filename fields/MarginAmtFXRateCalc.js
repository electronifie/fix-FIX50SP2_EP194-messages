var invert = require('invert-obj');

function MarginAmtFXRateCalc (marginAmtFxrateCalc) {
  this.message = marginAmtFxrateCalc;
}

MarginAmtFXRateCalc.prototype.value = function () {
  return this.message;
};

MarginAmtFXRateCalc.Tag = '2089';

MarginAmtFXRateCalc.Type = 'CHAR';

module.exports = MarginAmtFXRateCalc;