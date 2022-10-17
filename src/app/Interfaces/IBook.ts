import { Byte } from "@angular/compiler/src/util";

export interface IBook {
    id: number,
    title: string,
    author: string,
    price: string,
    category: string,
    publisher: string,
    publishDate: string,
    picByte: Byte[],
    status: string,
    bookStatus: string
}

const books: IBook[] = [{
    id: 1,
    title: "spiderman",
    author: "tim",
    price: "$200",
    category: "comic",
    publisher: "cook",
    publishDate: "15-10-2022",
    picByte: [2, 3, 4, 5],
    status: "exists",
    bookStatus: "subscribed"
}]