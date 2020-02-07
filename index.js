const waitForElToDissapear = (selector) => {
	let el = document.querySelector(selector)[0];
	return new Promise(resolve => {
		let searchForEl = setInterval(() => {
			el = document.querySelector(selector)[0];
			if (!el) {
				clearInterval(searchForEl);
				console.log('done');
				resolve();
			}
		}, 500);
	});
};

export default waitForElToDissapear;
