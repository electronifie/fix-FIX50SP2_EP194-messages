var invert = require('invert-obj');

function LegStreamTotalNotional (legStreamTotalNotional) {
  this.message = legStreamTotalNotional;
}

LegStreamTotalNotional.prototype.value = function () {
  return this.message;
};

LegStreamTotalNotional.Tag = '41707';

LegStreamTotalNotional.Type = 'QTY';

module.exports = LegStreamTotalNotional;