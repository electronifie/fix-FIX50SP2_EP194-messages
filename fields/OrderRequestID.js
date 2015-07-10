var invert = require('invert-obj');

function OrderRequestID (orderRequestId) {
  this.message = orderRequestId;
}

OrderRequestID.prototype.value = function () {
  return this.message;
};

OrderRequestID.Tag = '2422';

OrderRequestID.Type = 'INT';

module.exports = OrderRequestID;