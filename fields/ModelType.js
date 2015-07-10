var invert = require('invert-obj');

function ModelType (modelType) {
  this.message = modelType;
}

ModelType.prototype.value = function () {
  return this.message;
};


ModelType.Keys = {
  UTILITY_PROVIDED_STANDARD_MODEL: '0',
  PROPRIETARY_MODEL: '1',
};

ModelType.Tag = '1434';

ModelType.Type = 'INT';

ModelType.Values = invert(ModelType.Keys);

module.exports = ModelType;