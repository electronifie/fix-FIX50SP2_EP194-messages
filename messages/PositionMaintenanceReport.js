var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var RelatedInstrumentGrp = require('../components/RelatedInstrumentGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var PaymentGrp = require('../components/PaymentGrp');
var RelatedTradeGrp = require('../components/RelatedTradeGrp');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosTransType = require('../fields/PosTransType');
var PosReqID = require('../fields/PosReqID');
var PosMaintAction = require('../fields/PosMaintAction');
var OrigPosReqRefID = require('../fields/OrigPosReqRefID');
var PosMaintStatus = require('../fields/PosMaintStatus');
var PosMaintResult = require('../fields/PosMaintResult');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var PreviousClearingBusinessDate = require('../fields/PreviousClearingBusinessDate');
var ValuationDate = require('../fields/ValuationDate');
var ValuationTime = require('../fields/ValuationTime');
var ValuationBusinessCenter = require('../fields/ValuationBusinessCenter');
var DiscountFactor = require('../fields/DiscountFactor');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var ClearedIndicator = require('../fields/ClearedIndicator');
var ContractRefPosType = require('../fields/ContractRefPosType');
var PositionCapacity = require('../fields/PositionCapacity');
var TerminatedIndicator = require('../fields/TerminatedIndicator');
var InputSource = require('../fields/InputSource');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var PosMaintRptRefID = require('../fields/PosMaintRptRefID');
var Currency = require('../fields/Currency');
var SettlDate = require('../fields/SettlDate');
var SettlCurrency = require('../fields/SettlCurrency');
var ContraryInstructionIndicator = require('../fields/ContraryInstructionIndicator');
var PriorSpreadIndicator = require('../fields/PriorSpreadIndicator');
var TransactTime = require('../fields/TransactTime');
var AdjustmentType = require('../fields/AdjustmentType');
var ThresholdAmount = require('../fields/ThresholdAmount');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionMaintenanceReport (positionMaintenanceReport) {
  this.message = positionMaintenanceReport;
}

PositionMaintenanceReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.Parties] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionMaintenanceReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionMaintenanceReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

PositionMaintenanceReport.prototype.relatedInstrumentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.RelatedInstrumentGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.RelatedInstrumentGrp]
    .map(function (relatedInstrumentGrp) {
      return new RelatedInstrumentGrp(relatedInstrumentGrp);
  });
};

PositionMaintenanceReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PositionMaintenanceReport.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

PositionMaintenanceReport.prototype.positionQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.PositionQty] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionMaintenanceReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionMaintenanceReport.prototype.regulatoryTradeIdgrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.RegulatoryTradeIDGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

PositionMaintenanceReport.prototype.paymentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.PaymentGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.PaymentGrp]
    .map(function (paymentGrp) {
      return new PaymentGrp(paymentGrp);
  });
};

PositionMaintenanceReport.prototype.relatedTradeGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionMaintenanceReport.Tags.RelatedTradeGrp] === undefined) return null;
  return this.message.groups[PositionMaintenanceReport.Tags.RelatedTradeGrp]
    .map(function (relatedTradeGrp) {
      return new RelatedTradeGrp(relatedTradeGrp);
  });
};

PositionMaintenanceReport.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[PositionMaintenanceReport.Tags.PosMaintRptID]);
};

PositionMaintenanceReport.prototype.posTransType = function () {
  return new PosTransType(this.message.tags[PositionMaintenanceReport.Tags.PosTransType]);
};

PositionMaintenanceReport.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[PositionMaintenanceReport.Tags.PosReqID]);
};

PositionMaintenanceReport.prototype.posMaintAction = function () {
  return new PosMaintAction(this.message.tags[PositionMaintenanceReport.Tags.PosMaintAction]);
};

PositionMaintenanceReport.prototype.origPosReqRefId = function () {
  return new OrigPosReqRefID(this.message.tags[PositionMaintenanceReport.Tags.OrigPosReqRefID]);
};

PositionMaintenanceReport.prototype.posMaintStatus = function () {
  return new PosMaintStatus(this.message.tags[PositionMaintenanceReport.Tags.PosMaintStatus]);
};

PositionMaintenanceReport.prototype.posMaintResult = function () {
  return new PosMaintResult(this.message.tags[PositionMaintenanceReport.Tags.PosMaintResult]);
};

PositionMaintenanceReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionMaintenanceReport.Tags.ClearingBusinessDate]);
};

PositionMaintenanceReport.prototype.previousClearingBusinessDate = function () {
  return new PreviousClearingBusinessDate(this.message.tags[PositionMaintenanceReport.Tags.PreviousClearingBusinessDate]);
};

PositionMaintenanceReport.prototype.valuationDate = function () {
  return new ValuationDate(this.message.tags[PositionMaintenanceReport.Tags.ValuationDate]);
};

PositionMaintenanceReport.prototype.valuationTime = function () {
  return new ValuationTime(this.message.tags[PositionMaintenanceReport.Tags.ValuationTime]);
};

PositionMaintenanceReport.prototype.valuationBusinessCenter = function () {
  return new ValuationBusinessCenter(this.message.tags[PositionMaintenanceReport.Tags.ValuationBusinessCenter]);
};

PositionMaintenanceReport.prototype.discountFactor = function () {
  return new DiscountFactor(this.message.tags[PositionMaintenanceReport.Tags.DiscountFactor]);
};

PositionMaintenanceReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PositionMaintenanceReport.Tags.RejectText]);
};

PositionMaintenanceReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PositionMaintenanceReport.Tags.EncodedRejectTextLen]);
};

PositionMaintenanceReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PositionMaintenanceReport.Tags.EncodedRejectText]);
};

PositionMaintenanceReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[PositionMaintenanceReport.Tags.SettlSessID]);
};

PositionMaintenanceReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[PositionMaintenanceReport.Tags.SettlSessSubID]);
};

PositionMaintenanceReport.prototype.clearedIndicator = function () {
  return new ClearedIndicator(this.message.tags[PositionMaintenanceReport.Tags.ClearedIndicator]);
};

PositionMaintenanceReport.prototype.contractRefPosType = function () {
  return new ContractRefPosType(this.message.tags[PositionMaintenanceReport.Tags.ContractRefPosType]);
};

PositionMaintenanceReport.prototype.positionCapacity = function () {
  return new PositionCapacity(this.message.tags[PositionMaintenanceReport.Tags.PositionCapacity]);
};

PositionMaintenanceReport.prototype.terminatedIndicator = function () {
  return new TerminatedIndicator(this.message.tags[PositionMaintenanceReport.Tags.TerminatedIndicator]);
};

PositionMaintenanceReport.prototype.inputSource = function () {
  return new InputSource(this.message.tags[PositionMaintenanceReport.Tags.InputSource]);
};

PositionMaintenanceReport.prototype.account = function () {
  return new Account(this.message.tags[PositionMaintenanceReport.Tags.Account]);
};

PositionMaintenanceReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[PositionMaintenanceReport.Tags.AcctIDSource]);
};

PositionMaintenanceReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[PositionMaintenanceReport.Tags.AccountType]);
};

PositionMaintenanceReport.prototype.posMaintRptRefId = function () {
  return new PosMaintRptRefID(this.message.tags[PositionMaintenanceReport.Tags.PosMaintRptRefID]);
};

PositionMaintenanceReport.prototype.currency = function () {
  return new Currency(this.message.tags[PositionMaintenanceReport.Tags.Currency]);
};

PositionMaintenanceReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[PositionMaintenanceReport.Tags.SettlDate]);
};

PositionMaintenanceReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[PositionMaintenanceReport.Tags.SettlCurrency]);
};

PositionMaintenanceReport.prototype.contraryInstructionIndicator = function () {
  return new ContraryInstructionIndicator(this.message.tags[PositionMaintenanceReport.Tags.ContraryInstructionIndicator]);
};

PositionMaintenanceReport.prototype.priorSpreadIndicator = function () {
  return new PriorSpreadIndicator(this.message.tags[PositionMaintenanceReport.Tags.PriorSpreadIndicator]);
};

PositionMaintenanceReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionMaintenanceReport.Tags.TransactTime]);
};

PositionMaintenanceReport.prototype.adjustmentType = function () {
  return new AdjustmentType(this.message.tags[PositionMaintenanceReport.Tags.AdjustmentType]);
};

PositionMaintenanceReport.prototype.thresholdAmount = function () {
  return new ThresholdAmount(this.message.tags[PositionMaintenanceReport.Tags.ThresholdAmount]);
};

PositionMaintenanceReport.prototype.text = function () {
  return new Text(this.message.tags[PositionMaintenanceReport.Tags.Text]);
};

PositionMaintenanceReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionMaintenanceReport.Tags.EncodedTextLen]);
};

PositionMaintenanceReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionMaintenanceReport.Tags.EncodedText]);
};

PositionMaintenanceReport.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  RelatedInstrumentGrp: '1647',
  UndInstrmtGrp: '711',
  TrdgSesGrp: '386',
  PositionQty: '702',
  PositionAmountData: '753',
  RegulatoryTradeIDGrp: '1907',
  PaymentGrp: '40212',
  RelatedTradeGrp: '1855',
  PosMaintRptID: '721',
  PosTransType: '709',
  PosReqID: '710',
  PosMaintAction: '712',
  OrigPosReqRefID: '713',
  PosMaintStatus: '722',
  PosMaintResult: '723',
  ClearingBusinessDate: '715',
  PreviousClearingBusinessDate: '2084',
  ValuationDate: '2085',
  ValuationTime: '2086',
  ValuationBusinessCenter: '2087',
  DiscountFactor: '1592',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  SettlSessID: '716',
  SettlSessSubID: '717',
  ClearedIndicator: '1832',
  ContractRefPosType: '1833',
  PositionCapacity: '1834',
  TerminatedIndicator: '2101',
  InputSource: '979',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  PosMaintRptRefID: '714',
  Currency: '15',
  SettlDate: '64',
  SettlCurrency: '120',
  ContraryInstructionIndicator: '719',
  PriorSpreadIndicator: '720',
  TransactTime: '60',
  AdjustmentType: '718',
  ThresholdAmount: '834',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionMaintenanceReport.msgType = 'AM';

module.exports = PositionMaintenanceReport;