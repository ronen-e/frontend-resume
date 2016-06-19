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

var view = {
    bio: bioView,
    work: workView,
    projects: projectsView,
    education: educationView,
    map: mapView,
    letsConnect: letsConnectView,
    init: function() {
        this.bio.init();
        this.work.init();
        this.projects.init();
        this.education.init();
        this.map.init();
        this.letsConnect.init();
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

         // Calls the initializeMap() function when the page loads
         try {
             initializeMap();
             // Vanilla JS way to listen for resizing of the window
             // and adjust map bounds
             window.addEventListener('resize', function(e) {
                 // Make sure the map bounds get updated on page resize
                 map.fitBounds(mapBounds);
             });

             // logs clicks on page
             jQuery(document).click(function(event) {
                 logClicks(event.pageX, event.pageY);
             });

         } catch(e) {
             console.error('main Error:', e);
         }
     });
}
