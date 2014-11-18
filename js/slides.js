// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  //TODO: can i selectively center??
  center: false,
  width: 1200,
  height : 675,
  margin: 0.1,


  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none


  // Parallax scrolling
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
  // parallaxBackgroundSize: '2100px 900px',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'lib/js/jquery-1.11.1.min.js'}
  ]
});

Reveal.addEventListener( 'fragmentshown', function( event ) {

  console.log(event.fragment);
    if($(event.fragment).hasClass('shrink-triangle')){
      $('.triangle-box').animate({
        width: 0,
        height: 0
      });
    }

    if($(event.fragment).hasClass('hide-triangle')){
      $('.triangle-box').css({
        'border-top-color': 'transparent',
        'border-left-color': 'transparent',
        'border-right-color': 'transparent'
      });
    }

    if($(event.fragment).hasClass('make-circle')){
      $('.circle-demo').css({
        'border-radius': '50%'
      });
    }

    if($(event.fragment).hasClass('make-diamond')){
      $('.diamond-demo').css({
        'transform': 'rotate(45deg)'
      });
    }

    if($(event.fragment).hasClass('stretch-diamond')){
      $('.diamond-narrow-demo').css({
        'transform': 'scaleY(0.6) rotate(45deg)'
      });
    }

    if($(event.fragment).hasClass('animate-rotate')){
      $('.rotate-box').addClass('rotate');
    }

    if($(event.fragment).hasClass('animate-skew')){
      $('.skew-box').addClass('skew');
    }

    if($(event.fragment).hasClass('animate-counter-skew')){
      $('.counter-skew-elem').addClass('counter-skew');
    }

    if($(event.fragment).hasClass('animate-scale')){
      $('.scale-box').addClass('scale');
    }

    if($(event.fragment).hasClass('animate-scaleXY')){
      $('.scaleX-box').addClass('scaleX');
      $('.scaleY-box').addClass('scaleY');
    }
    // if($(event.fragment).hasClass('animate-scaleY')){
    // }

    if($(event.fragment).hasClass('animate-stretchcompress')){
      $('.stretchY-box').addClass('scaleY');
      $('.compressY-box').addClass('compressY');
    }

    // if($(event.fragment).hasClass('animate-compressX')){
    // }

} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    if($(event.fragment).hasClass('shrink-triangle')){
      $('.triangle-box').animate({
        width: 200,
        height: 200
      });
    }

    if($(event.fragment).hasClass('hide-triangle')){
      $('.triangle-box').css({
        'border-top-color': '#dedede',
        'border-left-color': '#128B98',
        'border-right-color': '#fff'
      });
    }

    if($(event.fragment).hasClass('make-circle')){
      $('.circle-demo').css({
        'border-radius': 10
      });
    }

    if($(event.fragment).hasClass('make-diamond')){
      $('.diamond-demo').css({
        'transform': 'rotate(0)'
      });
    }

    if($(event.fragment).hasClass('stretch-diamond')){
      $('.diamond-narrow-demo').css({
        'transform': 'rotate(45deg)'
      });
    }

    if($(event.fragment).hasClass('animate-rotate')){
      $('.rotate-box').removeClass('rotate');
    }

    if($(event.fragment).hasClass('animate-skew')){
      $('.skew-box').removeClass('skew');
    }

    if($(event.fragment).hasClass('animate-counter-skew')){
      $('.skew p').removeClass('counter-skew');
    }

    if($(event.fragment).hasClass('animate-scale')){
      $('.scale-box').removeClass('scale');
    }

    if($(event.fragment).hasClass('animate-scaleXY')){
      $('.scaleX-box').removeClass('scaleX');
      $('.scaleY-box').removeClass('scaleY');
    }

    // if($(event.fragment).hasClass('animate-scaleY')){
    // }

    if($(event.fragment).hasClass('animate-stretchcompress')){
      $('.strechY-box').removeClass('scaleY');
      $('.compressY-box').removeClass('compressY');
    }

    // if($(event.fragment).hasClass('animate-compressX')){
    // }

} );

  //canvas eg.

  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  context.fillStyle = ('#64C7CC');
  context.fillRect(50, 25, 150, 100);