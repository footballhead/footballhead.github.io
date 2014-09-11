// try to get the right function for animation
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

/// animation start time
var start = null;
/// the animation we are currently performing
var animation = null;
/// the object we are animating
var animObj = null;
/// the current section (used for transition effect)
var cursection = null;

/// Update animations callback.
function step( timestamp ) {
    var progress;
    var maxtime = 500;

    if ( animObj === null ) return;
    if ( start === null ) start = timestamp; // why is === a thing

    progress = timestamp - start;

    if ( animation == "fadein" ) {
        animObj.style.opacity = progress / maxtime;
    } else if ( animation == "fadeout" ) {
        animObj.style.opacity = 1 - progress / maxtime;
    }

    if ( progress < maxtime ) {
        requestAnimationFrame( step );
    } else {
        start = null;

        if ( animation == "fadein" ) {
            animObj.style.opacity = 1;
        } else if ( animation == "fadeout" ) {
            animObj.style.opacity = 0;
        }

        animObj = null;
    }
}

/// Start the fade in animation for the given element.
function fadein( element ) {
    animation = "fadein";
    start = null;
    animObj = element;
    requestAnimationFrame( step );
}

/// Determine the section from a URL.
///
/// The section is what appears after the `#` in the URL with the prefix `p`
/// removed. If we used just `#` then the page would scroll which is
/// frustrating. If we use `?p=` then the page must refresh which can cause
/// flashing white in Chrome. If we use `#p[section]` then the page won't
/// scroll (the section doesn't exist) but the page doesn't need to refresh.
/// Combine that with an onClick trigger to navigate between sections without
/// refresh but also allow bookmarking (with an onLoad trigger).
///
/// The only problem with this approach is that manipulating the URL through
/// the browser requires a refresh, but we shouldn't be doing that anyway :P
///
/// @param url The URL to parse.
/// @return The section that the URL is specifying.
function parseSectionName( url ) {
    var tokenized = url.split( "#p" );
    var lastTokIndex = tokenized.length - 1;
    var section = tokenized[lastTokIndex];
    if ( existsSectionWithID( section ) ) {
        return section;
    } else {
        return "social";
    }
}

/// Display the section specified by the URL.
function displayRightSection() {
    var url = document.URL;
    var sectname = parseSectionName( url );
    show( sectname );
}

/// Determine whether or not there exists a section with a certain ID on the
/// webpage.
///
/// @param id The section ID to verify.
/// @return
function existsSectionWithID( id ) {
    var allSectIDs = getAllSectionIDs();
    return ( allSectIDs.indexOf( id ) !== -1 );
}

/// Get the IDs of all `<section>` tags in the page.
///
/// @return An array of all `<section>` IDs.
function getAllSectionIDs() {
    var allsections = document.getElementsByTagName( "section" );
    var sectIds = [];

    for ( i = 0; i < allsections.length; i++ ) {
        sectIds[sectIds.length+1] = allsections[i].id;
    }

    return sectIds;
}

/// Hide all <section>s and display the one with the given ID.
///
/// Works by manipulating `display` tag. If you add any more <section> tags you
/// might want to extend this code.
///
/// @param sectionid The `id` of the <section> tag to display
function show( sectionid ) {
    if ( sectionid == cursection ) return;

    var allsections = document.getElementsByTagName( "section" );

    cursection = sectionid;

    for ( i = 0; i < allsections.length; i++ ) { // why u no have foreach
        var sect = allsections[i];

        if ( sect.id == sectionid ) {
            sect.style.display = "block";

            fadein( sect );
        } else {
            sect.style.display = "none";
            sect.style.opacity = 0;
        }
    }
}
