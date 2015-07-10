var invert = require('invert-obj');

function MassOrderRequestID (massOrderRequestId) {
  this.message = massOrderRequestId;
}

MassOrderRequestID.prototype.value = function () {
  return this.message;
};

MassOrderRequestID.Tag = '2423';

MassOrderRequestID.Type = 'STRING';

module.exports = MassOrderRequestID;