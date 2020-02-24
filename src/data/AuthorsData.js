const AuthorsData = [
    {
        id: 1,
        name:'Кондрат Крапива',
        yearsOfLife:'1966 - 1991',
        about:'Кондра́т Крапива́ — белорусский советский писатель, поэт, драматург и переводчик, литературовед, сатирик, общественный деятель. Доктор филологических наук, академик АН Белорусской ССР (1950). Член ВКП с 1941 года. Народный писатель Белорусской ССР (1956). Герой Социалистического Труда (1975). Лауреат двух Сталинских премий (1941, 1951) и Государственной премии СССР (1971).',
        photo:'https://upload.wikimedia.org/wikipedia/commons/0/09/Krapiva-k.jpg'
    },
    {
        id: 2,
        name:'Иван Шамякин',
        yearsOfLife:'1921 - 2004',
        about:'Ива́н Петро́вич Шамя́кин — белорусский советский писатель, сценарист и драматург, общественный деятель. Народный писатель Белорусской ССР. Герой Социалистического Труда. Лауреат Сталинской премии третьей степени. Член ВКП с 1943 года. Академик Национальной академии наук Беларуси.',
        photo:'https://upload.wikimedia.org/wikipedia/ru/0/0c/Shamyakin_I.jpg'
    },
    {
        id: 3,
        name:'Василь Быков',
        yearsOfLife:'1924 - 2003',
        about:'Васи́ль Влади́мирович Бы́ков — советский и белорусский писатель, общественный деятель, участник Великой Отечественной войны. Член Союза писателей СССР. Герой Социалистического Труда (1984). Народный писатель Беларуси (1980). Лауреат Ленинской премии (1986). Лауреат Государственной премии СССР (1974). Лауреат Государственной премии Белорусской ССР (1978).',
        photo:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Vasil_Bykov_%28cropped%29.jpg'
    },
    {
        id: 4,
        name:'Янка Брыль',
        yearsOfLife:'1917 - 2006',
        about:'Янка Брыль — белорусский советский писатель и переводчик. Народный писатель Белорусской ССР (1981). Лауреат Сталинской премии третьей степени (1952). Лауреат Государственной премии Белорусской ССР имени Якуба Коласа (1982).',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/%D0%91%D1%80%D1%8B%D0%BB%D1%8C_%D0%98%D0%B2%D0%B0%D0%BD_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_1985.jpg/800px-%D0%91%D1%80%D1%8B%D0%BB%D1%8C_%D0%98%D0%B2%D0%B0%D0%BD_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_1985.jpg'
    },
    {
        id: 5,
        name:'Иван Науменко',
        yearsOfLife:'1925 - 2006',
        about:'Ива́н Я́ковлевич Нау́менко — белорусский советский прозаик и драматург, литературовед. Академик Национальной академии наук Беларуси (1980). Доктор филологических наук (1969), профессор (1971). Заслуженный деятель науки Белорусской ССР (1978). Народный писатель Беларуси (1995). Председатель ВС БССР (1985—1990). Член СП СССР (1957).',
        photo:'https://upload.wikimedia.org/wikipedia/ru/8/84/%D0%9D%D0%B0%D1%83%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE_%D0%98.jpg'
    },
    {
        id: 6,
        name:'Андрей Макаёнок',
        yearsOfLife:'1920 - 1982',
        about:'Андрей Егорович Макаёнок (белор. Андрэй Ягоравіч Макаёнак) — белорусский советский драматург, сценарист. Народный писатель Белорусской ССР (1977). Член ВКП с 1945 года.',
        photo:'https://upload.wikimedia.org/wikipedia/ru/4/45/Makayonak_A_Ya.jpg'
    },
    {
        id: 7,
        name:'Иван Чигринов',
        yearsOfLife:'1934 - 1996',
        about:'Ива́н Гаври́лович Чигри́нов (белор. Іван Гаўрылавіч Чыгрынаў) — народный писатель Белоруссии, публицист, драматург, сценарист. Лауреат Государственной премии БССР (1974). Член СП СССР (1964).',
        photo:'https://upload.wikimedia.org/wikipedia/ru/0/02/Chigrinov.jpg'
    },
    {
        id: 8,
        name:'Светлана Алексиевич',
        yearsOfLife:'1948 - наше время',
        about:'Светла́на Алекса́ндровна Алексие́вич — советская и белорусская писательница, журналистка, сценарист документальных фильмов. Пишет на русском языке. Первый белорусский и шестой русскоязычный лауреат Нобелевской премии по литературе (2015 год).',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/%D0%A1%D0%B2%D1%96%D1%82%D0%BB%D0%B0%D0%BD%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D1%94%D0%B2%D0%B8%D1%87_%28%D0%9A%D0%B8%D1%97%D0%B2%2C_2016%29_08_%28cropped%29.JPG/1024px-%D0%A1%D0%B2%D1%96%D1%82%D0%BB%D0%B0%D0%BD%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D1%94%D0%B2%D0%B8%D1%87_%28%D0%9A%D0%B8%D1%97%D0%B2%2C_2016%29_08_%28cropped%29.JPG'
    },
    {
        id: 9,
        name:'Наталья Батракова',
        yearsOfLife:'1964 - наше время',
        about:'Наталья Николаевна Батракова — русскоязычная писательница из Белоруссии. Одна из лидеров современных прозаиков по количеству проданных книг в Белоруссии, автор популярных романов',
        photo:'https://www.sb.by/upload/resize_cache/slam.image/iblock/d5a/d5a8e5ef430671d5255fd9948a224de2.jpg'
    },
    {
        id: 10,
        name:'Виктор Мартинович',
        yearsOfLife:'1977 - наше время',
        about:'Ви́ктор Вале́рьевич Мартино́вич — белорусский писатель, искусствовед и журналист. С 2002 по 2015 г. заместитель главного редактора информационно-аналитического еженедельника «БелГазета»',
        photo:'https://www.sb.by/upload/resize_cache/slam.image/iblock/d5a/d5a8e5ef430671d5255fd9948a224de2.jpg'
    }
]

export default AuthorsData;