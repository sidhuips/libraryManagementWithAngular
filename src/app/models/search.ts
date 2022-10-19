export class Search
{
    public searchString: string = "";

    constructor(searchString: string)
    {
        this.searchString = searchString;
    }

    getSearchString()
    {
        return this.searchString;
    }

    setSearchString(searchString: string): void
    {
        this.searchString = searchString;
    }
}