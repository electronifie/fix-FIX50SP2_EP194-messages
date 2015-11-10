var invert = require('invert-obj');

function MDStatisticType (mdstatisticType) {
  this.message = mdstatisticType;
}

MDStatisticType.prototype.value = function () {
  return this.message;
};


MDStatisticType.Keys = {
  'COUNT': '1',
  'AVERAGE_VOLUME': '2',
  'TOTAL_VOLUME': '3',
  'DISTRIBUTION': '4',
  'RATIO': '5',
  'LIQUIDITY': '6',
  'VOLUME_WEIGHTED_AVERAGE_PRICE': '7',
  'VOLATILITY': '8',
  'DURATION': '9',
  'TICK': '10',
  'AVERAGE_TURNOVER': '11',
  'TOTAL_TURNOVER': '12',
  'HIGH': '13',
  'LOW': '14',
  'MIDPOINT': '15',
  'FIRST': '16',
  'LAST': '17',
  'FINAL': '18',
  'EXCHANGE_BEST': '19',
  'EXCHANGE_BEST_WITH_VOLUME': '20',
  'CONSOLIDATED_BEST': '21',
  'CONSOLIDATED_BEST_WITH_VOLUME': '22',
  'TIME_WEIGHTED_AVERAGE_PRICE': '23',
};

MDStatisticType.Tag = '2456';

MDStatisticType.Type = 'INT';

MDStatisticType.Values = invert(MDStatisticType.Keys);

module.exports = MDStatisticType;