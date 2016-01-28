/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  MORE DETAILS
  // ----------------------------

  var App = $.extend({

    initMore: function(){

      console.log('__INIT MORE DETAILS');

      this.$article = $('#article');

      this.height = 0;

      this.startMore();

    },

    startMore: function(){

      var _this = this;

      this.$article.find('.call-more').on('click', function(){

        var self = $(this);

        _this.height = self.find('.more').innerHeight();

        if( self.hasClass('active') ) {

          self.find('.figcaption').attr('style', '');
          setTimeout(function(){
            self.removeClass('active');
          }, 100);

        } else {

          self.find('.figcaption').css({ height: _this.height + 30 + 'px'});
          setTimeout(function(){
            self.addClass('active');
          }, 100);

        }

      });

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initMore();
  });

  window.App = App;

})(jQuery, window);