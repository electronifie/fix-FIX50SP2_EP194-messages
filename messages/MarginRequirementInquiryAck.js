var MarginReqmtInqQualGrp = require('../components/MarginReqmtInqQualGrp');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var MarginReqmtInqID = require('../fields/MarginReqmtInqID');
var MarginReqmtInqStatus = require('../fields/MarginReqmtInqStatus');
var MarginReqmtInqResult = require('../fields/MarginReqmtInqResult');
var TotNumReports = require('../fields/TotNumReports');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var MarginClass = require('../fields/MarginClass');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MarginRequirementInquiryAck (marginRequirementInquiryAck) {
  this.message = marginRequirementInquiryAck;
}

MarginRequirementInquiryAck.prototype.marginReqmtInqQualGrp = function () {
  return this.message.groups[MarginRequirementInquiryAck.Tags.MarginReqmtInqQualGrp]
    .map(function (marginReqmtInqQualGrp) {
      return new MarginReqmtInqQualGrp(marginReqmtInqQualGrp);
  });
};

MarginRequirementInquiryAck.prototype.parties = function () {
  return this.message.groups[MarginRequirementInquiryAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarginRequirementInquiryAck.prototype.instrument = function () {
  return this.message.groups[MarginRequirementInquiryAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarginRequirementInquiryAck.prototype.marginReqmtInqId = function () {
  return new MarginReqmtInqID(this.message.tags[MarginRequirementInquiryAck.Tags.MarginReqmtInqID]);
};

MarginRequirementInquiryAck.prototype.marginReqmtInqStatus = function () {
  return new MarginReqmtInqStatus(this.message.tags[MarginRequirementInquiryAck.Tags.MarginReqmtInqStatus]);
};

MarginRequirementInquiryAck.prototype.marginReqmtInqResult = function () {
  return new MarginReqmtInqResult(this.message.tags[MarginRequirementInquiryAck.Tags.MarginReqmtInqResult]);
};

MarginRequirementInquiryAck.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[MarginRequirementInquiryAck.Tags.TotNumReports]);
};

MarginRequirementInquiryAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[MarginRequirementInquiryAck.Tags.SubscriptionRequestType]);
};

MarginRequirementInquiryAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[MarginRequirementInquiryAck.Tags.ResponseTransportType]);
};

MarginRequirementInquiryAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[MarginRequirementInquiryAck.Tags.ResponseDestination]);
};

MarginRequirementInquiryAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[MarginRequirementInquiryAck.Tags.ClearingBusinessDate]);
};

MarginRequirementInquiryAck.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[MarginRequirementInquiryAck.Tags.SettlSessID]);
};

MarginRequirementInquiryAck.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[MarginRequirementInquiryAck.Tags.SettlSessSubID]);
};

MarginRequirementInquiryAck.prototype.marginClass = function () {
  return new MarginClass(this.message.tags[MarginRequirementInquiryAck.Tags.MarginClass]);
};

MarginRequirementInquiryAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarginRequirementInquiryAck.Tags.TransactTime]);
};

MarginRequirementInquiryAck.prototype.text = function () {
  return new Text(this.message.tags[MarginRequirementInquiryAck.Tags.Text]);
};

MarginRequirementInquiryAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarginRequirementInquiryAck.Tags.EncodedTextLen]);
};

MarginRequirementInquiryAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarginRequirementInquiryAck.Tags.EncodedText]);
};

MarginRequirementInquiryAck.Tags = {
  MarginReqmtInqQualGrp: '1636',
  Parties: '453',
  Instrument: '55',
  MarginReqmtInqID: '1635',
  MarginReqmtInqStatus: '1640',
  MarginReqmtInqResult: '1641',
  TotNumReports: '911',
  SubscriptionRequestType: '263',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlSessSubID: '717',
  MarginClass: '1639',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MarginRequirementInquiryAck.msgType = 'CI';

module.exports = MarginRequirementInquiryAck;