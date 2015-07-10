var ApplIDReportGrp = require('../components/ApplIDReportGrp');
var ApplReportID = require('../fields/ApplReportID');
var ApplReqID = require('../fields/ApplReqID');
var ApplReportType = require('../fields/ApplReportType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ApplicationMessageReport (applicationMessageReport) {
  this.message = applicationMessageReport;
}

ApplicationMessageReport.prototype.applIdreportGrp = function () {
  return this.message.groups[ApplicationMessageReport.Tags.ApplIDReportGrp]
    .map(function (applIdreportGrp) {
      return new ApplIDReportGrp(applIdreportGrp);
  });
};

ApplicationMessageReport.prototype.applReportId = function () {
  return new ApplReportID(this.message.tags[ApplicationMessageReport.Tags.ApplReportID]);
};

ApplicationMessageReport.prototype.applReqId = function () {
  return new ApplReqID(this.message.tags[ApplicationMessageReport.Tags.ApplReqID]);
};

ApplicationMessageReport.prototype.applReportType = function () {
  return new ApplReportType(this.message.tags[ApplicationMessageReport.Tags.ApplReportType]);
};

ApplicationMessageReport.prototype.text = function () {
  return new Text(this.message.tags[ApplicationMessageReport.Tags.Text]);
};

ApplicationMessageReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ApplicationMessageReport.Tags.EncodedTextLen]);
};

ApplicationMessageReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ApplicationMessageReport.Tags.EncodedText]);
};

ApplicationMessageReport.Tags = {
  ApplIDReportGrp: '1351',
  ApplReportID: '1356',
  ApplReqID: '1346',
  ApplReportType: '1426',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ApplicationMessageReport.msgType = 'BY';

module.exports = ApplicationMessageReport;