var invert = require('invert-obj');

function NumOfSimpleInstruments (numOfSimpleInstruments) {
  this.message = numOfSimpleInstruments;
}

NumOfSimpleInstruments.prototype.value = function () {
  return this.message;
};

NumOfSimpleInstruments.Tag = '1606';

NumOfSimpleInstruments.Type = 'INT';

module.exports = NumOfSimpleInstruments;