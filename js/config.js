require.config({
    paths: {
        jquery: 'libs/jquery/jquery-1.10.2.min',
        jqueryui: 'libs/jquery/jquery-ui-1.10.3.custom',

        jquery_ui_effect:'libs/jquery/jquery.ui.effect',
        jquery_ui_effect_shake:'libs/jquery/jquery.ui.effect-shake',

        lodash: 'libs/lodash/lodash-2.2.1.min',
        lodash_mixins: 'libs/lodash/lodash-mixins',
        backbone: 'libs/backbone/backbone-1.1.0.min',
		backbone_validation: 'libs/backbone/backbone-validation',
        jst: 'templates/templates',
        
        mockAjax: 'plugins/mockAjax/jquery.mockjax',
        mockUrl: 'plugins/mockAjax/mockUrl',
		
        maskedInput: 'plugins/maskedInput/jquery.masked.input',

        lapter:'plugins/localStorageAdapter/localStorageAdapter-1.0-beta',
        datepicker_localization:'libs/jquery/jquery-datepicker-localization',
		"text":"libs/requirejs/text",
		"L10n":"L10n/L10n",
		"events":"events/globalEvents",
		"foundation":'plugins/foundation/foundation',
		"foundation.topbar":'plugins/foundation/foundation.topbar',
		"foundation.offcanvas":'plugins/foundation/foundation.offcanvas', //sidebar
		"foundation.magellan":'plugins/foundation/foundation.magellan', //sticked navigation
		"foundation.slider":'plugins/foundation/foundation.slider', 
		"foundation.reveal":'plugins/foundation/foundation.reveal', 
		"foundation.tooltip":'plugins/foundation/foundation.tooltip', 
		"foundation.dropdown":'plugins/foundation/foundation.dropdown',
		/* Foundation Vendor Scripts */
		"modernizr":"plugins/modernizr/modernizr",
        'jquery.cookie': 'plugins/jquery.cookie/jquery.cookie',
        'fastclick': 'plugins/fastclick/fastclick',
        'placeholder': 'plugins/placeholder/placeholder'
    },
	
    shim: {
        lodash: {
            exports:"_"
        },
        lodash_mixins:{
            deps:['lodash']
        },
        backbone:{
            deps:['lodash', 'jquery'],
            exports:'Backbone'
        },
        //'jquery':{
        //    exports:'$'
        //},
        jqueryui:{
            deps: ['jquery'],
            exports: '$'
        },
        jquery_ui_effect:{
            deps:['jquery'],
            exports:'$'
        },
        jquery_ui_effect_shake:{
            deps:['jquery','jquery_ui_effect'],
            exports:'$'
        },
        jst:{
            exports: 'JST'
        },
        mockAjax:{
            deps: ['jquery']
        },
        maskedInput:{
            deps:['jquery']
        },
        datepicker_localization:{
            deps: ['jqueryui']
        },
		'modernizr': {
            exports: 'Modernizr'
        },
		"foundation":{
            deps: ['jquery','modernizr'],
			exports : "Foundation"
        },
		"foundation.topbar":{
            deps: ['foundation']
        },
		"foundation.offcanvas":{
            deps: ['foundation']
        },
		"foundation.magellan":{
            deps: ['foundation']
        },
		"foundation.slider":{
            deps: ['foundation']
        },
		"foundation.reveal":{
            deps: ['foundation']
        },
		"foundation.tooltip":{
            deps: ['foundation']
        },
		"foundation.dropdown":{
            deps: ['foundation']
        },
		/*Foundation Vendor Scripts */
        'jquery.cookie': {
            deps: [
            'jquery'
            ]
        },
        'fastclick': {
            exports: 'FastClick'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
        'placeholder': {
            exports: 'Placeholders'
        }
		
    },
    waitSeconds: 60
});

require(['app'], function(app){
    app.initialize();
	
    // console.dir(Lapter);
    
    //Lapter будет присутствовать везде, как и GlobalEvents и можно в любом модели или виде сохранить состояние и получить его
    //всё API Lapter - адаптер для localStorage
    //Lapter.namespace('my_storage');
    //if(!Lapter.is('test_model')){
    //     console.log(Lapter.id);
    //    Lapter.add('test_model')
    //          .add('next_model')
    //          .set('test_model',{data:[1,2,3,4,5]});
    //     console.log(Lapter.get('test_model'));
        //Lapter.clear('test_model');
    //}else{
    //    Lapter.remove('test_model');
    //}
    //Lapter.setId(3);
    //Lapter.hardReset();
    
});