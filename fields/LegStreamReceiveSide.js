var invert = require('invert-obj');

function LegStreamReceiveSide (legStreamReceiveSide) {
  this.message = legStreamReceiveSide;
}

LegStreamReceiveSide.prototype.value = function () {
  return this.message;
};

LegStreamReceiveSide.Tag = '40245';

LegStreamReceiveSide.Type = 'INT';

module.exports = LegStreamReceiveSide;