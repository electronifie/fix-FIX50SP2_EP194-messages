var invert = require('invert-obj');

function LegStreamXID (legStreamXid) {
  this.message = legStreamXid;
}

LegStreamXID.prototype.value = function () {
  return this.message;
};

LegStreamXID.Tag = '41700';

LegStreamXID.Type = 'XID';

module.exports = LegStreamXID;