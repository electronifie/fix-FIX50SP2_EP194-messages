var ApplIDRequestGrp = require('../components/ApplIDRequestGrp');
var Parties = require('../components/Parties');
var ApplReqID = require('../fields/ApplReqID');
var ApplReqType = require('../fields/ApplReqType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ApplicationMessageRequest (applicationMessageRequest) {
  this.message = applicationMessageRequest;
}

ApplicationMessageRequest.prototype.applIdrequestGrp = function () {
  return this.message.groups[ApplicationMessageRequest.Tags.ApplIDRequestGrp]
    .map(function (applIdrequestGrp) {
      return new ApplIDRequestGrp(applIdrequestGrp);
  });
};

ApplicationMessageRequest.prototype.parties = function () {
  return this.message.groups[ApplicationMessageRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

ApplicationMessageRequest.prototype.applReqId = function () {
  return new ApplReqID(this.message.tags[ApplicationMessageRequest.Tags.ApplReqID]);
};

ApplicationMessageRequest.prototype.applReqType = function () {
  return new ApplReqType(this.message.tags[ApplicationMessageRequest.Tags.ApplReqType]);
};

ApplicationMessageRequest.prototype.text = function () {
  return new Text(this.message.tags[ApplicationMessageRequest.Tags.Text]);
};

ApplicationMessageRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ApplicationMessageRequest.Tags.EncodedTextLen]);
};

ApplicationMessageRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ApplicationMessageRequest.Tags.EncodedText]);
};

ApplicationMessageRequest.Tags = {
  ApplIDRequestGrp: '1351',
  Parties: '453',
  ApplReqID: '1346',
  ApplReqType: '1347',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ApplicationMessageRequest.msgType = 'BW';

module.exports = ApplicationMessageRequest;