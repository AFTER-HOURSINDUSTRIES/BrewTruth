function rollover(whichImage, status) {
	if (status)
		document.getElementById(whichImage).setAttribute("src","images/" + whichImage + "_on.png");
	else
		document.getElementById(whichImage).setAttribute("src","images/" + whichImage + "_off.png");
}

function rolloverTruth(whichImage, rolloverImage, status) {
	if (status)
		document.getElementById('ctl00_imgTruth' + whichImage + 'b').setAttribute("src","images/btn_glo_left_" + rolloverImage + "_on.png");
	else
		document.getElementById('ctl00_imgTruth' + whichImage + 'b').setAttribute("src","images/btn_glo_left_" + rolloverImage + "_off.png");
}

function newWindow(url,name,w,h,t,m,s,r,st,l,d,c) {
	var windowOptions = "width=" + w + "," +
	"height=" + h + "," +
	"toolbar=" + t + "," +
	"menubar=" + m +"," +
	"scrollbars=" + s + "," +
	"resizable=" + r + "," +
	"status=" + st + "," +
	"location=" + l + "," +
	"directories=" + d + "," +
	"copyhistory=" + c;
	window.open(url, name, windowOptions);
}

function openPiss() {
	newWindow('piss.html','rules',950,600,0,0,0,0,0,0,0,0);
}