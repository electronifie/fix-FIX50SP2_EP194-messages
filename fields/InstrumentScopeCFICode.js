var invert = require('invert-obj');

function InstrumentScopeCFICode (instrumentScopeCficode) {
  this.message = instrumentScopeCficode;
}

InstrumentScopeCFICode.prototype.value = function () {
  return this.message;
};

InstrumentScopeCFICode.Tag = '1546';

InstrumentScopeCFICode.Type = 'STRING';

module.exports = InstrumentScopeCFICode;