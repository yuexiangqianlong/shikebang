import Config from './config';
export async function postHttp(url, formBody = null) {
	var fetchOptions = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: formBody
	};
	let response = await fetch(Config.server + url, fetchOptions);
	let text = await response.text();
	return text;
}

export async function getHttp(url) {
	let response = await fetch(Config.server  + url);
	if (response.ok) {
		//let text = await response.text();
		return response;
	} else {
		alert('网络连接失败');
		return null;
	}
}

export async function postHttp1(url, formBody = null) {
	var fetchOptions = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formBody
	};
	let response = await fetch(Config.server  + url, fetchOptions);
	let text = await response.json();
	return text;
}