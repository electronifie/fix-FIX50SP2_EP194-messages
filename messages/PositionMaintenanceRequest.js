var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var RelatedInstrumentGrp = require('../components/RelatedInstrumentGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var PosReqID = require('../fields/PosReqID');
var PosTransType = require('../fields/PosTransType');
var PosMaintAction = require('../fields/PosMaintAction');
var OrigPosReqRefID = require('../fields/OrigPosReqRefID');
var PosMaintRptRefID = require('../fields/PosMaintRptRefID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlDate = require('../fields/SettlDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var TransactTime = require('../fields/TransactTime');
var AdjustmentType = require('../fields/AdjustmentType');
var ContraryInstructionIndicator = require('../fields/ContraryInstructionIndicator');
var PriorSpreadIndicator = require('../fields/PriorSpreadIndicator');
var ThresholdAmount = require('../fields/ThresholdAmount');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlCurrency = require('../fields/SettlCurrency');

function PositionMaintenanceRequest (positionMaintenanceRequest) {
  this.message = positionMaintenanceRequest;
}

PositionMaintenanceRequest.prototype.parties = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionMaintenanceRequest.prototype.instrument = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionMaintenanceRequest.prototype.instrmtLegGrp = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

PositionMaintenanceRequest.prototype.relatedInstrumentGrp = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.RelatedInstrumentGrp]
    .map(function (relatedInstrumentGrp) {
      return new RelatedInstrumentGrp(relatedInstrumentGrp);
  });
};

PositionMaintenanceRequest.prototype.undInstrmtGrp = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PositionMaintenanceRequest.prototype.trdgSesGrp = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

PositionMaintenanceRequest.prototype.positionQty = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionMaintenanceRequest.prototype.positionAmountData = function () {
  return this.message.groups[PositionMaintenanceRequest.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionMaintenanceRequest.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[PositionMaintenanceRequest.Tags.PosReqID]);
};

PositionMaintenanceRequest.prototype.posTransType = function () {
  return new PosTransType(this.message.tags[PositionMaintenanceRequest.Tags.PosTransType]);
};

PositionMaintenanceRequest.prototype.posMaintAction = function () {
  return new PosMaintAction(this.message.tags[PositionMaintenanceRequest.Tags.PosMaintAction]);
};

PositionMaintenanceRequest.prototype.origPosReqRefId = function () {
  return new OrigPosReqRefID(this.message.tags[PositionMaintenanceRequest.Tags.OrigPosReqRefID]);
};

PositionMaintenanceRequest.prototype.posMaintRptRefId = function () {
  return new PosMaintRptRefID(this.message.tags[PositionMaintenanceRequest.Tags.PosMaintRptRefID]);
};

PositionMaintenanceRequest.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionMaintenanceRequest.Tags.ClearingBusinessDate]);
};

PositionMaintenanceRequest.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[PositionMaintenanceRequest.Tags.SettlDate]);
};

PositionMaintenanceRequest.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[PositionMaintenanceRequest.Tags.SettlSessID]);
};

PositionMaintenanceRequest.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[PositionMaintenanceRequest.Tags.SettlSessSubID]);
};

PositionMaintenanceRequest.prototype.account = function () {
  return new Account(this.message.tags[PositionMaintenanceRequest.Tags.Account]);
};

PositionMaintenanceRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[PositionMaintenanceRequest.Tags.AcctIDSource]);
};

PositionMaintenanceRequest.prototype.accountType = function () {
  return new AccountType(this.message.tags[PositionMaintenanceRequest.Tags.AccountType]);
};

PositionMaintenanceRequest.prototype.currency = function () {
  return new Currency(this.message.tags[PositionMaintenanceRequest.Tags.Currency]);
};

PositionMaintenanceRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionMaintenanceRequest.Tags.TransactTime]);
};

PositionMaintenanceRequest.prototype.adjustmentType = function () {
  return new AdjustmentType(this.message.tags[PositionMaintenanceRequest.Tags.AdjustmentType]);
};

PositionMaintenanceRequest.prototype.contraryInstructionIndicator = function () {
  return new ContraryInstructionIndicator(this.message.tags[PositionMaintenanceRequest.Tags.ContraryInstructionIndicator]);
};

PositionMaintenanceRequest.prototype.priorSpreadIndicator = function () {
  return new PriorSpreadIndicator(this.message.tags[PositionMaintenanceRequest.Tags.PriorSpreadIndicator]);
};

PositionMaintenanceRequest.prototype.thresholdAmount = function () {
  return new ThresholdAmount(this.message.tags[PositionMaintenanceRequest.Tags.ThresholdAmount]);
};

PositionMaintenanceRequest.prototype.text = function () {
  return new Text(this.message.tags[PositionMaintenanceRequest.Tags.Text]);
};

PositionMaintenanceRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionMaintenanceRequest.Tags.EncodedTextLen]);
};

PositionMaintenanceRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionMaintenanceRequest.Tags.EncodedText]);
};

PositionMaintenanceRequest.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[PositionMaintenanceRequest.Tags.SettlCurrency]);
};

PositionMaintenanceRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  RelatedInstrumentGrp: '1647',
  UndInstrmtGrp: '711',
  TrdgSesGrp: '386',
  PositionQty: '702',
  PositionAmountData: '753',
  PosReqID: '710',
  PosTransType: '709',
  PosMaintAction: '712',
  OrigPosReqRefID: '713',
  PosMaintRptRefID: '714',
  ClearingBusinessDate: '715',
  SettlDate: '64',
  SettlSessID: '716',
  SettlSessSubID: '717',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  TransactTime: '60',
  AdjustmentType: '718',
  ContraryInstructionIndicator: '719',
  PriorSpreadIndicator: '720',
  ThresholdAmount: '834',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SettlCurrency: '120',
};

PositionMaintenanceRequest.msgType = 'AL';

module.exports = PositionMaintenanceRequest;