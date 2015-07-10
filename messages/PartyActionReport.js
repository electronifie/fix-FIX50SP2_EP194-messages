var InstrumentScope = require('../components/InstrumentScope');
var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RelatedPartyDetailGrp = require('../components/RelatedPartyDetailGrp');
var EffectiveBusinessDate = require('../fields/EffectiveBusinessDate');
var PartyActionRequestID = require('../fields/PartyActionRequestID');
var PartyActionReportID = require('../fields/PartyActionReportID');
var PartyActionType = require('../fields/PartyActionType');
var PartyActionResponse = require('../fields/PartyActionResponse');
var PartyActionRejectReason = require('../fields/PartyActionRejectReason');
var ApplTestMessageIndicator = require('../fields/ApplTestMessageIndicator');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');

function PartyActionReport (partyActionReport) {
  this.message = partyActionReport;
}

PartyActionReport.prototype.instrumentScope = function () {
  return this.message.groups[PartyActionReport.Tags.InstrumentScope]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

PartyActionReport.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyActionReport.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyActionReport.prototype.parties = function () {
  return this.message.groups[PartyActionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyActionReport.prototype.relatedPartyDetailGrp = function () {
  return this.message.groups[PartyActionReport.Tags.RelatedPartyDetailGrp]
    .map(function (relatedPartyDetailGrp) {
      return new RelatedPartyDetailGrp(relatedPartyDetailGrp);
  });
};

PartyActionReport.prototype.effectiveBusinessDate = function () {
  return new EffectiveBusinessDate(this.message.tags[PartyActionReport.Tags.EffectiveBusinessDate]);
};

PartyActionReport.prototype.partyActionRequestId = function () {
  return new PartyActionRequestID(this.message.tags[PartyActionReport.Tags.PartyActionRequestID]);
};

PartyActionReport.prototype.partyActionReportId = function () {
  return new PartyActionReportID(this.message.tags[PartyActionReport.Tags.PartyActionReportID]);
};

PartyActionReport.prototype.partyActionType = function () {
  return new PartyActionType(this.message.tags[PartyActionReport.Tags.PartyActionType]);
};

PartyActionReport.prototype.partyActionResponse = function () {
  return new PartyActionResponse(this.message.tags[PartyActionReport.Tags.PartyActionResponse]);
};

PartyActionReport.prototype.partyActionRejectReason = function () {
  return new PartyActionRejectReason(this.message.tags[PartyActionReport.Tags.PartyActionRejectReason]);
};

PartyActionReport.prototype.applTestMessageIndicator = function () {
  return new ApplTestMessageIndicator(this.message.tags[PartyActionReport.Tags.ApplTestMessageIndicator]);
};

PartyActionReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyActionReport.Tags.RejectText]);
};

PartyActionReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyActionReport.Tags.EncodedRejectTextLen]);
};

PartyActionReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyActionReport.Tags.EncodedRejectText]);
};

PartyActionReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[PartyActionReport.Tags.MarketID]);
};

PartyActionReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[PartyActionReport.Tags.MarketSegmentID]);
};

PartyActionReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyActionReport.Tags.TransactTime]);
};

PartyActionReport.prototype.text = function () {
  return new Text(this.message.tags[PartyActionReport.Tags.Text]);
};

PartyActionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyActionReport.Tags.EncodedTextLen]);
};

PartyActionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyActionReport.Tags.EncodedText]);
};

PartyActionReport.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[PartyActionReport.Tags.CopyMsgIndicator]);
};

PartyActionReport.Tags = {
  InstrumentScope: '1536',
  RequestingPartyGrp: '1657',
  Parties: '453',
  RelatedPartyDetailGrp: '1562',
  EffectiveBusinessDate: '2400',
  PartyActionRequestID: '2328',
  PartyActionReportID: '2331',
  PartyActionType: '2329',
  PartyActionResponse: '2332',
  PartyActionRejectReason: '2333',
  ApplTestMessageIndicator: '2330',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  CopyMsgIndicator: '797',
};

PartyActionReport.msgType = 'DI';

module.exports = PartyActionReport;