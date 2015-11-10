var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RelatedPartyDetailGrp = require('../components/RelatedPartyDetailGrp');
var Instrument = require('../components/Instrument');
var LegOrdGrp = require('../components/LegOrdGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var RiskLimitCheckRequestID = require('../fields/RiskLimitCheckRequestID');
var RiskLimitCheckID = require('../fields/RiskLimitCheckID');
var RiskLimitCheckTransType = require('../fields/RiskLimitCheckTransType');
var RiskLimitCheckType = require('../fields/RiskLimitCheckType');
var RiskLimitCheckRequestRefID = require('../fields/RiskLimitCheckRequestRefID');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var RiskLimitCheckRequestType = require('../fields/RiskLimitCheckRequestType');
var RiskLimitCheckAmount = require('../fields/RiskLimitCheckAmount');
var Currency = require('../fields/Currency');
var RiskLimitID = require('../fields/RiskLimitID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitCheckRequest (partyRiskLimitCheckRequest) {
  this.message = partyRiskLimitCheckRequest;
}

PartyRiskLimitCheckRequest.prototype.requestingPartyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.RequestingPartyGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyRiskLimitCheckRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyRiskLimitCheckRequest.prototype.relatedPartyDetailGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.RelatedPartyDetailGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.RelatedPartyDetailGrp]
    .map(function (relatedPartyDetailGrp) {
      return new RelatedPartyDetailGrp(relatedPartyDetailGrp);
  });
};

PartyRiskLimitCheckRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PartyRiskLimitCheckRequest.prototype.legOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.LegOrdGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.LegOrdGrp]
    .map(function (legOrdGrp) {
      return new LegOrdGrp(legOrdGrp);
  });
};

PartyRiskLimitCheckRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitCheckRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitCheckRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckRequestId = function () {
  return new RiskLimitCheckRequestID(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckRequestID]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckId = function () {
  return new RiskLimitCheckID(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckID]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckTransType = function () {
  return new RiskLimitCheckTransType(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckTransType]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckType = function () {
  return new RiskLimitCheckType(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckType]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckRequestRefId = function () {
  return new RiskLimitCheckRequestRefID(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckRequestRefID]);
};

PartyRiskLimitCheckRequest.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[PartyRiskLimitCheckRequest.Tags.RefOrderID]);
};

PartyRiskLimitCheckRequest.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[PartyRiskLimitCheckRequest.Tags.RefOrderIDSource]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckRequestType = function () {
  return new RiskLimitCheckRequestType(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckRequestType]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitCheckAmount = function () {
  return new RiskLimitCheckAmount(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitCheckAmount]);
};

PartyRiskLimitCheckRequest.prototype.currency = function () {
  return new Currency(this.message.tags[PartyRiskLimitCheckRequest.Tags.Currency]);
};

PartyRiskLimitCheckRequest.prototype.riskLimitId = function () {
  return new RiskLimitID(this.message.tags[PartyRiskLimitCheckRequest.Tags.RiskLimitID]);
};

PartyRiskLimitCheckRequest.prototype.side = function () {
  return new Side(this.message.tags[PartyRiskLimitCheckRequest.Tags.Side]);
};

PartyRiskLimitCheckRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyRiskLimitCheckRequest.Tags.TransactTime]);
};

PartyRiskLimitCheckRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitCheckRequest.Tags.Text]);
};

PartyRiskLimitCheckRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitCheckRequest.Tags.EncodedTextLen]);
};

PartyRiskLimitCheckRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitCheckRequest.Tags.EncodedText]);
};

PartyRiskLimitCheckRequest.Tags = {
  RequestingPartyGrp: '1657',
  Parties: '453',
  RelatedPartyDetailGrp: '1562',
  Instrument: '55',
  LegOrdGrp: '555',
  UndInstrmtGrp: '711',
  RiskLimitCheckRequestID: '2318',
  RiskLimitCheckID: '2319',
  RiskLimitCheckTransType: '2320',
  RiskLimitCheckType: '2321',
  RiskLimitCheckRequestRefID: '2322',
  RefOrderID: '1080',
  RefOrderIDSource: '1081',
  RiskLimitCheckRequestType: '2323',
  RiskLimitCheckAmount: '2324',
  Currency: '15',
  RiskLimitID: '1670',
  Side: '54',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitCheckRequest.msgType = 'DF';

module.exports = PartyRiskLimitCheckRequest;