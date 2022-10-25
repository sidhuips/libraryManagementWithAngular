

export class Book
{
    public id: string = "";
    public bookName: string = "";
    public type: string = "";
    public author: string = "";

    constructor(id: string, bookName: string, type: string, author: string)
    {
        this.id = id;
        this.bookName = bookName;
        this.type = type;
        this.author = author;
    }

    getId()
    {
        return this.id;
    }

    getBookName()
    {
        return this.bookName;
    }

    setBookName(bookName: string): void
    {
        this.bookName = bookName;
    }
    getType()
    {
        return this.type;
    }

    setType(type: string): void
    {
        this.type = type;
    }    
    
    getAuthor()
    {
        return this.author;
    }

    setAuthor(author: string): void
    {
        this.author = author;
    }
    setId(id: string): void
    {
        this.id = id;
    }
}