(function($) {
    var container = $('#st-container');
    var menuTrigger = $("#menu-trigger");

    if ($(window).width() <= 768) {
        $('.animated').removeClass('animated').removeClass('hiding');
    }
    if ($(window).width() > 768) {
        if(container.hasClass('blog')) {
            container.addClass('blog-container').addClass('st-menu-open');
        }
    }
    $(window).resize(function() {
        if(container.hasClass('blog')) {
            if ($(window).width() > 768) {
                container.addClass('blog-container').addClass('st-menu-open');
            } else {
                container.removeClass('blog-container').removeClass('st-menu-open');
                menuTrigger.removeClass('open');
            }
        }
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    $(function() {
        $('a[href=#]').click(function() {
            event.preventDefault();
        });
    });
    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            setTimeout(function() {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
                if (element.hasClass('counter')) {
                    element.find('.timer').countTo();
                }
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            element.removeClass('hiding');
            if (element.hasClass('counter')) {
                element.find('.timer').countTo();
            }
        }
    }, {
        accY: -150
    });
    $('#menu-trigger').click(function(event) {
        toggleNavigation();
    });
    $('.nav-link').click(function(event) {
        if (!container.hasClass('blog-container')) {
            toggleNavigation();
        }
    });
    $('.st-pusher').click(function() {
        if (!container.hasClass('blog-container')) {
            container.removeClass('st-menu-open');
            menuTrigger.removeClass('open');
        }
    });

    function toggleNavigation() {
        container.toggleClass('st-menu-open');
        menuTrigger.toggleClass('open');
    }
})(jQuery);
