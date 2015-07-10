var invert = require('invert-obj');

function EventMonthYear (eventMonthYear) {
  this.message = eventMonthYear;
}

EventMonthYear.prototype.value = function () {
  return this.message;
};

EventMonthYear.Tag = '2340';

EventMonthYear.Type = 'MONTHYEAR';

module.exports = EventMonthYear;