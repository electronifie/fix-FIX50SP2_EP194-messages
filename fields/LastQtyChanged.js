var invert = require('invert-obj');

function LastQtyChanged (lastQtyChanged) {
  this.message = lastQtyChanged;
}

LastQtyChanged.prototype.value = function () {
  return this.message;
};

LastQtyChanged.Tag = '2301';

LastQtyChanged.Type = 'QTY';

module.exports = LastQtyChanged;