var NoMatchInst = require('../fields/NoMatchInst');
var MatchInst = require('../fields/MatchInst');
var MatchInstMarketID = require('../fields/MatchInstMarketID');
var MatchAttribTagID = require('../fields/MatchAttribTagID');
var MatchAttribValue = require('../fields/MatchAttribValue');

function MatchingInstructions (matchingInstructions) {
  this.message = matchingInstructions;
}

/* group */

/* field */
MatchingInstructions.prototype.matchInst = function () {
  return new MatchInst(this.message.tags[MatchInst.Tag]);
};

/* field */
MatchingInstructions.prototype.matchInstMarketId = function () {
  return new MatchInstMarketID(this.message.tags[MatchInstMarketID.Tag]);
};

/* field */
MatchingInstructions.prototype.matchAttribTagId = function () {
  return new MatchAttribTagID(this.message.tags[MatchAttribTagID.Tag]);
};

/* field */
MatchingInstructions.prototype.matchAttribValue = function () {
  return new MatchAttribValue(this.message.tags[MatchAttribValue.Tag]);
};

/* end group */

MatchingInstructions.Tag = '1624';

module.exports = MatchingInstructions;