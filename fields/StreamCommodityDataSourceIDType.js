var invert = require('invert-obj');

function StreamCommodityDataSourceIDType (streamCommodityDataSourceIdtype) {
  this.message = streamCommodityDataSourceIdtype;
}

StreamCommodityDataSourceIDType.prototype.value = function () {
  return this.message;
};


StreamCommodityDataSourceIDType.Keys = {
  'CITY': '0',
  'AIRPORT': '1',
  'WEATHER_STATION_WBAN': '2',
  'WEATHER_INDEX_WMO': '3',
};

StreamCommodityDataSourceIDType.Tag = '41282';

StreamCommodityDataSourceIDType.Type = 'INT';

StreamCommodityDataSourceIDType.Values = invert(StreamCommodityDataSourceIDType.Keys);

module.exports = StreamCommodityDataSourceIDType;