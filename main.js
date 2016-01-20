'use strict';

window.addEventListener( 'load', function () {
    var tabModel = new TabModel();
    var tabView = new TabView( tabModel );

    tabModel.changeTab( TAB_GAMES );
    document.getElementById( 'app-container' ).style.display = 'block';
});
