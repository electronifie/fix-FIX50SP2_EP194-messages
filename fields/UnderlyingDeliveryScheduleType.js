var invert = require('invert-obj');

function UnderlyingDeliveryScheduleType (underlyingDeliveryScheduleType) {
  this.message = underlyingDeliveryScheduleType;
}

UnderlyingDeliveryScheduleType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleType.Tag = '41757';

UnderlyingDeliveryScheduleType.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleType;