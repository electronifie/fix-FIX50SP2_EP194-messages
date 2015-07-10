var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var OrderQtyData = require('../components/OrderQtyData');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var ClOrdID = require('../fields/ClOrdID');
var ExecAckStatus = require('../fields/ExecAckStatus');
var ExecID = require('../fields/ExecID');
var DKReason = require('../fields/DKReason');
var Side = require('../fields/Side');
var LastQty = require('../fields/LastQty');
var LastPx = require('../fields/LastPx');
var PriceType = require('../fields/PriceType');
var LastParPx = require('../fields/LastParPx');
var CumQty = require('../fields/CumQty');
var AvgPx = require('../fields/AvgPx');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ExecutionAck (executionAck) {
  this.message = executionAck;
}

ExecutionAck.prototype.instrument = function () {
  return this.message.groups[ExecutionAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

ExecutionAck.prototype.undInstrmtGrp = function () {
  return this.message.groups[ExecutionAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

ExecutionAck.prototype.instrmtLegGrp = function () {
  return this.message.groups[ExecutionAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

ExecutionAck.prototype.orderQtyData = function () {
  return this.message.groups[ExecutionAck.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

ExecutionAck.prototype.regulatoryTradeIdgrp = function () {
  return this.message.groups[ExecutionAck.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

ExecutionAck.prototype.orderId = function () {
  return new OrderID(this.message.tags[ExecutionAck.Tags.OrderID]);
};

ExecutionAck.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[ExecutionAck.Tags.SecondaryOrderID]);
};

ExecutionAck.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ExecutionAck.Tags.ClOrdID]);
};

ExecutionAck.prototype.execAckStatus = function () {
  return new ExecAckStatus(this.message.tags[ExecutionAck.Tags.ExecAckStatus]);
};

ExecutionAck.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecutionAck.Tags.ExecID]);
};

ExecutionAck.prototype.dkreason = function () {
  return new DKReason(this.message.tags[ExecutionAck.Tags.DKReason]);
};

ExecutionAck.prototype.side = function () {
  return new Side(this.message.tags[ExecutionAck.Tags.Side]);
};

ExecutionAck.prototype.lastQty = function () {
  return new LastQty(this.message.tags[ExecutionAck.Tags.LastQty]);
};

ExecutionAck.prototype.lastPx = function () {
  return new LastPx(this.message.tags[ExecutionAck.Tags.LastPx]);
};

ExecutionAck.prototype.priceType = function () {
  return new PriceType(this.message.tags[ExecutionAck.Tags.PriceType]);
};

ExecutionAck.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[ExecutionAck.Tags.LastParPx]);
};

ExecutionAck.prototype.cumQty = function () {
  return new CumQty(this.message.tags[ExecutionAck.Tags.CumQty]);
};

ExecutionAck.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[ExecutionAck.Tags.AvgPx]);
};

ExecutionAck.prototype.text = function () {
  return new Text(this.message.tags[ExecutionAck.Tags.Text]);
};

ExecutionAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ExecutionAck.Tags.EncodedTextLen]);
};

ExecutionAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ExecutionAck.Tags.EncodedText]);
};

ExecutionAck.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  OrderQtyData: '38',
  RegulatoryTradeIDGrp: '1907',
  OrderID: '37',
  SecondaryOrderID: '198',
  ClOrdID: '11',
  ExecAckStatus: '1036',
  ExecID: '17',
  DKReason: '127',
  Side: '54',
  LastQty: '32',
  LastPx: '31',
  PriceType: '423',
  LastParPx: '669',
  CumQty: '14',
  AvgPx: '6',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ExecutionAck.msgType = 'BN';

module.exports = ExecutionAck;