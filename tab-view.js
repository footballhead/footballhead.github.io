'use strict';

function Tab( domId, tabConst, model ) {
    var domElem = document.getElementById( domId );
    domElem.addEventListener( 'click', function( evt ) {
        model.changeTab( tabConst );
    });
}

function TabView( model ) {
    new Tab( 'socialLink', TAB_CONTACT, model );
    new Tab( 'gamesLink', TAB_GAMES, model );
    new Tab( 'utilitiesLink', TAB_UTILITIES, model );
    new Tab( 'transcriptionsLink', TAB_TRANSCRIPTIONS, model );
    new Tab( 'resourcesLink', TAB_RESOURCES, model );

    model.addListener( this );
};

TabView.prototype = {
    notify: function( eventType, eventData ) {
        show( tabTranslation[eventData] );
    },
};
