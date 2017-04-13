//
// Utilities
//

function make_td(child) {
    var td = document.createElement('td');
    td.appendChild(child);

    return td;
}

function make_th(text) {
    var th = document.createElement('th');

    var node = document.createTextNode(text);
    th.appendChild(node);

    return th;
}

function make_ahref(link, text) {
    var a = document.createElement('a');
    a.href = link;

    var node = document.createTextNode(text);
    a.appendChild(node);

    return a;
}

//
// MusicModel
//

function MusicModel(title_, artist_, album_, videoId_, filename_) {
    this.title = title_;
    this.artist = artist_;
    this.album = album_;
    this.videoId = videoId_;
    this.filename = filename_;
}

MusicModel.prototype = {
    YOUTUBE_BASE_URL: "https://www.youtube.com/watch?v=",

    PATH_BASE: "music/",
    EXT_PDF: ".pdf",
    EXT_MIDI: ".mid",

    toDomTableCell: function() {
        var tr = document.createElement('tr');
        tr.appendChild(make_td(document.createTextNode(this.title)));
        tr.appendChild(make_td(document.createTextNode(this.artist)));
        tr.appendChild(make_td(document.createTextNode(this.album)));

        if (this.videoId === null) {
            tr.appendChild(make_td(document.createTextNode("-")));
        } else {
            tr.appendChild(make_td(make_ahref(this.YOUTUBE_BASE_URL + this.videoId, "Video")));
        }

        tr.appendChild(make_td(make_ahref(this.PATH_BASE + this.filename + this.EXT_PDF, "PDF")));
        tr.appendChild(make_td(make_ahref(this.PATH_BASE + this.filename + this.EXT_MIDI, "MIDI")));

        return tr;
    }
}

//
// MusicTableModel
//

function MusicTableModel() {
    this.rows = [];

    this.rows.push(new MusicModel("Das Wandern",                 "Kajiura Yuki",     ".hack//SIGN",           "oRDAg2-g-30", "Das-Wandern"));
    this.rows.push(new MusicModel("The Bones of Jakobson",       "Jessica Curry",    "Dear Esther",           "x0eB1S2J_kw", "The-Bones-of-Jakobson"));
    this.rows.push(new MusicModel("Dear Esther",                 "Jessica Curry",    "Dear Esther",           "tXHPkSetTfo", "Dear-Esther"));
    this.rows.push(new MusicModel("I Have Begun My Ascent",      "Jessica Curry",    "Dear Esther",           "GHd3_wJCH7c", "I-Have-Begun-My-Ascent"));
    this.rows.push(new MusicModel("Golden Ratio",                "Jessica Curry",    "Dear Esther",           "5Ax6Lpfy7K4", "Golden-Ratio"));
    this.rows.push(new MusicModel("Remember",                    "Jessica Curry",    "Dear Esther",           "GemNPTP2byg", "Remember"));
    this.rows.push(new MusicModel("Standing Stones",             "Jessica Curry",    "Dear Esther",           "zEaVDLqG4RM", "Standing-Stones"));
    this.rows.push(new MusicModel("This Godforsaken Aerial",     "Jessica Curry",    "Dear Esther",           "RJUvkCJKNvk", "This-Godforsaken-Aerial"));
    this.rows.push(new MusicModel("Twenty One",                  "Jessica Curry",    "Dear Esther",           "ZHt4cth91II", "Twenty-One"));
    this.rows.push(new MusicModel("The Earth Prelude",           "Ludovico Einaudi", "Divenire",              "BoVVLvgbEI0", "The-Earth-Prelude"));
    this.rows.push(new MusicModel("Board Up the Windows",        "Jessica Curry",    "Korsakovia",            "rwc3TdAosJc", "Board-Up-the-Windows"));
    this.rows.push(new MusicModel("The Event",                   "Jessica Curry",    "Korsakovia",            "mX47nkkQUss", "The-Event"));
    this.rows.push(new MusicModel("Wet Hands",                   "C418",             "Minecraft",             "sWnMII3E5gA", "Wet-Hands"));
    this.rows.push(new MusicModel("3EM08_SS_103_junko",          "Sagisu Shiro",     "Rebuild of Evangelion", "U0H6MC5qAGk", "3EM08_SS_103_junko"));
    this.rows.push(new MusicModel("3EM12_SS_101_2femmes_option", "Sagisu Shiro",     "Rebuild of Evangelion", "1aV5E0kohPM", "3EM12_SS_101_2femmes_option"));
    this.rows.push(new MusicModel("Overworld (Night)",           "Kozue Ishikawa",   "Wario Land 3",          "1v3mJqOCJ1c", "Overworld_(Night)"));
    //this.rows.push(new MusicModel("", "", "", "", ""));
}

MusicTableModel.prototype = {
    toDomTable: function() {
        var table = document.createElement("table");
        table.id = 'transtab';

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        var heading = this.makeHeadingDom();
        tbody.appendChild(heading);

        for (var i = 0; i < this.rows.length; i++) {
            var row = this.rows[i]
            tbody.appendChild(row.toDomTableCell());
        }

        return table;
    },

    makeHeadingDom: function() {
        var tr = document.createElement('tr');
        tr.appendChild(make_th("Title"));
        tr.appendChild(make_th("Artist"));
        tr.appendChild(make_th("From"));
        tr.appendChild(make_th("Video"));
        tr.appendChild(make_th("PDF"));
        tr.appendChild(make_th("MIDI"));

        return tr;
    }
}
