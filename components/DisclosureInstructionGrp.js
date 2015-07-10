var NoDisclosureInstructions = require('../fields/NoDisclosureInstructions');
var DisclosureType = require('../fields/DisclosureType');
var DisclosureInstruction = require('../fields/DisclosureInstruction');

function DisclosureInstructionGrp (disclosureInstructionGrp) {
  this.message = disclosureInstructionGrp;
}

/* group */

/* field */
DisclosureInstructionGrp.prototype.disclosureType = function () {
  return new DisclosureType(this.message.tags[DisclosureType.Tag]);
};

/* field */
DisclosureInstructionGrp.prototype.disclosureInstruction = function () {
  return new DisclosureInstruction(this.message.tags[DisclosureInstruction.Tag]);
};

/* end group */

DisclosureInstructionGrp.Tag = '1812';

module.exports = DisclosureInstructionGrp;