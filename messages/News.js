var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var NewsRefGrp = require('../components/NewsRefGrp');
var RoutingGrp = require('../components/RoutingGrp');
var InstrmtGrp = require('../components/InstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var LinesOfTextGrp = require('../components/LinesOfTextGrp');
var NewsID = require('../fields/NewsID');
var NewsCategory = require('../fields/NewsCategory');
var LanguageCode = require('../fields/LanguageCode');
var OrigTime = require('../fields/OrigTime');
var Urgency = require('../fields/Urgency');
var Headline = require('../fields/Headline');
var EncodedHeadlineLen = require('../fields/EncodedHeadlineLen');
var EncodedHeadline = require('../fields/EncodedHeadline');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var URLLink = require('../fields/URLLink');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');

function News (news) {
  this.message = news;
}

News.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[News.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

News.prototype.newsRefGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.NewsRefGrp] === undefined) return null;
  return this.message.groups[News.Tags.NewsRefGrp]
    .map(function (newsRefGrp) {
      return new NewsRefGrp(newsRefGrp);
  });
};

News.prototype.routingGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.RoutingGrp] === undefined) return null;
  return this.message.groups[News.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

News.prototype.instrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.InstrmtGrp] === undefined) return null;
  return this.message.groups[News.Tags.InstrmtGrp]
    .map(function (instrmtGrp) {
      return new InstrmtGrp(instrmtGrp);
  });
};

News.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[News.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

News.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[News.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

News.prototype.linesOfTextGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.LinesOfTextGrp] === undefined) return null;
  return this.message.groups[News.Tags.LinesOfTextGrp]
    .map(function (linesOfTextGrp) {
      return new LinesOfTextGrp(linesOfTextGrp);
  });
};

News.prototype.newsId = function () {
  return new NewsID(this.message.tags[News.Tags.NewsID]);
};

News.prototype.newsCategory = function () {
  return new NewsCategory(this.message.tags[News.Tags.NewsCategory]);
};

News.prototype.languageCode = function () {
  return new LanguageCode(this.message.tags[News.Tags.LanguageCode]);
};

News.prototype.origTime = function () {
  return new OrigTime(this.message.tags[News.Tags.OrigTime]);
};

News.prototype.urgency = function () {
  return new Urgency(this.message.tags[News.Tags.Urgency]);
};

News.prototype.headline = function () {
  return new Headline(this.message.tags[News.Tags.Headline]);
};

News.prototype.encodedHeadlineLen = function () {
  return new EncodedHeadlineLen(this.message.tags[News.Tags.EncodedHeadlineLen]);
};

News.prototype.encodedHeadline = function () {
  return new EncodedHeadline(this.message.tags[News.Tags.EncodedHeadline]);
};

News.prototype.marketId = function () {
  return new MarketID(this.message.tags[News.Tags.MarketID]);
};

News.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[News.Tags.MarketSegmentID]);
};

News.prototype.urllink = function () {
  return new URLLink(this.message.tags[News.Tags.URLLink]);
};

News.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[News.Tags.RawDataLength]);
};

News.prototype.rawData = function () {
  return new RawData(this.message.tags[News.Tags.RawData]);
};

News.Tags = {
  ApplicationSequenceControl: '1180',
  NewsRefGrp: '1475',
  RoutingGrp: '215',
  InstrmtGrp: '146',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  LinesOfTextGrp: '33',
  NewsID: '1472',
  NewsCategory: '1473',
  LanguageCode: '1474',
  OrigTime: '42',
  Urgency: '61',
  Headline: '148',
  EncodedHeadlineLen: '358',
  EncodedHeadline: '359',
  MarketID: '1301',
  MarketSegmentID: '1300',
  URLLink: '149',
  RawDataLength: '95',
  RawData: '96',
};

News.msgType = 'B';

module.exports = News;