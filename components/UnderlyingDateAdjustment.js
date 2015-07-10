var UnderlyingBusinessCenterGrp = require('../components/UnderlyingBusinessCenterGrp');
var UnderlyingBusinessDayConvention = require('../fields/UnderlyingBusinessDayConvention');
var UnderlyingDateRollConvention = require('../fields/UnderlyingDateRollConvention');

function UnderlyingDateAdjustment (underlyingDateAdjustment) {
  this.message = underlyingDateAdjustment;
}
/* component */
UnderlyingDateAdjustment.prototype.underlyingBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingBusinessCenterGrp.Tag]
    .map(function (underlyingBusinessCenterGrp) {
      return new UnderlyingBusinessCenterGrp(underlyingBusinessCenterGrp);
  });
};

/* field */
UnderlyingDateAdjustment.prototype.underlyingBusinessDayConvention = function () {
  return new UnderlyingBusinessDayConvention(this.message.tags[UnderlyingBusinessDayConvention.Tag]);
};

/* field */
UnderlyingDateAdjustment.prototype.underlyingDateRollConvention = function () {
  return new UnderlyingDateRollConvention(this.message.tags[UnderlyingDateRollConvention.Tag]);
};



UnderlyingDateAdjustment.Tag = '40964';

module.exports = UnderlyingDateAdjustment;