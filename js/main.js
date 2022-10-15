const elForm = document.querySelector('.js-form');
const elInp = document.querySelector('.js-inp');
const elList = document.querySelector('.js-list');
const elSelect = document.querySelector('.js-select');

const elInpVal = elInp.value;

const elSelVal = elSelect.value;

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
});

fetch(`http://www.omdbapi.com/?apikey=84d2c70f&=${elInpVal}&type=${elSelVal}`)
	.then((response) => response.json())
	.then((data) => {
		if (data.length) {
			data.forEach((item) => {
				const elText = document.createElement('p');

				elText.textContent = item.title;

				elList.appendChild(elText);
			});
		}
	});
