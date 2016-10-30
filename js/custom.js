/*! http://responsiveslides.com v1.55 by @viljamis */
(function(c,K,C){c.fn.responsiveSlides=function(m){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},m);return this.each(function(){C++;var f=c(this),u,t,v,n,q,r,p=0,e=f.children(),D=e.length,h=parseFloat(a.speed),E=parseFloat(a.timeout),w=parseFloat(a.maxwidth),g=a.namespace,d=g+C,F=g+"_nav "+d+"_nav",x=g+"_here",k=d+"_on",
y=d+"_s",l=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),z={"float":"left",position:"relative",opacity:1,zIndex:2},A={"float":"none",position:"absolute",opacity:0,zIndex:1},G=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;u=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<u.length;c++)if("string"===typeof b[u[c]+a])return!0;return!1}(),B=function(b){a.before(b);G?(e.removeClass(k).css(A).eq(b).addClass(k).css(z),
p=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(k).css(A).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(k).css(z);a.after(b);p=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-.5}),f.empty().append(e));e.each(function(a){this.id=y+a});f.addClass(g+" "+d);m&&m.maxwidth&&f.css("max-width",w);e.hide().css(A).eq(0).addClass(k).css(z).show();G&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.length){if(E<h+100)return;if(a.pager&&!a.manualControls){var H=[];e.each(function(a){a+=1;H+="<li><a href='#' class='"+y+a+"'>"+a+"</a></li>"});l.append(H);m.navContainer?c(a.navContainer).append(l):f.after(l)}a.manualControls&&(l=c(a.manualControls),l.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&l.find("li").each(function(a){c(this).addClass(y+(a+1))});if(a.pager||a.manualControls)r=
l.find("a"),t=function(a){r.closest("li").removeClass(x).eq(a).addClass(x)};a.auto&&(v=function(){q=setInterval(function(){e.stop(!0,!0);var b=p+1<D?p+1:0;(a.pager||a.manualControls)&&t(b);B(b)},E)},v());n=function(){a.auto&&(clearInterval(q),v())};a.pause&&f.hover(function(){clearInterval(q)},function(){n()});if(a.pager||a.manualControls)r.bind("click",function(b){b.preventDefault();a.pauseControls||n();b=r.index(this);p===b||c("."+k).queue("fx").length||(t(b),B(b))}).eq(0).closest("li").addClass(x),
a.pauseControls&&r.hover(function(){clearInterval(q)},function(){n()});if(a.nav){g="<a href='#' class='"+F+" prev'>"+a.prevText+"</a><a href='#' class='"+F+" next'>"+a.nextText+"</a>";m.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),I=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+k);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<D?p+1:0;B(c(this)[0]===I[0]?b:d);(a.pager||a.manualControls)&&t(c(this)[0]===I[0]?b:d);a.pauseControls||n()}});
a.pauseControls&&d.hover(function(){clearInterval(q)},function(){n()})}}if("undefined"===typeof document.body.style.maxWidth&&m.maxwidth){var J=function(){f.css("width","100%");f.width()>w&&f.css("width",w)};J();c(K).bind("resize",function(){J()})}})}})(jQuery,this,0);

/*
 * FitVids 1.1
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(e){var i=t(this);if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),d=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),o=a/d;if(!i.attr("id")){var h="fitvid"+e;i.attr("id",h)}i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);


(function($) {
	var $body = $(document.body),
		$menuToggle = $('#menu-toggle'),
		$navMenu = $('#nav-menu');

	$(document).ready(function() {

		// Enable top search
		$('#search-show, #search-hide').on('click', function(e) {
			e.preventDefault();
			if ( $body.hasClass('search--opened') ) {
				$body.removeClass('search--opened');
			} else {
				$body.addClass('search--opened');
				$('#site-search').find('.search-field').focus();
			}
		});

		// Scroll to top
		$('#top-link').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});

		// Add dropdown toggle
		var $dropdownArrow = $('<button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">' + blogboxVars.submenuText + '</span><span aria-hidden="true" class="icon-plus"></span></button>');
		$navMenu.find('.menu-item-has-children > a, .page_item_has_children > a').after($dropdownArrow);
		$navMenu.find('.dropdown-toggle').click( function(e) {
			var _this = $(this);
			e.preventDefault();
			_this.toggleClass('toggled--on').attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
			_this.next('.sub-menu').slideToggle();
		});

		// Enable menu toggle
		$menuToggle.click(function(){
			if ( $menuToggle.hasClass( 'toggled--on' ) ) {
				$menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
				$navMenu.slideUp();
			} else {
				$menuToggle.addClass('toggled--on').attr('aria-expanded', 'true');
				$navMenu.slideDown();
			}
		});

		// Show submenu on hover
		menuDropdown();

		$(window).bind('resize orientationchange', function() {
			menuDropdown();
			if ( $menuToggle.is(':hidden') ) {
				$menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
				$navMenu.removeAttr('style');
			}
		});

		// Responsive videos
		fitVidsInit();

		// Post slider
		sliderInit();

		$body.on('post-load', function() {
			fitVidsInit();
			sliderInit();
		});

	});

	function menuDropdown() {
		var $menuItem = $navMenu.find('li');
		$navMenu.find('.sub-menu, .children').removeAttr('style');
		$navMenu.find('.dropdown-toggle').removeClass( 'toggled--on' ).attr('aria-expanded', 'false');
		if ( $menuToggle.is(':hidden') ) {
			$menuItem.hover(function(){
				$(this).find('ul:first').stop(true, true).slideDown();
			},function(){
				$(this).find('ul:first').stop(true, true).slideUp();
			});
		} else {
			$menuItem.unbind('mouseenter mouseleave');
			$navMenu.find('.current-menu-ancestor > .dropdown-toggle, .current_page_ancestor > .dropdown-toggle').addClass('toggled--on').attr('aria-expanded', 'true');
		}
	}

	function fitVidsInit() {
		$('.hentry').fitVids();
	}

	function sliderInit() {
		$('.rslides').each(function() {
			var _this = $(this);
			if ( ! _this.hasClass('slider--initialized') ) {
				_this.addClass('slider--initialized').responsiveSlides({
					speed: 500, // Integer: Speed of the transition, in milliseconds
					timeout: 4000, // Integer: Time between slide transitions, in milliseconds
					nav: true, // Boolean: Show navigation, true or false
					prevText: "<i class='fa-chevron-left' aria-hidden='true'></i>", // String: Text for the "previous" button
					nextText: "<i class='fa-chevron-right' aria-hidden='true'></i>", // String: Text for the "next" button
				});
			}
		});
	}

})(jQuery);