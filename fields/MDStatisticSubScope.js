var invert = require('invert-obj');

function MDStatisticSubScope (mdstatisticSubScope) {
  this.message = mdstatisticSubScope;
}

MDStatisticSubScope.prototype.value = function () {
  return this.message;
};


MDStatisticSubScope.Keys = {
  VISIBLE: '1',
  HIDDEN: '2',
  INDICATIVE: '3',
  TRADEABLE: '4',
  PASSIVE: '5',
  MARKET_CONSENSUS: '6',
};

MDStatisticSubScope.Tag = '2458';

MDStatisticSubScope.Type = 'INT';

MDStatisticSubScope.Values = invert(MDStatisticSubScope.Keys);

module.exports = MDStatisticSubScope;