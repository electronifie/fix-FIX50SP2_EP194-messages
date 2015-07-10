var StreamAsgnAckType = require('../fields/StreamAsgnAckType');
var StreamAsgnRptID = require('../fields/StreamAsgnRptID');
var StreamAsgnRejReason = require('../fields/StreamAsgnRejReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function StreamAssignmentReportACK (streamAssignmentReportAck) {
  this.message = streamAssignmentReportAck;
}

StreamAssignmentReportACK.prototype.streamAsgnAckType = function () {
  return new StreamAsgnAckType(this.message.tags[StreamAssignmentReportACK.Tags.StreamAsgnAckType]);
};

StreamAssignmentReportACK.prototype.streamAsgnRptId = function () {
  return new StreamAsgnRptID(this.message.tags[StreamAssignmentReportACK.Tags.StreamAsgnRptID]);
};

StreamAssignmentReportACK.prototype.streamAsgnRejReason = function () {
  return new StreamAsgnRejReason(this.message.tags[StreamAssignmentReportACK.Tags.StreamAsgnRejReason]);
};

StreamAssignmentReportACK.prototype.text = function () {
  return new Text(this.message.tags[StreamAssignmentReportACK.Tags.Text]);
};

StreamAssignmentReportACK.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[StreamAssignmentReportACK.Tags.EncodedTextLen]);
};

StreamAssignmentReportACK.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[StreamAssignmentReportACK.Tags.EncodedText]);
};

StreamAssignmentReportACK.Tags = {
  StreamAsgnAckType: '1503',
  StreamAsgnRptID: '1501',
  StreamAsgnRejReason: '1502',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

StreamAssignmentReportACK.msgType = 'CE';

module.exports = StreamAssignmentReportACK;