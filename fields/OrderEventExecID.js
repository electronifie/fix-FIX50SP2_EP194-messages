var invert = require('invert-obj');

function OrderEventExecID (orderEventExecId) {
  this.message = orderEventExecId;
}

OrderEventExecID.prototype.value = function () {
  return this.message;
};

OrderEventExecID.Tag = '1797';

OrderEventExecID.Type = 'STRING';

module.exports = OrderEventExecID;