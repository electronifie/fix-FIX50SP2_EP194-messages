var UnderlyingStreamEffectiveDateBusinessCenterGrp = require('../components/UnderlyingStreamEffectiveDateBusinessCenterGrp');
var UnderlyingStreamEffectiveDateUnadjusted = require('../fields/UnderlyingStreamEffectiveDateUnadjusted');
var UnderlyingStreamEffectiveDateBusinessDayConvention = require('../fields/UnderlyingStreamEffectiveDateBusinessDayConvention');
var UnderlyingStreamEffectiveDateRelativeTo = require('../fields/UnderlyingStreamEffectiveDateRelativeTo');
var UnderlyingStreamEffectiveDateOffsetPeriod = require('../fields/UnderlyingStreamEffectiveDateOffsetPeriod');
var UnderlyingStreamEffectiveDateOffsetUnit = require('../fields/UnderlyingStreamEffectiveDateOffsetUnit');
var UnderlyingStreamEffectiveDateOffsetDayType = require('../fields/UnderlyingStreamEffectiveDateOffsetDayType');
var UnderlyingStreamEffectiveDateAdjusted = require('../fields/UnderlyingStreamEffectiveDateAdjusted');

function UnderlyingStreamEffectiveDate (underlyingStreamEffectiveDate) {
  this.message = underlyingStreamEffectiveDate;
}
/* component */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingStreamEffectiveDateBusinessCenterGrp.Tag]
    .map(function (underlyingStreamEffectiveDateBusinessCenterGrp) {
      return new UnderlyingStreamEffectiveDateBusinessCenterGrp(underlyingStreamEffectiveDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateUnadjusted = function () {
  return new UnderlyingStreamEffectiveDateUnadjusted(this.message.tags[UnderlyingStreamEffectiveDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateBusinessDayConvention = function () {
  return new UnderlyingStreamEffectiveDateBusinessDayConvention(this.message.tags[UnderlyingStreamEffectiveDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateRelativeTo = function () {
  return new UnderlyingStreamEffectiveDateRelativeTo(this.message.tags[UnderlyingStreamEffectiveDateRelativeTo.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateOffsetPeriod = function () {
  return new UnderlyingStreamEffectiveDateOffsetPeriod(this.message.tags[UnderlyingStreamEffectiveDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateOffsetUnit = function () {
  return new UnderlyingStreamEffectiveDateOffsetUnit(this.message.tags[UnderlyingStreamEffectiveDateOffsetUnit.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateOffsetDayType = function () {
  return new UnderlyingStreamEffectiveDateOffsetDayType(this.message.tags[UnderlyingStreamEffectiveDateOffsetDayType.Tag]);
};

/* field */
UnderlyingStreamEffectiveDate.prototype.underlyingStreamEffectiveDateAdjusted = function () {
  return new UnderlyingStreamEffectiveDateAdjusted(this.message.tags[UnderlyingStreamEffectiveDateAdjusted.Tag]);
};



UnderlyingStreamEffectiveDate.Tag = '40057';

module.exports = UnderlyingStreamEffectiveDate;