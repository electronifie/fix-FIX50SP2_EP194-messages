var invert = require('invert-obj');

function EventType (eventType) {
  this.message = eventType;
}

EventType.prototype.value = function () {
  return this.message;
};


EventType.Keys = {
  PUT: '1',
  CALL: '2',
  TENDER: '3',
  SINKING_FUND_CALL: '4',
  ACTIVATION: '5',
  INACTIVATION: '6',
  LAST_ELIGIBLE_TRADE_DATE: '7',
  SWAP_START_DATE: '8',
  SWAP_END_DATE: '9',
  SWAP_ROLL_DATE: '10',
  SWAP_NEXT_START_DATE: '11',
  SWAP_NEXT_ROLL_DATE: '12',
  FIRST_DELIVERY_DATE: '13',
  LAST_DELIVERY_DATE: '14',
  INITIAL_INVENTORY_DUE_DATE: '15',
  FINAL_INVENTORY_DUE_DATE: '16',
  FIRST_INTENT_DATE: '17',
  LAST_INTENT_DATE: '18',
  POSITION_REMOVAL_DATE: '19',
  MINIMUM_NOTICE: '20',
  DELIVER_START_TIME: '21',
  DELIVERY_END_TIME: '22',
  FIRST_NOTICE_DATE: '23',
  LAST_NOTICE_DATE: '24',
  FIRST_EXERCISE_DATE: '25',
  REDEMPTION_DATE: '26',
  TRADE_CONTINUATION_EFFECTIVE_DATE: '27',
  OTHER: '99',
};

EventType.Tag = '865';

EventType.Type = 'INT';

EventType.Values = invert(EventType.Keys);

module.exports = EventType;