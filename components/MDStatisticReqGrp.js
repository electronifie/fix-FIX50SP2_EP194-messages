var NoMDStatistics = require('../fields/NoMDStatistics');
var MDStatisticParameters = require('../components/MDStatisticParameters');
var MDStatisticID = require('../fields/MDStatisticID');

function MDStatisticReqGrp (mdstatisticReqGrp) {
  this.message = mdstatisticReqGrp;
}

/* group */

/* component */
MDStatisticReqGrp.prototype.mdstatisticParameters = function () {
  return this.message.groups[MDStatisticParameters.Tag]
    .map(function (mdstatisticParameters) {
      return new MDStatisticParameters(mdstatisticParameters);
  });
};

/* field */
MDStatisticReqGrp.prototype.mdstatisticId = function () {
  return new MDStatisticID(this.message.tags[MDStatisticID.Tag]);
};

/* end group */

MDStatisticReqGrp.Tag = '2474';

module.exports = MDStatisticReqGrp;