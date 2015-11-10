var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var TransferInstructionID = require('../fields/TransferInstructionID');
var TransferID = require('../fields/TransferID');
var TransferTransType = require('../fields/TransferTransType');
var TransferType = require('../fields/TransferType');
var TransferScope = require('../fields/TransferScope');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var ClearingTradePrice = require('../fields/ClearingTradePrice');
var Currency = require('../fields/Currency');
var PriceType = require('../fields/PriceType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionTransferInstruction (positionTransferInstruction) {
  this.message = positionTransferInstruction;
}

PositionTransferInstruction.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.Parties] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionTransferInstruction.prototype.targetParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.TargetParties] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

PositionTransferInstruction.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.Instrument] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionTransferInstruction.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PositionTransferInstruction.prototype.positionQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.PositionQty] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionTransferInstruction.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionTransferInstruction.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[PositionTransferInstruction.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionTransferInstruction.prototype.transferInstructionId = function () {
  return new TransferInstructionID(this.message.tags[PositionTransferInstruction.Tags.TransferInstructionID]);
};

PositionTransferInstruction.prototype.transferId = function () {
  return new TransferID(this.message.tags[PositionTransferInstruction.Tags.TransferID]);
};

PositionTransferInstruction.prototype.transferTransType = function () {
  return new TransferTransType(this.message.tags[PositionTransferInstruction.Tags.TransferTransType]);
};

PositionTransferInstruction.prototype.transferType = function () {
  return new TransferType(this.message.tags[PositionTransferInstruction.Tags.TransferType]);
};

PositionTransferInstruction.prototype.transferScope = function () {
  return new TransferScope(this.message.tags[PositionTransferInstruction.Tags.TransferScope]);
};

PositionTransferInstruction.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionTransferInstruction.Tags.ClearingBusinessDate]);
};

PositionTransferInstruction.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[PositionTransferInstruction.Tags.TradeDate]);
};

PositionTransferInstruction.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionTransferInstruction.Tags.TransactTime]);
};

PositionTransferInstruction.prototype.clearingTradePrice = function () {
  return new ClearingTradePrice(this.message.tags[PositionTransferInstruction.Tags.ClearingTradePrice]);
};

PositionTransferInstruction.prototype.currency = function () {
  return new Currency(this.message.tags[PositionTransferInstruction.Tags.Currency]);
};

PositionTransferInstruction.prototype.priceType = function () {
  return new PriceType(this.message.tags[PositionTransferInstruction.Tags.PriceType]);
};

PositionTransferInstruction.prototype.text = function () {
  return new Text(this.message.tags[PositionTransferInstruction.Tags.Text]);
};

PositionTransferInstruction.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionTransferInstruction.Tags.EncodedTextLen]);
};

PositionTransferInstruction.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionTransferInstruction.Tags.EncodedText]);
};

PositionTransferInstruction.Tags = {
  Parties: '453',
  TargetParties: '1461',
  Instrument: '55',
  UndInstrmtGrp: '711',
  PositionQty: '702',
  PositionAmountData: '753',
  TransferInstructionID: '2436',
  TransferID: '2437',
  TransferTransType: '2439',
  TransferType: '2440',
  TransferScope: '2441',
  ClearingBusinessDate: '715',
  TradeDate: '75',
  TransactTime: '60',
  ClearingTradePrice: '1596',
  Currency: '15',
  PriceType: '423',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionTransferInstruction.msgType = 'DL';

module.exports = PositionTransferInstruction;