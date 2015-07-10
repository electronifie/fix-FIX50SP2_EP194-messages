var invert = require('invert-obj');

function LegFlowScheduleType (legFlowScheduleType) {
  this.message = legFlowScheduleType;
}

LegFlowScheduleType.prototype.value = function () {
  return this.message;
};

LegFlowScheduleType.Tag = '1440';

LegFlowScheduleType.Type = 'INT';

module.exports = LegFlowScheduleType;