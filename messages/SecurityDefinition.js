var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var SecurityClassificationGrp = require('../components/SecurityClassificationGrp');
var Stipulations = require('../components/Stipulations');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var MarketSegmentGrp = require('../components/MarketSegmentGrp');
var SecurityReportID = require('../fields/SecurityReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SecurityReqID = require('../fields/SecurityReqID');
var OrderRequestID = require('../fields/OrderRequestID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityResponseType = require('../fields/SecurityResponseType');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var SecurityRejectReason = require('../fields/SecurityRejectReason');
var CorporateAction = require('../fields/CorporateAction');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var NumOfSimpleInstruments = require('../fields/NumOfSimpleInstruments');
var LastUpdateTime = require('../fields/LastUpdateTime');
var TransactTime = require('../fields/TransactTime');

function SecurityDefinition (securityDefinition) {
  this.message = securityDefinition;
}

SecurityDefinition.prototype.applicationSequenceControl = function () {
  return this.message.groups[SecurityDefinition.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityDefinition.prototype.instrument = function () {
  return this.message.groups[SecurityDefinition.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinition.prototype.instrumentExtension = function () {
  return this.message.groups[SecurityDefinition.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinition.prototype.financingDetails = function () {
  return this.message.groups[SecurityDefinition.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

SecurityDefinition.prototype.undInstrmtGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinition.prototype.securityClassificationGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.SecurityClassificationGrp]
    .map(function (securityClassificationGrp) {
      return new SecurityClassificationGrp(securityClassificationGrp);
  });
};

SecurityDefinition.prototype.stipulations = function () {
  return this.message.groups[SecurityDefinition.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

SecurityDefinition.prototype.instrmtLegGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinition.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SecurityDefinition.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

SecurityDefinition.prototype.yieldData = function () {
  return this.message.groups[SecurityDefinition.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

SecurityDefinition.prototype.marketSegmentGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.MarketSegmentGrp]
    .map(function (marketSegmentGrp) {
      return new MarketSegmentGrp(marketSegmentGrp);
  });
};

SecurityDefinition.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityDefinition.Tags.SecurityReportID]);
};

SecurityDefinition.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityDefinition.Tags.ClearingBusinessDate]);
};

SecurityDefinition.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinition.Tags.SecurityReqID]);
};

SecurityDefinition.prototype.orderRequestId = function () {
  return new OrderRequestID(this.message.tags[SecurityDefinition.Tags.OrderRequestID]);
};

SecurityDefinition.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityDefinition.Tags.SecurityResponseID]);
};

SecurityDefinition.prototype.securityResponseType = function () {
  return new SecurityResponseType(this.message.tags[SecurityDefinition.Tags.SecurityResponseType]);
};

SecurityDefinition.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityDefinition.Tags.SecurityRequestResult]);
};

SecurityDefinition.prototype.securityRejectReason = function () {
  return new SecurityRejectReason(this.message.tags[SecurityDefinition.Tags.SecurityRejectReason]);
};

SecurityDefinition.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityDefinition.Tags.CorporateAction]);
};

SecurityDefinition.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinition.Tags.Currency]);
};

SecurityDefinition.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinition.Tags.Text]);
};

SecurityDefinition.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinition.Tags.EncodedTextLen]);
};

SecurityDefinition.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinition.Tags.EncodedText]);
};

SecurityDefinition.prototype.numOfSimpleInstruments = function () {
  return new NumOfSimpleInstruments(this.message.tags[SecurityDefinition.Tags.NumOfSimpleInstruments]);
};

SecurityDefinition.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[SecurityDefinition.Tags.LastUpdateTime]);
};

SecurityDefinition.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityDefinition.Tags.TransactTime]);
};

SecurityDefinition.Tags = {
  ApplicationSequenceControl: '1180',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  SecurityClassificationGrp: '1582',
  Stipulations: '232',
  InstrmtLegGrp: '555',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  MarketSegmentGrp: '1310',
  SecurityReportID: '964',
  ClearingBusinessDate: '715',
  SecurityReqID: '320',
  OrderRequestID: '2422',
  SecurityResponseID: '322',
  SecurityResponseType: '323',
  SecurityRequestResult: '560',
  SecurityRejectReason: '1607',
  CorporateAction: '292',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  NumOfSimpleInstruments: '1606',
  LastUpdateTime: '779',
  TransactTime: '60',
};

SecurityDefinition.msgType = 'd';

module.exports = SecurityDefinition;