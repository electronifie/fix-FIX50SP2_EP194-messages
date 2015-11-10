var MarginReqmtInqQualGrp = require('../components/MarginReqmtInqQualGrp');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var MarginReqmtInqID = require('../fields/MarginReqmtInqID');
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

function MarginRequirementInquiry (marginRequirementInquiry) {
  this.message = marginRequirementInquiry;
}

MarginRequirementInquiry.prototype.marginReqmtInqQualGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementInquiry.Tags.MarginReqmtInqQualGrp] === undefined) return null;
  return this.message.groups[MarginRequirementInquiry.Tags.MarginReqmtInqQualGrp]
    .map(function (marginReqmtInqQualGrp) {
      return new MarginReqmtInqQualGrp(marginReqmtInqQualGrp);
  });
};

MarginRequirementInquiry.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementInquiry.Tags.Parties] === undefined) return null;
  return this.message.groups[MarginRequirementInquiry.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarginRequirementInquiry.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementInquiry.Tags.Instrument] === undefined) return null;
  return this.message.groups[MarginRequirementInquiry.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarginRequirementInquiry.prototype.marginReqmtInqId = function () {
  return new MarginReqmtInqID(this.message.tags[MarginRequirementInquiry.Tags.MarginReqmtInqID]);
};

MarginRequirementInquiry.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[MarginRequirementInquiry.Tags.SubscriptionRequestType]);
};

MarginRequirementInquiry.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[MarginRequirementInquiry.Tags.ResponseTransportType]);
};

MarginRequirementInquiry.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[MarginRequirementInquiry.Tags.ResponseDestination]);
};

MarginRequirementInquiry.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[MarginRequirementInquiry.Tags.ClearingBusinessDate]);
};

MarginRequirementInquiry.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[MarginRequirementInquiry.Tags.SettlSessID]);
};

MarginRequirementInquiry.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[MarginRequirementInquiry.Tags.SettlSessSubID]);
};

MarginRequirementInquiry.prototype.marginClass = function () {
  return new MarginClass(this.message.tags[MarginRequirementInquiry.Tags.MarginClass]);
};

MarginRequirementInquiry.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarginRequirementInquiry.Tags.TransactTime]);
};

MarginRequirementInquiry.prototype.text = function () {
  return new Text(this.message.tags[MarginRequirementInquiry.Tags.Text]);
};

MarginRequirementInquiry.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarginRequirementInquiry.Tags.EncodedTextLen]);
};

MarginRequirementInquiry.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarginRequirementInquiry.Tags.EncodedText]);
};

MarginRequirementInquiry.Tags = {
  MarginReqmtInqQualGrp: '1636',
  Parties: '453',
  Instrument: '55',
  MarginReqmtInqID: '1635',
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

MarginRequirementInquiry.msgType = 'CH';

module.exports = MarginRequirementInquiry;