var NoTickRules = require('../fields/NoTickRules');
var StartTickPriceRange = require('../fields/StartTickPriceRange');
var EndTickPriceRange = require('../fields/EndTickPriceRange');
var TickIncrement = require('../fields/TickIncrement');
var TickRuleType = require('../fields/TickRuleType');
var SettlPriceIncrement = require('../fields/SettlPriceIncrement');
var SettlPriceSecondaryIncrement = require('../fields/SettlPriceSecondaryIncrement');

function TickRules (tickRules) {
  this.message = tickRules;
}

/* group */

/* field */
TickRules.prototype.startTickPriceRange = function () {
  return new StartTickPriceRange(this.message.tags[StartTickPriceRange.Tag]);
};

/* field */
TickRules.prototype.endTickPriceRange = function () {
  return new EndTickPriceRange(this.message.tags[EndTickPriceRange.Tag]);
};

/* field */
TickRules.prototype.tickIncrement = function () {
  return new TickIncrement(this.message.tags[TickIncrement.Tag]);
};

/* field */
TickRules.prototype.tickRuleType = function () {
  return new TickRuleType(this.message.tags[TickRuleType.Tag]);
};

/* field */
TickRules.prototype.settlPriceIncrement = function () {
  return new SettlPriceIncrement(this.message.tags[SettlPriceIncrement.Tag]);
};

/* field */
TickRules.prototype.settlPriceSecondaryIncrement = function () {
  return new SettlPriceSecondaryIncrement(this.message.tags[SettlPriceSecondaryIncrement.Tag]);
};

/* end group */

TickRules.Tag = '1205';

module.exports = TickRules;