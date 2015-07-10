var NoRegulatoryTradeIDs = require('../fields/NoRegulatoryTradeIDs');
var RegulatoryTradeID = require('../fields/RegulatoryTradeID');
var RegulatoryTradeIDSource = require('../fields/RegulatoryTradeIDSource');
var RegulatoryTradeIDEvent = require('../fields/RegulatoryTradeIDEvent');
var RegulatoryTradeIDType = require('../fields/RegulatoryTradeIDType');
var RegulatoryLegRefID = require('../fields/RegulatoryLegRefID');
var RegulatoryTradeIDScope = require('../fields/RegulatoryTradeIDScope');

function RegulatoryTradeIDGrp (regulatoryTradeIdgrp) {
  this.message = regulatoryTradeIdgrp;
}

/* group */

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryTradeId = function () {
  return new RegulatoryTradeID(this.message.tags[RegulatoryTradeID.Tag]);
};

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryTradeIdsource = function () {
  return new RegulatoryTradeIDSource(this.message.tags[RegulatoryTradeIDSource.Tag]);
};

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryTradeIdevent = function () {
  return new RegulatoryTradeIDEvent(this.message.tags[RegulatoryTradeIDEvent.Tag]);
};

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryTradeIdtype = function () {
  return new RegulatoryTradeIDType(this.message.tags[RegulatoryTradeIDType.Tag]);
};

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryLegRefId = function () {
  return new RegulatoryLegRefID(this.message.tags[RegulatoryLegRefID.Tag]);
};

/* field */
RegulatoryTradeIDGrp.prototype.regulatoryTradeIdscope = function () {
  return new RegulatoryTradeIDScope(this.message.tags[RegulatoryTradeIDScope.Tag]);
};

/* end group */

RegulatoryTradeIDGrp.Tag = '1907';

module.exports = RegulatoryTradeIDGrp;