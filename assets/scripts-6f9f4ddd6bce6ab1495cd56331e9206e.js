!function(e){e.fn.appear=function(a,n){var t=e.extend({data:void 0,one:!0,accX:0,accY:0},n);return this.each(function(){var n=e(this);if(n.appeared=!1,!a)return void n.trigger("appear",t.data);var s=e(window),i=function(){if(!n.is(":visible"))return void(n.appeared=!1);var e=s.scrollLeft(),a=s.scrollTop(),i=n.offset(),o=i.left,r=i.top,c=t.accX,l=t.accY,p=n.height(),d=s.height(),f=n.width(),h=s.width();a>r+p+l||r>a+d+l||e>o+f+c||o>e+h+c?n.appeared=!1:n.appeared||n.trigger("appear",t.data)},o=function(){if(n.appeared=!0,t.one){s.unbind("scroll",i);var o=e.inArray(i,e.fn.appear.checks);0>o||e.fn.appear.checks.splice(o,1)}a.apply(this,arguments)};t.one?n.one("appear",t.data,o):n.bind("appear",t.data,o),s.scroll(i),e.fn.appear.checks.push(i),i()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,n){var t=e.fn[n];t&&(e.fn[n]=function(){var a=t.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery),function(e){function a(){n.toggleClass("st-menu-open"),t.toggleClass("open")}var n=e("#st-container"),t=e("#menu-trigger");e(window).width()<=768&&e(".animated").removeClass("animated").removeClass("hiding"),e(window).width()>768&&n.hasClass("blog")&&n.addClass("blog-container").addClass("st-menu-open"),e(window).resize(function(){n.hasClass("blog")&&(e(window).width()>768?n.addClass("blog-container").addClass("st-menu-open"):(n.removeClass("blog-container").removeClass("st-menu-open"),t.removeClass("open")))}),e(function(){e("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if(a=a.length?a:e("[name="+this.hash.slice(1)+"]"),a.length)return e("html,body").animate({scrollTop:a.offset().top},1e3),!1}})}),e(function(){e("a[href=#]").click(function(){event.preventDefault()})}),e(".animated").appear(function(){var a=e(this),n=a.data("animation"),t=a.data("delay");t?setTimeout(function(){a.addClass(n+" visible"),a.removeClass("hiding"),a.hasClass("counter")&&a.find(".timer").countTo()},t):(a.addClass(n+" visible"),a.removeClass("hiding"),a.hasClass("counter")&&a.find(".timer").countTo())},{accY:-150}),e("#menu-trigger").click(function(){a()}),e(".nav-link").click(function(){n.hasClass("blog-container")||a()}),e(".st-pusher").click(function(){n.hasClass("blog-container")||(n.removeClass("st-menu-open"),t.removeClass("open"))})}(jQuery);