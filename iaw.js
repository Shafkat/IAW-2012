function ref()
{
}

var App = new Ext.Application({
	name: 'IAW',
	useLoadMask: true,
	launch: function() {
		
		
		Ext.regModel('Contact', {
			fields: ['eventName']
		});
		
		var store = new Ext.data.JsonStore({
			model  : 'Contact',
			sorters: 'eventName',
			
			data: [
				{eventName: '<b>Booths</b>'},
				{eventName: '<b>Shariah Law</b>'},
				{eventName: '<b>Human Rights in Islam</b>'},
				{eventName: '<b>Environment and Animal Rights</b>'}
			]
		});
		
		var list = new Ext.List({
			fullscreen: false,

			itemTpl : '{eventName}',
			grouped : false,
			indexBar: false,
			height: '65%',
			onItemDisclosure: function() { alert(eventName); },
			
			store: store
		});
		list.show();
		
		var topTabs = new Ext.TabPanel({
			tabBar: {
				layout: {
					pack: 'center'
				}
			},
			
			sortable: false,
			ui: 'dark',
			
			cardSwitchAnimation: {
				type: 'fade'
			},
			items: [
			{
				xtype: 'textfield',
				title: 'Events',
				html: '<div><center>Our Events</center></div>',
				cls: 'card card5',
			},
			{
				xtype: 'textfield',
				title: 'Purpose',
				html: '<div><center>Our Purpose go here...</center></div>',
				cls: 'card card4'
			},
			{
				xtype: 'textfield',
				title: 'Polls',
				html: '<div><center>Our Programs go here...</center></div>',
				cls: 'card card3'
			},
			{
				xtype: 'textfield',
				title: 'Contribute',
				html: '<div><center>Contribute to our cause...</center></div>',
				cls: 'card card2'
			}]
		});
		
		var bottomTabs =  new Ext.TabPanel({
			tabBar: {
				dock: 'bottom',
				ui: 'dark',
				layout: {
					pack: 'center'
				}
			},
			cardSwitchAnimation: {
				type: 'fade',
				cover: 'true'
			},

			items: [{
				xtype: 'textfield',
				title: 'IAW',
				itemId: 'hellow',
				
				html: '<p>Islamic Awareness Week 2012</p>',
				iconCls: 'info',
				cls: 'card card1'
			},
			{
				xtype: 'textfield',
				title: 'Islam',
				html: '<p>Islam</p>',
				iconCls: 'star',
				cls: 'card card2'
			},
			{
				xtype: 'textfield',
				title: 'The Prophet',
				html: '<p>Prophet Muhammad Pbuh</p>',
				iconCls: 'search',
				cls: 'card card3'
			},
			{
				xtype: 'textfield',
				title: 'The Companions',
				html: '<p>The Companions RA</p>',
				iconCls: 'team',
				cls: 'card card4'
			},
			{
				xtype: 'textfield',
				title: 'Daily Goodness',
				html: '<p>Daily Beautiful Sunnah that we all can practice.</p>',
				iconCls: 'user',
				cls: 'card card5'
			}]
		});
			
			
		IAW.views.PageToolbar = new Ext.Toolbar({
			id: 'PageToolbar',
			title: 'Islamic Awareness Week 2012',
		});
		
		IAW.views.TextContainer = new Ext.Panel({
			id: 'TextContainer',
			layout: 'fit',
			html: '<p>All text goes here!</p>',
		});
		
		IAW.views.PageContainer = new Ext.Panel({
			id: 'PageContainer',
			layout: 'fit',
			dockedItems: [IAW.views.PageToolbar, topTabs, list, bottomTabs ]

		});
		
		IAW.views.viewport = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			cardAnimation: 'slide',
			items: [IAW.views.PageContainer]
		});
		
		
		//This piece of code can reroute to different pages.
		//This code also required to handle clicks.
		var el = Ext.id('hellow');
		//alert(el.id);
		//el.on('click', function(){ document.location.href = 'http://www.google.ca'; });
		
}
});

