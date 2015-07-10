var invert = require('invert-obj');

function WireReference (wireReference) {
  this.message = wireReference;
}

WireReference.prototype.value = function () {
  return this.message;
};

WireReference.Tag = '2486';

WireReference.Type = 'STRING';

module.exports = WireReference;