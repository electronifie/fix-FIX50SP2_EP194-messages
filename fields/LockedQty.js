var invert = require('invert-obj');

function LockedQty (lockedQty) {
  this.message = lockedQty;
}

LockedQty.prototype.value = function () {
  return this.message;
};

LockedQty.Tag = '1808';

LockedQty.Type = 'QTY';

module.exports = LockedQty;