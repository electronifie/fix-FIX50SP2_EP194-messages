var invert = require('invert-obj');

function MassOrderRequestStatus (massOrderRequestStatus) {
  this.message = massOrderRequestStatus;
}

MassOrderRequestStatus.prototype.value = function () {
  return this.message;
};


MassOrderRequestStatus.Keys = {
  ACCEPTED: '1',
  ACCEPTED_WITH_ADDITIONAL_EVENTS: '2',
  REJECTED: '3',
};

MassOrderRequestStatus.Tag = '2425';

MassOrderRequestStatus.Type = 'INT';

MassOrderRequestStatus.Values = invert(MassOrderRequestStatus.Keys);

module.exports = MassOrderRequestStatus;