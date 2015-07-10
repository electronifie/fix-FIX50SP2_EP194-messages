var invert = require('invert-obj');

function UnderlyingReferenceEntityType (underlyingReferenceEntityType) {
  this.message = underlyingReferenceEntityType;
}

UnderlyingReferenceEntityType.prototype.value = function () {
  return this.message;
};

UnderlyingReferenceEntityType.Tag = '2000';

UnderlyingReferenceEntityType.Type = 'INT';

module.exports = UnderlyingReferenceEntityType;