var invert = require('invert-obj');

function MDStatisticRequestResult (mdstatisticRequestResult) {
  this.message = mdstatisticRequestResult;
}

MDStatisticRequestResult.prototype.value = function () {
  return this.message;
};


MDStatisticRequestResult.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_OR_UNKNOWN_MARKET': '1',
  'INVALID_OR_UNKNOWN_MARKET_SEGMENT': '2',
  'INVALID_OR_UNKNOWN_SECURITY_LIST': '3',
  'INVALID_OR_UNKNOWN_INSTRUMENT': '4',
  'INVALID_PARTIES': '5',
  'TRADE_DATE_OUT_OF_SUPPORTED_RANGE': '6',
  'STATISTIC_TYPE_NOT_SUPPORTED': '7',
  'SCOPE_OR_SUB_SCOPE_NOT_SUPPORTED': '8',
  'SCOPE_TYPE_NOT_SUPPORTED': '9',
  'MARKET_DEPTH_NOT_SUPPORTED': '10',
  'FREQUENCY_NOT_SUPPORTED': '11',
  'STATISTIC_INTERVAL_NOT_SUPPORTED': '12',
  'STATISTIC_DATE_RANGE_NOT_SUPPORTED': '13',
  'STATISTIC_TIME_RANGE_NOT_SUPPORTED': '14',
  'RATIO_TYPE_NOT_SUPPORTED': '15',
  'INVALID_OR_UNKNOWN_TRADE_INPUT_SOURCE': '16',
  'INVALID_OR_UNKNOWN_TRADING_SESSION': '17',
  'UNAUTHORIZED_FOR_STATISTIC_REQUEST': '18',
  'OTHER': '99',
};

MDStatisticRequestResult.Tag = '2473';

MDStatisticRequestResult.Type = 'INT';

MDStatisticRequestResult.Values = invert(MDStatisticRequestResult.Keys);

module.exports = MDStatisticRequestResult;