var NoValueChecks = require('../fields/NoValueChecks');
var ValueCheckType = require('../fields/ValueCheckType');
var ValueCheckAction = require('../fields/ValueCheckAction');

function ValueChecksGrp (valueChecksGrp) {
  this.message = valueChecksGrp;
}

/* group */

/* field */
ValueChecksGrp.prototype.valueCheckType = function () {
  return new ValueCheckType(this.message.tags[ValueCheckType.Tag]);
};

/* field */
ValueChecksGrp.prototype.valueCheckAction = function () {
  return new ValueCheckAction(this.message.tags[ValueCheckAction.Tag]);
};

/* end group */

ValueChecksGrp.Tag = '1868';

module.exports = ValueChecksGrp;