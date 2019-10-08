console.log('Client side js');
alert('Hello');

const UISelectors = {
	form: document.querySelector('#form'),
	firstName: document.querySelector('#firstName'),
	lastName: document.querySelector('#lastName'),
	email: document.querySelector('#email'),
	phone: document.querySelector('#phone'),
	message: document.querySelector('.message')
};
// * class for making http requests
class Request {
	constructor() {}

	async get(url) {
		try {
			const response = await fetch(url);
			return response.json();
		} catch (error) {
			return error;
		}
	}

	async post(url, data) {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(data)
			});
			return response.json();
		} catch (error) {
			return error;
		}
	}
}

const request = new Request();

form.addEventListener('submit', async function(e) {
	e.preventDefault();
	const data = {
		firstName: UISelectors.firstName.value,
		lastName: UISelectors.lastName.value,
		email: UISelectors.email.value,
		phone: UISelectors.phone.value
	};
	// * If there is an empty field...
	if (Object.values(data).includes('')) {
		return (UISelectors.message.textContent = 'All Fields are required');
	}

	const response = await request.post('http://localhost:3000/join', data);
	UISelectors.message.textContent = '';
	console.log(response);
});
