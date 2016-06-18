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
    'vendor/jQuery',
    'vendor/tmpl',
    'helper',
    '//maps.googleapis.com/maps/api/js?libraries=places',
    'views/components/contacts',
    'views/components/skills',
    'views/map',
    'views/internationalize-button',
    'views/bio',
    'views/work',
    'views/projects',
    'views/education',
    'views/lets-connect',
    'resumeBuilder',
], function() {
    main();
});
