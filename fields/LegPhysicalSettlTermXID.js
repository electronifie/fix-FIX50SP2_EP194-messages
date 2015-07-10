var invert = require('invert-obj');

function LegPhysicalSettlTermXID (legPhysicalSettlTermXid) {
  this.message = legPhysicalSettlTermXid;
}

LegPhysicalSettlTermXID.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlTermXID.Tag = '41600';

LegPhysicalSettlTermXID.Type = 'XID';

module.exports = LegPhysicalSettlTermXID;