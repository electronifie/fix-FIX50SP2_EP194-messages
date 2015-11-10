var invert = require('invert-obj');

function NewsCategory (newsCategory) {
  this.message = newsCategory;
}

NewsCategory.prototype.value = function () {
  return this.message;
};


NewsCategory.Keys = {
  'COMPANY_NEWS': '0',
  'MARKETPLACE_NEWS': '1',
  'FINANCIAL_MARKET_NEWS': '2',
  'TECHNICAL_NEWS': '3',
  'OTHER_NEWS': '99',
};

NewsCategory.Tag = '1473';

NewsCategory.Type = 'INT';

NewsCategory.Values = invert(NewsCategory.Keys);

module.exports = NewsCategory;