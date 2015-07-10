var invert = require('invert-obj');

function BusinessDayConvention (businessDayConvention) {
  this.message = businessDayConvention;
}

BusinessDayConvention.prototype.value = function () {
  return this.message;
};


BusinessDayConvention.Keys = {
  NOT_APPLICABLE: '0',
  NONE: '1',
  FOLLOWING_DAY: '2',
  FLOATING_RATE_NOTE: '3',
  MODIFIED_FOLLOWING_DAY: '4',
  PRECEDING_DAY: '5',
  MODIFIED_PRECEDING_DAY: '6',
  NEAREST_DAY: '7',
};

BusinessDayConvention.Tag = '40921';

BusinessDayConvention.Type = 'INT';

BusinessDayConvention.Values = invert(BusinessDayConvention.Keys);

module.exports = BusinessDayConvention;