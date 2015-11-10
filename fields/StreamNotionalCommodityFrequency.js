var invert = require('invert-obj');

function StreamNotionalCommodityFrequency (streamNotionalCommodityFrequency) {
  this.message = streamNotionalCommodityFrequency;
}

StreamNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};


StreamNotionalCommodityFrequency.Keys = {
  'TERM': '0',
  'PER_BUSINESS_DAY': '1',
  'PER_CALCULATION_PERIOD': '2',
  'PER_SETTLEMENT_PERIOD': '3',
  'PER_CALENDAR_DAY': '4',
  'PER_HOUR': '5',
  'PER_MONTH': '6',
};

StreamNotionalCommodityFrequency.Tag = '41308';

StreamNotionalCommodityFrequency.Type = 'INT';

StreamNotionalCommodityFrequency.Values = invert(StreamNotionalCommodityFrequency.Keys);

module.exports = StreamNotionalCommodityFrequency;