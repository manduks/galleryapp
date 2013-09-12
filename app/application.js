Ext.define('Gallery.Application', {
    name: 'Gallery',

    extend: 'Ext.app.Application',

    requires:['Ext.data.JsonP'],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Gallery.controller.Main'
    ],

    stores: [
        // TODO: add stores here
    ]
});
