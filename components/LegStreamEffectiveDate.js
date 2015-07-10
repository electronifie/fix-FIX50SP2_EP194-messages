var LegStreamEffectiveDateBusinessCenterGrp = require('../components/LegStreamEffectiveDateBusinessCenterGrp');
var LegStreamEffectiveDateUnadjusted = require('../fields/LegStreamEffectiveDateUnadjusted');
var LegStreamEffectiveDateBusinessDayConvention = require('../fields/LegStreamEffectiveDateBusinessDayConvention');
var LegStreamEffectiveDateRelativeTo = require('../fields/LegStreamEffectiveDateRelativeTo');
var LegStreamEffectiveDateOffsetPeriod = require('../fields/LegStreamEffectiveDateOffsetPeriod');
var LegStreamEffectiveDateOffsetUnit = require('../fields/LegStreamEffectiveDateOffsetUnit');
var LegStreamEffectiveDateOffsetDayType = require('../fields/LegStreamEffectiveDateOffsetDayType');
var LegStreamEffectiveDateAdjusted = require('../fields/LegStreamEffectiveDateAdjusted');

function LegStreamEffectiveDate (legStreamEffectiveDate) {
  this.message = legStreamEffectiveDate;
}
/* component */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateBusinessCenterGrp = function () {
  return this.message.groups[LegStreamEffectiveDateBusinessCenterGrp.Tag]
    .map(function (legStreamEffectiveDateBusinessCenterGrp) {
      return new LegStreamEffectiveDateBusinessCenterGrp(legStreamEffectiveDateBusinessCenterGrp);
  });
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateUnadjusted = function () {
  return new LegStreamEffectiveDateUnadjusted(this.message.tags[LegStreamEffectiveDateUnadjusted.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateBusinessDayConvention = function () {
  return new LegStreamEffectiveDateBusinessDayConvention(this.message.tags[LegStreamEffectiveDateBusinessDayConvention.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateRelativeTo = function () {
  return new LegStreamEffectiveDateRelativeTo(this.message.tags[LegStreamEffectiveDateRelativeTo.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateOffsetPeriod = function () {
  return new LegStreamEffectiveDateOffsetPeriod(this.message.tags[LegStreamEffectiveDateOffsetPeriod.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateOffsetUnit = function () {
  return new LegStreamEffectiveDateOffsetUnit(this.message.tags[LegStreamEffectiveDateOffsetUnit.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateOffsetDayType = function () {
  return new LegStreamEffectiveDateOffsetDayType(this.message.tags[LegStreamEffectiveDateOffsetDayType.Tag]);
};

/* field */
LegStreamEffectiveDate.prototype.legStreamEffectiveDateAdjusted = function () {
  return new LegStreamEffectiveDateAdjusted(this.message.tags[LegStreamEffectiveDateAdjusted.Tag]);
};



LegStreamEffectiveDate.Tag = '40249';

module.exports = LegStreamEffectiveDate;