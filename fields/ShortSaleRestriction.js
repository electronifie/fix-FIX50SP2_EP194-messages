var invert = require('invert-obj');

function ShortSaleRestriction (shortSaleRestriction) {
  this.message = shortSaleRestriction;
}

ShortSaleRestriction.prototype.value = function () {
  return this.message;
};


ShortSaleRestriction.Keys = {
  'NO_RESTRICTIONS': '0',
  'SECURITY_IS_NOT_SHORTABLE': '1',
  'SECURITY_NOT_SHORTABLE_AT_OR_BELOW_THE_BEST_BID': '2',
  'SECURITY_IS_NOT_SHORTABLE_WITHOUT_PRE_BORROW': '3',
};

ShortSaleRestriction.Tag = '1687';

ShortSaleRestriction.Type = 'INT';

ShortSaleRestriction.Values = invert(ShortSaleRestriction.Keys);

module.exports = ShortSaleRestriction;