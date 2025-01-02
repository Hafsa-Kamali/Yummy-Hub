"use client";
import React from "react";
import { CommentSection } from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { title } from "process";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const posts = [
  {
    id: "1",
    title: "Decadent Delight: Chocolate Peanut Butter Cake Recipe",
    description: `
  Satisfy your sweet tooth with this moist Chocolate Peanut Butter Cake!
  The fusion of Lotte Choco Pie in every bite will make this creamy and rich Peanut Butter Cake irresistible. 
  Try out this delicious Chocolate Peanut Butter Cake for any occasion and let us know your feedback in comments below.
  Ingredients:
  Ingredients for Sponge:
  Eggs 4
  Icing sugar 1/2 cup
  All-purpose flour 1 cup
  Cocoa powder 1/2 cup
  Baking powder 1 tsp
  Oil 1 tbsp
  Vanilla essence 1 tsp
  Whipping cream 2 cups
  Peanut butter 2 cups
  Ingredients for Assembling:
  Prepared sponge
  Milk as required
  Peanut butter frosting as required
  Lotte-Choco Pie (crushed) as required
  Peanuts as required
  DIRECTIONS:
  If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.

  1 . Add eggs and icing sugar and beat until pale yellow texture has formed. Now add flour, cocoa powder, baking powder, oil, vanilla essence and mix it well until no lumps remain.

  2 . Transfer the prepared batter to a greased cake pan lined with butter paper. Bake it in a preheated oven at 180 C for 15 minutes. Take it out of the oven and let it cool at room temperature. Your Sponge is ready.

  3 . In a bowl add whipping cream and beat until fluffy and stiff peaks form.

  4 . Add peanut and beat it again. Your Peanut Butter Frosting is ready.

  5 . Remove the uneven top from the sponge. Prepare 3-4 sponges.

  6 . Take one sponge disc and brush milk on it to make it moist. Spread peanut butter frosting and crushed Lotte Choco Pie. Repeat this step.

  7 . Again place a sponge disc on top, brush milk on it and spread peanut butter frosting on top and sides of the cake evenly.

  8 . Decorate the cake with Lotte Choco Pie, Peanut Butter Frosting and peanuts. Your Chocolate Peanut Butter Cake is ready. Serve and enjoy.`,
    image: "/assets/peanut butter cake.jpg",
  },

  {
    id: "2",
    title: "Irresistible Chocolate Tres Leches Cake",
    description: `Bringing you one of the most demanded and loved Three Milk Cake. Make your gatherings and occasions even more festive with this moist and chocolaty cake. Try out this Chocolate Three Milk Cake at home and let us know how it turned out. 
 Ingredients
Ingredients for Sponge:
Eggs 4
Powdered Sugar 120 g
All-purpose flour 1 cup
Vanilla essence 1 tsp
Baking powder 1 tsp
Oil 1/4 cup
Ingredients for Chocolate Ganache:
Dark chocolate 1 cup
Cream 1/2 cup
Whipping cream 1 cup
Chocolate ganache 1/2 cup
Ingredients for Milk Syrup:
Nurpur Milk 3 cups
Condensed milk 1 cup
Evaporated milk 1 cup
Cream 1/2 cup
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add eggs and sugar and beat well until foamy.


2 . Now add vanilla essence, baking powder and blend it well. Now add the flour gradually and fold with spatula. Add oil and fold it well.


3 . Transfer the batter in a greased cake pan and bake in a preheated pan at 180 C for 20-25 mins.


4 . Your sponge is ready. Take out of the oven and let it cool at room temperature.


5 . In a pan add chocolate and cream. Cook over low flame until chocolate melts. Set aside.


6 . In a bowl add whipping cream and whip until fluffy and stiff peaks form. Now add Chocolate frosting and fold it with the help of spatula. Set aside.


7 . In a jar add jug add milk, condensed milk, evaporated and cream. Mix it well. your Milk Syrup is ready.


8 . Turn the sponge upside down and prick it with fork all over.


9 . Pour the prepared milk syrup over it and refrigerate for 15 mins.


10 . Now add a layer of chocolate frosting over it and Chocolate Ganache. Your 3 milk cake is ready.`,
    image: "/assets/slide2.jpg",
  },
  {
    id: "3",
    title: "Decadent Chocolate Mocha Cake Delight",
    description: `Presenting you White Chocolate Mocha Cake, an ultimate treat and delightful recipe to celebrate this new year. The creamy and spongy texture of this delicious cake will melt in your mouth like anything. Make this joyous occasion memorable with this creamy treat. Try out this White Chocolate Mocha Cake today and let us know your feedback.
 Ingredients
Ingredients for Egg Yolk Mixture:
Egg yolks 5
Sugar 6 tbsp
Coffee 1 tbsp
Vanilla essence 1 tsp
Ingredients for Egg White Mixture:
Egg whites 5
Sugar 6 tbsp
Ingredients for Sponge:
All-purpose flour 1 ½ cup
Baking powder 1 ½ tsp
Egg white mixture
Ingredients for Coffee Mixture:
Coffee 2 tbsp
Milk 2 tbsp
Ingredients for Frosting:
Whipping cream 3 cups
White chocolate 1/2 cup
Prepared coffee mixture 2 tbsp
Ingredients for Mocha Filling:
Prepared Frosting (half)
Cocoa powder 1/2 cup
Walnuts (chopped) 1/2 cup
Ingredients for Coffee Syrup:
Leftover coffee mixture 2 tbsp
Milk 1 cup
Icing sugar 1/2 cup
Ingredients for Assembling:
Prepared sponge
Coffee syrup
Prepared frosting
Mocha filling
Walnut (chopped) 1/2 cup
Coffee beans (for decoration)
Chocolate shavings (for decoration)
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add egg yolks, sugar, coffee, vanilla essence and beat until fluffy and pale in color. Set aside.


2 . In a bowl add egg whites, sugar and beat until fluffy and soft peaks form. Set aside.


3 . In the egg white mixture, add flour, baking powder, egg yolk mixture and mix it well.


4 . Transfer the mixture to a greased cake mold lined with butter paper. Bake it in a preheated oven at 160°C for 20-25 mins. Take it out of the oven. Let it cool at room temperature and remove from the cake mold. Set aside.


5 . In a bowl add coffee, milk and mix it well. Your Coffee Mixture is ready.


6 . In a bowl add whipping cream, melted white chocolate and whip until fluffy and stiff peaks form. Add coffee mixture and mix it again. Your Frosting is ready. Divide it into 2 parts and set aside.


7 . In a bowl add half of prepared frosting, cocoa powder, walnuts and mix well. Your Mocha Filling is ready.


8 . In a bowl add leftover coffee mixture, milk, icing sugar and mix well. Your coffee syrup is ready.


9 . Take the prepared sponge and remove the rough top. Now cut the sponge into 2 discs. You should have 4 sponge discs in total. Now place a sponge disc on cake board, brush coffee syrup over it and spread mocha filling.


10 . Place another sponge disc, brush coffee syrup, spread mocha filling, walnuts. Place a sponge disc over them. Brush coffee syrup and spread mocha filling. Lastly add another sponge disc, brush coffee syrup and do icing with prepared frosting all over the cake.


11 . Decorate it with remaining frosting, coffee beans, chocolate shavings and serve. Your White Chocolate Mocha Cake is ready. Serve and enjoy.`,
    image: "/assets/slide3.jpg",
  },
  {
    id: "4",
    title: "Decadent cheese Cake Recipe",
    description: `End your week with this creamy Cheesecake recipe. A quick dessert with simple ingredients to satisfy your sweet tooth. Try this Cheesecake recipe with crunchy crust and creamy topping and share your feedback with us.
            Ingredients:
Bisconni Chocolatto as required
1/4 cup Butter
1/4 cup Brown Sugar
1/4 cup Bisconni chocolatto (crushed)
2 cups Heavy cream
1 cup Cream cheese
2/3 cup Powdered sugar
1/2 tsp Vanilla essence
1 tbsp Gelatin
1 tbsp Lemon juice
DIRECTIONS:
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a chopper add Bisconni chocolatto, butter and brown sugar. Chop until well combined.


2 . Take small circle molds and pat the crust in them evenly. Let it set.


3 . Beat heavy cream until medium peaks form. Set aside.


4 . In a separate bowl add cream cheese, sugar, salt, vanilla essence, lemon juice and beat until smooth for about 3 to 4 minutes.


5 . Add cream cheese mixture, gelatin to heavy cream and beat until well combined. Gently fold crushed Bisconni chocolatto in it and your filling is ready.


6 . Fill crust molds with a scoop of filling and refrigerate for at least 6 hours to set or overnight for best results.


7 . Garnish with whipping cream and Bisconni chocolatto cookie on top.


8 . Your Chocolatto no bake cheesecakes are ready to serve.`,
    image: "/assets/slide4.jpg",
  },
  {
    id: "5",
    title: "Heavenly Dream Cake Delight",
    description: `Learn how to make the perfect Dream Cake with our easy-to-follow recipe. A must-try for all cake lovers. Try out this Dream Cake at home and share your feedback.
 Ingredients
Ingredients for Base
Egg 1
Sugar 115 g
Vanilla essence 1 tsp
Oil 82 g
Nestlé MilkPak Full Cream Milk 55 g
Nestlé MilkPak Yogurt 30 g
All-purpose flour 110 g
Cocoa powder 20 g
Baking soda 5 g
Baking powder 5 g
Coffee mixture (hot water 65 g + coffee powder 5 g)
Ingredients for Chocolate Ganache
Nestlé MilkPak Dairy Cream 1 pack
Dark chocolate 200 g
Ingredients for Chocolate Frosting
Nestlé MilkPak Whipping Cream 1 pack
Chocolate ganache 1/4 cup
Ingredients for Assembling
Prepared cake base
Sugar syrup as required
Chocolate ganache as required
Chocolate frosting as required
Whipped cream as required
Melted chocolate as required
Cocoa powder as required
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add egg, sugar, vanilla essence and whisk it well. Now add oil, Nestlé MilkPak Full Cream Milk, Nestlé MilkPak Yogurt and mix it again.


2 . Add flour, cocoa powder, baking soda, baking powder and mix it well.


3 . In a separated bowl add hot water and coffee powder. Mix it well. Add this coffee mixture into batter and mix the batter again.


4 . Transfer this batter into a greased cake pan and bake it in a preheated oven at 170 degrees for 25-30 mins.


5 . Take it out of the oven. Remove the uneven top. Cut the cake into 2 discs. Take 2 dream cake molds and add a layer of these cake discs in them each. Set aside.


6 . In a bowl add Nestlé MilkPak Dairy Cream, dark chocolate and microwave it for a minute. Mix it well until chocolate melts. Set aside.


7 . In a bowl add NESTLÉ MILKPAK Dairy Whipping Cream and beat until fluffy and stiff peaks form. Note: Chill the cream overnight in the fridge and whip it with an electric beater. Note: Do not put in freezer to chill, cream won’t whip once it gets gold temperature shock.


8 . Reserve half of the whipped cream for later use. Now add chocolate ganache into the leftover whipped cream. Beat it well and your chocolate frosting is ready.


9 . Now take the dream cake molds with cake base in them. Drizzle sugar syrup on them and then add layers off chocolate frosting/whipped cream, chocolate ganache, melted chocolate and store it at a cool place until the chocolate thickens.


10 . Lastly sprinkle cocoa powder on top and serve. Your Dream Cake is ready.`,
    image: "/assets/slide5.jpg",
  },
  {
    id: "6",
    title: "Delightful Coffee Cream Cake Recipe",
    description: `Indulge in pure bliss with our heavenly coffee cake creations – a symphony of flavors that effortlessly melt in your mouth. Savor the moment and elevate your taste experience to new heights
 Ingredients
Ingredients for Coffee Mixture
Warm water 1/2 cup
Coffee powder 1 tbsp
Ingredients for Egg Yolk Mixture
Egg yolks 4
Icing sugar 1/2 cup
Oil 1/3 cup
Vanilla essence 1 tsp
Prepared coffee mixture 1/2 cup
All-purpose flour 150 g
Baking powder 1 tsp
Ingredients for Egg White Mixture
Egg whites 4
Icing sugar 1/4 cup + 1/4 cup
Egg white mixture
Egg yolk mixture
Ingredients for Creamy Milk Mixture
NESTLÉ MILKPAK Full Cream Milk 2 cups
Coffee powder 1 tbsp
NESTLÉ MILKPAK Dairy Cream 1/2 cup
Condensed milk 1/2 cup
Ingredients for Coffee Frosting
NESTLÉ MILKPAK Dairy Whipping Cream 1 cup
Coffee powder 1 tbsp
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a glass jar add warm water and coffee powder. Mix it well. Set aside.


2 . In a bowl add egg yolks, icing sugar and beat it well. And oil, vanilla essence, coffee mixture and beat it again.


3 . Now add all-purpose flour, baking powder in a sieve and filter it to the prepared batter. Use cut and fold technique with the spatula to mix it well.


4 . In a bowl add egg whites, 1/4 cup of icing sugar and beat it well until it becomes foamy.


5 . Now add another 1/4 cup of icing sugar and beat it again. Set aside.


6 . Add egg white mixture gradually to the egg yolk mixture and mix it well using cut and fold technique with the spatula. Once fully mixed, add this batter to the baking dish.


7 . Bake it in a preheated oven at 160 degrees for 10-15 mins. Take it out of the oven and let it cool at room temperature.


8 . In a bowl add NESTLÉ MILKPAK Full Cream Milk, Coffee powder, NESTLÉ MILKPAK Dairy Cream, Condensed milk and mix it well. Set aside.


9 . Now take the prepared cake and prick holes in it with the help of stick.


10 . Pour the prepared creamy milk mixture onto the cake. Refrigerate it for 2-3 hours.


11 . In a bowl add NESTLÉ MILKPAK Dairy Whipping Cream and beat until fluffy and stiff peaks form. Note: Chill the cream overnight in the fridge and whip it with an electric beater. Note: Do not put in freezer to chill, cream won’t whip once it gets gold temperature shock.


12 . Now add coffee powder to the whipped cream and beat it again.


13 . Spread the prepared coffee frosting on the cake and cut it into pastry slices.


14 . Garnish it with coffee powder and serve it with Creamy Milk Mixture. Your Coffee Cake is ready.`,
    image: "/assets/slide 6.jpg",
  },
  {
    id: "7",
    title: "Elegant Pink Crepe Cake Recipe",
    description: `Jam-E-Shirin Crepe Cake recipe is a must try if you want to treat yourself with something nutritious and yummy at the same time, this would enlighten you with the perfect balance flavours of Jam-E-Shirin and definitely perfect for all the people who have sweet tooth.
Try this recipe now and do tag us! 
 Ingredients
Ingredients for Pink Crepes:
All-purpose flour 1 cup
Melted butter 1/4 cup
Vanilla essence 1 tsp
Beaten eggs 2
Sugar 1 ½ tbsp
Whipping cream 2 cups
Jam-e-Shirin 4 tbsp
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add flour, butter, vanilla essence, beaten eggs, sugar, milk, water, Jam-e-Shirin and mix it well. Note: Prepare 14-16 crepes from this batter. Prepare batter as per your requirement.


2 . Take 1/4 cup of prepared batter and pour it on a preheated pan. Cook each side for 1-2 mins over low flame. Prepare the crepes from the remaining mixture the same way. Set aside the pink crepes.


3 . In a bowl add whipping cream and beat until fluffy and stiff peaks form. Divide the cream into 2 parts. Add Jam-e-Shirin to the lesser part of the cream. Set aside.


4 . Now place a prepared crepe on cake board, spread whipped cream over it. place another crepe over it and spread cream on it. Assemble all the prepared crepes this way.


5 . Now spread the whipped cream all over the assembled cake evenly. Decorate the cake with pink whipped cream.


6 . Your Crepe Cake is ready.`,
    image: "/assets/slide7.jpg",
  },
  {
    id: "8",
    title: "Delightful Strawberry Cheesecake Recipe",
    description: `Rich yet lighter than most cheesecakes, this No-Bake Strawberry Cheesecake is outrageously good. You won't be able to get enough of this thick and smooth cheesecake topped with thick strawberry topping. Give this scrumptious Strawberry Cheesecake a try and let us know how it turned out.

 Ingredients
Ingredients for Crust:
Digestive biscuits 2 cups
Nestle MilkPak Unsalted Dairy Butter (melted) 1 cup
Ingredients for Cream Cheese Mixture:
Nestle MilkPak Whipping Cream 2 cups
Cream cheese 2 cups
Icing sugar 1 cup
Gelatin mixture (gelatin 1 ½ tbsp. + hot water 2 tbsp)
Ingredients for Strawberry Topping:
Strawberries (sliced) 2 cups
Sugar 1 cup
Slurry (corn flour 1 ½ tbsp + water 2 tbsp)
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a grinder add digestive biscuits and grind them. Add butter and grind again until fully mixed.


2 . Add this mixture to a cake mold. Spread it evenly at the base and refrigerate for 10-15 mins.


3 . In a bowl add Nestle Whipping Cream and beat until fluffy and stiff peaks form. Reserve 1/2 cup of whipped cream for topping. Note: Chill the cream overnight in the fridge and whip it with an electric beater.


4 . In the remaining whipped cream add cream cheese, icing sugar and beat it again. Add gelatin mixture and fold with a spatula.


5 . Add this mixture to the prepared crust in the cake mold and spread evenly. Refrigerate for 6-8 hours or overnight.


6 . In a pan heat sugar and strawberries. Cook until the sugar melts and the strawberries get soft.


7 . Add slurry and cook for a minute. Let it cool at room temperature.


8 . In a bowl add the prepared cheesecake and top it with strawberry topping. Decorate with chopped strawberries and serve.`,
    image: "/assets/slide8(2).jpg",
  },
  {
    id: "9",
    title: "Charming Bento Cake Recipe",
    description: `Bento Cake is a trendy, cute, and mini cake that's perfect for gifting or enjoying as a personal treat. Learn how to make this mini Bento Cake at home with this easy recipe!
 Ingredients
Ingredients for Chocolate Ganache
Dark chocolate 100 g
NESTLÉ MILKPAK Dairy Cream 1/2 pack
Ingredients for Caramel Sauce
Sugar 1/4 cup
NESTLÉ MILKPAK Unsalted Dairy Butter 1 tbsp
NESTLÉ MILKPAK Dairy Cream 1/2 pack
Ingredients for Sponge
Eggs 5
Sugar 150 g
Vanilla essence 1 tsp
All-purpose flour 130 g
Cocoa powder 20 g
Ingredients for Whipped Cream:
NESTLÉ MILKPAK Whipping Cream 2 cups
Yellow food color 1 drop
Ingredients for Chocolate Frosting
Whipped cream 1 cup
Chocolate ganache
Ingredients for Bento Cake
Prepared sponges
Sugar syrup as required
Chocolate frosting as required
Prepared yellow whipped cream
Caramel sauce as required
Whipped cream 1 cup + pink food color 2 drops
Whipped cream 1 cup + green food color 2 drops
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add dark chocolate and NESTLÉ MILKPAK Dairy Cream. Microwave it for a minute. Mix it well until the chocolate melts. Set aside.


2 . In a pan heat sugar and cook until it melts. Add butter and mix it well. Add NESTLÉ MILKPAK Dairy Cream and mix it again. Set aside.


3 . In a bowl add eggs, sugar, and vanilla essence and beat it well.


4 . Sieve the flour and cocoa powder into it and mix it well with your hands.


5 . Now transfer the batter into 2 cake pans. Bake in a preheated oven at 160 degrees for 30-35 mins. Set aside.


6 . In a bowl add NESTLÉ MILKPAK Whipping Cream and beat until fluffy and stiff peaks form. Note: Chill the cream overnight in the fridge and whip it with an electric beater. Note: Do not put in the freezer to chill, cream won’t whip once it gets gold temperature shock.


7 . Reserve 1 cup of whipped cream for later use.


8 . Add 1 drop of yellow food color to the leftover whipped cream and mix it well. Set aside.


9 . In a bowl add chocolate ganache and 1 cup of reserved whipped cream. Mix it well. Set aside.


10 . Take the two sponges and cut their uneven top. Cut them into 3 discs.


11 . Now place one disc of each on a cake board. Drizzle sugar syrup on them.


12 . Now spread chocolate frosting on one cake disc


13 . Now add Yellow whipped cream with caramel sauce.


14 . Now add yellow whipped cream and chocolate frosting on other cake.


15 . Now make 3 layers of each cake with the same frostings.


16 . Cover them with chocolate frosting and yellow whipped cream each.


17 . Decorate them with pink whipped cream and green whipped cream.


18 . Your Bento Cakes are ready. Serve and enjoy.`,
    image: "/assets/slide9.jpg",
  },
  {
    id: "10",
    title: "Death by Chocolate Recipe",
    description: `Get ready to indulge in chocolatey goodness with our Death by Chocolate Cake recipe. Satisfy your sweet cravings with the rich and decadent flavors of Death by Chocolate and share your feedback.

 Ingredients
Ingredients for Alaska Sponge
Egg 1
Caster sugar 100 g
Vanilla essence 1 tsp
Oil 80 g / ¼ cup
All-purpose flour 112 g
Cocoa powder 20 g / 1 ¼ tbsp.
Baking soda 2 g / ½ tsp
Baking powder 5 g / 1 tsp
Hot water 66 g
Milk 40 g / 2 ½ tbsp.
NESTLÉ MILKPAK Yogurt 40 g / 2 ½ tbsp.
Ingredients for Chocolate Frosting
NESTLÉ MILKPAK Dairy Cream 1 pack
Dark chocolate 100 g
NESTLÉ MILKPAK Whipping Cream
Ingredients for Assembling
Alaska sponge as required
Chocolate frosting as required
Whipped cream as required
Milk chocolate (chopped) as requireds
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add egg, caster sugar and whisk it well. Add vanilla essence and oil. Mix it well again.


2 . Add flour, cocoa powder, baking soda, baking powder and whisk it well until no lumps remain.


3 . Add hot water and mix it well. Now add milk, NESTLÉ MILKPAK Yogurt and mix it well again.


4 . Transfer this batter to a greased baking pan lined with butter paper.


5 . Bake it in a preheated oven at 160 degrees for 30-40 mins. Take it out of the oven, let it cool at room temperature and remove the sponge from the pan.


6 . In a bowl add NESTLÉ MILKPAK Dairy Cream and microwave for 2-3 mins. Add dark chocolate and mix it well and chocolate melts. Set aside.


7 . In a bowl add NESTLÉ MILKPAK Dairy Whipping Cream and beat until fluffy and stiff peaks form. Note: Chill the cream overnight in the fridge and whip it with an electric beater. Note: Do not put in freezer to chill, cream won’t whip once it gets gold temperature shock.


8 . Add this whipped cream to the chocolate ganache gradually and fold it well with the spatula. Set aside.


9 . Take the Alaska Sponge, remove the uneven top and cut it into 2 discs. Cut these discs into cubes.


10 . In a dessert glass add layers of sponge cubes, chocolate frosting, whipped cream and lastly garnish it with milk chocolate.


11 . Your Death by Chocolate dessert is ready. Serve and enjoy.`,
    image: "/assets/slide10.png",
  },
  {
    id: "11",
    title: "Tres-Leche Cake Recipe",
    description: `Creamy and delicious Tres Leches Cake is a Turkish treat packed with milky goodness of Nurpur Full Cream Milk. Topped with cinnamon and chocolate shavings, this is a perfect recipe to try this Valentine for your loved ones.  Try out this delightful Tres Leches Cake today and share your feedback with us.
 Ingredients
Ingredients for Sponge:
All-purpose flour 1 cup
Baking powder 1 ½ tsp
Salt 1/4 tsp
Egg yolks 5
Granulated sugar (for egg yolks) 3/4 cup
Vanilla essence 1 tsp
Nurpur Full Cream Milk 1/2 cup
Egg whites 5
Granulated sugar (for egg whites) 1/4 cup
Butter (for greasing) a srequired
Ingredients for 3-Milk Syrup:
Nurpur Full Cream Milk 1 ½ cup
Condensed milk 1 cup
Evaporated milk 1 cup
Whipping cream 1 ½ cup
Ingredients for Assembling:
Sponge
3-milk syrup as required
Melted chocolate as required
Cinnamon powder as required
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl add flour, baking powder and salt. Mix them well. set aside.


2 . Separated egg whites and egg yolks in 2 separate bowls. Add sugar into egg yolks and beat for 2 minutes or until pale yellow in color. Add milk and vanilla essence and beat again. Set aside.


3 . Beat egg whites for 1 minute or until stiff peaks form. Add sugar and beat again for a minute.


4 . Pour the egg yolk mixture over flour mixture and blend together with spatula. Gently fold in egg white mixture and mix until well combined.


5 . Butter a casserole dish and pour the prepared mixture into it.


6 . Bake in a preheated oven at 175°C for 30-35 minutes.


7 . For 3-milk syrup preparation, in a cup add whipping cream, evaporated milk and condensed milk. Mix them.


8 . Take the sponge out of oven and let it cool at room temperature. Pierce with fork and drizzle 3-milk syrup over it. Let it rest for 30 minutes and set aside.


9 . In a bowl add 2 cups cold whipping cream, 2 tbsp sugar and beat until stiff peaks form. Spread it over prepared sponge, drizzle melted chocolate and add cinnamon powder on top.


10 . Your Tres-Leches Cake is ready to serve.`,
    image: "/assets/slide11.jpg",
  },
  {
    id: "12",
    title: "Lotus Biscoff Cheesecake Recipe",
    description: `This Lotus Cheesecake is as tasty and delicious as it looks. This no bake Lotus Cheesecake is with cream cheese frosting and Lotus Crust makes it super scrumptious and delectable. This trending recipe is perfect to try this New Year and welcome it with sweetness and delight. We wish this year brings you all the happiness and prosperity. Try out this Lotus Cheesecake recipe and make your celebration memorable. Do not forget to share your feedback with us.
 Ingredients
Ingredients for Crust:
Lotus Biscuits 250 g
Butter 1/2 cup
Ingredients for Cream cheese filling:
Cream cheese 1 ½ cup
Icing sugar 1 cup
Salt 1/2 tsp
Whipping cream 2 cups
Lotus spread 1 cup
Ingredients for Assembling:
Lotus spread 1 cup
Lotus Biscuits (crushed) as required
Lotus Biscuits as required
Cream cheese filling as required
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a chopper add Lotus biscuits and grind them well.


2 . Reserve 1/4 cup of crushed biscuits for later use. Add butter in remaining biscuits and grind well.


3 . Take an 8 inch loose bottom cake pan, spread the Biscuit mixture in the pan and spread it equally. Refrigerate it for 30 minutes or until it is stiff. Your Crust is ready.


4 . In a bowl add cream cheese, lotus spread, salt, icing sugar and beat until fully mixed.


5 . In another bowl add whipping cream and beat until soft peaks form.


6 . Now add cream cheese mixture into whipped cream and fold it with spatula. Your cream cheese filling is ready.


7 . Take the cake pan out of refrigerator and add the cream cheese filling. Now freeze it for 6-8 hours.


8 . Microwave lotus spread for 30 seconds and spread it on cake. Let it rest for 15 minutes.


9 . Decorate the sides with crushed lotus biscuits and cream cheese filling. Place Lotus Biscuits on top and your Creamy Lotus Cheesecake is ready. Serve and enjoy.`,
    image: "/assets/slide12.jpg",
  },
  {
    id: "13",
    title: "Fondant Cake recipe",
    description: `This fondant cake is as amazing in taste as pretty it looks. A combo of vanilla sponge cake and classic red cake with cream frosting makes it sooper scrumptious. Finally you can learn how to make fondant from scratch by watching full video. SuperChef wish you all a very happy and blessed year ahead. May this year bring peace and harmony back in our world. Try this fondant cake recipe and it will be the star of all your celebrations and don’t forget to share your feedback with us.
 Ingredients
Egg whites 4
Egg yolk 4
Vanilla essence 1/4 tsp
Oil 1/4 cup
Flour 1 cup (125g)
Baking powder 1 tsp
Baking soda 1/2 tsp
Milk 1/4 cup
Icing sugar 2 cups (250g)
Yellow food color 1/4 tsp
Flour 2 cups (240g)
Coffee powder 1/2 tsp
Eggs 2
Butter 1 cup (227g)
Icing sugar 2 cups (250g)
Vanilla essence 1/4 tsp
Buttermilk 1 cup
White vinegar 1 tbsp
Baking soda 1/2 tsp
Red food color 1 tsp
Butter 500g
Icing sugar 400g
Cream cheese 1 cup
Vanilla essence 1/4 tsp
Milk 1 cup
Vinegar 1 tbsp
Icing sugar 1kg
Corn flour 300g
Liquid glucose 200g
Cold water 1/4 cup
Gelatin 2 tbsp
Vanilla essence 1 tsp
Glycerine 2 tbsp
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . For sponge cake in a bowl egg whites and beat until fluffy. Beat again after adding icing sugar and further add egg yolks, vanilla essence, oil and beat again for 2 minutes. Lastly add flour, baking powder, baking soda, milk and mix until all ingredients are well combined. Pour sponge cake batter in 9-inch baking pan (tap gently to remove air bubbles) and bake in a preheated oven for 25 minutes at 180 degrees. To cool down your cake place it on a cooling rack before frosting.


2 . Prepare buttermilk by mixing vinegar in milk. Leave it for at least 5 minutes or until it becomes thick. Your buttermilk is ready.


3 . For red sponge cake in a bowl add eggs, icing sugar and beat until well combined. Further add butter, vanilla essence and beat again. Now add flour, baking powder, salt, coffee powder, buttermilk and beat again until all ingredients are well combined. In another bowl add baking soda, vinegar and mix. Add this mixture in cake batter and combine everything well. Pour this cake batter in 9-inch pan (tap gently to remove air bubbles) and bake in a preheated oven for 30 to 40 minutes on 180 degrees. To cool down your cake place it on a cooling rack before frosting. Note: To check if your cake is done prick it with a toothpick in center, if it comes out clean mean your cake is done.


4 . Start making your fondant: firstly, on a double boiler add water, gelatin and mix it well. Immediately remove from double boiler when everything is mixed. Don’t over heat it. In the same double boiler add water, liquid glucose and stir until its lukewarm and mixed properly. Take it off.


5 . On your board make a well of icing sugar (make sure your icing sugar is refined) add warm gelatin mixture, warm glucose mixture, vanilla essence, glycerin, corn flour and mix until a dough shape is formed. Start kneading it, this can take much longer than you expect but keep kneading until fondant is soft. Wrap it in a cling, keep in the airtight container so fondant won’t dry. Your fondant is ready. You can keep this fondant for one week in refrigerator in an airtight container. Just microwave it for 30 seconds before using.


6 . For cream frosting in a bowl add butter and whisk it well. Add icing sugar, cream cheese, vanilla essence and mix well.


7 . Start assembling your fondant cake but cutting both vanilla sponge cake and classic red sponge cake into two equal slices.


8 . Take cake add first layer of vanilla sponge cake, drizzle sugar syrup and cover it with butter cream evenly. Now place classic red classic sponge cake and repeat the same layering process two more times. Chill it for one hour.


9 . Take fondant add any gel color of your choice, just add few drops and knead it well in your fondant. Use icing sugar so it doesn’t stick.


10 . Roll out fondant into a sheet and place it on top of your cake. Cut the excess and smooth it out from all the sides and decorate according to your creativity and choice. Use sugar syrup to stick your decor on cake.


11 . Your yummy fondant cake is ready to be the star of your celebrations.`,
    image: "/assets/slide13.jpg",
  },
  {
    id: "14",
    title: "Chocolate Cake Recipe",
    description: `Time to make the most sizzling Chocolate Cake this weekend with Candyland’s Cooking Milk Chocolate. Chocolate fudge layered with delicious chocolate cream and frosting is a complete treat for all chocolate lovers. Try out this mouth-watering and creamy Chocolate Cake and do share your feedback with us.
 Ingredients
Warm milk 1 ½ cup
Lemon juice 1 tbsp
All-purpose flour (sifted) 1 ½ cup
Caster sugar 1 ½ cup
Unsweetened cocoa powder 3/4 cup
Baking soda 1/2 tbsp
Baking powder 3/4 tsp
Salt 3/4 tsp
Eggs 2
Water 1/2 cup
Butter milk 3/4 cup
Oil 1/4 cup
Vanilla extract 1 tsp
Butter (for greasing)
Butter paper as required
Whipping cream (to microwave) 1/2 cup
Milk chocolate (crushed) 150 g
Whipping cream (for whipping) 1 ½ cup
Heavy whipping cream 1 ½ cup
Milk chocolate 350 g
Chocolate Syrup as required
Chocolate Fudge Cake
Chocolate cream mixture
Chocolate frosting
Chocolate shavings (for decoration) as required
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a small bowl, add warm milk and lemon juice. Whisk vigorously for 1 minutes and set aside for 15-20 minutes or until used. Note: Whisk again before using.


2 . In a bowl, add all the dry ingredients flour, caster sugar, cocoa powder, baking soda, baking powder, salt and whisk until well combined.


3 . Now add all the wet ingredients eggs, butter milk, oil, water, vanilla extract and mix well until well incorporated.


4 . Grease a cake mold and place a butter paper in the base. Pour the prepared cake batter.


5 . Now bake it in a pre-heated oven at 120 degrees for 30-35 minutes. Note: prick a toothpick in the center of the cake and check if it comes out clean, your cake is ready or else bake it for another 10-15 minutes. Take it out of the mold and cool it down on a cooling rack at room temperature.


6 . Add whipping cream in a bowl and microwave it for 2 minutes. Add crushed milk chocolate in it and let sit for 2 minutes. Then mix it well, your ganache is ready.


7 . In another bowl, add whipping cream and whip it until soft peaks are formed.


8 . Add your prepared ganache into your whipped cream and whip again until well incorporated. Set aside.


9 . Now microwave heavy whipping cream in a bowl for 2 minutes. Add milk chocolate in it and let sit for 2 minutes. Mix well until well incorporated and refrigerate it for 2 hours.


10 . Take it out of the refrigerator and beat it with electric beater until thick creamy texture is formed. Set aside.


11 . Cut the top of the cake. Then cut from between the cake to form discs. Shower the sponge with sugar syrup.


12 . Spread chocolate cream mixture on top of one cake disc. Place another cake disc on top, pour sugar syrup and spread chocolate cream mixture and then again place another sponge disc on top.


13 . Spread frosting on sides and top of your cake forming nice and neat shape. Decorate it as desired. Your Chocolate Sponge Cake is Ready.`,
    image: "/assets/slide14.jpg",
  },
  {
    id: "15",
    title: "Molten Lava Cake Recipe",
    description: `Molten Lava Cake made from Candyland Compound Cooking Chocolate is very easy to make and truly a treat for all sweet lovers. This mouth-watering cake will melt in your mouth and sooth your sweet tooth. Try this yummilicious Molten Lava Cake Recipe and share your feedback with us.
 Ingredients
Candyland Compound Cooking Chocolate 450 g
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . Measure all ingredients separately. Take Candyland Compound Cooking Chocolate, cut and melt it on boiling water.


2 . Now add, melted butter into chocolate and fold them until fully mixed.


3 . In another bowl mix flour, icing sugar and cocoa powder together.


4 . Now take another bowl and beat eggs in it.


5 . Add all dry ingredients and vanilla essence in egg mixture. Beat until smooth in texture.


6 . Now, Grease ramekins with butter, dust with flour and cocoa powder and chill for 5 mins.


7 . Pour the batter in ramekins and bake for 10-13 mins at 200°C.


8 . Sprinkle icing sugar on top and serve with berries. Your molten lava cake is ready.`,
    image: "/assets/slide15.jpg",
  },
  {
    id: "16",
    title: "Wafer Cake Recipe",
    description: `Is there anything more satisfying than Wafer layering with Chocolate Mousse? Try out this incredibly sweet and chocolaty dessert Wafer Cake and have a better day.

         Ingredients
         1 cup Chocolate chip
         1 cup Cream
         1 cup Milk
         1 & 1/2 tbsp Gelatin
         2 cups Milk
         3 tbsp Cornstarch
         1/3 cup Sugar
         2 Eggs (lightly beaten)
         2 Eggs (lightly beaten)
         1 tsp Vanilla essence
         Novita chocolate wafer as required
         Caramel sauce for topping
         Peanuts for garnish
         DIRECTIONS
         If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.
         
         
         
         1 . In a bowl, add chocolate chip and melt it.Now, add milk, gelatin and mix it well.
         
         
         2 . In a bowl, add whipped cream, chocolate milk mixture and mix it well.
         
         
         3 . In a pan add milk, sugar, cornstarch and whisk well on medium low flame. Whisk continuously to avoid lumps, cook until thicken.
         
         
         4 . Remove from heat, add 2 tbsp of mixture in beaten eggs and mix it well. Now add egg mixture in pan and again cook on low flame for 3 to 4 minutes while whisking it. Remove from heat now add vanilla in it and again whisk it until well combined. Let it cool on room temperature.
         
         
         5 . In a dish layer Novita chocolate wafer and pour chocolate mousse on top, let it set for 30 minutes in refrigerator.
         
         
         6 . Layer Novita chocolate wafer and now pour vanilla custard on top, let it set again for 30 minutes in refrigerator.
         
         
         7 . Again, add a final layer of Novita chocolate wafer and let it set again for 10 to 20 minutes in refrigerator before serving.
         
         
         8 . Top it with wafers, caramel sauce and serve chilled.`,
    image: "/assets/slide16.jpg",
  },
  {
    id: "17",
    title: "Tiramisu Cake Recipe",
    description: `Indulge in the timeless elegance of our Tiramisu Cake, where rich layers of coffee-soaked sponge cake meet creamy mascarpone goodness. Perfectly balanced and irresistibly delicious, this dessert is a sophisticated treat for any occasion! 🍰☕️
          Ingredients for Tiramisu Cake:
2 Eggs
300 gm Puck Cheese
15-20 gm Gelatin
Whipped cream 180 gm
1 cup Icing Sugar
2 TBSP Coffee
½ cup sugar
½ cup water
Instructions for Tiramisu Cake:
In a bowl, add egg white, egg yolk, and beat it with the beater
Now add icing sugar (1/2 cup) and mix it
Now add egg yolk in a bowl, add icing sugar ½ cup and mix it well
Now add puck cheese in a bowl, add melted gelatin in this bowl, add egg white which we have prepared in the first step, mix it well
Now add Whipped cream, egg yolk and mix it well
Now add water, sugar, coffee powder in a bowl, mix it, coffee syrup is ready
Now take molding dish, place the simple tasteless cookies at this dish, add the above prepared mixture, and then dip the cookies in the coffee syrup, and keep this mixture in the freezer for 2-3 hours
Your yummy Tiramisu cake is ready to serve
Cooking Time: 30 Minutes (Excluding freezing time) serve: 4 people
`,
    image: "/assets/slide17.jpg",
  },
  {
    id: "18",
    title: "Black Forest Cake",
    description: `Black Forest Cake If you happen to be a dessert devotee or if you are just having a sweet tooth for cakes, then brace yourself or you might drool all over your shirt! The Black Forest Cake recipe by sooperchef is here and it is a loaded, smooth and appetizing cake that you don’t want to miss at any cost. There are numerous other charming cake recipes on the sooperchef menu like the crumbly and crispy cake rusk recipe, the quick and easy fruitcake recipe, the innovative and delightful pineapple upside down cake recipe, the creamy and easy tiramisu cake recipe, delectable mirror glaze cheesecake recipe, the colorful rainbow cake recipe, the chocolaty jubilee mousse cake recipe and at last but not the least the tasty no-bake cheesecake recipe. The black forest cake is known as the black forest gateau in British English and it a sponge cake with a very rich cherry filling. It is based on the German dessert known as the “black forest cherry torte”. Typically, the black forest cake is prepared in several layers of sponge cake sandwiched with whipped cream, chocolate servings, and maraschino cherries. In some European traditions, sour cherries are used as a filing as well as a garnish, and a sour clear spirit made from cherries is also added to the cake
          Ingredients for Black Forest Cake

200 gm Sugar
10 Eggs
½ TSP Vanilla Essence
180 gm Maida
20 gm Cocoa Powder
350 gm Whipped cream
½ cup Sugar Syrup
Fruit Cocktail (As Needed)
½ Cup Condensed Milk
Instructions for Black Forest Cake
First of all, beat the Sugar & Eggs in a beater until it produced foams
Then, Add Vanilla Essence, Maida, Cocoa Powder & Mix them well
Take a Mould, Apply Oil, and then apply butter paper. Then Oven bake it for 20-25 Minutes at 180-200
Now let it cool, & cut it into two layers
Next, put the Whipped Cream in a beater and whipped it well
After it, apply Sugar Syrup at one Sponge. Apply cream and keep the Fruit cocktail at this sponge. Complete the coating process with the help of cream by putting another sponge at this
Your Yummy Black forest Cake is ready to serve
cooking Time : 40 Minutes Serve: 3-4


`,
    image: "/assets/slide18.jpg",
  },
  {
    id: "19",
    title: "Jubilee Mousse Cake Recipe",
    description: `If you are a dessert lover or if you have a sweet tooth for chocolate, then brace yourself or you might drool all over yourself. The Jubilee Mousse Cake recipe is a rich, creamy and toothsome dessert recipe that you don’t want to miss at any cost. There are many other delightful desserts on the Sooperchef menu like mango firni, sheer Khurma, Lab-e-Sheerin, gajar ka halwa, shahi tukra, sooji ka halwa, russian salad, coconut halwa and cheese cake but nothing can beat the ultimate creamy taste of the Jubilee Mousse Cake recipe. Mousse is s French word which describes a food which is soft and incorporates air bubbles to give it a fluffy, light and airy texture. Depending on the preparation technique, the mousse can be light and fluffy or thick and rich with heavy cream. A mousse can be sweet or salty. The savory, salty mousse is prepared from meat, cheese, fish or vegetables for main course meals whereas dessert mousses are typically prepared with whipped cream or whipped egg whites, and flavored with coffee, cream, chocolate or fruits etc.
          Ingredients

- 200g Whipped Cream

- 200g Chocolate Chip

- 200ml Milk

- 1-1/2 tbsp Gelatin

- 150g Biscuits

- 100g Butter

- 6 Mitchell’s Jubliee Chocolate

- Mitchell’s Happy Hearts for topping

- Caramel Syrup for topping

- Chocolate Syrup for topping

Method

1- In a zipped bag, add biscuits and crush it well.

2- In a bowl, add crushed biscuit, melted butter and mix it well.

3- In a cake frame, add biscuit and butter mixture and press it slightly.

4- Now keep in the refrigerator for 30 minutes.

5- In a bowl, add chocolate chip and melt it.

6- Now, add milk, gelatin and mix it well.

7- In a bowl, add whipped cream, chocolate and milk mixture and mix it well.

8- Now, cut the Mitchell’s Jubliee Chocolate into small pieces and add in the mixture.

9- Now, add this mixture in the cake frame and refrigerate for 2-3 hours.

10- Now, use Mittchell’s Jubliee Chocolate, Mitchell’s Happy Hearts, Chocolate Syrup, Caramel Syrup as a topping.

Your Yummy jubilee mousse cake now ready to serve.

`,
    image: "/assets/slide19.jpg",
  },
  {
    id: "20",
    title: "Red Velvet Cake Recipe",
    description: `Red velvet cake is much more than vanilla cake tinted red. This recipe produces the best red velvet cake with superior buttery, vanilla, and cocoa flavors, as well as a delicious tang from buttermilk. My trick is to whip the egg whites, which guarantees a smooth velvet crumb.

Ingredients

3 cups (360g) cake flour (spooned & leveled)
1 teaspoon baking soda
2 Tablespoons (10g) unsweetened natural cocoa powder
1/2 teaspoon salt
1/2 cup (8 Tbsp; 113g) unsalted butter, softened to room temperature
2 cups (400g) granulated sugar
1 cup (240ml) canola or vegetable oil
4 large eggs, room temperature and separated
1 Tablespoon pure vanilla extract
1 teaspoon distilled white vinegar
liquid or gel red food coloring

1 cup (240ml) buttermilk, at room temperature
Cream Cheese Frosting

16 ounces (452g) full-fat brick cream cheese, softened to room temperature
3/4 cup (12 Tbsp; 170g) unsalted butter, softened to room temperature
5 cups (600g) confectioners’ sugar
1 and 1/2 teaspoons pure vanilla extract
pinch of salt, to taste
Cook Mode Prevent your screen from going dark
Instructions

Preheat oven to 350°F (177°C). Grease two 9-inch cake pans, line with parchment paper rounds, then grease the parchment paper. Parchment paper helps the cakes seamlessly release from the pans. (If it’s helpful, see this parchment paper rounds for cakes video & post.)
Make the cake: Whisk the flour, baking soda, cocoa powder, and salt together in a large bowl. Set aside.
Using a handheld or stand mixer fitted with a paddle attachment, beat the butter and sugar together on medium-high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed. Add the oil, egg yolks, vanilla extract, and vinegar and beat on high for 2 minutes. (Set the egg whites aside.) Scrape down the sides and up the bottom of the bowl with a silicone spatula as needed.
With the mixer on low speed, add the dry ingredients in 2-3 additions alternating with the buttermilk. Beat in your desired amount of food coloring just until combined. I use 1-2 teaspoons gel food coloring. Vigorously whisk or beat the 4 egg whites on high speed until fluffy peaks form as pictured above, about 3 minutes. Gently fold into cake batter. The batter will be silky and slightly thick.
Divide batter between cake pans. Bake for 30-32 minutes or until the tops of the cakes spring back when gently touched and a toothpick inserted in the center comes out clean. If the cakes need a little longer as determined by wet crumbs on the toothpick, bake for longer. However, careful not to overbake as the cakes may dry out. Remove cakes from the oven and cool completely in the pans set on a wire rack. The cakes must be completely cool before frosting and assembling.
Make the frosting: In a large bowl using a handheld or stand mixer fitted with a whisk or paddle attachment, beat the cream cheese and butter together on medium-high speed until smooth, about 2 minutes. Add the confectioners’ sugar, vanilla extract, and a pinch of salt. Beat on low speed for 30 seconds, then increase to high speed and beat for 3 minutes until completely combined and creamy. Add more confectioners’ sugar if frosting is too thin or an extra pinch of salt if frosting is too sweet. Frosting should be soft, but not runny.
Assemble and frost: Using a large serrated knife, slice a thin layer off the tops of the cakes to create a flat surface. Discard or crumble over finished cake. Place 1 cake layer on your cake stand or serving plate. Evenly cover the top with frosting. Top with 2nd layer and spread remaining frosting all over the top and sides. I always use an icing spatula and bench scraper for the frosting. I used Wilton piping tip #12 for decoration around the top.
Refrigerate cake for at least 30-60 minutes before slicing. This helps the cake hold its shape when cutting.
Cover leftover cake tightly and store in the refrigerator for 5 days. Frosted cake or unfrosted cake layers can be frozen up to 2-3 months. Thaw overnight in the refrigerator and bring to room temperature before decorating/serving.`,
    image: "/assets/slide21(r).PNG",
  },
  {
    id: "21",
    title: "Chicken Sandwich Cake Recipe",
    description: `Chicken Sandwich Cake with a very unique notion and delectable taste, learn step by step and make this easy Chicken Sandwich Cake recipe for an appealing Eid Menu. Don't forget to share your thoughts with us.
          Ingredients
Ingredients of vegetable filling:
1 cup Cabbage (thinly sliced)
1 cup Carrot (thinly sliced)
1 cup Peas (boiled and coarsely mashed)
1 cup Bell pepper (chopped)
Salt to taste
1/2 tsp White pepper
1/4 tsp Black pepper
2 tbsp Chili sauce
1 cup Mayonnaise
Ingredients of Potato are filling:
1 & 1/2 cup Chicken (boiled & shredded)
1 & 1/2 cup Potatoes (boiled & mashed)
Salt to taste
1/4 tsp Black pepper
1/2 tsp White pepper
1 cup Mayonnaise
2 tbsp Chili sauce
Ingredients of eggs filling:
4-6 Eggs (boiled & mashed)
3-4 Green chilies (finely chopped)
Salt to taste
1/4 tsp Black pepper
1/2 tsp White pepper
1 cup Mayonnaise
Ingredients of assembling:
16 Bread slices
1 cup Cream cheese
1/2 cup Cream
1/2 cup Mayonnaise
Cucumber for garnish
Cherry tomatoes for garnish
Salad leaves for garnish
DIRECTIONS
If you are looking for some delicious recipes which are easy to make then look no further. SuperChef gives you a variety of recipes with easy step by step procedures which makes it easy to follow. Tried and tested recipes which every foodie will love to try.



1 . In a bowl, add cabbage, carrots, peas, bell pepper, salt, white pepper, black pepper, chili sauce and mayonnaise. Mix all the ingredients well and set aside.


2 . In a bowl, add chicken, potatoes, salt, black pepper, white pepper, mayonnaise and chili sauce. Mix all the ingredients well and set aside.


3 . In a bowl, add eggs, green chilies, salt, black pepper, white pepper and mayonnaise. Mix all the ingredients well and set aside.


4 . In a bowl and mix cream cheese, cream and mayonnaise well.


5 . Take bread slices and cut edges. Take a square cake cupboard, place four slices of bread and spread chicken filling on it evenly. Cover it with four slices of bread and spread vegetable filling on top.


6 . Cover it with four slices of bread and spread egg filling on top. Cover it with four bread slices and spread cream cheese mixture on it evenly on all sides. Garnish it with cucumber, salad leaves and cherry tomatoes.


7 . Your Sandwich Cake is ready to serve.`,
    image: "/assets/slide20.jpg",
  },
];

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); // Unwrap the params
  
    const post = posts.find((post) => post.id === id);
 if (!post) {
    return (
     <h2 className="text-4xl font-bold text-center mt-10">Post not found</h2>
 );
}

const renderParagraphs =(description: string) => {
  return description.split('\n').map((paragraph, index) => (
      <p key={index} className="mt-4 text-justify">
        {paragraph.trim()}</p> // Remove leading/trailing whitespace</p>
  ));
};
return (
  <>
    <Navbar/>
<div className="py-8 bg-gradient-to-b from-[#3B1C32] to-[#1A1A1D] font-family">

   <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 mb-[2rem] text-[#FAB12F]">
    {post.title}
    </h1>

    {post.image && (
    <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={500}
        className="h-[50%] w-[50%] rounded-md mt-4 mx-auto"
    />
    )}
    <div className="mt-10 text-white text-lg ml-6 mr-4">
    {renderParagraphs(post.description)}
    </div>
   <CommentSection postId={post.id}/>
    <div className="mt-10">
    <AuthorCard />
    </div>
   
</div>
</>
)
}