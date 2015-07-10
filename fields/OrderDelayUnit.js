var invert = require('invert-obj');

function OrderDelayUnit (orderDelayUnit) {
  this.message = orderDelayUnit;
}

OrderDelayUnit.prototype.value = function () {
  return this.message;
};


OrderDelayUnit.Keys = {
  SECONDS: '0',
  TENTHS_OF_A_SECOND: '1',
  HUNDREDTHS_OF_A_SECOND: '2',
  MILLISECONDS: '3',
  MICROSECONDS: '4',
  NANOSECONDS: '5',
  MINUTES: '10',
  HOURS: '11',
  DAYS: '12',
  WEEKS: '13',
  MONTHS: '14',
  YEARS: '15',
};

OrderDelayUnit.Tag = '1429';

OrderDelayUnit.Type = 'INT';

OrderDelayUnit.Values = invert(OrderDelayUnit.Keys);

module.exports = OrderDelayUnit;