var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecTypesGrp = require('../components/SecTypesGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityResponseType = require('../fields/SecurityResponseType');
var TotNoSecurityTypes = require('../fields/TotNoSecurityTypes');
var LastFragment = require('../fields/LastFragment');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');

function SecurityTypes (securityTypes) {
  this.message = securityTypes;
}

SecurityTypes.prototype.applicationSequenceControl = function () {
  return this.message.groups[SecurityTypes.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityTypes.prototype.secTypesGrp = function () {
  return this.message.groups[SecurityTypes.Tags.SecTypesGrp]
    .map(function (secTypesGrp) {
      return new SecTypesGrp(secTypesGrp);
  });
};

SecurityTypes.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityTypes.Tags.SecurityReqID]);
};

SecurityTypes.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityTypes.Tags.SecurityResponseID]);
};

SecurityTypes.prototype.securityResponseType = function () {
  return new SecurityResponseType(this.message.tags[SecurityTypes.Tags.SecurityResponseType]);
};

SecurityTypes.prototype.totNoSecurityTypes = function () {
  return new TotNoSecurityTypes(this.message.tags[SecurityTypes.Tags.TotNoSecurityTypes]);
};

SecurityTypes.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityTypes.Tags.LastFragment]);
};

SecurityTypes.prototype.text = function () {
  return new Text(this.message.tags[SecurityTypes.Tags.Text]);
};

SecurityTypes.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityTypes.Tags.EncodedTextLen]);
};

SecurityTypes.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityTypes.Tags.EncodedText]);
};

SecurityTypes.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityTypes.Tags.MarketID]);
};

SecurityTypes.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityTypes.Tags.MarketSegmentID]);
};

SecurityTypes.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityTypes.Tags.TradingSessionID]);
};

SecurityTypes.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityTypes.Tags.TradingSessionSubID]);
};

SecurityTypes.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityTypes.Tags.SubscriptionRequestType]);
};

SecurityTypes.Tags = {
  ApplicationSequenceControl: '1180',
  SecTypesGrp: '558',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityResponseType: '323',
  TotNoSecurityTypes: '557',
  LastFragment: '893',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SubscriptionRequestType: '263',
};

SecurityTypes.msgType = 'w';

module.exports = SecurityTypes;