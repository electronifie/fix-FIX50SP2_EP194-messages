var invert = require('invert-obj');

function UnderlyingStreamXID (underlyingStreamXid) {
  this.message = underlyingStreamXid;
}

UnderlyingStreamXID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamXID.Tag = '42016';

UnderlyingStreamXID.Type = 'XID';

module.exports = UnderlyingStreamXID;