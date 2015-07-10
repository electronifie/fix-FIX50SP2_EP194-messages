var invert = require('invert-obj');

function LegReferenceEntityType (legReferenceEntityType) {
  this.message = legReferenceEntityType;
}

LegReferenceEntityType.prototype.value = function () {
  return this.message;
};

LegReferenceEntityType.Tag = '2171';

LegReferenceEntityType.Type = 'INT';

module.exports = LegReferenceEntityType;