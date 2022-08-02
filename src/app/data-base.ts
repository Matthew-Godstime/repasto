export interface DataBaseInt {
    firstP?: string;
    header?: string;
    subHeader?: string;
    entries?: Entries[];
    block?: string;
    para?: string;
    entriesb4Ul?: Entries[];
    src?: string;
}
interface Entries {
    dt?: string;
    dd?: string;
    odd?: string;
    ul?: string;
    li?: string[];
    footer?: string;
    link?: string;
}
export class DataBase {
    constructor() { }
    
    private static itemDataBase: DataBaseInt[] = [
        {},
        {
            header: 'Oranges are one of the most popular fruits. They grow on orange trees and belong to a group of citrus fruits.',
            subHeader: 'Today, oranges are grown mostly in warm regions of the world and consumed fresh. Oranges are a good source of fiber, thiamine, folate, and antioxidants, and vitamin C.',
            block: 'Few studies have directly examined the effects of eating oranges on human health. And the results are amazing!',
            para: 'When it comes to strawberry consumption, it can be associated with protective effects against heart disease. It is proven that oranges can prevent anemia and kidney stone formation.',
            entries: [{ link: 'Tags: History,' }, { link: 'Nutrition,' }, { link: 'Snack' }]

        },
        {
            header: 'I absolutely love this lemon blueberry cake because the blueberries DO NOT sink to the bottom of the cake. Why not? Because the batter is so thick and creamy.',
            subHeader: 'If you think about it, when you have a thin batter, heavy fruit or add-ins will sink to the bottom. If you don’t want them to drop, be sure to make a thick, creamy batter. I also recommend tossing the blueberries in a little flour – this step is extra insurance they don’t sink!',
            entries: [{
                ul: 'How to Make Lemon Blueberry Cake',
                li: ['Use fresh lemons and lemon zest in the cake batter. How to choose lemons at the store? Make sure the lemons you choose are pretty heavy for their size – lemons that are heavy are extra juicy.',
                    'Use buttermilk. If you don’t have buttermilk, you can use whole milk instead.',
                    'Use brown sugar & four eggs: I’ve found that lemon cakes can easily be dry and gritty. To avoid this (and make the cake moist, without being wet), add a little bit of brown sugar, and four eggs.',
                    'Use fresh or frozen blueberries: If you don’t have fresh blueberries, use frozen ones instead. If using frozen, do not thaw.']
            }],

        },
        {
            para: 'Love fried chicken, but hate feeling guilty after eating it? Well, put an end to that and try our healthy recipe for fried chicken.',
            entries: [{
                ul: 'Ingredients:', li: ['1/4 cups bagel chips or Melba toast', '1/3 cups rice-corn crispy cereal', '2 teaspoons kosher salt 4. 1/2 teaspoon cayenne pepper',
                    '1/2 cup light mayonnaise', '1 teaspoon Dijon mustard'],
            }],
            entriesb4Ul: [{
                dt: 'Step 1.', dd: 'First, finely grind the bagel chips and cereal together in a food processor. Then, transfer the crumbs to a plastic bag. Add the oil, salt, cayenne,  and toss to mix thoroughly. Once you are done with mixing, whisk the light mayonnaise and Dijon mustard together in a bowl.'
            },
            { dt: 'Step 2.', dd: 'Add the chicken to the mayonnaise mixture. Drop the chicken into the plastic bag, seal, and shake until each piece is evenly coated. Place the pieces on the prepared rack. Spray the chicken pieces evenly with cooking spray.' },
            { dt: 'Step 3.', dd: 'Bake until the coating browns.' }, { link: 'Tags: Featured, Main' }],
            src: '../assets/images/post15.jpg'
        },
        {
            header: 'Breakfast is the first meal of the day, and many believe that it is the most essential.',
            entriesb4Ul: [{ dd: 'With breakfast commonly referred to as “the most important meal of the day”, some researches indicate that having breakfast might lower the risk of metabolic disorders and cardiovascular diseases.' },
            { dd: 'Current professional opinions are in favor of eating breakfast, but some tend to question its “most important” status. Additionally, the influence of breakfast on managing body weight is unclear.' },
            { dd: 'However, no one can argue with the fact that breakfast is indeed a very important meal. A good breakfast fuels you up and gets your body ready for the day.' },
            { dd: '“In general, kids and teens who eat breakfast have more energy, do better in school. Without breakfast, people (especially young ones) can get irritable and tired. So, I would suggest you make time for breakfast — for you and your kids!” – Stephen Dowson, MD' },
            { footer: 'Bonus knowledge: It was not until the 15th century that the word “breakfast” came into use in written English to describe a morning meal, which literally means to break the fasting period of the previous night; in Old English, the term was morgenmete meaning “morning meal.”' },
            { link: 'Tags: Nutrition' }],
            src: '../assets/images/postn28.jpg'
        },
        {
            header: 'Need some sweet goodness to get over a persistent cold? Try pumpkin soup!',
            subHeader: 'Believe it or not, pumpkin soup was a staple meal for the prisoners of war in North Vietnamese prison camps during the Vietnam War. Now, people around the world prepare it in the comforts of their homes, especially when they want to get over a cold. And you can do it, too!',
            entries: [{ ul: 'Ingredients:', li: ['6 cups chicken stock', '1 1/2 teaspoons salt', '4 cups pumpkin puree', '1 teaspoon chopped fresh parsley'] },
            { dt: 'Step 1', dd: 'Heat stock, salt, pumpkin, onion, thyme, and garlic. Bring to a boil, then reduce heat to low, and simmer for about 30 minutes uncovered.' },
            { dt: 'Step 2', dd: 'Make the puree by adding the previously cooked meal in small batches (1 cup at a time) to a food processor or blender.' },
            { dt: 'Step 3', dd: 'Return the puree to the pan, and bring to a boil again. Be sure to reduce heat to low, and simmer for another 30 minutes, uncovered. Once it’s done, pour the soup into soup bowls and garnish with fresh parsley.' },
            { link: 'Tags: Appetizer,' }, { link: 'Soup' }]
        },
        {
            header: 'You might remember Alina Zee from the Man vs. Child cooking show. You might remember her as a guest in the Hallmark series Home & family and the video Alina Zee cooks.',
            subHeader: 'The truth is, Zee is so much more than a (pretty) TV face. She is a talented, quick-witted, Los Angeles-based private chef that has been cooking for celebrities for the past ten years. She has also worked in some of LA’s hottest restaurants, including Beast, Piccolo, and Chique. Nowadays, she is on a path to become an entrepreneur.',
            para: 'It’s time you get to know the real Zee.',
            entries: [{ dt: 'Hi, Alina! It’s been a long time since we sat down and chatted over a cup of coffee. I think I haven’t seen you in two years.', dd: 'Alina: Has it been that long?! Wow! Well, we both have such hectic lives, no wonder it has been two years since our last get-together. But, I swear I saw you in LA about two-three months ago.' },
            { dt: 'Yeah. We bumped into each other at Nobu. But, that doesn’t count, girl.', dd: 'Alina: Yeah, I’m not a fan of the “over-the-table talks” either. (laugh)' }, { dt: 'So, tell me, and the Repasto readers, where can we find you these days and what have you been up to in the past year or two?', dd: 'Alina: You can find me running through LA all day, every day. (laugh) I’m currently working as a sous-chef at Chique, and I still work as a private chef, mostly on the weekends.', odd: 'The last few months were pretty busy, as I’m planning on opening my own restaurant in March. Two, actually, one in downtown LA, and one in Calabasas.' },
            { dt: 'Spending a year just on planning is a lot, and I am sure you used that time wisely. But, I must ask you, has the time you spent working at several restaurants helped you plan the steps and be a bit more prepared to open your own business?', dd: 'Alina: I am not sure that I had a chance to see the business side of running a restaurant.' },
            { dt: '', dd: 'For example, you already know that the first steps I made as a chef were at the Post, where I worked next to the Chef Daniel LeFerre. He gave me a trial period, and I had about a month or two to show him my skills. He “tortured” me by making me work Friday-Saturday shifts. And that is how I learned to do things as fast as possible. I further developed my skills at Beast, a rustic Italian restaurant. There, I learned how to be a butcher and run a kitchen. But, during all that time, I had no access to official restaurant documents, nor did I know how well the restaurant, or in this case, restaurants, were doing, business-wise. I knew we were doing fine 一 the guests always kept coming back, and they loved the menus we came up with. But no one ever said anything about expenses, profits, etc.' },
            { dt: 'I understand exactly how you are feeling 一 opening a restaurant pushes you to think in another direction, and always to have numbers on your mind. And it’s frightening. I assume you had help.', dd: 'Alina: Yes, I have a whole team of financial advisers that have my back. I don’t know what I would do without them! (laugh) I also spoke to a number of chefs that opened their restaurants.', odd: 'Actually, remember when I reached out to you and asked about your food and beverage suppliers? Was it like 7-8 months ago? At that time, I was only thinking about opening a restaurant, and I wanted to check whether I am in over my head or not. (laugh)' },
            { dt: 'Yeah, I do remember. I also remember that you didn’t mention anything about a restaurant opening, but I got pretty suspicious. To me, you’ve always seemed like the girl that will take over LA with her fantastic cooking aesthetic and modernist techniques. Trust me, you have what it takes to open a restaurant.', dd: 'Alina: Aw, thank you. Your support means a lot.' },
            { dt: 'Can we go back to your roots for a moment? How did you make a career out of cooking food? Where did you learn how to think and work like a chef?', dd: '', footer: 'If you want to find out more about Alina and check out the rest of the interview, be sure to visit Alina Zee’s youtube channel.', link: 'Tags: History' }],
            src: '../assets/images/postn16.jpg'
        },
        {
            header: 'Looking for a snack that’s savory, fluffy and delicious? You are in the right place.',
            entries: [{
                ul: 'Ingredients:', li: ['1 1/2 cups self-raising flour', '2 cups grated tasty cheese', '100g mortadella, chopped',
                    '1 zucchini, grated', '1/4 cup thinly sliced chives', '3/4 cup milk', '1 egg', '1/4 cup fruit chutney'],
            }],
            entriesb4Ul: [{ dt: 'Step 1', dd: 'Preheat oven to 200°C. Grease the muffin pan or line bases of holes with baking paper.' },
            { dt: 'Step 2', dd: 'Sift flour into a large bowl. Add mortadella, zucchini, and chives and mix them altogether. Whisk milk, egg, and chutney in a jug until well combined. Pour in milk mixture into the flour mix. Using a large metal spoon, gently mix until combined.' },
            { dt: 'Step 3', dd: 'Spoon the mixture into muffin holes.' }, { dt: 'Step 4', dd: 'Bake for 15 to 20 minutes. Once baked, put the muffins onto a wire rack to cool. Store in an airtight container at room temperature.' },
            { link: 'Tags: Appetizer' }]
        },
        {
            firstP: 'A granola bar is a breakfast food and snack food that consists of oats, nuts, honey, or other sweeteners such as brown sugar.',
            header: 'During the granola baking process, the mixture is constantly stirred to maintain a loose breakfast cereal consistency.',
            para: 'Dried fruit, such as raisins and dates, and chocolate are sometimes added, as well.',
            entriesb4Ul: [{ dd: 'What makes granola so popular is the fact that it is a healthy option for breakfast – it can improve digestion, especially when eaten in combination with yogurt.' },
            { dd: 'As a snack, it is often combined with honey or corn syrup. A bar form that makes it easy to carry for packed lunches.' },
            { footer: 'Fun fact: Granula was invented in Dansville, New York, by Dr. James Caleb Jackson at the Jackson Sanitarium in 1863. It was initially known as Granula, but the name was changed to Granola to avoid legal problems within the company.' },
            { link: 'Tags: Snack' }
            ],
            block: 'A granola bar is often carried by people who enjoy outdoor activities, such as hikers or campers because it is nutritious, high in calories, and easy to store.',
            src: '../assets/images/post20.1.jpg'
        },
        {
            header: 'There’s no shame in admitting that, once in a while, when you get home, you feel exhausted. At that moment, the last thing you want to do is spend another two hours of your day making dinner.',
            para: 'We have all been there, which is why I’m here to give you a solution for dinner that will provide your body with all the nutrients it craves for 一 a quick salad, packed with all the necessary vitamins and minerals. To help you make a vitamin-infused salad in just 15 minutes or so, I decided to write down all the essential ingredients for quick salads for dinner.',
            entries: [{
                ul: 'Here they are:', li: ['Dark green vegetables like spinach, broccoli, kale, lettuce, etc. These vegetables are infused with vitamins A and C, as well as magnesium and potassium. Chop them up and throw them in a bowl, no cooking needed!',
                    'Nuts, 一 walnuts, peanuts, almonds, cashews, etc. These foods are rich in magnesium, vitamin B6, and calcium.',
                    'Quinoa, or other pseudo-cereals like amaranth. Quinoa is a gluten-free, high in protein and one of the few plant foods that contain sufficient amounts of all nine essential amino acids. It is also high in fiber, magnesium, B vitamins, iron, potassium, and various antioxidants.',
                    'Chicken or turkey. If you want to add some meat, I would suggest you opt for chicken or turkey, as this lean meat is infused with vitamin B6 and niacin. Chop up skinless chicken breasts into pieces, put them into the pan, add a bit of olive oil and salt, and the meat is good to go.',
                ]
            }]
        },
        {
            header: 'When the heat structs and you need a quick cool-down this drink will be your go to!',
            subHeader: 'Fresh blueberries are the fruit you should you use when wanting to make impressive cocktails. The berries have such a unique flavor; they will make any cocktail intriguing and delightful. If you’re looking for a fresh taste, blueberry cocktail, this is the recipe for you. Ingredients: ',
            entries: [{
                ul: 'Ingredients:', li: ['1 cup fresh blueberries', '1 lime, cut into wedges', '20 to 24 fresh mint leaves', '4 ounces ginger simple syrup',
                    '5 ounces club soda', '4 ounces vodka'],
            }],
            src: '../assets/images/joanna-kosinska-71802.jpg',
            entriesb4Ul: [{ dt: 'Step 1.', dd: 'Peel and grate the ginger and add it, together with the sugar and cold water, to a saucepan. Bring the ginger and sugar to the boil and stir until the sugar dissolves. Cover and let steep for 15 minutes. Strain and cool in the refrigerator when done.' },
                { dt: 'Step 2.', dd: 'Add the blueberries, lime wedges, and mint leaves to the glass. Muddle with a wooden spoon, so the blueberries are broken. If assembling pitchers, cover them at this stage and leave in the refrigerator until ready to serve.' },
                { dt: 'Step 3.', dd: 'When ready to serve, add the ginger syrup, a bit of vodka, and top off with club soda. Stir quickly and pour into glasses with ice cubes. If you want, you can garnish the cocktail with fresh blueberries and a sprig of mint.' },
                { link: 'Tags: Appetizer, Cocktails, Featured'}]
        },
        {
            header: 'If you have been reading my blog for a while, you know that I like to write cookbook reviews from time to time.',
            subHeader: 'The latest book I read, Foodwise, by Georgina Berti, was so inspiring that I had to share my thoughts.',
            entriesb4Ul: [{ dd: 'The first thing that surprised me about the book is that Berti understands a common man and the struggles one experience when grocery shopping. Now, it might seem strange to you that browsing through aisles can be such a difficult task. But it is. Nowadays, we grab anything that comes in an attractive package and we don’t pay attention to what we put in our shopping carts and bring home.' },
                {
                    dd: 'So, Berti created the title acronym, WISE, which stands for Whole, Informed, Sustainable, and Experienced. The title itself promotes food purchase and consumption that revolves around making the best food decisions possible. What does that mean? Well, before you start adding to the cart anything you can reach for on the aisle, you should investigate foods’ origins, the nutritional benefits, foods’ carbon footprints, and transportation costs.'
                }, {
                    dd: 'When reading this, you might start thinking that you can’t afford to buy all organic, non-GMO foods. But, the author got you covered. Berti suggests and encourages you to make small changes, baby steps, considering what works best in terms of both budgets and WISE values. It also features a range of activities that can lead to a more WISE choice (pun intended), and allows you to choose how far you can go WISE. The author also provided a grocery list, suggestions, and recipes.'
                },
                { dd: 'FoodWISE is not just another cookbook. It’s a guide to self-discovery and responsible and sustainable actions towards your body and the environment.' },
                {
                    footer: 'I am sure you will enjoy reading Berti’s masterpiece. Let me know your thoughts.',
                    link: 'Tags: Drink'
                },
            ],
            src: '../assets/images/postn17.jpg',
            block: 'By writing this guidebook, Berti wanted to help you, a common, busy man, to change a strategy in which you shop. The author wanted to help you avoid aisles that contain processed products.',
        },
        {
            header: 'Cold, creamy ice cream is essential for surviving sweltering days in the South. And you don’t have to visit an ice-cream shop to get your fix.',
            subHeader: 'Break out your ice-cream maker and create easy, homemade ice cream in your favorite flavor. I have dozens of delicious ice-cream recipes to choose from – whether you like chocolate, vanilla, fruity flavors, or all of the above.',
            src: '../assets/images/post26.2.jpg',
            entriesb4Ul: [{
                dt: 'Buttermilk-Plum Ice-Cream', dd: 'The ruby-color buttermilk-plum ice-cream is the cold dessert of your dreams. The ice-cream has a rich base, and peeled, and chopped black plums add in beautiful color and flavor.',
                link: 'Tags: Appetizer, Featured, Snack'}],
        },
        {
            header: 'Beautiful macarons are one of the current ‘sweet’ crazes. They make a wonderful gift or just a delicious snack!',
            subHeader: 'A macaroon is a type of small circular cake, made from ground almonds, coconut, and/or other nuts or even potato. Macarons are often baked on edible rice paper placed on a baking tray.',
            entries: [{ ul: 'Ingredients:', li: ['3 egg whites', '1/4 cup white sugar', '1 2/3 cups confectioners’ sugar', '1 cup finely ground almonds'] }],
            src: '../assets/images/joanna-kosinska-288950.jpg',
            entriesb4Ul: [{ dt: 'Step 1.', dd: 'Beat egg whites in the bowl until whites are foamy. Then, beat in white sugar and continue beating until egg whites are glossy and fluffy. Sift sugar and ground almonds in a separate bowl and quickly fold the almond mixture into the egg whites.' },
                {
                    dt: 'Step 2. ', dd: 'Pipe the batter onto the baking sheet in rounds, leaving space between the disks. Let the piped cookies stand out at room temperature until they form a hard skin on top, about 1 hour. Bake cookies until set but not browned, about 10 minutes, and be sure to let cookies cool completely before filling.',
                    link: 'Tags: Dessert, Snack'}]
        },
        {
            header: 'Like vanilla and muffins? It’s time you make my famous, fluffy Vanilla muffins.',
            subHeader: 'These easy and tasty vanilla muffins contain a simple combination of butter, eggs, and sugar, along with a vanilla extract. If you want to add a stronger, decadent vanilla flavor, you can use a teaspoon of vanilla bean paste.',
            entries: [{
                ul: 'Ingredients:', li: ['2 eggs', '2 cups of all-purpose/plain flour', '1/2 teaspoon salt', '1 cup milk', '4 teaspoons baking powder',
                    '2 tablespoons cooking oil', '2 tablespoons sugar', 'Butter (for greasing)']
            }],
            entriesb4Ul: [{ dt: 'Step 1.', dd: 'Preheat oven to 400. Beat the eggs. Add oil, vanilla extract (as much as you like), and milk. Mix the ingredients.' },
                {
                    dt: 'Step 2.', dd: 'Mix dry ingredients together, add to the wet mix. Grease muffin tin, and fill cups 3/4 full. Bake the muffins for about 12-15 minutes, or until you notice that the crust is starting to look golden brown.',
                    link: 'Tags: Dessert'}]
        },
        {
            header: 'An apple pie is a popular fruit pie, in which the principal filling ingredient is apple.',
            subHeader: 'What makes the apple pie so popular is its pastry, which is generously used top-and-bottom, making it a double-crust pie (except for the deep-dish apple pie, that has a top crust only). On occasion, an apple pie is served with whipped cream or ice cream on top.',
            para: 'Apple pie was brought to the colonies by the British during the 17th and 18th centuries.',
            firstP: 'Nowadays, American recipes for apple pie usually indicate there is an apple filling spiced with cinnamon, nutmeg, and preferably lemon juice.',
            src: '../assets/images/post16.1.jpg',


        }

    ]


    public get dataBase(): DataBaseInt[] {
        return DataBase.itemDataBase;
    }

}
