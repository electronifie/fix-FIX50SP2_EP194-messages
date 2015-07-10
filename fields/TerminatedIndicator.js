var invert = require('invert-obj');

function TerminatedIndicator (terminatedIndicator) {
  this.message = terminatedIndicator;
}

TerminatedIndicator.prototype.value = function () {
  return this.message;
};

TerminatedIndicator.Tag = '2101';

TerminatedIndicator.Type = 'BOOLEAN';

module.exports = TerminatedIndicator;