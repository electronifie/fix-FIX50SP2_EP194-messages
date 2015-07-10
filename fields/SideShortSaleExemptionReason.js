var invert = require('invert-obj');

function SideShortSaleExemptionReason (sideShortSaleExemptionReason) {
  this.message = sideShortSaleExemptionReason;
}

SideShortSaleExemptionReason.prototype.value = function () {
  return this.message;
};

SideShortSaleExemptionReason.Tag = '1690';

SideShortSaleExemptionReason.Type = 'INT';

module.exports = SideShortSaleExemptionReason;