var invert = require('invert-obj');

function DisclosureInstruction (disclosureInstruction) {
  this.message = disclosureInstruction;
}

DisclosureInstruction.prototype.value = function () {
  return this.message;
};


DisclosureInstruction.Keys = {
  NO: '0',
  YES: '1',
  USE_DEFAULT_SETTING: '2',
};

DisclosureInstruction.Tag = '1814';

DisclosureInstruction.Type = 'INT';

DisclosureInstruction.Values = invert(DisclosureInstruction.Keys);

module.exports = DisclosureInstruction;