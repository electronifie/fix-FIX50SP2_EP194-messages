var NoComplexEventDates = require('../fields/NoComplexEventDates');
var ComplexEventTimes = require('../components/ComplexEventTimes');
var ComplexEventStartDate = require('../fields/ComplexEventStartDate');
var ComplexEventEndDate = require('../fields/ComplexEventEndDate');

function ComplexEventDates (complexEventDates) {
  this.message = complexEventDates;
}

/* group */

/* component */
ComplexEventDates.prototype.complexEventTimes = function () {
  return this.message.groups[ComplexEventTimes.Tag]
    .map(function (complexEventTimes) {
      return new ComplexEventTimes(complexEventTimes);
  });
};

/* field */
ComplexEventDates.prototype.complexEventStartDate = function () {
  return new ComplexEventStartDate(this.message.tags[ComplexEventStartDate.Tag]);
};

/* field */
ComplexEventDates.prototype.complexEventEndDate = function () {
  return new ComplexEventEndDate(this.message.tags[ComplexEventEndDate.Tag]);
};

/* end group */

ComplexEventDates.Tag = '1491';

module.exports = ComplexEventDates;