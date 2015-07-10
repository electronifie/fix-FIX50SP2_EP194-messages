var LegBusinessCenterGrp = require('../components/LegBusinessCenterGrp');
var LegBusinessDayConvention = require('../fields/LegBusinessDayConvention');
var LegDateRollConvention = require('../fields/LegDateRollConvention');

function LegDateAdjustment (legDateAdjustment) {
  this.message = legDateAdjustment;
}
/* component */
LegDateAdjustment.prototype.legBusinessCenterGrp = function () {
  return this.message.groups[LegBusinessCenterGrp.Tag]
    .map(function (legBusinessCenterGrp) {
      return new LegBusinessCenterGrp(legBusinessCenterGrp);
  });
};

/* field */
LegDateAdjustment.prototype.legBusinessDayConvention = function () {
  return new LegBusinessDayConvention(this.message.tags[LegBusinessDayConvention.Tag]);
};

/* field */
LegDateAdjustment.prototype.legDateRollConvention = function () {
  return new LegDateRollConvention(this.message.tags[LegDateRollConvention.Tag]);
};



LegDateAdjustment.Tag = '40925';

module.exports = LegDateAdjustment;