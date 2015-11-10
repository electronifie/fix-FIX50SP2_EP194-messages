var invert = require('invert-obj');

function MDStatisticIntervalType (mdstatisticIntervalType) {
  this.message = mdstatisticIntervalType;
}

MDStatisticIntervalType.prototype.value = function () {
  return this.message;
};


MDStatisticIntervalType.Keys = {
  'SLIDING_WINDOW': '1',
  'SLIDING_WINDOW_PEAK': '2',
  'FIXED_DATE_RANGE': '3',
  'FIXED_TIME_RANGE': '4',
  'CURRENT_TIME_UNIT': '5',
  'PREVIOUS_TIME_UNIT': '6',
  'MAXIMUM_RANGE': '7',
  'MAXIMUM_RANGE_UP_TO_PREVIOUS_TIME_UNIT': '8',
};

MDStatisticIntervalType.Tag = '2464';

MDStatisticIntervalType.Type = 'INT';

MDStatisticIntervalType.Values = invert(MDStatisticIntervalType.Keys);

module.exports = MDStatisticIntervalType;