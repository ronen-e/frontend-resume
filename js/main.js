var CVAPP = CVAPP || {};
function getGlobalNS() {
    return CVAPP;
}

requirejs.config({
    //By default load any module IDs from js/lib
    // baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        // components: './views/components'
    }
});

// Start the main app logic.
requirejs([
    '//maps.googleapis.com/maps/api/js?libraries=places',
    './bundle.js',
], function() {
    main();
});
