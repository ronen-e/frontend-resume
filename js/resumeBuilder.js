/*
*  TODO
*  namespace
*  bundle - Webpack
*  minify
*  ES2015
*  translations support
*  React
*  Redux
*  express - heroku deploy
*  DB - mongodb / redis
*  replace jQuery with a lighter library e.g zepto, dom
*/

var model = null;

var mapView = {
    init: function() {
        this.$element = $('#mapDiv');
        this.render();
    },
    render: function() {
        this.$element.append('<div id="map"></div>');
    }
};

var view = {
    bio: bioView,
    work: workView,
    projects: projectsView,
    education: educationView,
    map: mapView,
    init: function() {
        this.bio.init();
        this.work.init();
        this.projects.init();
        this.education.init();
        this.map.init();
    }
};

var octopus = {
    init: function(appData) {
        model = appData;
        view.init();
    },
    getBio: function() {
        return model.bio;
    },
    getWork: function() {
        return model.work;
    },
    getProjects: function() {
        return model.projects;
    },
    getEducation: function() {
        return model.education;
    }
};

function main() {
     $.getJSON('./data.json').done(function initialize(appData) {
         octopus.init(appData);
         hideEmptySections();
     });
}

main();
