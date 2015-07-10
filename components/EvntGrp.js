var NoEvents = require('../fields/NoEvents');
var EventType = require('../fields/EventType');
var EventDate = require('../fields/EventDate');
var EventTime = require('../fields/EventTime');
var EventTimeUnit = require('../fields/EventTimeUnit');
var EventTimePeriod = require('../fields/EventTimePeriod');
var EventMonthYear = require('../fields/EventMonthYear');
var EventPx = require('../fields/EventPx');
var EventText = require('../fields/EventText');
var EncodedEventTextLen = require('../fields/EncodedEventTextLen');
var EncodedEventText = require('../fields/EncodedEventText');

function EvntGrp (evntGrp) {
  this.message = evntGrp;
}

/* group */

/* field */
EvntGrp.prototype.eventType = function () {
  return new EventType(this.message.tags[EventType.Tag]);
};

/* field */
EvntGrp.prototype.eventDate = function () {
  return new EventDate(this.message.tags[EventDate.Tag]);
};

/* field */
EvntGrp.prototype.eventTime = function () {
  return new EventTime(this.message.tags[EventTime.Tag]);
};

/* field */
EvntGrp.prototype.eventTimeUnit = function () {
  return new EventTimeUnit(this.message.tags[EventTimeUnit.Tag]);
};

/* field */
EvntGrp.prototype.eventTimePeriod = function () {
  return new EventTimePeriod(this.message.tags[EventTimePeriod.Tag]);
};

/* field */
EvntGrp.prototype.eventMonthYear = function () {
  return new EventMonthYear(this.message.tags[EventMonthYear.Tag]);
};

/* field */
EvntGrp.prototype.eventPx = function () {
  return new EventPx(this.message.tags[EventPx.Tag]);
};

/* field */
EvntGrp.prototype.eventText = function () {
  return new EventText(this.message.tags[EventText.Tag]);
};

/* field */
EvntGrp.prototype.encodedEventTextLen = function () {
  return new EncodedEventTextLen(this.message.tags[EncodedEventTextLen.Tag]);
};

/* field */
EvntGrp.prototype.encodedEventText = function () {
  return new EncodedEventText(this.message.tags[EncodedEventText.Tag]);
};

/* end group */

EvntGrp.Tag = '864';

module.exports = EvntGrp;