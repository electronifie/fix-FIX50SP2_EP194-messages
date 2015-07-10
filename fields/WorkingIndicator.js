var invert = require('invert-obj');

function WorkingIndicator (workingIndicator) {
  this.message = workingIndicator;
}

WorkingIndicator.prototype.value = function () {
  return this.message;
};


WorkingIndicator.Keys = {
  ORDER_HAS_BEEN_ACCEPTED_BUT_NOT_YET_IN_A_WORKING_STATE: 'N',
  ORDER_IS_CURRENTLY_BEING_WORKED: 'Y',
};

WorkingIndicator.Tag = '636';

WorkingIndicator.Type = 'BOOLEAN';

WorkingIndicator.Values = invert(WorkingIndicator.Keys);

module.exports = WorkingIndicator;