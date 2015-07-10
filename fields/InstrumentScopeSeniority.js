var invert = require('invert-obj');

function InstrumentScopeSeniority (instrumentScopeSeniority) {
  this.message = instrumentScopeSeniority;
}

InstrumentScopeSeniority.prototype.value = function () {
  return this.message;
};

InstrumentScopeSeniority.Tag = '1552';

InstrumentScopeSeniority.Type = 'STRING';

module.exports = InstrumentScopeSeniority;