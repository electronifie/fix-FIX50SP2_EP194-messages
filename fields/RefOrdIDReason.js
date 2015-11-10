var invert = require('invert-obj');

function RefOrdIDReason (refOrdIdreason) {
  this.message = refOrdIdreason;
}

RefOrdIDReason.prototype.value = function () {
  return this.message;
};


RefOrdIDReason.Keys = {
  'GTC_FROM_PREVIOUS_DAY': '0',
  'PARTIAL_FILL_REMAINING': '1',
  'ORDER_CHANGED': '2',
};

RefOrdIDReason.Tag = '1431';

RefOrdIDReason.Type = 'INT';

RefOrdIDReason.Values = invert(RefOrdIDReason.Keys);

module.exports = RefOrdIDReason;