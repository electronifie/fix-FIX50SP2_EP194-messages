var NoPartyDetails = require('../fields/NoPartyDetails');
var PartyDetailSubGrp = require('../components/PartyDetailSubGrp');
var PartyDetailAltIDGrp = require('../components/PartyDetailAltIDGrp');
var RelatedPartyDetailGrp = require('../components/RelatedPartyDetailGrp');
var PartyDetailID = require('../fields/PartyDetailID');
var PartyDetailIDSource = require('../fields/PartyDetailIDSource');
var PartyDetailRole = require('../fields/PartyDetailRole');
var PartyDetailRoleQualifier = require('../fields/PartyDetailRoleQualifier');
var PartyDetailStatus = require('../fields/PartyDetailStatus');

function PartyDetailGrp (partyDetailGrp) {
  this.message = partyDetailGrp;
}

/* group */

/* component */
PartyDetailGrp.prototype.partyDetailSubGrp = function () {
  return this.message.groups[PartyDetailSubGrp.Tag]
    .map(function (partyDetailSubGrp) {
      return new PartyDetailSubGrp(partyDetailSubGrp);
  });
};

/* component */
PartyDetailGrp.prototype.partyDetailAltIdgrp = function () {
  return this.message.groups[PartyDetailAltIDGrp.Tag]
    .map(function (partyDetailAltIdgrp) {
      return new PartyDetailAltIDGrp(partyDetailAltIdgrp);
  });
};

/* component */
PartyDetailGrp.prototype.relatedPartyDetailGrp = function () {
  return this.message.groups[RelatedPartyDetailGrp.Tag]
    .map(function (relatedPartyDetailGrp) {
      return new RelatedPartyDetailGrp(relatedPartyDetailGrp);
  });
};

/* field */
PartyDetailGrp.prototype.partyDetailId = function () {
  return new PartyDetailID(this.message.tags[PartyDetailID.Tag]);
};

/* field */
PartyDetailGrp.prototype.partyDetailIdsource = function () {
  return new PartyDetailIDSource(this.message.tags[PartyDetailIDSource.Tag]);
};

/* field */
PartyDetailGrp.prototype.partyDetailRole = function () {
  return new PartyDetailRole(this.message.tags[PartyDetailRole.Tag]);
};

/* field */
PartyDetailGrp.prototype.partyDetailRoleQualifier = function () {
  return new PartyDetailRoleQualifier(this.message.tags[PartyDetailRoleQualifier.Tag]);
};

/* field */
PartyDetailGrp.prototype.partyDetailStatus = function () {
  return new PartyDetailStatus(this.message.tags[PartyDetailStatus.Tag]);
};

/* end group */

PartyDetailGrp.Tag = '1671';

module.exports = PartyDetailGrp;