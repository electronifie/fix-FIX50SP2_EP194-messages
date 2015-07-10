var NoUnderlyingComplexEventTimes = require('../fields/NoUnderlyingComplexEventTimes');
var UnderlyingComplexEventStartTime = require('../fields/UnderlyingComplexEventStartTime');
var UnderlyingComplexEventEndTime = require('../fields/UnderlyingComplexEventEndTime');

function UnderlyingComplexEventTimes (underlyingComplexEventTimes) {
  this.message = underlyingComplexEventTimes;
}

/* group */

/* field */
UnderlyingComplexEventTimes.prototype.underlyingComplexEventStartTime = function () {
  return new UnderlyingComplexEventStartTime(this.message.tags[UnderlyingComplexEventStartTime.Tag]);
};

/* field */
UnderlyingComplexEventTimes.prototype.underlyingComplexEventEndTime = function () {
  return new UnderlyingComplexEventEndTime(this.message.tags[UnderlyingComplexEventEndTime.Tag]);
};

/* end group */

UnderlyingComplexEventTimes.Tag = '2056';

module.exports = UnderlyingComplexEventTimes;