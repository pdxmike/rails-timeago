(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Turkish shortened
  jQuery.timeago.settings.strings["tr-short"] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "1sn",
    minute: "1d",
    minutes: "%dd",
    hour: "1s",
    hours: "%ds",
    day: "1g",
    days: "%dg",
    month: "1ay",
    months: "%day",
    year: "1y",
    years: "%dy",
    wordSeparator: " ",
    numbers: []
  };
}));
