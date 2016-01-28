/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  STICKY
  // ----------------------------

  var App = $.extend({

    initSticky: function(){

      console.log('__INIT STICKY');

      var _this  = this;

      this.$win   = $(window);
      this.$body  = $('body');
      this.$frame = $('#frame');

      this.scrolltop;

      this.$win.on('scroll', function(){
        _this.onScroll();
      });

    },

    onScroll: function(){

      this.scrolltop = this.$win.scrollTop();
      this.frameH    = this.$frame.innerHeight();
      //console.log(this.scrolltop);

      if( this.scrolltop >= this.frameH ){
        this.$body.find('.subnavigation').addClass('active');
      } else {
        this.$body.find('.subnavigation').removeClass('active');
      }

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initSticky();
  });

  window.App = App;

})(jQuery, window);