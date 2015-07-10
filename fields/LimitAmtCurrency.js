var invert = require('invert-obj');

function LimitAmtCurrency (limitAmtCurrency) {
  this.message = limitAmtCurrency;
}

LimitAmtCurrency.prototype.value = function () {
  return this.message;
};

LimitAmtCurrency.Tag = '1634';

LimitAmtCurrency.Type = 'CURRENCY';

module.exports = LimitAmtCurrency;