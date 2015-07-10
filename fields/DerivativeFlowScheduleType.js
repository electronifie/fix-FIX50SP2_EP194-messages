var invert = require('invert-obj');

function DerivativeFlowScheduleType (derivativeFlowScheduleType) {
  this.message = derivativeFlowScheduleType;
}

DerivativeFlowScheduleType.prototype.value = function () {
  return this.message;
};

DerivativeFlowScheduleType.Tag = '1442';

DerivativeFlowScheduleType.Type = 'INT';

module.exports = DerivativeFlowScheduleType;