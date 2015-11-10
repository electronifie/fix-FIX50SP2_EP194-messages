var invert = require('invert-obj');

function ValueCheckAction (valueCheckAction) {
  this.message = valueCheckAction;
}

ValueCheckAction.prototype.value = function () {
  return this.message;
};


ValueCheckAction.Keys = {
  'DO_NOT_CHECK': '0',
  'CHECK': '1',
  'BEST_EFFORT': '2',
};

ValueCheckAction.Tag = '1870';

ValueCheckAction.Type = 'INT';

ValueCheckAction.Values = invert(ValueCheckAction.Keys);

module.exports = ValueCheckAction;