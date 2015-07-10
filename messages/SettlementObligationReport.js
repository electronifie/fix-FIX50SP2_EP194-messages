var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SettlObligationInstructions = require('../components/SettlObligationInstructions');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlementCycleNo = require('../fields/SettlementCycleNo');
var SettlObligMsgID = require('../fields/SettlObligMsgID');
var SettlObligMode = require('../fields/SettlObligMode');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TransactTime = require('../fields/TransactTime');

function SettlementObligationReport (settlementObligationReport) {
  this.message = settlementObligationReport;
}

SettlementObligationReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[SettlementObligationReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SettlementObligationReport.prototype.settlObligationInstructions = function () {
  return this.message.groups[SettlementObligationReport.Tags.SettlObligationInstructions]
    .map(function (settlObligationInstructions) {
      return new SettlObligationInstructions(settlObligationInstructions);
  });
};

SettlementObligationReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SettlementObligationReport.Tags.ClearingBusinessDate]);
};

SettlementObligationReport.prototype.settlementCycleNo = function () {
  return new SettlementCycleNo(this.message.tags[SettlementObligationReport.Tags.SettlementCycleNo]);
};

SettlementObligationReport.prototype.settlObligMsgId = function () {
  return new SettlObligMsgID(this.message.tags[SettlementObligationReport.Tags.SettlObligMsgID]);
};

SettlementObligationReport.prototype.settlObligMode = function () {
  return new SettlObligMode(this.message.tags[SettlementObligationReport.Tags.SettlObligMode]);
};

SettlementObligationReport.prototype.text = function () {
  return new Text(this.message.tags[SettlementObligationReport.Tags.Text]);
};

SettlementObligationReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SettlementObligationReport.Tags.EncodedTextLen]);
};

SettlementObligationReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SettlementObligationReport.Tags.EncodedText]);
};

SettlementObligationReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SettlementObligationReport.Tags.TransactTime]);
};

SettlementObligationReport.Tags = {
  ApplicationSequenceControl: '1180',
  SettlObligationInstructions: '1165',
  ClearingBusinessDate: '715',
  SettlementCycleNo: '1153',
  SettlObligMsgID: '1160',
  SettlObligMode: '1159',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TransactTime: '60',
};

SettlementObligationReport.msgType = 'BQ';

module.exports = SettlementObligationReport;