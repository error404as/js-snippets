(function(){
/*
Finds all JS/CSS files included to the page (script/link tags in DOM).
Output in console.
May be added in Google Chrome Developer Panel to Sources -> Snippets
 */

function getScripts(){
	var dom = document.getElementsByTagName('script'),
		list = [];
	for(var i = 0, len = dom.length; i < len; i++){
		if(dom[i].src && dom[i].src.indexOf('chrome-extension') !== 0){
			list.push(dom[i].src);
		}
	}
	return list;
}
function getCSSs(){
	var dom = document.getElementsByTagName('link'),
		list = [];
	for(var i = 0, len = dom.length; i < len; i++){
		if( dom[i].href && (dom[i].href.indexOf('.css') !== -1 || dom[i].getAttribute('rel') === 'stylesheet' || dom[i].getAttribute('type') === 'text/css')  ){
			list.push(dom[i].href);
		}
	}
	return list;
}

console.log ('%c%s','color: green; font: 1.2rem/1 Tahoma;', 'JS files:');
console.log(getScripts().join('\n'));
console.log ('%c%s','color: green; font: 1.2rem/1 Tahoma;', 'CSS files:');
console.log(getCSSs().join('\n'));


})();
