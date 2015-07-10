var StrmAsgnRptGrp = require('../components/StrmAsgnRptGrp');
var StreamAsgnRptID = require('../fields/StreamAsgnRptID');
var StreamAsgnReqType = require('../fields/StreamAsgnReqType');
var StreamAsgnReqID = require('../fields/StreamAsgnReqID');

function StreamAssignmentReport (streamAssignmentReport) {
  this.message = streamAssignmentReport;
}

StreamAssignmentReport.prototype.strmAsgnRptGrp = function () {
  return this.message.groups[StreamAssignmentReport.Tags.StrmAsgnRptGrp]
    .map(function (strmAsgnRptGrp) {
      return new StrmAsgnRptGrp(strmAsgnRptGrp);
  });
};

StreamAssignmentReport.prototype.streamAsgnRptId = function () {
  return new StreamAsgnRptID(this.message.tags[StreamAssignmentReport.Tags.StreamAsgnRptID]);
};

StreamAssignmentReport.prototype.streamAsgnReqType = function () {
  return new StreamAsgnReqType(this.message.tags[StreamAssignmentReport.Tags.StreamAsgnReqType]);
};

StreamAssignmentReport.prototype.streamAsgnReqId = function () {
  return new StreamAsgnReqID(this.message.tags[StreamAssignmentReport.Tags.StreamAsgnReqID]);
};

StreamAssignmentReport.Tags = {
  StrmAsgnRptGrp: '1499',
  StreamAsgnRptID: '1501',
  StreamAsgnReqType: '1498',
  StreamAsgnReqID: '1497',
};

StreamAssignmentReport.msgType = 'CD';

module.exports = StreamAssignmentReport;