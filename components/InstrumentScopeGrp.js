var NoInstrumentScopes = require('../fields/NoInstrumentScopes');
var InstrumentScope = require('../components/InstrumentScope');
var InstrumentScopeOperator = require('../fields/InstrumentScopeOperator');

function InstrumentScopeGrp (instrumentScopeGrp) {
  this.message = instrumentScopeGrp;
}

/* group */

/* component */
InstrumentScopeGrp.prototype.instrumentScope = function () {
  return this.message.groups[InstrumentScope.Tag]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

/* field */
InstrumentScopeGrp.prototype.instrumentScopeOperator = function () {
  return new InstrumentScopeOperator(this.message.tags[InstrumentScopeOperator.Tag]);
};

/* end group */

InstrumentScopeGrp.Tag = '1656';

module.exports = InstrumentScopeGrp;