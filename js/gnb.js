// �޴� ����
function hideMenu() {
	$('#sub_menu_bg').hide().removeClass('on');
	$('#header .collapse').hide().removeClass('on');
}
function hideMenuLv3() {
	$('#gnb .depth3').hide().removeClass('on');
}

// �޴� ǥ��
function showMenu(target) {
	hideMenu();
	$('#sub_menu_bg').show().addClass('on');
	var $target = $(target);
	$($target.data('target')).show().addClass('on');
}
function showMenuLv3(target) {
	var $target = $(target);
	$target.next('ul.depth3').show().addClass('on');
}
// �޴� ���
function toggleMenu(target) {
	var $target = $(target);
	if ($($target.data('target')).hasClass('on')) {
		hideMenu();
	} else {
		hideMenu();
		$($target.data('target')).show().addClass('on');
	}
}

$(function () {
	// ��� ��Ż ��, �޴� ����
	$('#header').mouseleave(function () {
		hideMenu();
	});
	
	//top ��ư ��ũ��
	$(window).scroll(function() {
	  var $el = $('.btn_top');
	  
	  if($(this).scrollTop() >= 400) $el.addClass('shown');
	  else $el.removeClass('shown');
	});

});


//���� �˾����Ѹ�
	if( $('.slidePop').length > 0 ){
		$('.slidePop > div.slide > ul > li').css('float','left');
		var slidepop = new BlockSlide( $('.slidePop > div.slide'),'_2.gif' );
	}