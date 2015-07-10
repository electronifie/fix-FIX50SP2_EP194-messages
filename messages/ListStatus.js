var OrdListStatGrp = require('../components/OrdListStatGrp');
var ListID = require('../fields/ListID');
var ListStatusType = require('../fields/ListStatusType');
var NoRpts = require('../fields/NoRpts');
var ListOrderStatus = require('../fields/ListOrderStatus');
var ContingencyType = require('../fields/ContingencyType');
var ListRejectReason = require('../fields/ListRejectReason');
var RptSeq = require('../fields/RptSeq');
var ListStatusText = require('../fields/ListStatusText');
var EncodedListStatusTextLen = require('../fields/EncodedListStatusTextLen');
var EncodedListStatusText = require('../fields/EncodedListStatusText');
var TransactTime = require('../fields/TransactTime');
var TotNoOrders = require('../fields/TotNoOrders');
var LastFragment = require('../fields/LastFragment');

function ListStatus (listStatus) {
  this.message = listStatus;
}

ListStatus.prototype.ordListStatGrp = function () {
  return this.message.groups[ListStatus.Tags.OrdListStatGrp]
    .map(function (ordListStatGrp) {
      return new OrdListStatGrp(ordListStatGrp);
  });
};

ListStatus.prototype.listId = function () {
  return new ListID(this.message.tags[ListStatus.Tags.ListID]);
};

ListStatus.prototype.listStatusType = function () {
  return new ListStatusType(this.message.tags[ListStatus.Tags.ListStatusType]);
};

ListStatus.prototype.noRpts = function () {
  return new NoRpts(this.message.tags[ListStatus.Tags.NoRpts]);
};

ListStatus.prototype.listOrderStatus = function () {
  return new ListOrderStatus(this.message.tags[ListStatus.Tags.ListOrderStatus]);
};

ListStatus.prototype.contingencyType = function () {
  return new ContingencyType(this.message.tags[ListStatus.Tags.ContingencyType]);
};

ListStatus.prototype.listRejectReason = function () {
  return new ListRejectReason(this.message.tags[ListStatus.Tags.ListRejectReason]);
};

ListStatus.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[ListStatus.Tags.RptSeq]);
};

ListStatus.prototype.listStatusText = function () {
  return new ListStatusText(this.message.tags[ListStatus.Tags.ListStatusText]);
};

ListStatus.prototype.encodedListStatusTextLen = function () {
  return new EncodedListStatusTextLen(this.message.tags[ListStatus.Tags.EncodedListStatusTextLen]);
};

ListStatus.prototype.encodedListStatusText = function () {
  return new EncodedListStatusText(this.message.tags[ListStatus.Tags.EncodedListStatusText]);
};

ListStatus.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ListStatus.Tags.TransactTime]);
};

ListStatus.prototype.totNoOrders = function () {
  return new TotNoOrders(this.message.tags[ListStatus.Tags.TotNoOrders]);
};

ListStatus.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[ListStatus.Tags.LastFragment]);
};

ListStatus.Tags = {
  OrdListStatGrp: '73',
  ListID: '66',
  ListStatusType: '429',
  NoRpts: '82',
  ListOrderStatus: '431',
  ContingencyType: '1385',
  ListRejectReason: '1386',
  RptSeq: '83',
  ListStatusText: '444',
  EncodedListStatusTextLen: '445',
  EncodedListStatusText: '446',
  TransactTime: '60',
  TotNoOrders: '68',
  LastFragment: '893',
};

ListStatus.msgType = 'N';

module.exports = ListStatus;