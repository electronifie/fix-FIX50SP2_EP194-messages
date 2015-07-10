var NoMDStatistics = require('../fields/NoMDStatistics');
var MDStatisticParameters = require('../components/MDStatisticParameters');
var MDStatisticID = require('../fields/MDStatisticID');
var MDStatisticTime = require('../fields/MDStatisticTime');
var MDStatisticStatus = require('../fields/MDStatisticStatus');
var MDStatisticValue = require('../fields/MDStatisticValue');
var MDStatisticValueType = require('../fields/MDStatisticValueType');
var MDStatisticValueUnit = require('../fields/MDStatisticValueUnit');

function MDStatisticRptGrp (mdstatisticRptGrp) {
  this.message = mdstatisticRptGrp;
}

/* group */

/* component */
MDStatisticRptGrp.prototype.mdstatisticParameters = function () {
  return this.message.groups[MDStatisticParameters.Tag]
    .map(function (mdstatisticParameters) {
      return new MDStatisticParameters(mdstatisticParameters);
  });
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticId = function () {
  return new MDStatisticID(this.message.tags[MDStatisticID.Tag]);
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticTime = function () {
  return new MDStatisticTime(this.message.tags[MDStatisticTime.Tag]);
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticStatus = function () {
  return new MDStatisticStatus(this.message.tags[MDStatisticStatus.Tag]);
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticValue = function () {
  return new MDStatisticValue(this.message.tags[MDStatisticValue.Tag]);
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticValueType = function () {
  return new MDStatisticValueType(this.message.tags[MDStatisticValueType.Tag]);
};

/* field */
MDStatisticRptGrp.prototype.mdstatisticValueUnit = function () {
  return new MDStatisticValueUnit(this.message.tags[MDStatisticValueUnit.Tag]);
};

/* end group */

MDStatisticRptGrp.Tag = '2474';

module.exports = MDStatisticRptGrp;