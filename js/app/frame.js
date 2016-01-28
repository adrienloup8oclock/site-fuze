/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  FRAME
  // ----------------------------

  var App = $.extend({

    initFrame: function(){

      console.log('__INIT FRAME');

      var _this = this;

      this.$win        = $(window);
      this.$html       = $('html');
      this.$body       = $('body');
      this.$header     = $('#header');
      this.$navigation = $('#navigation');
      this.$menu       = $('#menu');
      this.$under      = $('#under');
      this.$sober      = $('#sober');
      this.$article    = $('#article');
      this.$frame      = $('#frame');
      this.$parent;

      this.height = null;
      this.index  = null;
      this.value  = null;

      this.headerH = 0;
      this.frameH  = 0;

      this.chrome = window.chrome;

      this.$win.on('resize', function(){
        _this.onResize();
      });
      this.onResize();

      this.startFrame();

    },

    startFrame: function(){

      var _this = this,
          counter;

      this.$navigation.find('ul li .tab').on('click', function(e){
        e.preventDefault();

        clearTimeout(counter);

        _this.$parent = $(this).parent(),
        _this.index   = _this.$parent.index();
        _this.height  = ( _this.$menu.find('.submenu').eq(_this.index).innerHeight() + _this.value );

        ( _this.$parent.hasClass('active') ) ? _this.closeMenu() : _this.openMenu();

      });
      
      this.$menu.on('mouseleave', function(){
        counter = setTimeout(function(){ _this.closeMenu() }, 800);
      });

      this.$menu.on('mouseenter', function(){
        clearTimeout(counter);
      });

    },

    closeMenu: function(){

      if( this.$html.hasClass('home-page') ){ 
        console.log('_HOME PAGE');

        this.$under.css({
          '-webkit-transform': 'translateY(0px) translateZ(0)',
          '-moz-transform'   : 'translateY(0px) translateZ(0)',
          '-ms-transform'    : 'translateY(0px) translateZ(0)',
          '-o-transform'     : 'translateY(0px) translateZ(0)',
          'transform'        : 'translateY(0px) translateZ(0)'
        });

      } else {

        this.$frame.attr('style', '');

      }

      this.$navigation.find('ul li').removeClass('active');
      this.$menu.find('.submenu').removeClass('active');

    },

    openMenu: function(){

      var _this = this;

      if( this.$html.hasClass('home-page') ){ 
        //console.log('_HOME PAGE');

        var submenuH = _this.$menu.find('.submenu').eq(_this.index).innerHeight();

        this.$under.css({
          '-webkit-transform': 'translateY(' + submenuH + 'px) translateZ(0)',
          '-moz-transform'   : 'translateY(' + submenuH + 'px) translateZ(0)',
          '-ms-transform'    : 'translateY(' + submenuH + 'px) translateZ(0)',
          '-o-transform'     : 'translateY(' + submenuH + 'px) translateZ(0)',
          'transform'        : 'translateY(' + submenuH + 'px) translateZ(0)'
        });

      } else {

        this.$frame.css({ height: _this.height + 'px' });

      }

      this.$menu.find('.submenu').removeClass('active');
      this.$menu.find('.submenu').eq(_this.index).addClass('active');
      this.$navigation.find('ul li').removeClass('active');
      setTimeout(function(){
        _this.$parent.addClass('active');
      }, 100);

    },

    onResize: function(){

      this.headerH = this.$header.innerHeight();
      this.frameH  = this.$frame.innerHeight();
      
      var sum;

      if( this.$html.hasClass('home-page') ){ 

        this.value = this.$win.innerHeight();

        (this.chrome) ? sum = ( this.value - this.headerH ) + 1 : sum = ( this.value - this.headerH );

        this.$under.css({height: ( sum ) + 'px'});
        this.$under.find('.in').css({ height: this.value + 'px'});
        this.$under.find('.out').css({ height: this.value + 'px'});

        console.log(this.value );
        console.log(this.headerH);
        console.log(this.value - this.headerH);

      } else {

        this.value = this.frameH;

      }

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initFrame();
  });

  window.App = App;

})(jQuery, window);