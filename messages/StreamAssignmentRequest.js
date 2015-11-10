var StrmAsgnReqGrp = require('../components/StrmAsgnReqGrp');
var StreamAsgnReqID = require('../fields/StreamAsgnReqID');
var StreamAsgnReqType = require('../fields/StreamAsgnReqType');

function StreamAssignmentRequest (streamAssignmentRequest) {
  this.message = streamAssignmentRequest;
}

StreamAssignmentRequest.prototype.strmAsgnReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[StreamAssignmentRequest.Tags.StrmAsgnReqGrp] === undefined) return null;
  return this.message.groups[StreamAssignmentRequest.Tags.StrmAsgnReqGrp]
    .map(function (strmAsgnReqGrp) {
      return new StrmAsgnReqGrp(strmAsgnReqGrp);
  });
};

StreamAssignmentRequest.prototype.streamAsgnReqId = function () {
  return new StreamAsgnReqID(this.message.tags[StreamAssignmentRequest.Tags.StreamAsgnReqID]);
};

StreamAssignmentRequest.prototype.streamAsgnReqType = function () {
  return new StreamAsgnReqType(this.message.tags[StreamAssignmentRequest.Tags.StreamAsgnReqType]);
};

StreamAssignmentRequest.Tags = {
  StrmAsgnReqGrp: '1499',
  StreamAsgnReqID: '1497',
  StreamAsgnReqType: '1498',
};

StreamAssignmentRequest.msgType = 'CC';

module.exports = StreamAssignmentRequest;