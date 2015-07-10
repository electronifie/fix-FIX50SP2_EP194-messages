var invert = require('invert-obj');

function InstrumentScopeMaturityTime (instrumentScopeMaturityTime) {
  this.message = instrumentScopeMaturityTime;
}

InstrumentScopeMaturityTime.prototype.value = function () {
  return this.message;
};

InstrumentScopeMaturityTime.Tag = '1550';

InstrumentScopeMaturityTime.Type = 'TZTIMEONLY';

module.exports = InstrumentScopeMaturityTime;