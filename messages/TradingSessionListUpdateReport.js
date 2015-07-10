var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TrdSessLstGrp = require('../components/TrdSessLstGrp');
var TradSesReqID = require('../fields/TradSesReqID');

function TradingSessionListUpdateReport (tradingSessionListUpdateReport) {
  this.message = tradingSessionListUpdateReport;
}

TradingSessionListUpdateReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[TradingSessionListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradingSessionListUpdateReport.prototype.trdSessLstGrp = function () {
  return this.message.groups[TradingSessionListUpdateReport.Tags.TrdSessLstGrp]
    .map(function (trdSessLstGrp) {
      return new TrdSessLstGrp(trdSessLstGrp);
  });
};

TradingSessionListUpdateReport.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionListUpdateReport.Tags.TradSesReqID]);
};

TradingSessionListUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  TrdSessLstGrp: '386',
  TradSesReqID: '335',
};

TradingSessionListUpdateReport.msgType = 'BS';

module.exports = TradingSessionListUpdateReport;