var invert = require('invert-obj');

function LegShortSaleExemptionReason (legShortSaleExemptionReason) {
  this.message = legShortSaleExemptionReason;
}

LegShortSaleExemptionReason.prototype.value = function () {
  return this.message;
};

LegShortSaleExemptionReason.Tag = '1689';

LegShortSaleExemptionReason.Type = 'INT';

module.exports = LegShortSaleExemptionReason;