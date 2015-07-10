var NoAllocRegulatoryTradeIDs = require('../fields/NoAllocRegulatoryTradeIDs');
var AllocRegulatoryTradeID = require('../fields/AllocRegulatoryTradeID');
var AllocRegulatoryTradeIDSource = require('../fields/AllocRegulatoryTradeIDSource');
var AllocRegulatoryTradeIDEvent = require('../fields/AllocRegulatoryTradeIDEvent');
var AllocRegulatoryTradeIDType = require('../fields/AllocRegulatoryTradeIDType');
var AllocRegulatoryLegRefID = require('../fields/AllocRegulatoryLegRefID');
var AllocRegulatoryTradeIDScope = require('../fields/AllocRegulatoryTradeIDScope');

function AllocRegulatoryTradeIDGrp (allocRegulatoryTradeIdgrp) {
  this.message = allocRegulatoryTradeIdgrp;
}

/* group */

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryTradeId = function () {
  return new AllocRegulatoryTradeID(this.message.tags[AllocRegulatoryTradeID.Tag]);
};

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryTradeIdsource = function () {
  return new AllocRegulatoryTradeIDSource(this.message.tags[AllocRegulatoryTradeIDSource.Tag]);
};

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryTradeIdevent = function () {
  return new AllocRegulatoryTradeIDEvent(this.message.tags[AllocRegulatoryTradeIDEvent.Tag]);
};

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryTradeIdtype = function () {
  return new AllocRegulatoryTradeIDType(this.message.tags[AllocRegulatoryTradeIDType.Tag]);
};

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryLegRefId = function () {
  return new AllocRegulatoryLegRefID(this.message.tags[AllocRegulatoryLegRefID.Tag]);
};

/* field */
AllocRegulatoryTradeIDGrp.prototype.allocRegulatoryTradeIdscope = function () {
  return new AllocRegulatoryTradeIDScope(this.message.tags[AllocRegulatoryTradeIDScope.Tag]);
};

/* end group */

AllocRegulatoryTradeIDGrp.Tag = '1908';

module.exports = AllocRegulatoryTradeIDGrp;