var Parties = require('../components/Parties');
var CollRptID = require('../fields/CollRptID');
var TransactTime = require('../fields/TransactTime');
var CollRptStatus = require('../fields/CollRptStatus');
var CollRptRejectReason = require('../fields/CollRptRejectReason');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function CollateralReportAck (collateralReportAck) {
  this.message = collateralReportAck;
}

CollateralReportAck.prototype.parties = function () {
  return this.message.groups[CollateralReportAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralReportAck.prototype.collRptId = function () {
  return new CollRptID(this.message.tags[CollateralReportAck.Tags.CollRptID]);
};

CollateralReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CollateralReportAck.Tags.TransactTime]);
};

CollateralReportAck.prototype.collRptStatus = function () {
  return new CollRptStatus(this.message.tags[CollateralReportAck.Tags.CollRptStatus]);
};

CollateralReportAck.prototype.collRptRejectReason = function () {
  return new CollRptRejectReason(this.message.tags[CollateralReportAck.Tags.CollRptRejectReason]);
};

CollateralReportAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[CollateralReportAck.Tags.RejectText]);
};

CollateralReportAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[CollateralReportAck.Tags.EncodedRejectTextLen]);
};

CollateralReportAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[CollateralReportAck.Tags.EncodedRejectText]);
};

CollateralReportAck.prototype.text = function () {
  return new Text(this.message.tags[CollateralReportAck.Tags.Text]);
};

CollateralReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralReportAck.Tags.EncodedTextLen]);
};

CollateralReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralReportAck.Tags.EncodedText]);
};

CollateralReportAck.Tags = {
  Parties: '453',
  CollRptID: '908',
  TransactTime: '60',
  CollRptStatus: '2488',
  CollRptRejectReason: '2487',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

CollateralReportAck.msgType = 'DQ';

module.exports = CollateralReportAck;