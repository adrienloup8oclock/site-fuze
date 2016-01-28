/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  TOOLTIP
  // ----------------------------

  var App = $.extend({

    initTooltip: function(){

      console.log('__INIT TOOLTIP');

      var _this = this;

      this.$tooltip = $('#tooltip');

      this.startTooltip();

    },

    startTooltip: function(){

      var _this = this,
          counter;

      this.$tooltip.find('ul li .modal').on('mouseleave', function(){
        counter = setTimeout(function(){
          _this.$tooltip.find('ul li').removeClass('active');
        }, 1200);
      });

      this.$tooltip.find('ul li .modal').on('mouseenter', function(){
        clearTimeout(counter);
      });

      this.$tooltip.find('.call').on('click', function(){

        clearTimeout(counter);

        var $parent = $(this).parent();
        
        if( $parent.hasClass('active') ){
          _this.closeTooltip();
        } else {
          _this.closeTooltip();
          $parent.addClass('active');
        }

      });

    },

    closeTooltip: function(){

      this.$tooltip.find('ul li').removeClass('active');

    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initTooltip();
  });

  window.App = App;

})(jQuery, window);