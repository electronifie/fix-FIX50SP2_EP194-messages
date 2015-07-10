var invert = require('invert-obj');

function UnderlyingShortSaleRestriction (underlyingShortSaleRestriction) {
  this.message = underlyingShortSaleRestriction;
}

UnderlyingShortSaleRestriction.prototype.value = function () {
  return this.message;
};

UnderlyingShortSaleRestriction.Tag = '2043';

UnderlyingShortSaleRestriction.Type = 'INT';

module.exports = UnderlyingShortSaleRestriction;