var invert = require('invert-obj');

function ListUpdateAction (listUpdateAction) {
  this.message = listUpdateAction;
}

ListUpdateAction.prototype.value = function () {
  return this.message;
};


ListUpdateAction.Keys = {
  'ADD': 'A',
  'DELETE': 'D',
  'MODIFY': 'M',
  'SNAPSHOT': 'S',
};

ListUpdateAction.Tag = '1324';

ListUpdateAction.Type = 'CHAR';

ListUpdateAction.Values = invert(ListUpdateAction.Keys);

module.exports = ListUpdateAction;