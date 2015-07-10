var NoSideRegulatoryTradeIDs = require('../fields/NoSideRegulatoryTradeIDs');
var SideRegulatoryTradeID = require('../fields/SideRegulatoryTradeID');
var SideRegulatoryTradeIDSource = require('../fields/SideRegulatoryTradeIDSource');
var SideRegulatoryTradeIDEvent = require('../fields/SideRegulatoryTradeIDEvent');
var SideRegulatoryTradeIDType = require('../fields/SideRegulatoryTradeIDType');
var SideRegulatoryLegRefID = require('../fields/SideRegulatoryLegRefID');
var SideRegulatoryTradeIDScope = require('../fields/SideRegulatoryTradeIDScope');

function SideRegulatoryTradeIDGrp (sideRegulatoryTradeIdgrp) {
  this.message = sideRegulatoryTradeIdgrp;
}

/* group */

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryTradeId = function () {
  return new SideRegulatoryTradeID(this.message.tags[SideRegulatoryTradeID.Tag]);
};

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryTradeIdsource = function () {
  return new SideRegulatoryTradeIDSource(this.message.tags[SideRegulatoryTradeIDSource.Tag]);
};

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryTradeIdevent = function () {
  return new SideRegulatoryTradeIDEvent(this.message.tags[SideRegulatoryTradeIDEvent.Tag]);
};

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryTradeIdtype = function () {
  return new SideRegulatoryTradeIDType(this.message.tags[SideRegulatoryTradeIDType.Tag]);
};

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryLegRefId = function () {
  return new SideRegulatoryLegRefID(this.message.tags[SideRegulatoryLegRefID.Tag]);
};

/* field */
SideRegulatoryTradeIDGrp.prototype.sideRegulatoryTradeIdscope = function () {
  return new SideRegulatoryTradeIDScope(this.message.tags[SideRegulatoryTradeIDScope.Tag]);
};

/* end group */

SideRegulatoryTradeIDGrp.Tag = '1971';

module.exports = SideRegulatoryTradeIDGrp;