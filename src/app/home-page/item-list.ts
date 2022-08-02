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
        new ItemList(1, '../../assets/images/postn12.jpg', 'Nutrition', 'September 11, 2018', 'Oranges: Benefits and Nutrition',
            'Oranges are one of the most popular fruits. They grow on orange trees and belong to a group of citrus fruits.',
            'CONTINUE READING', this.database[1]),
        
        new ItemList(2, '../../assets/images/post-de1-550x825.jpg', 'Dessert', 'January 22, 2022', 'Lemon Blueberry Layer Cake',
            'I absolutely love this lemon blueberry cake because the blueberries DO NOT sink to the bottom of the cake. Why not? Because the batter is so thick and creamy.',
            'CONTINUE READING', this.database[2]),
        
        new ItemList(3, '../../assets/images/postn44-550x734.jpg', 'Main meal', 'April 13, 2019', 'Cooking Light: Healthy Chicken Recipes',
            'Love fried chicken, but hate feeling guilty after eating it? Well, put an end to that and try our healthy recipe for fried chicken.', 'CONTINUE READING',
        this.database[3]),
        
        new ItemList(4, '../../assets/images/postn38-550x825.jpg', 'Nutrition', 'March 14, 2019', 'Why Is Breakfast So Important?', 'Breakfast is the first meal of the day, and many believe that it is the most essential.',
            'CONTINUE READING', this.database[4]),

        new ItemList(5, '../../assets/images/cala-150730.jpg', 'Nutrition', 'March 12, 2019', 'Pumpkin Soup', 'Need some sweet goodness to get over a persistent cold? Try pumpkin soup!', 'CONTINUE READING', this.database[5]),
            
        new ItemList(6, '../../assets/images/postn20-550x825.jpg', 'Spotlight', 'March 11, 2019', 'An Interview with Alina Zee, Private Chef for the Celebrities',
            'You might remember Alina Zee from the Man vs. Child cooking show. You might remember her as a guest in the Hallmark series Home & family and the v Alina Zee cooks.', 'CONTINUE READING', this.database[6]),
            
        new ItemList(7, '../../assets/images/postn36-550x825.jpg', 'Dessert', 'March 11, 2019', 'Savory Muffins', 'Looking for a snack that’s savory, fluffy and delicious? You are in the right place.', 'CONTINUE READING', this.database[7]),
        
        new ItemList(8, '', 'Snack', 'March 8, 2019', 'Granola Bar: The How And Why', 'A granola bar is a breakfast food and snack food that consists of oats, nuts, honey, or other sweeteners such as brown sugar.',
            'CONTINUE READING', this.database[8]),
        
        new ItemList(9, '../../assets/images/postn35-550x789.jpg', 'Featured, Nutrition', 'March 6, 2019', 'Essentials for Quick Salads for Dinner',
            'There’s no shame in admitting that, once in a while, when you get home, you feel exhausted. At that moment, the last thing you want to do is spend another two hours of your day making dinner.',
            'CONTINUE READING', this.database[9]),
        
        new ItemList(10, '../../assets/images/postn34-550x824.jpg', 'Cocktails', 'February 11, 2019', 'Blueberry Ginger Mojito Pitchers', 'When the heat structs and you need a quick cool-down this drink will be your go to!',
            'CONTINUE READING', this.database[10]),
        
        new ItemList(11, '../../assets/images/postn7-550x735.jpg', 'Featured', 'January 14, 2019', "Guook Review: Foodwise by Georgina Berti", 'If you have been reading my blog for a while, you know that I like to write cookbook reviews from time to time.',
            'CONTINUE READING', this.database[11]),
        // new ItemList(12, '../../assets/images/postn3-550x735.jpg', 'Dessert', 'September 22, 2017', 'Homemade Ice-Cream Recipes', '', '', this.database[12]),

        
        
    ];
    private static RECIPES: ItemList[] = [
        new ItemList(2, '../../assets/images/post-de1-550x825.jpg', 'Dessert', 'January 22, 2022', 'Lemon Blueberry Layer Cake', '', ''),
        new ItemList(7, '../../assets/images/postn36-550x825.jpg', 'Dessert', 'March 11, 2019', 'Savory Muffins', '', ''),
        new ItemList(12, '../../assets/images/postn3-550x735.jpg', 'Dessert', 'September 22, 2017', 'Homemade Ice-Cream Recipes', '', '', this.database[12]),
        new ItemList(13, '../../assets/images/postn37-550x825.jpg', 'Dessert', 'September 5, 2017', 'Easy Macaron Recipe: Perfect Every Time', '', '', this.database[13]),
        new ItemList(14, '../../assets/images/postn29-550x827.jpg', 'Dessert,', 'SnackMay 11, 2017', 'Vanilla Muffins You Have to Make', '', '', this.database[14]),
        new ItemList(15, '../../assets/images/post16.6.jpg', 'Dessert', 'January 21, 2017', 'Apple Pie', '', '', this.database[15])
    ];

    // private carousel = {
    //     data1: new ItemList('', '../../assets/images/postn41.jpg', 'Hidden Gems', 'May 1, 2016', 'Restaurants Find: Pearl Oyster Bar, NYC', 'S Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', ''),
    //     data2: new ItemList('', '../../assets/images/Post3.jpg', 'Hidden Gems', 'March 31, 2016', 'Barrafina Is Bustling with Customers and Here’s Why', 'Here are the tried-and-true marketing tactics you can use to attract customers. Get ahead of your competitors by building a consistent promotion plan.', ''),
    //     data3: new ItemList('', '../../assets/images/postn43.jpg', 'Hidden Gems', 'January 13, 2016', 'The Pavilion House in South of France', `In architecture a`, 'has several meanings. Often, its function makes it an object of pleasure.',)
    // };

    private carousel = {
        data1: {
            src: '../../assets/images/postn41.jpg', header: 'Restaurants Find: Pearl Oyster Bar, NYC', ctl: 'Hidden Gems', date: 'May 1, 2016', details: 'S Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        data2: {
            src: '../../assets/images/Post3.jpg', header: 'Barrafina Is Bustling with Customers and Here’s Why', ctl: 'Hidden Gems', date: 'March 31, 2016', details: 'Here are the tried-and-true marketing tactics you can use to attract customers. Get ahead of your competitors by building a consistent promotion plan.',
        },
        data3: {
            src: '../../assets/images/postn43.jpg', header: 'The Pavilion House in South of France', ctl: 'Hidden Gems', date: 'January 13, 2016', details: `In architecture a`, details2: 'has several meanings. Often, its function makes it an object of pleasure.',
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
             src: '../../assets/images/book2.jpg',
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