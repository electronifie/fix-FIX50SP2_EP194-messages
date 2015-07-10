var NoRiskInstrumentScopes = require('../fields/NoRiskInstrumentScopes');
var InstrumentScope = require('../components/InstrumentScope');
var InstrumentScopeOperator = require('../fields/InstrumentScopeOperator');
var RiskInstrumentMultiplier = require('../fields/RiskInstrumentMultiplier');

function RiskInstrumentScopeGrp (riskInstrumentScopeGrp) {
  this.message = riskInstrumentScopeGrp;
}

/* group */

/* component */
RiskInstrumentScopeGrp.prototype.instrumentScope = function () {
  return this.message.groups[InstrumentScope.Tag]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

/* field */
RiskInstrumentScopeGrp.prototype.instrumentScopeOperator = function () {
  return new InstrumentScopeOperator(this.message.tags[InstrumentScopeOperator.Tag]);
};

/* field */
RiskInstrumentScopeGrp.prototype.riskInstrumentMultiplier = function () {
  return new RiskInstrumentMultiplier(this.message.tags[RiskInstrumentMultiplier.Tag]);
};

/* end group */

RiskInstrumentScopeGrp.Tag = '1534';

module.exports = RiskInstrumentScopeGrp;