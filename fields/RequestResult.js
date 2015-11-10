var invert = require('invert-obj');

function RequestResult (requestResult) {
  this.message = requestResult;
}

RequestResult.prototype.value = function () {
  return this.message;
};


RequestResult.Keys = {
  'VALID_REQUEST': '0',
  'INVALID_OR_UNSUPPORTED_REQUEST': '1',
  'NO_DATA_FOUND_THAT_MATCH_SELECTION_CRITERIA': '2',
  'NOT_AUTHORIZED_TO_RETRIEVE_DATA': '3',
  'DATA_TEMPORARILY_UNAVAILABLE': '4',
  'REQUEST_FOR_DATA_NOT_SUPPORTED': '5',
  'OTHER': '99',
};

RequestResult.Tag = '1511';

RequestResult.Type = 'INT';

RequestResult.Values = invert(RequestResult.Keys);

module.exports = RequestResult;