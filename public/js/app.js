const UISelectors = {
	form: document.querySelector('#form'),
	firstName: document.querySelector('#firstName'),
	lastName: document.querySelector('#lastName'),
	email: document.querySelector('#email'),
	phone: document.querySelector('#phone'),
	message: document.querySelector('.message'),
	slider: document.querySelector('#slider'),
	modal: document.querySelector('.modal'),
	button: document.querySelector('#request')
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

const clearFormFields = () => {
	UISelectors.firstName.value = '';
	UISelectors.lastName.value = '';
	UISelectors.email.value = '';
	UISelectors.phone.value = '';
};

// * show about modal
const showModal = () => {
	UISelectors.modal.style.transform = 'translateY(0)';
};

UISelectors.slider.addEventListener('click', () => showModal());

document.querySelector('#back').addEventListener('click', function(e) {
	UISelectors.modal.style.transform = 'translateY(-150vh)';
});

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

	const response = await request.post(
		'https://app-ourclassroom.herokuapp.com/join',
		data
	);
	UISelectors.button.value = 'Loading...';
	UISelectors.button.setAttribute('disabled', 'true');
	UISelectors.message.textContent = '';
	clearFormFields();
	UISelectors.modal.innerHTML = `
	<h1 style="text-align:center">Thank you for joining us.</h1>
	<h4 style="margin: 1rem; text-align:center">Happy Coding!</h4>
	<p style="margin: 1rem; text-align:center">You will receive a notification email from us shortly.</P>
	<object data="./images/undraw_code_typing_7jnv.svg" type="image/svg+xml" width="605px"
	height="462px" style="margin-top: 3rem;"></object>
	`;
	showModal();
});

console.log('Client side js');
