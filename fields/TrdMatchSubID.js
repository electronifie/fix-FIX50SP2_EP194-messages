var invert = require('invert-obj');

function TrdMatchSubID (trdMatchSubId) {
  this.message = trdMatchSubId;
}

TrdMatchSubID.prototype.value = function () {
  return this.message;
};

TrdMatchSubID.Tag = '1891';

TrdMatchSubID.Type = 'STRING';

module.exports = TrdMatchSubID;