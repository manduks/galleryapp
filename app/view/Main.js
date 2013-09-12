Ext.define('Gallery.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Gallery.view.login.Login'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'card'
    },
    activeItem : 0,

    items: [{
        xtype:'container',
        layout: {
          align: 'middle',
          pack: 'center',
          type: 'hbox'
      },
      items:{
            xtype: 'login'
        }         
  },{
    xtype: 'container',
    html:'coantiner 2'
}]
});