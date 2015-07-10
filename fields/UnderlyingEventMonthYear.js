var invert = require('invert-obj');

function UnderlyingEventMonthYear (underlyingEventMonthYear) {
  this.message = underlyingEventMonthYear;
}

UnderlyingEventMonthYear.prototype.value = function () {
  return this.message;
};

UnderlyingEventMonthYear.Tag = '2342';

UnderlyingEventMonthYear.Type = 'MONTHYEAR';

module.exports = UnderlyingEventMonthYear;