var invert = require('invert-obj');

function LocateReqd (locateReqd) {
  this.message = locateReqd;
}

LocateReqd.prototype.value = function () {
  return this.message;
};


LocateReqd.Keys = {
  'INDICATES_THE_BROKER_IS_NOT_REQUIRED_TO_LOCATE': 'N',
  'INDICATES_THE_BROKER_IS_RESPONSIBLE_FOR_LOCATING_THE_STOCK': 'Y',
};

LocateReqd.Tag = '114';

LocateReqd.Type = 'BOOLEAN';

LocateReqd.Values = invert(LocateReqd.Keys);

module.exports = LocateReqd;