var invert = require('invert-obj');

function AssetGroup (assetGroup) {
  this.message = assetGroup;
}

AssetGroup.prototype.value = function () {
  return this.message;
};


AssetGroup.Keys = {
  'FINANCIALS': '1',
  'COMMODITIES': '2',
  'ALTERNATIVE_INVESTMENTS': '3',
};

AssetGroup.Tag = '2210';

AssetGroup.Type = 'INT';

AssetGroup.Values = invert(AssetGroup.Keys);

module.exports = AssetGroup;