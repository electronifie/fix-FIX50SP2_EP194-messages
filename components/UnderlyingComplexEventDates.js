var NoUnderlyingComplexEventDates = require('../fields/NoUnderlyingComplexEventDates');
var UnderlyingComplexEventTimes = require('../components/UnderlyingComplexEventTimes');
var UnderlyingComplexEventStartDate = require('../fields/UnderlyingComplexEventStartDate');
var UnderlyingComplexEventEndDate = require('../fields/UnderlyingComplexEventEndDate');

function UnderlyingComplexEventDates (underlyingComplexEventDates) {
  this.message = underlyingComplexEventDates;
}

/* group */

/* component */
UnderlyingComplexEventDates.prototype.underlyingComplexEventTimes = function () {
  return this.message.groups[UnderlyingComplexEventTimes.Tag]
    .map(function (underlyingComplexEventTimes) {
      return new UnderlyingComplexEventTimes(underlyingComplexEventTimes);
  });
};

/* field */
UnderlyingComplexEventDates.prototype.underlyingComplexEventStartDate = function () {
  return new UnderlyingComplexEventStartDate(this.message.tags[UnderlyingComplexEventStartDate.Tag]);
};

/* field */
UnderlyingComplexEventDates.prototype.underlyingComplexEventEndDate = function () {
  return new UnderlyingComplexEventEndDate(this.message.tags[UnderlyingComplexEventEndDate.Tag]);
};

/* end group */

UnderlyingComplexEventDates.Tag = '2053';

module.exports = UnderlyingComplexEventDates;