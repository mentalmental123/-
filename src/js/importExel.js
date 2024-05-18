import readXlsxFile from 'read-excel-file';
import { nanoid } from 'nanoid';
import { add } from '../db/write';

export function readExel(e) {
  let fromExelArray = [];
  let file = e.target.files[0];
  readXlsxFile(file, { sheet: 'map table' }).then(row => {
    console.log(row);
    for (let index = 1; index < row.length; index++) {
      const elements = row[index];
      let expense = 1;
      console.log(expense);

      switch (elements[0].trim()) {
        case 'Вода':
          expense *= 10 / 300;
          break;
        case 'Повітря':
          expense *= 5 / 300;
          break;
        case 'Земля':
          expense *= 1.5 / 300;
          break;

        default:
          break;
      }
      console.log(expense);

      switch (elements[1].trim()) {
        case 'Автономна республіка Крим':
          expense *= 656;
          break;
        case 'Вінницька':
          expense *= 738;
          break;
        case 'Волинська':
          expense *= 483;
          break;
        case 'Дніпропетровська':
          expense *= 748;
          break;
        case 'Донецька':
          expense *= 837;
          break;
        case 'Житомирська':
          expense *= 538;
          break;
        case 'Закарпатська':
          expense *= 518;
          break;
        case 'Запорізька':
          expense *= 685;
          break;
        case 'Івано-Франківська':
          expense *= 577;
          break;
        case 'Київська':
          expense *= 704;
          break;
        case 'Кіровоградська':
          expense *= 883;
          break;
        case 'Луганська':
          expense *= 639;
          break;
        case 'Львівська':
          expense *= 482;
          break;
        case 'Миколаївська':
          expense *= 737;
          break;
        case 'Одеська':
          expense *= 855;
          break;
        case 'Полтавська':
          expense *= 794;
          break;
        case 'Рівненська':
          expense *= 521;
          break;
        case 'Сумська':
          expense *= 737;
          break;
        case 'Тернопільська':
          expense *= 523;
          break;
        case 'Харківська':
          expense *= 717;
          break;
        case 'Херсонська':
          expense *= 889;
          break;
        case 'Хмельницька':
          expense *= 654;
          break;
        case 'Черкаська':
          expense *= 499;
          break;
        case 'Чернівецька':
          expense *= 467;
          break;
        case 'Чернігівська':
          expense *= 667;
          break;
        default:
          console.log('Область не знайдена');
      }
      console.log(expense);

      expense *= elements[2];
      console.log(expense);

      switch (elements[3].trim()) {
        case 'Природні території та об’єкти природно-заповідного фонду':
          expense *= 10;
          break;
        case 'Пляжні зони уздовж морів, морських заток і лиманів':
          expense *= 6;
          break;
        case 'Водоохоронні зони уздовж річок, морів, навколо озер, водосховищ та інших водойм':
          expense *= 4;
          break;
        case 'Охоронні зони наземних, надземних і підземних трубопроводів':
          expense *= 2.5;
          break;
        case 'Охоронні зони уздовж повітряних і підземних кабельних ліній зв’язку, а також навколо випромінювальних споруд телерадіостанцій та радіорелейних ліній':
          expense *= 1.5;
          break;
        case 'Охоронні зони уздовж повітряних і підземних кабельних ліній електропередачі':
          expense *= 1.5;
          break;
        case 'Захисні, охоронні та інші зони з особливими умовами користування навколо військових та інших оборонних об’єктів':
          expense *= 1.5;
          break;
        case 'Зони відчуження та безумовного (обов’язкового) відселення, що зазнали радіоактивного забруднення внаслідок Чорнобильської катастрофи':
          expense *= 2;
          break;
        case 'Зона санітарної охорони навколо об’єктів, у яких є підземні та відкриті джерела водопостачання, водозабірні та водоочисні споруди, водоводи, об’єкти оздоровчого призначення':
          expense *= 6;
          break;
        case 'Санітарно-захисні зони навколо об’єктів, які є джерелом виділення шкідливих речовин, запахів, підвищеного рівня шуму, вібрації, ультразвукових і електромагнітних хвиль, електронних полів, іонізуючих випромінювань':
          expense *= 1.5;
          break;
        case 'Прикордонна смуга уздовж державного кордону України':
          expense *= 3;
          break;
        case 'Сільськогосподарські угіддя, включені в установленому порядку до складу екомережі':
          expense *= 3;
          break;
        case 'Землі, зарезервовані для заповідання':
          expense *= 4;
          break;
        case 'Інші території з особливим режимом використання земель':
          expense *= 4;
          break;
        // Додайте інші області тут
        default:
          expense *= 2;
      }

      console.log(expense);

      switch (elements[4].trim()) {
        case 'Надзвичайно небезпечні':
          expense *= 4;
          break;
        case 'Дуже небезпечні':
          expense *= 3;
          break;
        case 'Помірно небезпечні':
          expense *= 2.5;
          break;
        case 'Інші':
          expense *= 1.5;
          break;
        default:
          expense *= 1.5;
      }
      console.log(expense);

      var date = new Date(elements[5]);
      console.log(expense);
      console.log(date);

      var day = date.getDate();
      var month = date.getMonth() + 1; // Додаємо 1, оскільки місяці у JavaScript починаються з 0
      var year = date.getFullYear();

      // Формуємо рядок у відповідному форматі
      var dateString =
        (day < 10 ? '0' : '') +
        day +
        '.' +
        (month < 10 ? '0' : '') +
        month +
        '.' +
        year;

      console.log(dateString); // Виведе "11.05.2024"

      let obj = {
        ID: nanoid(),
        pollutionType: elements[0],
        pollutionRegion: elements[1],
        pollutionArea: elements[2],
        pollutionTerritory: elements[3],
        pollutionSubstanse: elements[4],
        pollutionDated: dateString,
        pollutionExpense: Math.floor(expense) / 1000,
      };

      add(obj);

      // 0 вода
      // 1 область
      //2 площа
      //3 важливість терироій
      //4 субстанція
      //5 дата
      //6 сомент
    }
  });
}
