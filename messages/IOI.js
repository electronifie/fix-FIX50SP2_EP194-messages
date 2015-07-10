var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Instrument = require('../components/Instrument');
var Parties = require('../components/Parties');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var Stipulations = require('../components/Stipulations');
var InstrmtLegIOIGrp = require('../components/InstrmtLegIOIGrp');
var IOIQualGrp = require('../components/IOIQualGrp');
var RoutingGrp = require('../components/RoutingGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var RelativeValueGrp = require('../components/RelativeValueGrp');
var YieldData = require('../components/YieldData');
var IOIID = require('../fields/IOIID');
var IOITransType = require('../fields/IOITransType');
var IOIRefID = require('../fields/IOIRefID');
var Side = require('../fields/Side');
var QtyType = require('../fields/QtyType');
var IOIQty = require('../fields/IOIQty');
var Currency = require('../fields/Currency');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var ValidUntilTime = require('../fields/ValidUntilTime');
var IOIQltyInd = require('../fields/IOIQltyInd');
var IOINaturalFlag = require('../fields/IOINaturalFlag');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TransactTime = require('../fields/TransactTime');
var URLLink = require('../fields/URLLink');

function IOI (ioi) {
  this.message = ioi;
}

IOI.prototype.applicationSequenceControl = function () {
  return this.message.groups[IOI.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

IOI.prototype.instrument = function () {
  return this.message.groups[IOI.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

IOI.prototype.parties = function () {
  return this.message.groups[IOI.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

IOI.prototype.financingDetails = function () {
  return this.message.groups[IOI.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

IOI.prototype.undInstrmtGrp = function () {
  return this.message.groups[IOI.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

IOI.prototype.orderQtyData = function () {
  return this.message.groups[IOI.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

IOI.prototype.stipulations = function () {
  return this.message.groups[IOI.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

IOI.prototype.instrmtLegIoigrp = function () {
  return this.message.groups[IOI.Tags.InstrmtLegIOIGrp]
    .map(function (instrmtLegIoigrp) {
      return new InstrmtLegIOIGrp(instrmtLegIoigrp);
  });
};

IOI.prototype.ioiqualGrp = function () {
  return this.message.groups[IOI.Tags.IOIQualGrp]
    .map(function (ioiqualGrp) {
      return new IOIQualGrp(ioiqualGrp);
  });
};

IOI.prototype.routingGrp = function () {
  return this.message.groups[IOI.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

IOI.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[IOI.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

IOI.prototype.relativeValueGrp = function () {
  return this.message.groups[IOI.Tags.RelativeValueGrp]
    .map(function (relativeValueGrp) {
      return new RelativeValueGrp(relativeValueGrp);
  });
};

IOI.prototype.yieldData = function () {
  return this.message.groups[IOI.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

IOI.prototype.ioiid = function () {
  return new IOIID(this.message.tags[IOI.Tags.IOIID]);
};

IOI.prototype.ioitransType = function () {
  return new IOITransType(this.message.tags[IOI.Tags.IOITransType]);
};

IOI.prototype.ioirefId = function () {
  return new IOIRefID(this.message.tags[IOI.Tags.IOIRefID]);
};

IOI.prototype.side = function () {
  return new Side(this.message.tags[IOI.Tags.Side]);
};

IOI.prototype.qtyType = function () {
  return new QtyType(this.message.tags[IOI.Tags.QtyType]);
};

IOI.prototype.ioiqty = function () {
  return new IOIQty(this.message.tags[IOI.Tags.IOIQty]);
};

IOI.prototype.currency = function () {
  return new Currency(this.message.tags[IOI.Tags.Currency]);
};

IOI.prototype.priceType = function () {
  return new PriceType(this.message.tags[IOI.Tags.PriceType]);
};

IOI.prototype.price = function () {
  return new Price(this.message.tags[IOI.Tags.Price]);
};

IOI.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[IOI.Tags.ValidUntilTime]);
};

IOI.prototype.ioiqltyInd = function () {
  return new IOIQltyInd(this.message.tags[IOI.Tags.IOIQltyInd]);
};

IOI.prototype.ioinaturalFlag = function () {
  return new IOINaturalFlag(this.message.tags[IOI.Tags.IOINaturalFlag]);
};

IOI.prototype.text = function () {
  return new Text(this.message.tags[IOI.Tags.Text]);
};

IOI.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[IOI.Tags.EncodedTextLen]);
};

IOI.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[IOI.Tags.EncodedText]);
};

IOI.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[IOI.Tags.TransactTime]);
};

IOI.prototype.urllink = function () {
  return new URLLink(this.message.tags[IOI.Tags.URLLink]);
};

IOI.Tags = {
  ApplicationSequenceControl: '1180',
  Instrument: '55',
  Parties: '453',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  Stipulations: '232',
  InstrmtLegIOIGrp: '555',
  IOIQualGrp: '199',
  RoutingGrp: '215',
  SpreadOrBenchmarkCurveData: '218',
  RelativeValueGrp: '2529',
  YieldData: '235',
  IOIID: '23',
  IOITransType: '28',
  IOIRefID: '26',
  Side: '54',
  QtyType: '854',
  IOIQty: '27',
  Currency: '15',
  PriceType: '423',
  Price: '44',
  ValidUntilTime: '62',
  IOIQltyInd: '25',
  IOINaturalFlag: '130',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TransactTime: '60',
  URLLink: '149',
};

IOI.msgType = '6';

module.exports = IOI;