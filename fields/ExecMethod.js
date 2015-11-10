var invert = require('invert-obj');

function ExecMethod (execMethod) {
  this.message = execMethod;
}

ExecMethod.prototype.value = function () {
  return this.message;
};


ExecMethod.Keys = {
  'UNDEFINED_UNSPECIFIED_': '0',
  'MANUAL': '1',
  'AUTOMATED': '2',
};

ExecMethod.Tag = '2405';

ExecMethod.Type = 'INT';

ExecMethod.Values = invert(ExecMethod.Keys);

module.exports = ExecMethod;