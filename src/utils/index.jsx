//?a=1&b=2&c=3 --> {a : 1 , b : 2 , c : 3}
export function convertQueryToObject() {
	var search = window.location.search.substring(1);
	return !search
		? {}
		: JSON.parse('{"' + decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) + '"}');
}
//?a=1&b=2&c=3 <-- {a : 1 , b : 2 , c : 3}
export function convertObjectToQuery(obj) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
}
