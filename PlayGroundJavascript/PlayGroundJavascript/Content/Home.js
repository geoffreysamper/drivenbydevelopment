/// <reference path="../Scripts/jquery-1.8.2-vsdoc.js" />
/// <reference path="jsrender.js" />


var overviewUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/upcoming.json?page_limit=16&page=1&country=us&apikey=fzft74urft6ptz7hdv9zafsj';


var HomeOverview = function () {
    this.load = function () {
        $.ajax({
            url: overviewUrl,
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
                $("#movieList").html($("#movieTemplate").render(data.movies));
            }
        });



    };


};


var page = new HomeOverview();
page.load();
