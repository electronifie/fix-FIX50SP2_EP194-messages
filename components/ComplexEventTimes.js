var NoComplexEventTimes = require('../fields/NoComplexEventTimes');
var ComplexEventStartTime = require('../fields/ComplexEventStartTime');
var ComplexEventEndTime = require('../fields/ComplexEventEndTime');

function ComplexEventTimes (complexEventTimes) {
  this.message = complexEventTimes;
}

/* group */

/* field */
ComplexEventTimes.prototype.complexEventStartTime = function () {
  return new ComplexEventStartTime(this.message.tags[ComplexEventStartTime.Tag]);
};

/* field */
ComplexEventTimes.prototype.complexEventEndTime = function () {
  return new ComplexEventEndTime(this.message.tags[ComplexEventEndTime.Tag]);
};

/* end group */

ComplexEventTimes.Tag = '1494';

module.exports = ComplexEventTimes;