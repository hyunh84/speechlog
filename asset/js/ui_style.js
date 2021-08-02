// GLOBAL VAR
var pageFixedFnc;

// DOM Ready
$(document).ready(function() {
	if($('.pageFixedArea').length) pageFixedFnc = new pageFixedFn();

	$('.inpDate input[type="text"]').datepicker({'dateFormat' : 'yy.mm.dd'});
});

// DOM Click
$(document).on('click', function() {
	// 리셋 툴팁 팝업
	var _tooltipWrap = $('[class^="tooltipWrap"]');
	var _tooltipBtn = $('> button', _tooltipWrap);
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);
	if(!_tooltipBox.is(':hidden')) {
		_tooltipWrap.css('z-index' , '0');
		_tooltipBox.attr('aria-hidden', 'true').hide();
		_tooltipBtn.attr('aria-expanded', 'false');
	}
});

// 툴팁 팝업
$(document).on('click', '[class^="tooltipWrap"] > button', function(e) {e.stopPropagation();
	var _this = $(this);
	var _tooltipWrap = _this.closest('[class^="tooltipWrap"]');
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);

	if(_tooltipBox.is(':hidden')) {
		_tooltipWrap.css('z-index' , '1');
		_tooltipBox.attr('aria-hidden', 'false').show();
		_this.attr('aria-expanded', 'true');
	}else{
		_tooltipWrap.css('z-index' , '0');
		_tooltipBox.attr('aria-hidden', 'true').hide();
		_this.attr('aria-expanded', 'false');
	}
});

// 페이지 상단 고정 영역(페이지 타이틀 및 검색영역)
var pageFixedFn = function() {
	var _fixedArea = $('.pageFixedArea');
	var _fixedBox = $('.pageFixedBox', _fixedArea);
	var _fixedInner = $('.pageFixedInner', _fixedBox);
	var _areaH;
	
	var _initFn = function() {
		_areaH = _fixedBox.outerHeight();
		_fixedArea.css({'padding-top' : _areaH});
	}

	_initFn();

	return {
		changeH : function() {

		}
	}
}