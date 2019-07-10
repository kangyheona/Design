$(document).ready(function(){
		$(".tab ul li").click(function(){
		  var index = $(this).index(); console.log(index);
		  $(".tab ul li").removeClass("tab_on");
		  $(this).addClass("tab_on");
			$(".tab_content").eq(index).show().siblings(".tab_content").hide();
		});
	})