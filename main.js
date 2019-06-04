'use strict';

window.addEventListener( 'load', function () {
    var musicTable = new MusicTableModel();
    var musicSection = document.getElementById('transcriptions');
    musicSection.appendChild(musicTable.toDomTable());
});
