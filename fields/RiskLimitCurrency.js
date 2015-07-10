var invert = require('invert-obj');

function RiskLimitCurrency (riskLimitCurrency) {
  this.message = riskLimitCurrency;
}

RiskLimitCurrency.prototype.value = function () {
  return this.message;
};

RiskLimitCurrency.Tag = '1532';

RiskLimitCurrency.Type = 'CURRENCY';

module.exports = RiskLimitCurrency;