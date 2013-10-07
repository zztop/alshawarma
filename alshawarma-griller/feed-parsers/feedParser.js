"use strict";
var articleModel = require("../model/articleModel");

exports.metaParser = function (model) {
    if (typeof model !== articleModel) {
        throw ("invalid model");
    }
    //model.
};
exports.readableParser = function (stream, newsInfo) {
    var item, modelList = [],
        model;

    while (item = stream.read()) {

        model = Object.create(articleModel);
        model.categories = item.categories;
        model.link = item.link;
        model.pubDate = item.pubDate;
        model.descriptionTable = item.description;
        model.title = item.title;
        model.guid = item.guid;
        model.source = newsInfo.name;
        model.edition = newsInfo.edition;

        debugger;
        modelList.push(model);


    }
    debugger;
};