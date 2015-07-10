var invert = require('invert-obj');

function LegValuationSource (legValuationSource) {
  this.message = legValuationSource;
}

LegValuationSource.prototype.value = function () {
  return this.message;
};

LegValuationSource.Tag = '2197';

LegValuationSource.Type = 'STRING';

module.exports = LegValuationSource;