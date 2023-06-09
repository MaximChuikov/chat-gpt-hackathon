import Meme from "./Meme";

export default interface MainUser {
    name : string
    description : string
    memes : Array<Meme>
    urls : Array<string>
    avatar : string
}

export let mainUser : MainUser = {
    name : "Надежда",
    description : "Позвольте представить вам моего клиента - молодую, " +
        "энергичную и очень амбициозную девушку. Она обладает неповторимой " +
        "личностью и выдающимися качествами, которые производят на окружающих " +
        "сильное впечатление. Богатый опыт и знания в разных областях, таких как" +
        " финансы, маркетинг и бизнес-стратегии делают ее не только уникальной личностью," +
        " но и востребованным специалистом в своей области. Ее уверенность и внимание к деталям" +
        " не оставляют равнодушными клиентов и партнеров. Но удивительно, что за молоденькой девушкой" +
        " скрывается еще и настоящая героиня, которая держит в страхе 4 людоящеров. Ее отвага, смелость и " +
        "уверенность в своей силе позволяют ей справляться с самыми сложными задачами и достигать грандиозных" +
        " результатов. В общем, если вы ищете человека, который не только впечатляет своей компетенцией, но и вдохновляет" +
        " на подвиги - то, безусловно, вы нашли нужного человека!",
    memes : new Array<Meme>(),
    urls : new Array<string>(),
    avatar : "../../../public/img/nad9.jpg"
}