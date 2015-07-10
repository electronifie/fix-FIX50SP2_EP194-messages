var invert = require('invert-obj');

function DisclosureType (disclosureType) {
  this.message = disclosureType;
}

DisclosureType.prototype.value = function () {
  return this.message;
};


DisclosureType.Keys = {
  VOLUME: '1',
  PRICE: '2',
  SIDE: '3',
  AON: '4',
  GENERAL: '5',
  CLEARING_ACCOUNT: '6',
  CMTA_ACCOUNT: '7',
};

DisclosureType.Tag = '1813';

DisclosureType.Type = 'INT';

DisclosureType.Values = invert(DisclosureType.Keys);

module.exports = DisclosureType;