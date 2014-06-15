define([
    'jqueryui',
    'lodash',
    'backbone',
    'jst',
    'models/modelMain',
    'views/viewLoader',
	'text!templates/welcome.html',
	'events'
    ,'fastclick'
    ,'datepicker_localization' //this module doesn't create own global - only extends jquery ui
	,"foundation.topbar"
	,"foundation.offcanvas"
	,"foundation.magellan"
	,"foundation.slider"
	,"foundation.reveal"
	,"foundation.tooltip"
	,"foundation.dropdown"
], function($, _, Backbone, JST, ModelMain, ViewLoader, text_template, GlobalEvents, FastClick){
    var ViewMain = Backbone.View.extend({
        el: '.body',
        events:{
           
        },
        className: 'main-layout',
        initialize: function (){
            this.model=new ModelMain();
            window.globalData=this.model.toJSON(); //сразу же расширяем глобальный объект window.globalData
            this.setListeners();
            this.render();
            //GlobalEvents.trigger('may_i_change_tab', {index: 2});
        },
        setListeners:function (){
            this.listenTo(this.model, 'change', this.rewriteGlobalData);
            this.listenTo(GlobalEvents, 'widget:change', this.updateModel);
        },
        rewriteGlobalData:function (){
            window.globalData=this.model.toJSON();
        },
        updateModel:function (data){
			//alert('widget:change');
            this.model.set(data);
            //window.globalData=this.model.toJSON();
        },        
        initComponents:function (){
            this.viewLoader=new ViewLoader();
        },
		initFoundation : function (){
			// Foundation JavaScript
			// Documentation can be found at: http://foundation.zurb.com/docs
			$(document).foundation({
				magellan : {
					destination_threshold: 65,
					throttle_delay : 0
				  }
				}
			);
			//plugin avoid 300 ms delay in touch device
			FastClick.attach(document.body);
		},
        render: function(){
            this.$el.html(JST.mainLayout()); //JST use example
			this.$el.append(_.template(text_template)); //text.js use example
            this.$el.find('.datepicker').datepicker(); //jquery ui example
            this.initComponents();
			this.initFoundation();
			
            //GlobalEvents.trigger('loader_show');     
            //$("#datepicker" ).datepicker(); 
        }
    });
    // Наш модуль теперь вернёт наше представление
    return ViewMain;
});