// eslint-disable-next-line strict
'use strict';

const data = require('./db_cities');


const dropdown = document.querySelector('.dropdown'),
  selectCities = document.getElementById('select-cities'),
  dropdownDefault = document.querySelector('.dropdown-lists__list--default'),
  dropdownDefaultCol = document.querySelector('.dropdown-lists__list--default>.dropdown-lists__col'),
  dropdownSelect = document.querySelector('.dropdown-lists__list--select'),
  dropdownSelectCol = document.querySelector('.dropdown-lists__list--select>.dropdown-lists__col'),
  dropdownAutocomplete  = document.querySelector('.dropdown-lists__list--autocomplete'),
  closeBtn = document.querySelector('.close-button'),
  btn = document.querySelector('.button');


let key = 'RU';

const renderDropdownDefaultTop3 = obj => {
  dropdownDefaultCol.insertAdjacentHTML('beforeend', `
  <div class="dropdown-lists__countryBlock">
  <div class="dropdown-lists__total-line">
    <div class="dropdown-lists__country">${obj.country}</div>
    <div class="dropdown-lists__count">${obj.count}</div>
  </div>
  <div class="dropdown-lists__line">
    <div class="dropdown-lists__city dropdown-lists__city--ip">${obj.cities[0].name}</div>
    <div class="dropdown-lists__count">${obj.cities[0].count}</div>
  </div>
  <div class="dropdown-lists__line">
    <div class="dropdown-lists__city">${obj.cities[1].name}</div>
    <div class="dropdown-lists__count">${obj.cities[1].count}</div>
  </div>
  <div class="dropdown-lists__line">
    <div class="dropdown-lists__city">${obj.cities[2].name}</div>
    <div class="dropdown-lists__count">${obj.cities[2].count}</div>
  </div>
</div>
  `);
};

const renderDropdownSelectCol = (obj, country) => {
  dropdownSelectCol.innerHTML = '';

  const countryBlock = document.createElement('div');

  countryBlock.classList.add('dropdown-lists__countryBlock');
  countryBlock.innerHTML = `
    <div class="dropdown-lists__total-line">
      <div class="dropdown-lists__country">${country}</div>
      <div class="dropdown-lists__count">${obj.count}</div>
    </div>`;

  obj.cities.forEach(city => {
    countryBlock.insertAdjacentHTML('beforeend', `
    <div class="dropdown-lists__line">
      <div class="dropdown-lists__city">${city.name}</div>
      <div class="dropdown-lists__count">${city.count}</div>
    </div>
    `);
  });

  dropdownSelectCol.insertAdjacentElement('beforeend', countryBlock);
};

const renderDropdownAutocomplete = obj => {

  dropdownAutocomplete.innerHTML = '';

  const countryBlock = document.createElement('div');

  countryBlock.classList.add('dropdown-lists__countryBlock');
  for (const key in obj) {
    countryBlock.insertAdjacentHTML('beforeend', `
      <div class="dropdown-lists__line">
        <div class="dropdown-lists__city">${key}</div>
        <div class="dropdown-lists__count">${obj[key]}</div>
      </div>
    `);
  }

  if (Object.keys(obj).length === 0) {
    countryBlock.innerText = 'Ничего не найдено';
  }

  dropdownAutocomplete.insertAdjacentElement('beforeend', countryBlock);

};

//Top3 city
const sorting = key => {
  data[key].forEach(country => {
    country.cities.sort((prev, next) => +next.count - +prev.count); //сортировка
    renderDropdownDefaultTop3(country);
  });
};

sorting(key);

const disableBtn = e => {
  e.preventDefault();
};

//listeners
btn.addEventListener('click', disableBtn);

const btnCloseListener = () => {
  selectCities.value = '';
  dropdown.classList.remove('visually-show');
  dropdownAutocomplete.style.display = 'none';
  closeBtn.style.display = 'none';
  selectCities.blur();
  btn.addEventListener('click', disableBtn);
};

const listner = event => {
  const target = event.target;
  if (target.closest('.dropdown-lists__total-line')) {
    if (target.closest('.dropdown-lists__list--default')) {
      const country = target.closest('.dropdown-lists__total-line').querySelector('.dropdown-lists__country');

      data[key].forEach(element => {
        if (element.country === country.textContent) {
          renderDropdownSelectCol(element, country.textContent);
          dropdownSelect.style.display = 'block';
          dropdownDefault.style.display = 'none';
        }
      });
    }
    if (target.closest('.dropdown-lists__list--select')) {
      dropdownSelect.style.display = 'none';
      dropdownDefault.style.display = 'block';
    }
  }

  if (target.closest('.dropdown-lists__line')) {
    const city = target.closest('.dropdown-lists__line').querySelector('.dropdown-lists__city');
    selectCities.focus();
    selectCities.onblur = () => {
      if (selectCities.value.length > 0) {
        selectCities.focus();
      } else if (selectCities.value.length === 0) {
        selectCities.blur();
      } else {
        selectCities.value = '';
      }
    };
    selectCities.value = city.textContent;
    console.log(data[key]);
    data[key].forEach(country => {
      country.cities.forEach(city => {
        if (city.name === selectCities.value) {
          btn.href = city.link;
        }
      });
    });
    closeBtn.style.display = 'block';
    closeBtn.addEventListener('click', btnCloseListener);
    btn.removeEventListener('click', disableBtn);
  }
};


selectCities.addEventListener('click', () => {
  if (!dropdown.classList.contains('visually-show')) {
    dropdown.classList.add('visually-show');
    dropdownDefault.style.display = 'block';
    dropdown.addEventListener('click', listner);
  }
});

selectCities.addEventListener('input', () => {
  console.log(selectCities.value);
  if (selectCities.value.length < 1) {
    dropdownDefault.style.display = 'block';
    dropdownAutocomplete.style.display = 'none';
    closeBtn.style.display = 'none';
    btn.addEventListener('click', disableBtn);
    closeBtn.removeEventListener('click', btnCloseListener);
  } else {
    closeBtn.style.display = 'block';
    closeBtn.addEventListener('click', btnCloseListener);
    dropdownSelect.style.display = 'none';
    dropdownDefault.style.display = 'none';
    dropdownAutocomplete.style.display = 'block';
    const result = {};
    data[key].forEach(country => {
      country.cities.forEach(city => {
        if (city.name.toLowerCase().includes(selectCities.value.trim().toLowerCase()) &&
        city.name.toLowerCase().startsWith(selectCities.value[0].trim().toLowerCase())) {
          result[city.name] = city.count;
        }
      });
    });
    renderDropdownAutocomplete(result);
  }
});


