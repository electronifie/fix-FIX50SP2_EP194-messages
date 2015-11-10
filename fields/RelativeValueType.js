var invert = require('invert-obj');

function RelativeValueType (relativeValueType) {
  this.message = relativeValueType;
}

RelativeValueType.prototype.value = function () {
  return this.message;
};


RelativeValueType.Keys = {
  'ASSET_SWAP_SPREAD': '1',
  'OVERNIGHT_INDEXED_SWAP_SPREAD': '2',
  'ZERO_VOLATILITY_SPREAD': '3',
  'DISCOUNT_MARGIN': '4',
  'INTERPOLATED_SPREAD': '5',
  'OPTION_ADJUSTED_SPREAD': '6',
  'G_SPREAD': '7',
  'CDS_BASIS': '8',
  'CDS_INTERPOLATED_BASIS': '9',
};

RelativeValueType.Tag = '2530';

RelativeValueType.Type = 'INT';

RelativeValueType.Values = invert(RelativeValueType.Keys);

module.exports = RelativeValueType;