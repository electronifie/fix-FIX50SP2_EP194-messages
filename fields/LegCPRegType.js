var invert = require('invert-obj');

function LegCPRegType (legCpregType) {
  this.message = legCpregType;
}

LegCPRegType.prototype.value = function () {
  return this.message;
};

LegCPRegType.Tag = '2208';

LegCPRegType.Type = 'STRING';

module.exports = LegCPRegType;