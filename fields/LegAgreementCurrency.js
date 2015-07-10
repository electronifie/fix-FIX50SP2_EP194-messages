var invert = require('invert-obj');

function LegAgreementCurrency (legAgreementCurrency) {
  this.message = legAgreementCurrency;
}

LegAgreementCurrency.prototype.value = function () {
  return this.message;
};

LegAgreementCurrency.Tag = '2495';

LegAgreementCurrency.Type = 'CURRENCY';

module.exports = LegAgreementCurrency;