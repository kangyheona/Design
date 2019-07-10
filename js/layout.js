var dep1;
		var dep2;

		jQuery(function($){
			$gnb = $("#gnb");
			$gnbList = $("#gnb > ul");
			$gnb2dep = $("#gnb > ul > li .gnb-2dep");

			
			var closeHeight = $gnb.height();
			var openHeight = 210;

			gnb_on_total();

			/* ======== GNB ========== */ 
			function gnb_on_total () {
				$gnbList.mouseenter(function(){
					if (!($gnb2dep.is(".open"))) {
						$("#gnbBg").addClass("open");
						$("#header").addClass("open");
						$("#gnb > ul > li .gnb-2dep").addClass("open");
						$("body").prepend("<div id='gnbBackBg'></div>");
					}
				});
				$gnbList.mouseleave(function(){
					if ($gnb2dep.is(".open")) {
						$("#gnbBg").removeClass("open");
						$("#header").removeClass("open");
						$("#gnb > ul > li .gnb-2dep").removeClass("open");
						$("#gnbBackBg").remove();
					}
				});
			}
			
			
			$gnbList.children("li").on("focusin",function(){
				$(this).addClass("on");
			}).on("mouseleave focusout", function(){
				$(this).removeClass("on");
			});

			if ( dep1> 0 && dep2> 0 ) {
				$gnbList.children("li").eq(dep1-1).addClass("on");
				$(".snb").children("li").eq(dep2-1).addClass("on");
			}

			
			if ($(".snb").children("li").hasClass("on")) {
				$(".snb").children("li:not(.on)").on('mouseenter focusin',function  () {
					$(".snb").children("li").removeClass("on");
				}).on('mouseleave focusout',function  () {
					$(".snb").children("li").eq(dep2-1).addClass("on");
				});
			}

			/* GNB 2DEPTH*/ 
			$("#navigation > li:has('ul')").children("a").click(function(event){
				/* 2dep */		
				if ( $(this).parent("li").hasClass("active") ){
					$(this).parent("li").removeClass("active");
					$(this).siblings("ul").slideUp(400);					
				}
				
				else{	  
					$("#navigation > li").has("ul").each(function() {
						if ( $(this).hasClass("active") ){
							$(this).removeClass("active");
							$(this).children("ul").slideUp(400);
						}
					});	
					$(this).parent("li").addClass("active");
					$(this).siblings("ul").slideDown(400);
				}
				return false;
			});

			
			var menu_lang = $gnbList.children("li").length;
			$(".sub-page-loc.page-prev").attr("href",$gnbList.children("li").eq(dep1-2).children("a").attr("href"));
			$(".sub-page-loc.page-next").attr("href",$gnbList.children("li").eq(dep1).children("a").attr("href"));

			if ( dep1 == menu_lang ) {
				$(".sub-page-loc.page-next").attr("href",$gnbList.children("li").eq(0).children("a").attr("href"));
			}else if ( dep1 == 1 ) {
				$(".sub-page-loc.page-prev").attr("href",$gnbList.children("li").eq(menu_lang-1).children("a").attr("href"));
			};

			/* ------ HEADER FIXED------ */
			w_width = $(window).innerWidth();
			if ( $("#header").css("display") == "block" ) {
				var startTop = $("#header").height();
				
				$(window).scroll(function  () {
					var s_top = $(window).scrollTop();
					if ( s_top < startTop ) {
						$("#headerWrap").removeClass("fixed");
					}else {
						$("#headerWrap").addClass("fixed");
					}
				});
			};
		});
		

		$(document).ready(function(){

		  $(window).load( function() {
		   /* 메뉴버튼을 눌렀을때, 오버레이부분을 클릭했을때*/
			$(".gnb_m, .panel-overlay").click( function() {
			  $(".gnb_m, .panel-overlay, .panel").toggleClass("active"); 
			  /* panel overlay가 활성화 되어있는지를 체크합니다. */
			  if ($(".panel-overlay").hasClass("active")) {
				$(".panel-overlay").fadeIn();
			  } else {
				$(".panel-overlay").fadeOut();
			  }
			});

		  });
		
		});

		
		$(function() {
			var Accordion = function(el, active) {
				this.el = el || {};
				active = active || 0;
				var that = this;
				var links = this.el.find('.gnb-1dep a');
				links.each(function(i){
					var link = links.eq(i);
					if (link.next().length === 0) { link.find('.material-icons').hide(); }
					link.on('click', { link: link }, that.dropdown);
				});
				if (active > 0) {
				   links.eq(active).trigger('click');     
				}
			}

			Accordion.prototype.dropdown = function(e) {
				e.preventDefault();
				var $this = e.data.link;
				$this.parent()
					.siblings('.open').find('.gnb-2dep').slideUp()
				.addBack().removeClass('open');
				$this.parent()
					.toggleClass('open')
					.find('.gnb-2dep').stop().slideToggle();
			};

			var accordion = new Accordion($('#accordion'), 1);
	});