/*! fuse formerly thinkingphones 2016 */

(function($, window, undefined){

'use strict';

  // ----------------------------
  //  SLIDESHOW
  // ----------------------------

  var App = $.extend({

    initslideshow: function(){

      console.log('__INIT SLIDESHOW');

      this.$getStarted = $('#slideshow-get-started');

      this.startslideshow();

    },

    startslideshow: function(){

      var _this = this;

      this.$getStarted.find('.slideshow').slideshow({
        prefix     : 'fuze',
        speed      : 690,
        method     : 'animate',
        easing     : 'easeInOutQuad',
        autoslide  : false,
        interval   : 4000,
        shownav    : false,
        navWrapper : null,
        preview    : false,
        offset     : '0',
        control    : true,
        controlWrapper : $('#control-box'),
        loop       : false,
        nbClone    : 1,
        direction  : 'ltr',
        callsync: function($slides, oldIndex, newIndex){

          //console.log('newIndex' , newIndex);
          _this.$getStarted.find('.fuze-slideshow-bullet').eq(oldIndex).removeClass('active').addClass('actived');
          _this.$getStarted.find('.fuze-slideshow-bullet').eq(newIndex).removeClass('actived').addClass('active');

          console.log('newIndex' , newIndex);



        },
        callback: function($slides, oldIndex, newIndex){}
      }, function(){

        var $slideshow = this.$slideshow;

        _this.$getStarted.find('.fuze-slideshow-bullet').on('click', function(e){
          e.preventDefault();

          var $bullet = $(this),
              index   = $bullet.index();

          _this.$getStarted.find('.fuze-slideshow-bullet').removeClass('active');
          $bullet.addClass('active actived');
          
          $slideshow.data('slideshow').slideTo(index);

        });

        $slideshow.on('touchstart.fuze MSPointerDown.fuze', function(event) {
          //event.preventDefault();
          var $this = $(this),
            touch = (window.navigator.msPointerEnabled) ? event.originalEvent : event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

          $this.data('x', touch.pageX);

          var endSwipe = function(event) {
            var touch = (window.navigator.msPointerEnabled) ? event.originalEvent : event.originalEvent.touches[0] || event.originalEvent.changedTouches[0],
              deltaX = $this.data('x') - touch.pageX;

            if (Math.abs(deltaX) > 100) {
              if (deltaX > 0) {
                $slideshow.data('slideshow').slideNext();
              } else if (deltaX < 0) {
                $slideshow.data('slideshow').slidePrev();
              }
            }

            $(document).off('.fuze', endSwipe);
          }

          $(document).on('touchend.fuze MSPointerUp.fuze', endSwipe);
        });
      });
    }

  }, window.App || {} );

  $(document).ready(function(){
    App.initslideshow();
  });

  window.App = App;

})(jQuery, window);