var RootParties = require('../components/RootParties');
var SideCrossOrdCxlGrp = require('../components/SideCrossOrdCxlGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var OrderID = require('../fields/OrderID');
var OrderRequestID = require('../fields/OrderRequestID');
var CrossID = require('../fields/CrossID');
var OrigCrossID = require('../fields/OrigCrossID');
var HostCrossID = require('../fields/HostCrossID');
var CrossType = require('../fields/CrossType');
var CrossPrioritization = require('../fields/CrossPrioritization');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TransactTime = require('../fields/TransactTime');

function CrossOrderCancelRequest (crossOrderCancelRequest) {
  this.message = crossOrderCancelRequest;
}

CrossOrderCancelRequest.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelRequest.Tags.RootParties] === undefined) return null;
  return this.message.groups[CrossOrderCancelRequest.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

CrossOrderCancelRequest.prototype.sideCrossOrdCxlGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelRequest.Tags.SideCrossOrdCxlGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelRequest.Tags.SideCrossOrdCxlGrp]
    .map(function (sideCrossOrdCxlGrp) {
      return new SideCrossOrdCxlGrp(sideCrossOrdCxlGrp);
  });
};

CrossOrderCancelRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[CrossOrderCancelRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CrossOrderCancelRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CrossOrderCancelRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CrossOrderCancelRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[CrossOrderCancelRequest.Tags.OrderID]);
};

CrossOrderCancelRequest.prototype.orderRequestId = function () {
  return new OrderRequestID(this.message.tags[CrossOrderCancelRequest.Tags.OrderRequestID]);
};

CrossOrderCancelRequest.prototype.crossId = function () {
  return new CrossID(this.message.tags[CrossOrderCancelRequest.Tags.CrossID]);
};

CrossOrderCancelRequest.prototype.origCrossId = function () {
  return new OrigCrossID(this.message.tags[CrossOrderCancelRequest.Tags.OrigCrossID]);
};

CrossOrderCancelRequest.prototype.hostCrossId = function () {
  return new HostCrossID(this.message.tags[CrossOrderCancelRequest.Tags.HostCrossID]);
};

CrossOrderCancelRequest.prototype.crossType = function () {
  return new CrossType(this.message.tags[CrossOrderCancelRequest.Tags.CrossType]);
};

CrossOrderCancelRequest.prototype.crossPrioritization = function () {
  return new CrossPrioritization(this.message.tags[CrossOrderCancelRequest.Tags.CrossPrioritization]);
};

CrossOrderCancelRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[CrossOrderCancelRequest.Tags.MarketSegmentID]);
};

CrossOrderCancelRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CrossOrderCancelRequest.Tags.TransactTime]);
};

CrossOrderCancelRequest.Tags = {
  RootParties: '1116',
  SideCrossOrdCxlGrp: '552',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  OrderID: '37',
  OrderRequestID: '2422',
  CrossID: '548',
  OrigCrossID: '551',
  HostCrossID: '961',
  CrossType: '549',
  CrossPrioritization: '550',
  MarketSegmentID: '1300',
  TransactTime: '60',
};

CrossOrderCancelRequest.msgType = 'u';

module.exports = CrossOrderCancelRequest;