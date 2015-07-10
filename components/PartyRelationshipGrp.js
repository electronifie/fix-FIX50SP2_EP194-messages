var NoPartyRelationships = require('../fields/NoPartyRelationships');
var PartyRelationship = require('../fields/PartyRelationship');

function PartyRelationshipGrp (partyRelationshipGrp) {
  this.message = partyRelationshipGrp;
}

/* group */

/* field */
PartyRelationshipGrp.prototype.partyRelationship = function () {
  return new PartyRelationship(this.message.tags[PartyRelationship.Tag]);
};

/* end group */

PartyRelationshipGrp.Tag = '1514';

module.exports = PartyRelationshipGrp;