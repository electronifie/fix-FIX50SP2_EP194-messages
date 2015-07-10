var invert = require('invert-obj');

function LegStreamNotionalXIDRef (legStreamNotionalXidref) {
  this.message = legStreamNotionalXidref;
}

LegStreamNotionalXIDRef.prototype.value = function () {
  return this.message;
};

LegStreamNotionalXIDRef.Tag = '41702';

LegStreamNotionalXIDRef.Type = 'XIDREF';

module.exports = LegStreamNotionalXIDRef;