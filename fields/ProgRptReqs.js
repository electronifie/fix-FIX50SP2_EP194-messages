var invert = require('invert-obj');

function ProgRptReqs (progRptReqs) {
  this.message = progRptReqs;
}

ProgRptReqs.prototype.value = function () {
  return this.message;
};


ProgRptReqs.Keys = {
  'BUY_SIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUE_REQUEST_THE_SELL_SIDE_FIRM_CAN_HOWEVER_SEND_A_DONE_STATUS_LIST_STATUS_RESPONSE_IN_AN_UNSOLICITED_FASHION': '1',
  'SELL_SIDE_PERIODICALLY_SENDS_STATUS_USING_LIST_STATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD_': '2',
  'REAL_TIME_EXECUTION_REPORTS': '3',
};

ProgRptReqs.Tag = '414';

ProgRptReqs.Type = 'INT';

ProgRptReqs.Values = invert(ProgRptReqs.Keys);

module.exports = ProgRptReqs;