var InstrumentScope = require('../components/InstrumentScope');
var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RelatedPartyDetailGrp = require('../components/RelatedPartyDetailGrp');
var PartyActionRequestID = require('../fields/PartyActionRequestID');
var PartyActionType = require('../fields/PartyActionType');
var ApplTestMessageIndicator = require('../fields/ApplTestMessageIndicator');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyActionRequest (partyActionRequest) {
  this.message = partyActionRequest;
}

PartyActionRequest.prototype.instrumentScope = function () {
  return this.message.groups[PartyActionRequest.Tags.InstrumentScope]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

PartyActionRequest.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyActionRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyActionRequest.prototype.parties = function () {
  return this.message.groups[PartyActionRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyActionRequest.prototype.relatedPartyDetailGrp = function () {
  return this.message.groups[PartyActionRequest.Tags.RelatedPartyDetailGrp]
    .map(function (relatedPartyDetailGrp) {
      return new RelatedPartyDetailGrp(relatedPartyDetailGrp);
  });
};

PartyActionRequest.prototype.partyActionRequestId = function () {
  return new PartyActionRequestID(this.message.tags[PartyActionRequest.Tags.PartyActionRequestID]);
};

PartyActionRequest.prototype.partyActionType = function () {
  return new PartyActionType(this.message.tags[PartyActionRequest.Tags.PartyActionType]);
};

PartyActionRequest.prototype.applTestMessageIndicator = function () {
  return new ApplTestMessageIndicator(this.message.tags[PartyActionRequest.Tags.ApplTestMessageIndicator]);
};

PartyActionRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[PartyActionRequest.Tags.MarketID]);
};

PartyActionRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[PartyActionRequest.Tags.MarketSegmentID]);
};

PartyActionRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyActionRequest.Tags.TransactTime]);
};

PartyActionRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyActionRequest.Tags.Text]);
};

PartyActionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyActionRequest.Tags.EncodedTextLen]);
};

PartyActionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyActionRequest.Tags.EncodedText]);
};

PartyActionRequest.Tags = {
  InstrumentScope: '1536',
  RequestingPartyGrp: '1657',
  Parties: '453',
  RelatedPartyDetailGrp: '1562',
  PartyActionRequestID: '2328',
  PartyActionType: '2329',
  ApplTestMessageIndicator: '2330',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyActionRequest.msgType = 'DH';

module.exports = PartyActionRequest;