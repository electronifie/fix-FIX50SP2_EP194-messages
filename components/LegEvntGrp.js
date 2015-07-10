var NoLegEvents = require('../fields/NoLegEvents');
var LegEventType = require('../fields/LegEventType');
var LegEventDate = require('../fields/LegEventDate');
var LegEventTime = require('../fields/LegEventTime');
var LegEventTimeUnit = require('../fields/LegEventTimeUnit');
var LegEventTimePeriod = require('../fields/LegEventTimePeriod');
var LegEventMonthYear = require('../fields/LegEventMonthYear');
var LegEventPx = require('../fields/LegEventPx');
var LegEventText = require('../fields/LegEventText');
var EncodedLegEventTextLen = require('../fields/EncodedLegEventTextLen');
var EncodedLegEventText = require('../fields/EncodedLegEventText');

function LegEvntGrp (legEvntGrp) {
  this.message = legEvntGrp;
}

/* group */

/* field */
LegEvntGrp.prototype.legEventType = function () {
  return new LegEventType(this.message.tags[LegEventType.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventDate = function () {
  return new LegEventDate(this.message.tags[LegEventDate.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventTime = function () {
  return new LegEventTime(this.message.tags[LegEventTime.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventTimeUnit = function () {
  return new LegEventTimeUnit(this.message.tags[LegEventTimeUnit.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventTimePeriod = function () {
  return new LegEventTimePeriod(this.message.tags[LegEventTimePeriod.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventMonthYear = function () {
  return new LegEventMonthYear(this.message.tags[LegEventMonthYear.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventPx = function () {
  return new LegEventPx(this.message.tags[LegEventPx.Tag]);
};

/* field */
LegEvntGrp.prototype.legEventText = function () {
  return new LegEventText(this.message.tags[LegEventText.Tag]);
};

/* field */
LegEvntGrp.prototype.encodedLegEventTextLen = function () {
  return new EncodedLegEventTextLen(this.message.tags[EncodedLegEventTextLen.Tag]);
};

/* field */
LegEvntGrp.prototype.encodedLegEventText = function () {
  return new EncodedLegEventText(this.message.tags[EncodedLegEventText.Tag]);
};

/* end group */

LegEvntGrp.Tag = '2059';

module.exports = LegEvntGrp;