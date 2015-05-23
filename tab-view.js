'use strict';

function TabView( model ) {
    var contact_tab = document.getElementById( 'socialLink' );
    contact_tab.addEventListener( 'click', function() {
        model.changeTab( TAB_CONTACT );
    });

    var games_tab = document.getElementById( 'gamesLink' );
    games_tab.addEventListener( 'click', function() {
        model.changeTab( TAB_GAMES );
    });

    var utilities_tab = document.getElementById( 'utilitiesLink' );
    utilities_tab.addEventListener( 'click', function() {
        model.changeTab( TAB_UTILITIES );
    });

    var transcriptions_tab = document.getElementById( 'transcriptionsLink' );
    transcriptions_tab.addEventListener( 'click', function() {
        model.changeTab( TAB_TRANSCRIPTIONS );
    });

    var resources_tab = document.getElementById( 'resourcesLink' );
    resources_tab.addEventListener( 'click', function() {
        model.changeTab( TAB_RESOURCES );
    });

    model.addListener( this );
};

TabView.prototype = {
    notify: function( eventType, eventData ) {
        show( tabTranslation[eventData] );
    },
};
