/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  APP READY
  // ----------------------------

  var App = $.extend({

    initApp: function(){

      console.log('__INIT READY');

      var _this = this;

      this.$html = $('html');

      setTimeout(function(){
        _this.$html.addClass('loaded');
      }, 1500);

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initApp();
  });

  window.App = App;

})(jQuery, window);