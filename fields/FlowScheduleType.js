var invert = require('invert-obj');

function FlowScheduleType (flowScheduleType) {
  this.message = flowScheduleType;
}

FlowScheduleType.prototype.value = function () {
  return this.message;
};


FlowScheduleType.Keys = {
  'NERC_EASTERN_OFF_PEAK': '0',
  'NERC_WESTERN_OFF_PEAK': '1',
  'NERC_CALENDAR_ALL_DAYS_IN_MONTH': '2',
  'NERC_EASTERN_PEAK': '3',
  'NERC_WESTERN_PEAK': '4',
};

FlowScheduleType.Tag = '1439';

FlowScheduleType.Type = 'INT';

FlowScheduleType.Values = invert(FlowScheduleType.Keys);

module.exports = FlowScheduleType;