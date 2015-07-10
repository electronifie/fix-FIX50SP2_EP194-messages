var invert = require('invert-obj');

function SecondaryLockedQty (secondaryLockedQty) {
  this.message = secondaryLockedQty;
}

SecondaryLockedQty.prototype.value = function () {
  return this.message;
};

SecondaryLockedQty.Tag = '1809';

SecondaryLockedQty.Type = 'QTY';

module.exports = SecondaryLockedQty;