var NoPartyDetailAltID = require('../fields/NoPartyDetailAltID');
var PartyDetailAltSubGrp = require('../components/PartyDetailAltSubGrp');
var PartyDetailAltID = require('../fields/PartyDetailAltID');
var PartyDetailAltIDSource = require('../fields/PartyDetailAltIDSource');

function PartyDetailAltIDGrp (partyDetailAltIdgrp) {
  this.message = partyDetailAltIdgrp;
}

/* group */

/* component */
PartyDetailAltIDGrp.prototype.partyDetailAltSubGrp = function () {
  return this.message.groups[PartyDetailAltSubGrp.Tag]
    .map(function (partyDetailAltSubGrp) {
      return new PartyDetailAltSubGrp(partyDetailAltSubGrp);
  });
};

/* field */
PartyDetailAltIDGrp.prototype.partyDetailAltId = function () {
  return new PartyDetailAltID(this.message.tags[PartyDetailAltID.Tag]);
};

/* field */
PartyDetailAltIDGrp.prototype.partyDetailAltIdsource = function () {
  return new PartyDetailAltIDSource(this.message.tags[PartyDetailAltIDSource.Tag]);
};

/* end group */

PartyDetailAltIDGrp.Tag = '1516';

module.exports = PartyDetailAltIDGrp;