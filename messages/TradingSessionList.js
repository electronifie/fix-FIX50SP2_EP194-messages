var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TrdSessLstGrp = require('../components/TrdSessLstGrp');
var TradSesReqID = require('../fields/TradSesReqID');

function TradingSessionList (tradingSessionList) {
  this.message = tradingSessionList;
}

TradingSessionList.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradingSessionList.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[TradingSessionList.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradingSessionList.prototype.trdSessLstGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradingSessionList.Tags.TrdSessLstGrp] === undefined) return null;
  return this.message.groups[TradingSessionList.Tags.TrdSessLstGrp]
    .map(function (trdSessLstGrp) {
      return new TrdSessLstGrp(trdSessLstGrp);
  });
};

TradingSessionList.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionList.Tags.TradSesReqID]);
};

TradingSessionList.Tags = {
  ApplicationSequenceControl: '1180',
  TrdSessLstGrp: '386',
  TradSesReqID: '335',
};

TradingSessionList.msgType = 'BJ';

module.exports = TradingSessionList;