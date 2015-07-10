var invert = require('invert-obj');

function RefOrderIDSource (refOrderIdsource) {
  this.message = refOrderIdsource;
}

RefOrderIDSource.prototype.value = function () {
  return this.message;
};


RefOrderIDSource.Keys = {
  SECONDARYORDERID: '0',
  ORDERID: '1',
  MDENTRYID: '2',
  QUOTEENTRYID: '3',
  ORIGINAL_ORDER_ID: '4',
  QUOTEID: '5',
  QUOTEREQID: '6',
};

RefOrderIDSource.Tag = '1081';

RefOrderIDSource.Type = 'CHAR';

RefOrderIDSource.Values = invert(RefOrderIDSource.Keys);

module.exports = RefOrderIDSource;