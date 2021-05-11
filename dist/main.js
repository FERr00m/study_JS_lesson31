(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = {
  "RU": [
    {
      "country": "Россия",
      "count": 144500000,
      "cities": [
        {
          "name": "Рязань",
          "count": "538962",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
        },
        {
          "name": "Москва",
          "count": "12615882",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
        },
        {
          "name": "Санкт-Петербург",
          "count": "5383968",
          "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Краснодар",
          "count": "918145",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
        },
        {
          "name": "Екатеринбург",
          "count": "1484456",
          "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Ростов-на-Дону",
          "count": "1130305",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
        },
        {
          "name": "Воронеж",
          "count": "1054537",
          "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
        }
      ]

    },
    {
      "country": "Германия",
      "count": 82175684 ,
      "cities": [
        {
          "name": "Берлин",
          "count": "3613495",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
        },
        {
          "name": "Мюнхен",
          "count": "1456039",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
        },
        {
          "name": "Франкфурт-на-Майне",
          "count": "736414",
          "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
        },
        {
          "name": "Кёльн",
          "count": "1080394",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
        }
      ]
    },
    {
      "country": "Англия",
      "count": 53012456,
      "cities": [
        {
          "name": "Лондон",
          "count": " 8869898",
          "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
        },
        {
          "name": "Манчестер",
          "count": "545500",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
        },
        {
          "name": "Эдинбург",
          "count": "488100",
          "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Бристоль",
          "count": "567111",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
        }
      ]

    }
  ],
  "EN": [
    {
      "country": "Russia",
      "count": 144500000,
      "cities": [
        {
          "name": "Ryazan",
          "count": "538962",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
        },
        {
          "name": "Moscow",
          "count": "12615882",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
        },
        {
          "name": "St Petersburg",
          "count": "5383968",
          "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Krasnodar",
          "count": "918145",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
        },
        {
          "name": "Yekaterinburg",
          "count": "1484456",
          "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Rostov-on-Don",
          "count": "1130305",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
        },
        {
          "name": "Voronezh",
          "count": "1054537",
          "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
        }
      ]

    },
    {
      "country": "Germany",
      "count": 82175684 ,
      "cities": [
        {
          "name": "Berlin",
          "count": "3613495",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
        },
        {
          "name": "Munich",
          "count": "1456039",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
        },
        {
          "name": "frankfurt",
          "count": "736414",
          "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
        },
        {
          "name": "Cologne",
          "count": "1080394",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
        }
      ]
    },
    {
      "country": "United Kingdom",
      "count": 53012456,
      "cities": [
        {
          "name": "London",
          "count": " 8869898",
          "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
        },
        {
          "name": "Manchester",
          "count": "545500",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
        },
        {
          "name": "Edinburgh",
          "count": "488100",
          "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Bristol",
          "count": "567111",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
        }
      ]

    }
  ],
  "DE": [
    {
      "country": "Russland",
      "count": 144500000,
      "cities": [
        {
          "name": "Ryazan",
          "count": "538962",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
        },
        {
          "name": "Moskau",
          "count": "12615882",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
        },
        {
          "name": "Saint Petersburg",
          "count": "5383968",
          "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Krasnodar",
          "count": "918145",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
        },
        {
          "name": "Jekaterinburg",
          "count": "1484456",
          "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Rostow",
          "count": "1130305",
          "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
        },
        {
          "name": "Woronesch",
          "count": "1054537",
          "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
        }
      ]

    },
    {
      "country": "Deutschland",
      "count": 82175684 ,
      "cities": [
        {
          "name": "Berlin",
          "count": "3613495",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
        },
        {
          "name": "München",
          "count": "1456039",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
        },
        {
          "name": "Frankfurt",
          "count": "736414",
          "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
        },
        {
          "name": "Köln",
          "count": "1080394",
          "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
        }
      ]
    },
    {
      "country": "England",
      "count": 53012456,
      "cities": [
        {
          "name": "London",
          "count": " 8869898",
          "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
        },
        {
          "name": "Manchester",
          "count": "545500",
          "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
        },
        {
          "name": "Edinburgh",
          "count": "488100",
          "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
        },
        {
          "name": "Bristol",
          "count": "567111",
          "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
        }
      ]

    }
  ]
};

module.exports = data;

},{}],2:[function(require,module,exports){
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
        }
      });
    }
    if (target.closest('.dropdown-lists__list--select')) {
      dropdownSelect.style.display = 'none';
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



},{"./db_cities":1}]},{},[2]);
