var invert = require('invert-obj');

function CollAsgnRespType (collAsgnRespType) {
  this.message = collAsgnRespType;
}

CollAsgnRespType.prototype.value = function () {
  return this.message;
};


CollAsgnRespType.Keys = {
  'RECEIVED': '0',
  'ACCEPTED': '1',
  'DECLINED': '2',
  'REJECTED': '3',
  'TRANSACTION_PENDING': '4',
  'TRANSACTION_COMPLETED_WITH_WARNING_SEE_TEXT_FOR_FURTHER_INFORMATION_': '5',
};

CollAsgnRespType.Tag = '905';

CollAsgnRespType.Type = 'INT';

CollAsgnRespType.Values = invert(CollAsgnRespType.Keys);

module.exports = CollAsgnRespType;