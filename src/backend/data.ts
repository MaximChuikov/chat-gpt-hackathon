import UserController from "./controller/UserController";
import Activity from "./models/Activity";


export let usersMock = [
    {
        id : "1",
        name : "Лена",
        contact : "89999999999",
        mail : "Lena@mail.ru",
        description : "Люблю Гулять по парку",
        url : "./img/славянка1.jpg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "2",
        name : "Полина",
        contact : "89999999999",
        mail : "Polina@mail.ru",
        description : "Люблю Гулять под мостом за руку",
        url : "./img/славянка2.jpeg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "3",
        name : "Алина",
        contact : "89999999999",
        mail : "Alina@mail.ru",
        description : "Люблю Гулять по парку",
        url : "./img/славянка3.jpg",
        gender : true,
        myActivity : new Map()
    },
    {
        id : "4",
        name : "Тимур",
        contact : "89999999999",
        mail : "Timur@mail.ru",
        description : "Не люблю байкал",
        url : "./img/ящер.jpg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "5",
        name : "Лиза",
        contact : "89999999999",
        mail : "Lisa@mail.ru",
        description : "Люблю аниме про любовь",
        url : "./img/славянка4.jpeg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "6",
        name : "Олег",
        contact : "89999999999",
        mail : "Oleg@mail.ru",
        description : "Самый большой модник кампуса!",
        url : "./img/Славян2.png",
        gender : true,
        myActivity : new Map()
    },
    {
        id : "7",
        name : "Слава",
        contact : "89999999999",
        mail : "Slava@mail.ru",
        description : "Тот кто мил и силен!",
        url : "./img/Славян7.jpeg",
        gender : true,
        myActivity : new Map()
    },
]

export const memeMock = [
    {
        id : "0",
        title : "Woman yelling at a cat",
        url : "./img/meme1.jpeg",
    },
    {
    "id": "1",
        "title": "Когда понимаешь, что завтра понедельник",
        "url": "./img/meme2.jpg"
},

 {
    "id": "4",
        "title": "Когда делаешь что-то в последний момент",
        "url": "./img/meme3.jpg"
},
 {
    "id": "5",
        "title": "Когда пытаешься выглядеть профессионально",
        "url": "./img/meme4.jpg"
},
    {
        "id": "6",
        "title": "Distracted boyfriend",
        "url": "./img/meme5.jpg"
    },
    {
        "id": "7",
        "title": "Change My Mind",
        "url": "./img/meme6.jpg"
    },

]


export const activityMock : Array<Activity> = [

        {
            "id": "1",
            "title": "Charity Run for Children",
            "description": "A charity run to raise funds for children in need.",
            "isActive": false,
            url: "./img/1.jpg"
        },
        {
            "id": "2",
            "title": "Yoga in the Park",
            "description": "A relaxing yoga session in the park.",
            "isActive": false,
            url: "./img/2.jpg"
        },
        {
            "id": "3",
            "title": "Art Exhibition Opening",
            "description": "An art exhibition opening featuring works by local artists.",
            "isActive": false,
            url: "./img/3.jpg"
        },
        {
            "id": "4",
            "title": "Music Festival",
            "description": "A music festival featuring local and international artists.",
            "isActive": false,
            url: "./img/4.jpg"
        },
        {
            "id": "5",
            "title": "Cooking Class",
            "description": "A cooking class for beginners.",
            "isActive": false,
            url: "./img/5.jpeg"
        },
        {
            "id": "6",
            "title": "Book Club Meeting",
            "description": "A book club meeting to discuss the latest read.",
            "isActive": false,
            url: "./img/6.jpg"
        },
        {
            "id": "7",
            "title": "Photography Workshop",
            "description": "A photography workshop for beginners.",
            "isActive": false,
            url: "./img/7.jpg"
        },

]
