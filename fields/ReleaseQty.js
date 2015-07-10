var invert = require('invert-obj');

function ReleaseQty (releaseQty) {
  this.message = releaseQty;
}

ReleaseQty.prototype.value = function () {
  return this.message;
};

ReleaseQty.Tag = '1811';

ReleaseQty.Type = 'QTY';

module.exports = ReleaseQty;