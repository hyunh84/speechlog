/* GLOBAL VAR */
var pageFixedFnc;
var winH = window.innerHeight;

/* DOM Ready */
$(document).ready(function() {
	if($('.pageFixedArea').length) pageFixedFnc = new pageFixedFn();

	if($('.inpDate input[type="text"]').length) $('.inpDate input[type="text"]').datepicker({'dateFormat' : 'yy.mm.dd'});
});

/* DOM Click */
$(document).on('click', function() {
	// 리셋 툴팁 팝업
	resetTooltipFn();

	// 리셋 검색어 자동완성기능
	resetAutoWordFn();
	
	// 관련발언자 툴팁
	speakerTipClose();
});

/* DOM Focusin */
$(document).on('focusin', function() {
	// 리셋 검색어 자동완성기능
	resetAutoWordFn();
});

/******************************************************************************************
	button type radio
******************************************************************************************/
$(document).on('click', '[class^="btnRadioBox"] button', function() {
	var _this = $(this);
	var _wrap = _this.closest('[class^="btnRadioBox"]');
	if(!_this.hasClass('active')) {
		$('button', _wrap).removeClass('active');
		_this.addClass('active');
	}
});

/******************************************************************************************
	툴팁 팝업
******************************************************************************************/
$(document).on('click', '[class^="tooltipWrap"] > button', function(e) {e.stopPropagation();
	var _this = $(this);
	var _tooltipWrap = _this.closest('[class^="tooltipWrap"]');
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);
	var _isHide = _tooltipBox.is(':hidden');

	// S : 툴팁 클릭시 다른 툴팁 초기화
	resetTooltipFn();
	// E : 툴팁 클릭시 다른 툴팁 초기화

	console.log(_isHide);
	if(_isHide) {
		_tooltipWrap.css('z-index' , '1');
		_tooltipBox.attr('aria-hidden', 'false').show();
		_this.attr('aria-expanded', 'true');
	}else{
		_tooltipWrap.css('z-index' , '0');
		_tooltipBox.attr('aria-hidden', 'true').hide();
		_this.attr('aria-expanded', 'false');
	}
});
// 리셋함수 - 툴팁 팝업
var resetTooltipFn = function() {
	var _tooltipWrap = $('[class^="tooltipWrap"]');
	var _tooltipBtn = $('> button', _tooltipWrap);
	var _tooltipBox = $('.tooltipBox', _tooltipWrap);
	_tooltipWrap.css('z-index' , '0');
	_tooltipBox.attr('aria-hidden', 'true').hide();
	_tooltipBtn.attr('aria-expanded', 'false');
}

/******************************************************************************************
	검색어 자동완성기능
******************************************************************************************/
$(document).on('keyup', '.searchWordItem .inpSrch input[type="text"], .searchWordItem .inpText input[type="text"]', function() {
	// console.log('.searchWordItem .inpSrch input[type="text"], .searchWordItem .inpText input[type="text"] - keyup change');
	var _this = $(this);
	var _val = _this.val();
	var _searchWordItem = _this.closest('[class^="searchWordItem"]');
	var _autoWordCase = $('.autoWordCase', _searchWordItem);

	if(_val !== '') {
		_searchWordItem.css({'z-index' : '10'});
		_autoWordCase.attr('aria-hidden', 'false').show();
	}else{
		_searchWordItem.css({'z-index' : '0'});
		_autoWordCase.attr('aria-hidden', 'ture').hide();
	}
});
$(document).on('click', '.searchWordItem .autoWordCase .btnMore', function() {
	var _this = $(this);
	var _searchWordItem = _this.closest('[class^="searchWordItem"]');
	var _inpTxt = $('.inpSrch input[type="text"], .inpText input[type="text"]', _searchWordItem);
	layerOpenFn('#searchSpeakersPop', _inpTxt);
});
// 리셋함수 - 검색어 자동완성기능
var resetAutoWordFn = function() {
	var _searchWordItem = $('.integrSearchBox .searchWordItem, .integrSearchBox .searchWordItem');
	var _autoWordCase = $('.autoWordCase', _searchWordItem);
	_searchWordItem.css({'z-index' : '0'});
	_autoWordCase.attr('aria-hidden', 'ture').hide();
}
/* 검색어 자동완성기능 상위 이벤트 해제 */
$(document).on('click focusin', '.searchWordItem .inpSrch input[type="text"], .searchWordItem .inpText input[type="text"]', function(e) {e.stopPropagation();
	console.log('focusin');
	resetAutoWordFn()
});
$(document).on('focusin', '.searchWordItem .autoWordCase button', function(e) {e.stopPropagation();
	console.log('.searchWordItem .autoWordCase button - focusin');
});
$(document).on('focusin', '#searchSpeakersPop *', function(e) {e.stopPropagation();
	console.log('#searchSpeakersPop * - focusin');
});

/******************************************************************************************
	리포트 제작 - 리포트 선택
******************************************************************************************/
$(document).on('click', '.reportSelectBox button', function() {
	var _this = $(this);
	var _ulBox = _this.closest('ul');
	
	if(!_this.hasClass('active')) {
		$('button', _ulBox).removeClass('active');
		_this.addClass('active');
	}
});

/******************************************************************************************
	table click event
******************************************************************************************/
$(document).on('click', '[class^="listTbl"].evClick tbody tr', function() {
	var _this = $(this);
	var _tbody = _this.closest('tbody');

	if(!_this.hasClass('active')) {
		$('tr', _tbody).removeClass('active');
		_this.addClass('active');
	}
});

/******************************************************************************************
	관련 발언자 툴팁
******************************************************************************************/
$(document).on('click', '.listTbl02.evSpeakerTip tbody tr', function(e) {e.stopPropagation();
	var _this = $(this);
	var _tbody = _this.closest('tbody');

	if(!_this.hasClass('active')) {
		$('tr', _tbody).removeClass('active');
		_this.addClass('active');
	}
	speakerTipClose();
	speakerTipOpen(this);
});
$(document).on('click', '.listTbl02.evSpeakerTip .relateSpeakerTip', function(e) {e.stopPropagation();});
var speakerTipOpen = function(target) {
	var _this = $(target);
	var _evSpeakerTip = _this.closest('.evSpeakerTip');
	var _tooltip = $('.relateSpeakerTip', _evSpeakerTip);
	var _topY = _this.position().top;

	_tooltip.css({'top' : _topY});
	if(_tooltip.is(':hidden')) _tooltip.attr('aria-hidden', false).show();
}
var speakerTipClose = function() {
	var _tooltip = $('.evSpeakerTip .relateSpeakerTip');

	_tooltip.attr('aria-hidden', true).hide();
}

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


/******************************************************************************************
	LAYER POPUP
******************************************************************************************/
var layerOpenFn = function(target, clickTarget) {
	var _layerWrap = $(target);
	var _layerBox = $('.layerBox', _layerWrap).attr('tabindex', 0);
	var _btnCloseLayer = $('.btnCloseLayer', _layerBox);
	var _accessible01;
	var _accessible02;
	var _layerCalckSizeH = function() {
		winH = window.innerHeight;
		var _layerHeader = $('.layerHeader', _layerBox);
		var _layerHeaderH = _layerHeader.outerHeight()
		var _layerBody = $('.layerBody', _layerBox);
		var _layerFoot = $('.layerFoot', _layerBox);
		var _layerFootH = _layerFoot.outerHeight();
	
		if(parseInt(_layerBox.css('padding-top'), 10) !== _layerHeaderH) _layerBox.css({'padding-top' : _layerHeaderH});
		
		if(_layerFootH) {
			_layerBody.css({'max-height' : (winH*0.9) -_layerHeaderH - _layerFootH});
		}else{
			_layerBody.css({'max-height' : (winH*0.9) -_layerHeaderH});
		}
	}
	
	_layerWrap.data('click-target', clickTarget);
	_layerWrap.attr('aria-hidden', false);
	_layerWrap.prepend('<div class="AccessibilityHtml1 blind" tabindex="0" aria-hidden="true"></div>');
	_layerWrap.prepend('<div class="layerMask" aria-hidden="true"></div>');
	_layerWrap.append('<div class="AccessibilityHtml2 blind" tabindex="0" aria-hidden="true"></div>');
	_accessible01 = $('.AccessibilityHtml1', _layerWrap);
	_accessible02 = $('.AccessibilityHtml2', _layerWrap);
	$('body').addClass('isPop');
	_layerWrap.show();
	_layerBox.focus();
	_layerCalckSizeH()

	_btnCloseLayer.off('click').on('click', function() {
		layerCloseFn(target, _layerCalckSizeH);
	});
	_accessible01.off('focusin').on('focusin', function() {
		console.log(_btnCloseLayer.is(':hidden') || !_btnCloseLayer.length);
		if(_btnCloseLayer.is(':hidden') || !_btnCloseLayer.length) {
			_layerBox.focus();
		}else{
			_btnCloseLayer.focus();
		}
	});
	_accessible02.off('focusin').on('focusin', function() {
		_layerBox.focus();
	});
	window.addEventListener('resize', _layerCalckSizeH);
}

var layerCloseFn = function(target, layerCalckSizeH) {
	var _layerWrap = $(target);
	var _layerBox = $('.layerBox', _layerWrap);
	var _clickTarget = _layerWrap.data('click-target');
	var _accessible01 = $('.AccessibilityHtml1', _layerWrap);
	var _accessible02 = $('.AccessibilityHtml2', _layerWrap);
	var _layerMask = $('.layerMask', _layerWrap);

	$('body').removeClass('isPop');
	_accessible01.remove();
	_accessible02.remove();
	_layerMask.remove();
	_layerWrap.attr('aria-hidden', true);
	_layerWrap.hide();
	if(_layerWrap.hasClass('floatB')) _layerBox.hide();
	_layerBox.removeAttr('tabindex');
	$(_clickTarget).focus();
	window.removeEventListener('resize', layerCalckSizeH);
}