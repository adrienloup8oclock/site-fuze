/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  ANCHOR
  // ----------------------------

  var App = $.extend({

    initAnchor: function(){

      console.log('__INIT ANCHOR');

      this.$body = $('body');

      this.startAnchor();

    },

    startAnchor: function(){

      var $root = $('html, body');

      this.$body.find('.anchor').on('click', function(){
        $root.animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 460, 'swing');
        return false;
      });

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initAnchor();
  });

  window.App = App;

})(jQuery, window);