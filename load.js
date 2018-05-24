/* */

var people = [];

  $.getJSON('data.json', function(data) {

    $.each(data.groups, function(i, f) {

      var item = "<p class=\"site\"><span class=\"number\">" + ("00" + (i + 1)).slice(-3) +
      "</span> <a href=\"" + f.site + "\">" + f.name + "</a></p>";

      $(item).appendTo("#sitelist");

    });

  });
