var fontsize_settings = window.fontsize_settings || {};
fontsize_settings.sizeCnt = 1;
fontsize_settings.style = readCookie('style');
if (fontsize_settings.style !== null) {
	switch (fontsize_settings.style) {
		case 'fontsizeS': fontsize_settings.sizeCnt = 0; break;
		case 'fontsizeL': fontsize_settings.sizeCnt = 2; break;
		default: fontsize_settings.sizeCnt = 1; break; // fontsizeM 含む
	}
}
function clickCount(val) {
	fontsize_settings.sizeCnt += val ;
	if (fontsize_settings.sizeCnt > 2) fontsize_settings.sizeCnt = 2 ;
	else if (fontsize_settings.sizeCnt < 0) fontsize_settings.sizeCnt = 0 ;
	if (fontsize_settings.sizeCnt == 0) {
		setActiveStyleSheet('fontsizeS');
	}
	else if (fontsize_settings.sizeCnt == 1) {
		setActiveStyleSheet('fontsizeM');
	}
	else {
		setActiveStyleSheet('fontsizeL');
	}
}
