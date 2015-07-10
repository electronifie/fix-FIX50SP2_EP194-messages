var invert = require('invert-obj');

function LegBusinessCenter (legBusinessCenter) {
  this.message = legBusinessCenter;
}

LegBusinessCenter.prototype.value = function () {
  return this.message;
};

LegBusinessCenter.Tag = '40924';

LegBusinessCenter.Type = 'STRING';

module.exports = LegBusinessCenter;