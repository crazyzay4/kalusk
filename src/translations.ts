export const translations = {
  uk: {
    nav: {
      home: 'Головна',
      photos: 'Фотографії',
      contact: 'Зв\'язатися зі мною',
      settings: 'Налаштування'
    },
    home: {
      title: 'Калуш',
      p1: 'Калуш — одне із найдревніших міст Прикарпаття. Першу письмову згадку про Калуш знаходимо під 1437 роком у галицьких гродських книгах, коли місто вже було значним поселенням Галицької землі. Проте археологічні знахідки свідчать про існування тут давнього поселення ще в часи Галицько-Волинської держави.',
      p2: 'Найбільш вірогідна версія походження назви Калуш пов\'язана з природними особливостями місцевості — від слова «калюша» (солоне джерело, ковбаня), що вказує на давній промисел видобутку солі. Слід зазначити, що розвиток міста відбувався на берегах річки Сівка, а видобуток солі став головним чинником виникнення поселення. На сучасних картах — це територія історичного центру міста та колишніх соляних шахт.',
      p3: 'Зі здобуттям Україною незалежності Калуш зберігає провідні позиції в промисловому та культурному житті Івано-Франківщини. Місто є одним з найбільших індустріальних центрів Західної України (близько 65 тисяч мешканців). Потужний промисловий потенціал робить Калуш важливим економічним вузлом. Нові економічні умови розвитку змінюють і зовнішній вигляд міста.',
      author: 'Сайт створила Гладка Софія учениця 8-б класу'
    },
    photos: {
      title: 'Фотографії',
      anthem: 'Гімн України',
      noAudio: 'Ваш браузер не підтримує аудіо.'
    },
    contact: {
      title: 'Зв\'язатися зі мною',
      desc: 'Будь ласка, скористайтеся формою нижче, щоб надіслати мені повідомлення.',
      name: 'Ім\'я:',
      email: 'Email:',
      message: 'Повідомлення:',
      send: 'Надіслати',
      successTitle: 'Повідомлення успішно надіслано!',
      successDesc: 'Дякуємо за ваше звернення.',
      backHome: 'Повернутися на головну',
      errorEmail: 'Помилка: недійсна адреса електронної пошти.',
      clickHere: 'Натисніть тут',
      toReturn: 'щоб повернутися на головну сторінку.',
      tryAgain: 'Або спробувати ще раз'
    },
    settings: {
      title: 'Налаштування',
      language: 'Мова',
      background: 'Фон сайту',
      fontSize: 'Розмір шрифту',
      bgLight: 'Світлий (за замовчуванням)',
      bgDark: 'Темний',
      bgBlue: 'Синій',
      fontSmall: 'Маленький',
      fontMedium: 'Середній',
      fontLarge: 'Великий'
    }
  },
  en: {
    nav: {
      home: 'Home',
      photos: 'Photos',
      contact: 'Contact Me',
      settings: 'Settings'
    },
    home: {
      title: 'Kalush',
      p1: 'Kalush is one of the oldest cities in Prykarpattia. The first written mention of Kalush is found in 1437 in the Halych city books, when the city was already a significant settlement of the Halych land. However, archaeological finds indicate the existence of an ancient settlement here even during the times of the Galicia-Volhynia state.',
      p2: 'The most likely version of the origin of the name Kalush is related to the natural features of the area - from the word "kalyusha" (salt spring, puddle), which indicates the ancient craft of salt extraction. It should be noted that the development of the city took place on the banks of the Sivka River, and salt extraction became the main factor in the emergence of the settlement. On modern maps, this is the territory of the historical center of the city and former salt mines.',
      p3: 'With Ukraine gaining independence, Kalush retains leading positions in the industrial and cultural life of the Ivano-Frankivsk region. The city is one of the largest industrial centers in Western Ukraine (about 65 thousand residents). A powerful industrial potential makes Kalush an important economic hub. New economic conditions of development are also changing the appearance of the city.',
      author: 'Site created by Hladka Sofia, student of class 8-B'
    },
    photos: {
      title: 'Photos',
      anthem: 'Anthem of Ukraine',
      noAudio: 'Your browser does not support audio.'
    },
    contact: {
      title: 'Contact Me',
      desc: 'Please use the form below to send me a message.',
      name: 'Name:',
      email: 'Email:',
      message: 'Message:',
      send: 'Send message',
      successTitle: 'Message sent successfully!',
      successDesc: 'Thank you for contacting us.',
      backHome: 'Return to home',
      errorEmail: 'Error: invalid email address.',
      clickHere: 'Click here',
      toReturn: 'to return to the home page.',
      tryAgain: 'Or try again'
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      background: 'Site Background',
      fontSize: 'Font Size',
      bgLight: 'Light (Default)',
      bgDark: 'Dark',
      bgBlue: 'Blue',
      fontSmall: 'Small',
      fontMedium: 'Medium',
      fontLarge: 'Large'
    }
  }
};

export type Language = 'uk' | 'en';
export type Background = 'light' | 'dark' | 'blue';
export type FontSize = 'small' | 'medium' | 'large';
