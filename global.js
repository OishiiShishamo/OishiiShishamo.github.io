if (location.href.match(new RegExp('/ja/'))) {
	fetch("/ja/sidebar.html")
		.then(res => res.text())
		.then(html => {
			document.getElementById("sidebar").innerHTML = html;
		});
}

if (location.href.match(new RegExp('/en/'))) {
	fetch("/en/sidebar.html")
		.then(res => res.text())
		.then(html => {
			document.getElementById("sidebar").innerHTML = html;
		});
}

// idがlang_switchのタグを言語変更ボタンとして動作させる
if (location.href.match(new RegExp('/ja/'))){
	document.getElementById("lang_switch").innerHTML = "en"
	document.getElementById("lang_switch").setAttribute('href', location.href.replace('/ja/', '/en/'));
}

if (location.href.match(new RegExp('/en/'))){
	document.getElementById("lang_switch").innerHTML = "ja"
	document.getElementById("lang_switch").setAttribute('href', location.href.replace('/en/', '/ja/'));
}