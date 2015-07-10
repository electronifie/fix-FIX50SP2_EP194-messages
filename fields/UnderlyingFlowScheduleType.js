var invert = require('invert-obj');

function UnderlyingFlowScheduleType (underlyingFlowScheduleType) {
  this.message = underlyingFlowScheduleType;
}

UnderlyingFlowScheduleType.prototype.value = function () {
  return this.message;
};

UnderlyingFlowScheduleType.Tag = '1441';

UnderlyingFlowScheduleType.Type = 'INT';

module.exports = UnderlyingFlowScheduleType;