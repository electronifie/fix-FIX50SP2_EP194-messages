var invert = require('invert-obj');

function StreamXID (streamXid) {
  this.message = streamXid;
}

StreamXID.prototype.value = function () {
  return this.message;
};

StreamXID.Tag = '41303';

StreamXID.Type = 'XID';

module.exports = StreamXID;