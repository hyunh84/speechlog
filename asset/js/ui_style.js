/* GLOBAL VAR */
var pageFixedFnc;

/* DOM Ready */
$(document).ready(function() {
	if($('.pageFixedArea').length) pageFixedFnc = new pageFixedFn();

	$('.inpDate input[type="text"]').datepicker({'dateFormat' : 'yy.mm.dd'});
});

/* DOM Click */
$(document).on('click', function() {
	// 리셋 툴팁 팝업
	var _tooltipWrap = $('[class^="tooltipWrap"]');
	var _tooltipBtn = $('> button', _tooltipWrap);
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);
	_tooltipWrap.css('z-index' , '0');
	_tooltipBox.attr('aria-hidden', 'true').hide();
	_tooltipBtn.attr('aria-expanded', 'false');
});

/* 툴팁 팝업 */
$(document).on('click', '[class^="tooltipWrap"] > button', function(e) {e.stopPropagation();
	var _this = $(this);
	var _tooltipWrap = _this.closest('[class^="tooltipWrap"]');
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);

	// S : 툴팁 클릭시 다른 툴팁 초기화
	var _tooltipWrapG = $('[class^="tooltipWrap"]');
	var _tooltipBtnG = $('> button', _tooltipWrapG);
	var _tooltipBoxG = $('.tooltipBox', _tooltipWrapG);
	_tooltipWrapG.css('z-index' , '0');
	_tooltipBoxG.attr('aria-hidden', 'true').hide();
	_tooltipBtnG.attr('aria-expanded', 'false');
	// E : 툴팁 클릭시 다른 툴팁 초기화

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

/* button type radio */
$(document).on('click', '[class^="btnRadioBox"] button', function() {
	var _this = $(this);
	var _wrap = _this.closest('[class^="btnRadioBox"]');
	if(!_this.hasClass('active')) {
		$('button', _wrap).removeClass('active');
		_this.addClass('active');
	}
});

/******************************************************************************************
	컨텐츠 상단 고정영역 (페이지 타이틀, 통합검색)
	페이지 시작시 pageFixedFnc 변수에 함수 실행 후 저장
	pageFixedFnc.changeH();//높이변경시 고정영역 높이 만큼 페이지 상단 여백변경
******************************************************************************************/
var pageFixedFn = function() {
	var _fixedArea = $('.pageFixedArea');
	var _fixedBox = $('.pageFixedBox', _fixedArea);
	var _fixedInner = $('.pageFixedInner', _fixedBox);
	var _integrSearchBox = $('.integrSearchBox', _fixedInner);
	var _searchWordBox = $('.searchWordBox', _integrSearchBox);
	var _detailSrchBox = $('.detailSrchBox', _integrSearchBox);
	var _areaH;
	
	var _initFn = function() {
		_changeH();
	}
	var _changeH = function() {
		_areaH = _fixedBox.outerHeight();
		_fixedArea.css({'padding-top' : _areaH});
	}

	_initFn();

	// 통함검색 folding
	_fixedArea.on('click', '.btnDetailSrch', function() {
		var _this = $(this);
		_detailSrchBox = $('.detailSrchBox', _integrSearchBox);
		if(_detailSrchBox.is(':hidden')) {
			_detailSrchBox.attr('aria-hidden', 'false').show();
			_this.attr('aria-expanded', 'true').addClass('active');
			_changeH();
		}else{
			_detailSrchBox.attr('aria-hidden', 'true').hide();
			_this.attr('aria-expanded', 'false').removeClass('active');
			_changeH();
		}
	});

	return {
		changeH : function() {
			_changeH();
		}
	}
}