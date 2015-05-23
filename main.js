'use strict';

window.addEventListener( 'load', function () {
    var tabModel = new TabModel();
    var tabView = new TabView( tabModel );

    tabModel.changeTab( TAB_CONTACT );
    document.getElementById( 'app-container' ).style.display = 'block';
});
