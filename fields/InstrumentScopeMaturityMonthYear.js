var invert = require('invert-obj');

function InstrumentScopeMaturityMonthYear (instrumentScopeMaturityMonthYear) {
  this.message = instrumentScopeMaturityMonthYear;
}

InstrumentScopeMaturityMonthYear.prototype.value = function () {
  return this.message;
};

InstrumentScopeMaturityMonthYear.Tag = '1549';

InstrumentScopeMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = InstrumentScopeMaturityMonthYear;