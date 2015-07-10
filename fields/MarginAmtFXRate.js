var invert = require('invert-obj');

function MarginAmtFXRate (marginAmtFxrate) {
  this.message = marginAmtFxrate;
}

MarginAmtFXRate.prototype.value = function () {
  return this.message;
};

MarginAmtFXRate.Tag = '2088';

MarginAmtFXRate.Type = 'FLOAT';

module.exports = MarginAmtFXRate;