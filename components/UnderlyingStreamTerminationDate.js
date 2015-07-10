var UnderlyingStreamTerminationDateBusinessCenterGrp = require('../components/UnderlyingStreamTerminationDateBusinessCenterGrp');
var UnderlyingStreamTerminationDateUnadjusted = require('../fields/UnderlyingStreamTerminationDateUnadjusted');
var UnderlyingStreamTerminationDateBusinessDayConvention = require('../fields/UnderlyingStreamTerminationDateBusinessDayConvention');
var UnderlyingStreamTerminationDateRelativeTo = require('../fields/UnderlyingStreamTerminationDateRelativeTo');
var UnderlyingStreamTerminationDateOffsetPeriod = require('../fields/UnderlyingStreamTerminationDateOffsetPeriod');
var UnderlyingStreamTerminationDateOffsetUnit = require('../fields/UnderlyingStreamTerminationDateOffsetUnit');
var UnderlyingStreamTerminationDateOffsetDayType = require('../fields/UnderlyingStreamTerminationDateOffsetDayType');
var UnderlyingStreamTerminationDateAdjusted = require('../fields/UnderlyingStreamTerminationDateAdjusted');

function UnderlyingStreamTerminationDate (underlyingStreamTerminationDate) {
  this.message = underlyingStreamTerminationDate;
}
/* component */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingStreamTerminationDateBusinessCenterGrp.Tag]
    .map(function (underlyingStreamTerminationDateBusinessCenterGrp) {
      return new UnderlyingStreamTerminationDateBusinessCenterGrp(underlyingStreamTerminationDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateUnadjusted = function () {
  return new UnderlyingStreamTerminationDateUnadjusted(this.message.tags[UnderlyingStreamTerminationDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateBusinessDayConvention = function () {
  return new UnderlyingStreamTerminationDateBusinessDayConvention(this.message.tags[UnderlyingStreamTerminationDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateRelativeTo = function () {
  return new UnderlyingStreamTerminationDateRelativeTo(this.message.tags[UnderlyingStreamTerminationDateRelativeTo.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateOffsetPeriod = function () {
  return new UnderlyingStreamTerminationDateOffsetPeriod(this.message.tags[UnderlyingStreamTerminationDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateOffsetUnit = function () {
  return new UnderlyingStreamTerminationDateOffsetUnit(this.message.tags[UnderlyingStreamTerminationDateOffsetUnit.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateOffsetDayType = function () {
  return new UnderlyingStreamTerminationDateOffsetDayType(this.message.tags[UnderlyingStreamTerminationDateOffsetDayType.Tag]);
};

/* field */
UnderlyingStreamTerminationDate.prototype.underlyingStreamTerminationDateAdjusted = function () {
  return new UnderlyingStreamTerminationDateAdjusted(this.message.tags[UnderlyingStreamTerminationDateAdjusted.Tag]);
};



UnderlyingStreamTerminationDate.Tag = '40548';

module.exports = UnderlyingStreamTerminationDate;