var invert = require('invert-obj');

function LegComplexEventXID (legComplexEventXid) {
  this.message = legComplexEventXid;
}

LegComplexEventXID.prototype.value = function () {
  return this.message;
};

LegComplexEventXID.Tag = '2248';

LegComplexEventXID.Type = 'XID';

module.exports = LegComplexEventXID;