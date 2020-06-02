document.addEventListener('DOMContentLoaded', function() {

    /*
     *
     *preloader animations
     *
     */ 

    // turn off preloader on other pages
    if (!$("#animat2, #animat1").length){
        var preloader = false;
    }
    else{
        var preloader = true;
    }

    // preloader = false; // temporary

    // ON/OFF preloader animation for dev puproses
    if (!preloader){
        $("#animat2, #animat1").remove();
        $("#logo, #stringlogo, .desktop-menu, #changelang, #cont, #slider-footer, #scroll-down").removeClass("opaque")
        $(".big, .small").removeClass("c0").addClass("c1");
        $("html").css({"overflow-y": "scroll"});
    }

    var animation1 = bodymovin.loadAnimation({
        container: document.getElementById("animat1"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: static_root + 'appear.json'
    });

    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById("animat2"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: static_root + 'preloader.json'
    });


    animation1.addEventListener('complete', function(){
        $("#animat1").hide()
        animation2.play();
        console.log("1st completed")
    })

    animation2.addEventListener('complete', function(){
        console.log("2nd completed")
    })
    
    window.addEventListener("load", function(){
        if (preloader){
            animation1.play();
            setTimeout(function(){ $("#animat2").fadeOut('slow', function(){ $("#animat2").remove(); }); }, 5000);

            setTimeout(function(){ 
                $("#logo, #stringlogo").removeClass("opaque")
            }, 6000);

            setTimeout(function(){ 
                $(".big, .small").removeClass("c0").addClass("c1");
                $("#particles-js").removeClass("opaque");
            }, 6500);

            setTimeout(function(){ 
                $(".desktop-menu, #changelang, #cont, #slider-footer, #changelang_first, #changelang_second").removeClass("opaque").addClass("animated fadeInLeftline slow");
            }, 8000);

            setTimeout(function(){ 
                $("#scroll-down").removeClass("opaque").addClass("animated fadeInDown slow");
            }, 9000);
            
            this.setTimeout(function(){
                $("html").css({"overflow-y": "scroll"});
            }, 9001)
        }

    });

    // GLOBALS
    var isMobile = window.matchMedia("only screen and (max-width: 812px)").matches;
    var five_vh = document.documentElement.clientHeight * 0.01;

    // bg case slider
    var slide_x = 1;
    var len = $('#case-info .case').length
 
    setInterval(function () {
       $('#case-info .case').removeClass('active')
       $("#case-info .case[data-case='" + slide_x + "']").addClass('active')

       $('.circle-border').removeClass('active')
       $(".circle-border[data-case='" + slide_x + "']").addClass('active')

       $('.bg-project').removeClass('active')
       $(".bg-project[data-case='" + slide_x + "']").addClass('active')

        if (slide_x == len)
            slide_x = 1;
        else
            slide_x++;
    }, 7000);
	
    /*
    circle rotation
    */
    $(".big").css({"-webkit-transform":"rotate(-45deg)"});
    $(".small").css({"-webkit-transform":"rotate(-45deg)"});
    if (isMobile){
        $(".big").css({"-webkit-transform":"rotate(-145deg)"});
        $(".small").css({"-webkit-transform":"rotate(-145deg)"});
    }

    /*
    POPUP contact form window
    */

    $("#cont, #cont-mobile, #cont-footer").click(function(){
        $("#popup-contact").removeClass("animated fadeInTopForm goback").addClass("animated fadeInDownForm");
        $('body').css('overflow','hidden');
      });

    $("#close-pop").click(function(){
        $('body').css('overflow','auto');
        $("#popup-contact").removeClass("animated fadeInDownForm").addClass("animated fadeInTopForm");
        if (isMobile){
            $("#mobile-menu-burger").show()
        }
        setTimeout( function(){ $("#popup-contact").addClass("goback"); }, 1000 );
      });

        // file upload
    const uploadButton = $("#attach-clip");
    const fileInfo = $("#attach-text");
    const realInput = $("#real-input");

        // click on image (clip, or cross on hover)
    uploadButton.click(function(e) {
        // if we pushing on clip (ading file)
        if ( $("#attach-clip img").hasClass( "addfile" ) )  {
            realInput.click();
        }
        // if we push on red cross (deleting file)
        else if ( $("#attach-clip img").hasClass( "deletefile" ) ){
            realInput.val("");
            $("#attach-text").removeClass("redcol delfileborder")
            $(".input-file-container").removeClass("delfileborder");
            $("#attach-clip img").removeClass("deletefile hasfile").attr("src", static_root + "img/file-clip.png").addClass("addfile");
            fileInfo.text("Attach file");
        }

    });
    // Attach file -> filename.ext
    $("#real-input").change(function() {
        if ($(this).val()){
            var truncated = $(this).val().split('/').pop().split('\\').pop();
            if(truncated.length > 10) truncated = truncated.substring(0,18) + "...";
            fileInfo.text(truncated).addClass("bluecol");
            $("#attach-clip img").attr("src", static_root + "img/blue-check.png").addClass("hasfile");
        }
    });
    // change blue check to red cross on hover (and add delete file functionality)
    $(".input-file-container").on({
            mouseenter: function () {
                var filename = $("#real-input").val();
                if (filename){
                    $("#attach-text").removeClass("bluecol").addClass("redcol");
                    $(this).addClass("delfileborder");
                    $("#attach-clip img").removeClass("addfile").addClass("deletefile").attr("src", static_root + "img/red-cross.png");
                }
            },
            mouseleave: function () {
                var filename = $("#real-input").val();
                if (filename){
                    $("#attach-text").removeClass("redcol delfileborder").addClass("bluecol");
                    $(this).removeClass("delfileborder");
                    $("#attach-clip img").removeClass("deletefile").attr("src", static_root + "img/blue-check.png");
                }
            }
    });

    /*
     *
     * form validation
     * 
     */
        // name
    $('#contact_name input').on('input', function() {
        var input = $(this);
        var is_name = input.val();

        if(is_name){
            $('#contact_name').removeClass("badborder").addClass("okborder");
        }
        else{
            $('#contact_name').removeClass("okborder").addClass("badborder");
        }
    });
        // email
    $('#contact_email input').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email){
            $('#contact_email').removeClass("badborder").addClass("okborder");
        }
        else{
            $('#contact_email').removeClass("okborder").addClass("badborder");
        }
    });


    // form submit
    $('#contattaci').on('submit', function(event){
        event.preventDefault();
        var contact_name = $('#contact_name');
        var contact_email = $('#contact_email');
        $('#popup-contact label').hide();
        if (contact_name.hasClass('okborder') && contact_email.hasClass('okborder') ){
            $('#popup-contact label.good').fadeIn();
            create_post();
            clear_form();
        }
        else{
            console.log('not valid inputs!')
            $('#popup-contact label.bad').fadeIn();
        }

    });

    function clear_form(){
        $('#contattaci')[0].reset(); // clear all fields
        $('#contact_name').removeClass('badborder okborder');
        $('#contact_email').removeClass('badborder okborder');
        $('#attach-text').removeClass('bluecol');
        $("#attach-clip img").attr("src", static_root + "img/file-clip.png").removeClass('hasfile').addClass('addfile');
        $("#attach-text").text("Attach file");
    }

    // AJAX for posting
    function create_post() {
        var formData = new FormData($('#contattaci')[0]);
        formData.append('csrfmiddlewaretoken', window.CSRF_TOKEN);
        $.ajax({
            url : "/form_submit/", // the endpoint
            type : "POST", // http method
            data : formData, // data sent with the post request
            contentType: false,
            cache: false,
            processData: false,

            // handle a successful response
            success : function(json) {
                // TODO: clear inputs here
                console.log(json); // log the returned json to the console
                console.log("success"); // another sanity check
            },

            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };


    /*
    *
    * mobile menu
    *
    */ 

    // toggle
    $("#mobile-menu-burger").on( "click", function() {
        if ($("#mobile-menu-burger img").hasClass("open")){
            closeMobileMenu()
        }
        else{
            openMobileMenu()
        }
    });

    // close mobile menu when clicked somewhere else
    $('html').on( "click", function(e) {
       if( !$(e.target).is("#mobile-menu, #mobile-menu *") ){
            if( !$(e.target).parents("#mobile-menu-burger").is("#mobile-menu-burger") ){
                closeMobileMenu()
            }
       }
    });

    function closeMobileMenu(){
        $("#mobile-menu-burger img").removeClass("open").attr("src", static_root + "img/burger.png")
        $("#mobile-menu").css({"-webkit-transform":"translate(-100%)"})
    }

    function openMobileMenu(){
        $("#mobile-menu-burger img").addClass("open").attr("src", static_root + "img/close-menu.png")
        $("#mobile-menu").css({"-webkit-transform":"translate(0%)"})
    }

    /*
    smooth scroll
    */ 

      $('#mobile-menu a[href*="#"]').click(function() {
          if ( !$(this).hasClass("no-smooth-scroll") ){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 500);
                  closeMobileMenu()
                  return false;
                }
              }
          }
          else if ( $(this).hasClass("no-smooth-scroll") ){
            $("#popup-contact").removeClass("animated fadeInTopForm goback").addClass("animated fadeInDownForm");
            $("#mobile-menu-burger").hide()
            $("#close-pop img").attr("src", static_root + "img/close-menu.png")
            closeMobileMenu()
          }
      });
    
    /*
     * header (desktop) menu click to id 
     */
    $('.desktop-menu a[href*="#"], #whatwedo a, .bottom-socials a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - five_vh, // TODO: find out why it gor too far
        },
        500,
        'linear'
      )
    })

    $('#scroll-down').on('click', function(e) {
        // $("#about-us").ScrollTo();
        $('html, body').animate(
        {
          scrollTop: $("#about-us").offset().top - five_vh, // TODO: find out why it gor too far
        },
        500,
        'linear'
      )
    })

    $('.service').on('click', function(e) {
        // $("#about-us").ScrollTo();
        $('html, body').animate(
        {
          scrollTop: $("footer").offset().top, // TODO: find out why it gor too far
        },
        500,
        'linear'
      )
    })
     
    /*
     * Progress block animations
     * 
     */ 
    var progressCircleAnimation = $(".numba > div").map((index, element) => {
        return bodymovin.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            autoloadSegments: false,
            path: static_root + 'pb.json'
        });
    }).get();

    // animate progress block
    function startCirclesAnimations(){
        // call it after we push arrow-down and about-us links as well
        progressCircleAnimation[0].play()
        setTimeout(() => {progressCircleAnimation[1].play()}, 500);
        setTimeout(() => {progressCircleAnimation[2].play()}, 1000);
        setTimeout(() => {progressCircleAnimation[3].play()}, 1500);
    }

    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    /*
     * scroll monitoring effects
     */
    var position = $(window).scrollTop(); 
    $(document).scroll(function(e){
        var scrollAmount = $(window).scrollTop();                                   
        var documentHeight = $(document).height();
        var windowHeight = window.innerHeight;
        var roundScroll = Math.round((scrollAmount / (documentHeight - windowHeight)) * 100);
        var cof = windowHeight / 320 // circle diameter == 320px
        var finalShift = cof * roundScroll

        // AOS classes check (track which section is visible now)
        var first_pos = !$("section > div").hasClass("aos-animate")
        var second_pos = $("#about-us > div").hasClass("aos-animate") && !$("#services > div").hasClass("aos-animate") && !$("#portfolio > div").hasClass("aos-animate") && !$("footer > div").hasClass("aos-animate")
        var third_pos = $("#about-us > div").hasClass("aos-animate") && $("#services > div").hasClass("aos-animate") && !$("#portfolio > div").hasClass("aos-animate") && !$("footer > div").hasClass("aos-animate")
        var fourth_pos = $("#about-us > div").hasClass("aos-animate") && $("#services > div").hasClass("aos-animate") && $("#portfolio > div").hasClass("aos-animate") && !$("footer > div").hasClass("aos-animate")
        var fifth_pos = $("#about-us > div").hasClass("aos-animate") && $("#services > div").hasClass("aos-animate") && $("#portfolio > div").hasClass("aos-animate") && $("footer > div").hasClass("aos-animate")

        var firstSlide = scrollAmount < windowHeight/3; // approx detect scroll on 1st slide

        if (isMobile){
              // track scroll position on MOBILE devices
              // chane circles y-pos accordingly
              $(".big").css({"-webkit-transform":"translate(0, -" + finalShift + "%)"})
              $(".small").css({"-webkit-transform":"translate(0, -" + finalShift + "%)"})

        }
        // change circle position (class) according to AOS classes
        else{
            if ( first_pos || firstSlide){
                // main
                $(".big").removeClass("c1 c2 c3 c4 c5").addClass("c1");
                $(".small").removeClass("c1 c2 c3 c4 c5").addClass("c1");
            }
            else if (second_pos){
                // about us
                $(".big").removeClass("c1 c2 c3 c4 c5").addClass("c2");
                $(".small").removeClass("c1 c2 c3 c4 c5").addClass("c2");

                var progressBlock = document.querySelector('#progress-steps');
                if (isInViewport(progressBlock)) {
                    startCirclesAnimations();
                }
                
            }
            else if ( third_pos ){
                // services and prices
                $(".big").removeClass("c1 c2 c3 c4 c5").addClass("c3");
                $(".small").removeClass("c1 c2 c3 c4 c5").addClass("c3");
            }
            else if (fourth_pos){
                // portfolio    
                $(".big").removeClass("c1 c2 c3 c4 c5").addClass("c4");
                $(".small").removeClass("c1 c2 c3 c4 c5").addClass("c4");
            }
            else if (fifth_pos){
                // portfolio    
                $(".big").removeClass("c1 c2 c3 c4 c5").addClass("c5");
                $(".small").removeClass("c1 c2 c3 c4 c5").addClass("c5");
            }
        }
        position = scrollAmount;
    });

    // AOS
    AOS.init({
      // Global settings:
      disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 50, // the delay on throttle used while scrolling the page (advanced)
    });

    /*
     * take me to the top (show on 1/3 of the scroll)
     */

    var toTopButton = $('#back-to-top');

    if (toTopButton.length) {
        var thirdPage = $(document).height() / 3;
        var scrollTrigger = thirdPage, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    toTopButton.addClass('show');
                } else {
                    toTopButton.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        toTopButton.on('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return false;
        });
    }
    
    var hoverChangeTo = () =>{
        if(!isMobile){
            $("#desktop_up1").addClass("hidden");
            $("#desktop_up2").removeClass("hidden");
            $("#desktop_up3").removeClass("hidden");
            toTopButton.css({
                "transform":"rotate(135deg)",
                "width":"3.8vw",
                "height":"3.8vw",
            });
            $("#desktop_up2").css({
                "transform":"scale(1, 1) translate(15%, 70%)"
            });
        }
    } 

    var hoverChangeFrom = () =>{
        if(!isMobile){
            $("#desktop_up3").addClass("hidden");
            $("#desktop_up2").addClass("hidden");
            $("#desktop_up1").removeClass("hidden");
            toTopButton.css({
                "transform":"rotate(45deg)",
                "width":"2.3vw",
                "height":"2.3vw"
            });
            $("#desktop_up2").css({
                "transform":"scale(0, 0) translate(7%, 54%)"
            });
        }
    }

    toTopButton.hover(hoverChangeTo, hoverChangeFrom);

    /* prev/next our clients buttons */

    var prevPairButton = $(".cl-prev");
    var nextPairButton = $(".cl-next");
    var logos = $(".client_logo");

    var numberOfLogos = logos.length;

    var first = 0;
    var second = 1;

    var toNextPair = () =>{
        logos.eq(first).addClass("hidden-logo").removeClass("displayed-logo");
        logos.eq(second).addClass("hidden-logo").removeClass("displayed-logo");
        first = (first + 2) % numberOfLogos;
        second = (second + 2) % numberOfLogos;

        logos.eq(first).addClass("displayed-logo").removeClass("hidden-logo");
        logos.eq(second).addClass("displayed-logo").removeClass("hidden-logo");
    };

    var toPrevPair = () =>{
        logos.eq(first).addClass("hidden-logo").removeClass("displayed-logo");
        logos.eq(second).addClass("hidden-logo").removeClass("displayed-logo");
        first = (first - 2) % numberOfLogos;
        second = (second - 2) % numberOfLogos;

        logos.eq(first).addClass("displayed-logo").removeClass("hidden-logo");
        logos.eq(second).addClass("displayed-logo").removeClass("hidden-logo");
    };

    nextPairButton.click(toNextPair);
    prevPairButton.click(toPrevPair);


    /*
     * Desktop menu items hover
     * 
     */ 

    var hoverMenuItemAnimationData = $(".hover-line").map((index, element) => {
        return bodymovin.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        autoloadSegments: false,
        path: static_root + 'hover1.json'
    });
    }).get();
    

    var hoverMenuItem = (event) =>{
        $(event.delegateTarget).find("svg").css("display","initial");
        var animation = hoverMenuItemAnimationData[$(".with-hover").index($(event.delegateTarget))];
        animation.play();
        setTimeout(() => {animation.pause()}, 833);
    }

    var unhoverMenuItem = (event) =>{
        var animation = hoverMenuItemAnimationData[$(".with-hover").index($(event.delegateTarget))];
        animation.play();
        setTimeout(() => {
            $(event.delegateTarget).find("svg").css("display","none");
            animation.stop();
        }, 833);
    }
    
    $("li.with-hover").hover(hoverMenuItem, unhoverMenuItem);

    /*
     * Progress block animations
     * 
     */ 
    
    var aboutusAnimation = bodymovin.loadAnimation({
        container: document.getElementById("hover-about-us"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        autoloadSegments: false,
        path: static_root + 'aboutus-hover.json'
    });

    var onHoverAboutus = (event) =>{
        $(event.delegateTarget).find("svg").css("display","initial");
        $(event.delegateTarget).css("height", "70px");
        $(event.delegateTarget).find("#blog-slide").css({
            "transform": "translateY(42px)",
            "opacity": "1",
    });
        $("#submenu").addClass("no-after");
        aboutusAnimation.play();
    }

    var unHoverAboutus = (event) =>{
        $(event.delegateTarget).find("svg").css("display", "none");
        $(event.delegateTarget).find("#blog-slide").css("opacity", "0");
        $(event.delegateTarget).css("height", "initial");
        $(event.delegateTarget).find("#blog-slide").css({
            "transform": "translateY(0)",
            "opacity": "0",
    });
        aboutusAnimation.stop();
        $("#submenu").removeClass("no-after");
    }

    $("#submenu").hover(onHoverAboutus, unHoverAboutus);


}, false);