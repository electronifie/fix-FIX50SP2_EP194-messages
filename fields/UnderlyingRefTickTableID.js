var invert = require('invert-obj');

function UnderlyingRefTickTableID (underlyingRefTickTableId) {
  this.message = underlyingRefTickTableId;
}

UnderlyingRefTickTableID.prototype.value = function () {
  return this.message;
};

UnderlyingRefTickTableID.Tag = '2044';

UnderlyingRefTickTableID.Type = 'INT';

module.exports = UnderlyingRefTickTableID;