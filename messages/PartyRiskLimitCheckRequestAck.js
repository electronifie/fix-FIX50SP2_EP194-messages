var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RelatedPartyDetailGrp = require('../components/RelatedPartyDetailGrp');
var Instrument = require('../components/Instrument');
var LegOrdGrp = require('../components/LegOrdGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var RiskLimitCheckRequestID = require('../fields/RiskLimitCheckRequestID');
var RiskLimitCheckID = require('../fields/RiskLimitCheckID');
var RiskLimitCheckRequestStatus = require('../fields/RiskLimitCheckRequestStatus');
var RiskLimitCheckRequestResult = require('../fields/RiskLimitCheckRequestResult');
var RiskLimitCheckTransType = require('../fields/RiskLimitCheckTransType');
var RiskLimitCheckType = require('../fields/RiskLimitCheckType');
var RiskLimitCheckRequestRefID = require('../fields/RiskLimitCheckRequestRefID');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var Side = require('../fields/Side');
var RiskLimitApprovedAmount = require('../fields/RiskLimitApprovedAmount');
var RiskLimitCheckAmount = require('../fields/RiskLimitCheckAmount');
var RiskLimitID = require('../fields/RiskLimitID');
var Currency = require('../fields/Currency');
var ExpireTime = require('../fields/ExpireTime');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitCheckRequestAck (partyRiskLimitCheckRequestAck) {
  this.message = partyRiskLimitCheckRequestAck;
}

PartyRiskLimitCheckRequestAck.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyRiskLimitCheckRequestAck.prototype.parties = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyRiskLimitCheckRequestAck.prototype.relatedPartyDetailGrp = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.RelatedPartyDetailGrp]
    .map(function (relatedPartyDetailGrp) {
      return new RelatedPartyDetailGrp(relatedPartyDetailGrp);
  });
};

PartyRiskLimitCheckRequestAck.prototype.instrument = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PartyRiskLimitCheckRequestAck.prototype.legOrdGrp = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.LegOrdGrp]
    .map(function (legOrdGrp) {
      return new LegOrdGrp(legOrdGrp);
  });
};

PartyRiskLimitCheckRequestAck.prototype.undInstrmtGrp = function () {
  return this.message.groups[PartyRiskLimitCheckRequestAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckRequestId = function () {
  return new RiskLimitCheckRequestID(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckRequestID]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckId = function () {
  return new RiskLimitCheckID(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckID]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckRequestStatus = function () {
  return new RiskLimitCheckRequestStatus(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckRequestStatus]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckRequestResult = function () {
  return new RiskLimitCheckRequestResult(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckRequestResult]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckTransType = function () {
  return new RiskLimitCheckTransType(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckTransType]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckType = function () {
  return new RiskLimitCheckType(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckType]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckRequestRefId = function () {
  return new RiskLimitCheckRequestRefID(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckRequestRefID]);
};

PartyRiskLimitCheckRequestAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RejectText]);
};

PartyRiskLimitCheckRequestAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.EncodedRejectTextLen]);
};

PartyRiskLimitCheckRequestAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.EncodedRejectText]);
};

PartyRiskLimitCheckRequestAck.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RefOrderID]);
};

PartyRiskLimitCheckRequestAck.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RefOrderIDSource]);
};

PartyRiskLimitCheckRequestAck.prototype.side = function () {
  return new Side(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.Side]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitApprovedAmount = function () {
  return new RiskLimitApprovedAmount(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitApprovedAmount]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitCheckAmount = function () {
  return new RiskLimitCheckAmount(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitCheckAmount]);
};

PartyRiskLimitCheckRequestAck.prototype.riskLimitId = function () {
  return new RiskLimitID(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.RiskLimitID]);
};

PartyRiskLimitCheckRequestAck.prototype.currency = function () {
  return new Currency(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.Currency]);
};

PartyRiskLimitCheckRequestAck.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.ExpireTime]);
};

PartyRiskLimitCheckRequestAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.TransactTime]);
};

PartyRiskLimitCheckRequestAck.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.Text]);
};

PartyRiskLimitCheckRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.EncodedTextLen]);
};

PartyRiskLimitCheckRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitCheckRequestAck.Tags.EncodedText]);
};

PartyRiskLimitCheckRequestAck.Tags = {
  RequestingPartyGrp: '1657',
  Parties: '453',
  RelatedPartyDetailGrp: '1562',
  Instrument: '55',
  LegOrdGrp: '555',
  UndInstrmtGrp: '711',
  RiskLimitCheckRequestID: '2318',
  RiskLimitCheckID: '2319',
  RiskLimitCheckRequestStatus: '2325',
  RiskLimitCheckRequestResult: '2326',
  RiskLimitCheckTransType: '2320',
  RiskLimitCheckType: '2321',
  RiskLimitCheckRequestRefID: '2322',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  RefOrderID: '1080',
  RefOrderIDSource: '1081',
  Side: '54',
  RiskLimitApprovedAmount: '2327',
  RiskLimitCheckAmount: '2324',
  RiskLimitID: '1670',
  Currency: '15',
  ExpireTime: '126',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitCheckRequestAck.msgType = 'DG';

module.exports = PartyRiskLimitCheckRequestAck;