var NoUnderlyingEvents = require('../fields/NoUnderlyingEvents');
var UnderlyingEventType = require('../fields/UnderlyingEventType');
var UnderlyingEventDate = require('../fields/UnderlyingEventDate');
var UnderlyingEventTime = require('../fields/UnderlyingEventTime');
var UnderlyingEventTimeUnit = require('../fields/UnderlyingEventTimeUnit');
var UnderlyingEventTimePeriod = require('../fields/UnderlyingEventTimePeriod');
var UnderlyingEventMonthYear = require('../fields/UnderlyingEventMonthYear');
var UnderlyingEventPx = require('../fields/UnderlyingEventPx');
var UnderlyingEventText = require('../fields/UnderlyingEventText');
var EncodedUnderlyingEventTextLen = require('../fields/EncodedUnderlyingEventTextLen');
var EncodedUnderlyingEventText = require('../fields/EncodedUnderlyingEventText');

function UnderlyingEvntGrp (underlyingEvntGrp) {
  this.message = underlyingEvntGrp;
}

/* group */

/* field */
UnderlyingEvntGrp.prototype.underlyingEventType = function () {
  return new UnderlyingEventType(this.message.tags[UnderlyingEventType.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventDate = function () {
  return new UnderlyingEventDate(this.message.tags[UnderlyingEventDate.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventTime = function () {
  return new UnderlyingEventTime(this.message.tags[UnderlyingEventTime.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventTimeUnit = function () {
  return new UnderlyingEventTimeUnit(this.message.tags[UnderlyingEventTimeUnit.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventTimePeriod = function () {
  return new UnderlyingEventTimePeriod(this.message.tags[UnderlyingEventTimePeriod.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventMonthYear = function () {
  return new UnderlyingEventMonthYear(this.message.tags[UnderlyingEventMonthYear.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventPx = function () {
  return new UnderlyingEventPx(this.message.tags[UnderlyingEventPx.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.underlyingEventText = function () {
  return new UnderlyingEventText(this.message.tags[UnderlyingEventText.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.encodedUnderlyingEventTextLen = function () {
  return new EncodedUnderlyingEventTextLen(this.message.tags[EncodedUnderlyingEventTextLen.Tag]);
};

/* field */
UnderlyingEvntGrp.prototype.encodedUnderlyingEventText = function () {
  return new EncodedUnderlyingEventText(this.message.tags[EncodedUnderlyingEventText.Tag]);
};

/* end group */

UnderlyingEvntGrp.Tag = '1981';

module.exports = UnderlyingEvntGrp;