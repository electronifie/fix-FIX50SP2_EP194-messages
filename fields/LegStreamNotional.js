var invert = require('invert-obj');

function LegStreamNotional (legStreamNotional) {
  this.message = legStreamNotional;
}

LegStreamNotional.prototype.value = function () {
  return this.message;
};

LegStreamNotional.Tag = '40246';

LegStreamNotional.Type = 'AMT';

module.exports = LegStreamNotional;