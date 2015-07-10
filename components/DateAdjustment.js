var BusinessCenterGrp = require('../components/BusinessCenterGrp');
var BusinessDayConvention = require('../fields/BusinessDayConvention');
var DateRollConvention = require('../fields/DateRollConvention');

function DateAdjustment (dateAdjustment) {
  this.message = dateAdjustment;
}
/* component */
DateAdjustment.prototype.businessCenterGrp = function () {
  return this.message.groups[BusinessCenterGrp.Tag]
    .map(function (businessCenterGrp) {
      return new BusinessCenterGrp(businessCenterGrp);
  });
};

/* field */
DateAdjustment.prototype.businessDayConvention = function () {
  return new BusinessDayConvention(this.message.tags[BusinessDayConvention.Tag]);
};

/* field */
DateAdjustment.prototype.dateRollConvention = function () {
  return new DateRollConvention(this.message.tags[DateRollConvention.Tag]);
};



DateAdjustment.Tag = '40921';

module.exports = DateAdjustment;