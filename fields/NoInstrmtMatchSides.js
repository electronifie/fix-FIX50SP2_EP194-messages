var invert = require('invert-obj');

function NoInstrmtMatchSides (noInstrmtMatchSides) {
  this.message = noInstrmtMatchSides;
}

NoInstrmtMatchSides.prototype.value = function () {
  return this.message;
};

NoInstrmtMatchSides.Tag = '1889';

NoInstrmtMatchSides.Type = 'NUMINGROUP';

module.exports = NoInstrmtMatchSides;