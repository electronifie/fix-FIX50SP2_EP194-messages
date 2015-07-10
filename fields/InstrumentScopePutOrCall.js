var invert = require('invert-obj');

function InstrumentScopePutOrCall (instrumentScopePutOrCall) {
  this.message = instrumentScopePutOrCall;
}

InstrumentScopePutOrCall.prototype.value = function () {
  return this.message;
};

InstrumentScopePutOrCall.Tag = '1553';

InstrumentScopePutOrCall.Type = 'INT';

module.exports = InstrumentScopePutOrCall;