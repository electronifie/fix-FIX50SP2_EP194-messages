var RootParties = require('../components/RootParties');
var QuotReqGrp = require('../components/QuotReqGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var RFQReqID = require('../fields/RFQReqID');
var ClOrdID = require('../fields/ClOrdID');
var BookingType = require('../fields/BookingType');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var PrivateQuote = require('../fields/PrivateQuote');
var RespondentType = require('../fields/RespondentType');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function QuoteRequest (quoteRequest) {
  this.message = quoteRequest;
}

QuoteRequest.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequest.Tags.RootParties] === undefined) return null;
  return this.message.groups[QuoteRequest.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

QuoteRequest.prototype.quotReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteRequest.Tags.QuotReqGrp] === undefined) return null;
  return this.message.groups[QuoteRequest.Tags.QuotReqGrp]
    .map(function (quotReqGrp) {
      return new QuotReqGrp(quotReqGrp);
  });
};

QuoteRequest.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteRequest.Tags.QuoteReqID]);
};

QuoteRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[QuoteRequest.Tags.RFQReqID]);
};

QuoteRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[QuoteRequest.Tags.ClOrdID]);
};

QuoteRequest.prototype.bookingType = function () {
  return new BookingType(this.message.tags[QuoteRequest.Tags.BookingType]);
};

QuoteRequest.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[QuoteRequest.Tags.OrderCapacity]);
};

QuoteRequest.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[QuoteRequest.Tags.OrderRestrictions]);
};

QuoteRequest.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[QuoteRequest.Tags.PrivateQuote]);
};

QuoteRequest.prototype.respondentType = function () {
  return new RespondentType(this.message.tags[QuoteRequest.Tags.RespondentType]);
};

QuoteRequest.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[QuoteRequest.Tags.PreTradeAnonymity]);
};

QuoteRequest.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[QuoteRequest.Tags.ComplianceID]);
};

QuoteRequest.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[QuoteRequest.Tags.ComplianceText]);
};

QuoteRequest.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[QuoteRequest.Tags.EncodedComplianceTextLen]);
};

QuoteRequest.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[QuoteRequest.Tags.EncodedComplianceText]);
};

QuoteRequest.prototype.text = function () {
  return new Text(this.message.tags[QuoteRequest.Tags.Text]);
};

QuoteRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteRequest.Tags.EncodedTextLen]);
};

QuoteRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteRequest.Tags.EncodedText]);
};

QuoteRequest.Tags = {
  RootParties: '1116',
  QuotReqGrp: '146',
  QuoteReqID: '131',
  RFQReqID: '644',
  ClOrdID: '11',
  BookingType: '775',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  PrivateQuote: '1171',
  RespondentType: '1172',
  PreTradeAnonymity: '1091',
  ComplianceID: '376',
  ComplianceText: '2404',
  EncodedComplianceTextLen: '2351',
  EncodedComplianceText: '2352',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

QuoteRequest.msgType = 'R';

module.exports = QuoteRequest;