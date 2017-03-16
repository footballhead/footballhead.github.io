'use strict';

window.addEventListener( 'load', function () {
    var tabModel = new TabModel();
    var tabView = new TabView( tabModel );

    var musicTable = new MusicTableModel();
    var musicSection = document.getElementById('transcriptions');
    musicSection.appendChild(musicTable.toDomTable());

    if (window.location.href.endsWith("#sheet-music")) {
        tabModel.changeTab(TAB_TRANSCRIPTIONS);
        document.getElementById( 'app-container' ).style.display = 'block';
    } else {
        tabModel.changeTab( TAB_GAMES );
        document.getElementById( 'app-container' ).style.display = 'block';
    }
});
