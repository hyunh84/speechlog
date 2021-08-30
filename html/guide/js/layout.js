var header = function() {
	var html = '<h1 class="logo"><a href="#"><img src="../../asset/images/layout/logo.png" alt="Speechlog" /></a></h1>';
		html += '<div class="utilH">';
		html += '<div class="alarmUtil">';
		html += '<a href="#" class="alarmItem">지역지 전남일보가 추가 되었습니다.</a>';
		html += '</div>';
		html += '<div class="myinfoUtil">';
		html += '<div class="userName"><strong>정말랑</strong> 님</div>';
		html += '<div class="utilBtnBox">';
		html += '<button type="button" class="shortcut"><em>바로가기설치</em></button>';
		html += '<button type="button" class="manual"><em>사용매뉴얼 </em></button>';
		html += '<button type="button"><em>정보변경</em></button>';
		html += '<button type="button"><em>로그아웃</em></button>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '<nav class="gnbWrap">';
		html += '<h2 class="blind">Main Navigation</h2>';
		html += '<div class="depth01">';
		html += '<ul>';
		html += '<li>';
		html += '<a href="#" class="icoDashboard"><em>대시보드</em></a>';
		html += '</li>';
		html += '<li class="active">';
		html += '<a href="#" class="icoSpeaker"><em>발언자 분석</em></a>';
		html += '<div class="depth02">';
		html += '<ul>';
		html += '<li class="active"><a href="#"><em>발언자 분석</em></a></li>';
		html += '<li><a href="#"><em>발언자 비교분석</em></a></li>';
		html += '<li><a href="#"><em>발언자 검색</em></a></li>';
		html += '<li><a href="#"><em>발언자 파급력 순위</em></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</li>';
		html += '<li>';
		html += '<a href="#" class="icoKeywrod"><em>키워드 분석</em></a>';
		html += '<div class="depth02">';
		html += '<ul>';
		html += '<li><a href="#"><em>키워드 순위</em></a></li>';
		html += '<li><a href="#"><em>키워드 분석</em></a></li>';
		html += '<li><a href="#"><em>키워드 검색</em></a></li>';
		html += '<li><a href="#"><em>키워드 비교검색</em></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</li>';
		html += '<li>';
		html += '<a href="#" class="icoChanel"><em>특성화 채널분석</em></a>';
		html += '</li>';
		html += '<li>';
		html += '<a href="#" class="icoCharacter"><em>인물분석백과</em></a>';
		html += '</li>';
		html += '</ul>';
		html += '</div>';
		html += '</nav>';

	document.write(html);
}

var footer = function() {
	var html = '<div class="footInner">';
		html += '<div class="fUtilBox">';
		html += '<a href="#"><em>스피치로그소개</em></a>';
		html += '<a href="#"><em>공지사항</em></a>';
		html += '<a href="#"><em>서비스 문의</em></a>';
		html += '</div>';
		html += '<address class="corpAddrBox">';
		html += '04313 서울시 용산구 청파로47길 11, 4층(청파동 3가 21-7) ｜';
		html += '대표 : 주재선 (사업자번호 : 122-88-01743)';
		html += '<br />';
		html += 'Tel.02.702-0310 ｜';
		html += 'Fax.02-702-0310 ｜';
		html += 'E-mail : speechlog@speechlog.co.kr';
		html += '</address>';
		html += '<p class="copyright">COPYRIGHT (C) SPEEACHLOG. ALL RIGHT RESERVED</p>';
		html += '</div>';

	document.write(html);
}