'use strict';

var TAB_CONTACT = 'TAB_CONTACT';
var TAB_GAMES = 'TAB_GAMES';
var TAB_UTILITIES = 'TAB_UTILITIES';
var TAB_TRANSCRIPTIONS = 'TAB_TRANSCRIPTIONS';
var TAB_RESOURCES = 'TAB_RESOURCES';

var TAB_EVENT_CHANGE = 'TAB_EVENT_CHANGE';

var tabTranslation = {
    'TAB_CONTACT': 'social',
    'TAB_GAMES': 'games',
    'TAB_UTILITIES': 'utilities',
    'TAB_TRANSCRIPTIONS': 'transcriptions',
    'TAB_RESOURCES': 'resources'
};

function TabModel() {
    this.currentTab = TAB_CONTACT;
    this.tabList = [
        TAB_CONTACT,
        TAB_GAMES,
        TAB_UTILITIES,
        TAB_TRANSCRIPTIONS,
        TAB_RESOURCES
    ];

};

TabModel.prototype = {
    listeners: [],
    currentTab: null,
    tabList: [],

    addListener: function( listener ) {
        if ( !( 'notify' in listener ) ) {
            console.log( 'WARNING: TabModel: tried to add listener without notify!' )
            return;
        }
        this.listeners.push( listener );
    },

    changeTab: function( tab ) {
        this.currentTab = tab;
        this.notifyListeners( TAB_EVENT_CHANGE, tab );
    },

    notifyListeners: function( eventType, eventData ) {
        for ( var index in this.listeners ) {
            this.listeners[index].notify( eventType, eventData );
        }
    },
};
