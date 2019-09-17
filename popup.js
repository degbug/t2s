function t2s() {
    chrome.tabs.executeScript({
		file : "transveter.js"
	});
	chrome.tabs.executeScript({
		file : "t2s.js"
	});
}
(function initPage(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tab=tabs[0];
		var access=tab.url.startsWith("http")&&(!tab.url.startsWith('https://chrome.google.com'));
		if(!access){
			$('body').html('Page Not Supported'.i()).css('width','100px');
		}else{
			t2s();
		}
	});
})();

