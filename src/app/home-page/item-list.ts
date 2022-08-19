import { DataBase, DataBaseInt  } from "../data-base";

export class ItemList {

    public id!: number | string | undefined;
    public ctl!: string | undefined;
    public date!: string | undefined;
    public header!: string | undefined;
    public details!: string | undefined;
    public link!: string | undefined;
    public src: string | undefined;
    public data?: DataBaseInt | undefined;
    
    private static database: DataBaseInt[] = new DataBase().dataBase;

    constructor(id?: number | string, src?: string, ctl?: string, date?: string,
        header?: string, details?: string, link?: string, data?: DataBaseInt)
    {
        this.id = id;
        this.ctl = ctl;
        this.date = date;
        this.header = header;
        this.details = details;
        this.link = link;
        this.src = src
        this.data = data;
    }
    
    private static ITEMLIST: ItemList[] = [
        new ItemList(1, 'https://g-tech.sirv.com/repasto/postn12.jpg?profile=repasto', 'Nutrition', 'September 11, 2018', 'Oranges: Benefits and Nutrition',
            'Oranges are one of the most popular fruits. They grow on orange trees and belong to a group of citrus fruits.',
            'CONTINUE READING', this.database[1]),
        
        new ItemList(2, 'https://g-tech.sirv.com/repasto/post-de1-550x825.jpg?profile=repasto', 'Dessert', 'January 22, 2022', 'Lemon Blueberry Layer Cake',
            'I absolutely love this lemon blueberry cake because the blueberries DO NOT sink to the bottom of the cake. Why not? Because the batter is so thick and creamy.',
            'CONTINUE READING', this.database[2]),
        
        new ItemList(3, 'https://g-tech.sirv.com/repasto/postn44-550x734.jpg?profile=repasto', 'Main meal', 'April 13, 2019', 'Cooking Light: Healthy Chicken Recipes',
            'Love fried chicken, but hate feeling guilty after eating it? Well, put an end to that and try our healthy recipe for fried chicken.', 'CONTINUE READING',
        this.database[3]),
        
        new ItemList(4, 'https://g-tech.sirv.com/repasto/postn38-550x825.jpg?profile=repasto', 'Nutrition', 'March 14, 2019', 'Why Is Breakfast So Important?', 'Breakfast is the first meal of the day, and many believe that it is the most essential.',
            'CONTINUE READING', this.database[4]),

        new ItemList(5, 'https://g-tech.sirv.com/repasto/cala-150730.jpg?profile=repasto', 'Nutrition', 'March 12, 2019', 'Pumpkin Soup', 'Need some sweet goodness to get over a persistent cold? Try pumpkin soup!', 'CONTINUE READING', this.database[5]),
            
        new ItemList(6, 'https://g-tech.sirv.com/repasto/postn20-550x825.jpg?profile=repasto', 'Spotlight', 'March 11, 2019', 'An Interview with Alina Zee, Private Chef for the Celebrities',
            'You might remember Alina Zee from the Man vs. Child cooking show. You might remember her as a guest in the Hallmark series Home & family and the v Alina Zee cooks.', 'CONTINUE READING', this.database[6]),
            
        new ItemList(7, 'https://g-tech.sirv.com/repasto/postn36-550x825.jpg?profile=repasto', 'Dessert', 'March 11, 2019', 'Savory Muffins', 'Looking for a snack that’s savory, fluffy and delicious? You are in the right place.', 'CONTINUE READING', this.database[7]),
        
        new ItemList(8, '', 'Snack', 'March 8, 2019', 'Granola Bar: The How And Why', 'A granola bar is a breakfast food and snack food that consists of oats, nuts, honey, or other sweeteners such as brown sugar.',
            'CONTINUE READING', this.database[8]),
        
        new ItemList(9, 'https://g-tech.sirv.com/repasto/postn35-550x789.jpg?profile=repasto', 'Featured, Nutrition', 'March 6, 2019', 'Essentials for Quick Salads for Dinner',
            'There’s no shame in admitting that, once in a while, when you get home, you feel exhausted. At that moment, the last thing you want to do is spend another two hours of your day making dinner.',
            'CONTINUE READING', this.database[9]),
        
        new ItemList(10, 'https://g-tech.sirv.com/repasto/postn34-550x824.jpg?profile=repasto', 'Cocktails', 'February 11, 2019', 'Blueberry Ginger Mojito Pitchers', 'When the heat structs and you need a quick cool-down this drink will be your go to!',
            'CONTINUE READING', this.database[10]),
        
        new ItemList(11, 'https://g-tech.sirv.com/repasto/postn7-550x735.jpg?profile=repasto', 'Featured', 'January 14, 2019', "Guook Review: Foodwise by Georgina Berti", 'If you have been reading my blog for a while, you know that I like to write cookbook reviews from time to time.',
            'CONTINUE READING', this.database[11]),
    ];
    private static RECIPES: ItemList[] = [
        new ItemList(2, 'https://g-tech.sirv.com/repasto/post-de1-550x825.jpg?profile=repasto', 'Dessert', 'January 22, 2022', 'Lemon Blueberry Layer Cake', '', ''),
        new ItemList(7, 'https://g-tech.sirv.com/repasto/postn36-550x825.jpg?profile=repasto', 'Dessert', 'March 11, 2019', 'Savory Muffins', '', ''),
        new ItemList(12, 'https://g-tech.sirv.com/repasto/postn3-550x735.jpg?profile=repasto', 'Dessert', 'September 22, 2017', 'Homemade Ice-Cream Recipes', '', '', this.database[12]),
        new ItemList(13, 'https://g-tech.sirv.com/repasto/postn37-550x825.jpg?profile=repasto', 'Dessert', 'September 5, 2017', 'Easy Macaron Recipe: Perfect Every Time', '', '', this.database[13]),
        new ItemList(14, 'https://g-tech.sirv.com/repasto/postn29-550x827.jpg?profile=repasto', 'Dessert,', 'SnackMay 11, 2017', 'Vanilla Muffins You Have to Make', '', '', this.database[14]),
        new ItemList(15, 'https://g-tech.sirv.com/repasto/post16.6.jpg?profile=repasto', 'Dessert', 'January 21, 2017', 'Apple Pie', '', '', this.database[15])
    ];

    // private carousel = {
    //     data1: new ItemList('', '../../assets/images/postn41.jpg', 'Hidden Gems', 'May 1, 2016', 'Restaurants Find: Pearl Oyster Bar, NYC', 'S Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', ''),
    //     data2: new ItemList('', '../../assets/images/Post3.jpg', 'Hidden Gems', 'March 31, 2016', 'Barrafina Is Bustling with Customers and Here’s Why', 'Here are the tried-and-true marketing tactics you can use to attract customers. Get ahead of your competitors by building a consistent promotion plan.', ''),
    //     data3: new ItemList('', '../../assets/images/postn43.jpg', 'Hidden Gems', 'January 13, 2016', 'The Pavilion House in South of France', `In architecture a`, 'has several meanings. Often, its function makes it an object of pleasure.',)
    // };

    private carousel = {
        data1: {
            src: 'https://g-tech.sirv.com/repasto/postn41.jpg?profile=repasto', header: 'Restaurants Find: Pearl Oyster Bar, NYC', ctl: 'Hidden Gems', date: 'May 1, 2016', details: 'S Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        data2: {
            src: 'https://g-tech.sirv.com/repasto/Post3.jpg?profile=repasto', header: 'Barrafina Is Bustling with Customers and Here’s Why', ctl: 'Hidden Gems', date: 'March 31, 2016', details: 'Here are the tried-and-true marketing tactics you can use to attract customers. Get ahead of your competitors by building a consistent promotion plan.',
        },
        data3: {
            src: 'https://g-tech.sirv.com/repasto/postn43.jpg?profile=repasto', header: 'The Pavilion House in South of France', ctl: 'Hidden Gems', date: 'January 13, 2016', details: `In architecture a`, details2: 'has several meanings. Often, its function makes it an object of pleasure.',
        }
    };

    private about = [
        {
            ctlAbout: 'ABOUT', details: 'Repasto is a place for everyone passionate about cooking. This blog is built for foodies that want to pass their love for food onto the next generations.'
        },
        {
            ctl: 'CATEGORIES', ctlList: ['Cocktails', 'Dessert', 'Featured', 'Hidden', 'Gems', 'Main', 'meal', 'Nutrition', 'Snack', 'Spotlight'],
        },
        {
            src: 'https://g-tech.sirv.com/repasto/book2.jpg',
        },
        {
            ctlFollow: 'FOLLOW', ctlFollowList: ['Facebook', 'Twitter', 'Google', 'Instagram', 'Pinterest']
        }
    ]


    public get itemList(): ItemList[] {
        return ItemList.ITEMLIST;
    }


    public get aboutList(): any {
        return this.about;
    }

    public get carouselList(): object {
        return this.carousel;
    }

    public get recipesList(): ItemList[] {
        return ItemList.RECIPES;
    }
}