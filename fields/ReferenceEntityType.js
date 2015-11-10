var invert = require('invert-obj');

function ReferenceEntityType (referenceEntityType) {
  this.message = referenceEntityType;
}

ReferenceEntityType.prototype.value = function () {
  return this.message;
};


ReferenceEntityType.Keys = {
  'ASIAN': '1',
  'AUSTRALIAN_AND_NEW_ZEALAND': '2',
  'EUROPEAN_EMERGING_MARKETS': '3',
  'JAPANESE': '4',
  'NORTH_AMERICAN_HIGH_YIELD': '5',
  'NORTH_AMERICAN_INSURANCE': '6',
  'NORTH_AMERICAN_INVESTMENT_GRADE': '7',
  'SINGAPOREAN': '8',
  'WESTERN_EUROPEAN': '9',
  'WESTERN_EUROPEAN_INSURANCE': '10',
};

ReferenceEntityType.Tag = '1956';

ReferenceEntityType.Type = 'INT';

ReferenceEntityType.Values = invert(ReferenceEntityType.Keys);

module.exports = ReferenceEntityType;