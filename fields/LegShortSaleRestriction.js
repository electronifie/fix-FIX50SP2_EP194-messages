var invert = require('invert-obj');

function LegShortSaleRestriction (legShortSaleRestriction) {
  this.message = legShortSaleRestriction;
}

LegShortSaleRestriction.prototype.value = function () {
  return this.message;
};

LegShortSaleRestriction.Tag = '2209';

LegShortSaleRestriction.Type = 'INT';

module.exports = LegShortSaleRestriction;