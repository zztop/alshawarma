"use strict";
var sys = require("util"),
    request = require("request"),
    FeedParser = require("feedparser"),
    newsFeedParser = require("./feed-parsers/feedParser");

request.get("http://news.google.com/news/feeds?pz=1&cf=all&ned=uk&hl=en&topic=w&output=rss")
    .pipe(new FeedParser())
    .once("readable", function (result) {
        var stream = this,
            item;
        newsFeedParser.readableParser(stream, {
            name: "google",
            edition: "us"
        });

    });