var invert = require('invert-obj');

function CrossType (crossType) {
  this.message = crossType;
}

CrossType.prototype.value = function () {
  return this.message;
};


CrossType.Keys = {
  ALL_OR_NONE_CROSS: '1',
  IMMEDIATE_OR_CANCEL_CROSS: '2',
  ONE_SIDED_CROSS: '3',
  CROSS_EXECUTED_AGAINST_BOOK: '4',
  BASIS_CROSS: '5',
  CONTINGENT_CROSS: '6',
  VOLUME_WEIGHTED_AVERAGE_PRICE_CROSS: '7',
  SPECIAL_TRADING_SESSION_CROSS: '8',
  CUSTOMER_TO_CUSTOMER_CROSS: '9',
};

CrossType.Tag = '549';

CrossType.Type = 'INT';

CrossType.Values = invert(CrossType.Keys);

module.exports = CrossType;