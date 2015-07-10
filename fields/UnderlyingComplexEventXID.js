var invert = require('invert-obj');

function UnderlyingComplexEventXID (underlyingComplexEventXid) {
  this.message = underlyingComplexEventXid;
}

UnderlyingComplexEventXID.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventXID.Tag = '2282';

UnderlyingComplexEventXID.Type = 'XID';

module.exports = UnderlyingComplexEventXID;