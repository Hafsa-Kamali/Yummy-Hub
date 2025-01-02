import React from "react";
import BlogCard from "./BlogCard";
export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Decadent Delight: Chocolate Peanut Butter Cake Recipe",
      description:
        "Dive into the ultimate dessert experience with this decadent Chocolate Peanut Butter Cake. Perfectly balancing rich chocolate layers with creamy peanut butter frosting, this cake is a true indulgence for any occasion. 🍰",
      date: "2023-08-15",
      imageUrl: "/assets/peanut butter cake.jpg",
     
    },

    {
      id: "2",
      title: "Irresistible Chocolate Tres Leches Cake",
      description:
        "Indulge in the ultimate chocolate tres leches cake, a heavenly fusion of moist chocolate cake soaked in a luscious tres leches sauce. This dessert is a true treat for chocolate lovers, offering a perfect balance of rich chocolate flavor and creamy, indulgent texture. 🍰",
      date: "2023-08-15",
      imageUrl: "/assets/slide2.jpg",
     
    },
    {
      id: "3",
      title: "Decadent Chocolate Mocha Cake Delight",
      description:
        "Indulge in the heavenly blend of rich chocolate and bold espresso with this luscious Chocolate Mocha Cake. Perfect for any coffee and chocolate lover, this cake is an irresistible treat for all occasions! 🍫☕",
      date: "2023-08-15",
      imageUrl: "/assets/slide3.jpg",
     
    },
    {
      id: "4",
      title: "Decadent cheese Cake Recipe",
      description:
        "Savor the rich, creamy delight of our Chocolate Cheesecake that perfectly blends the decadence of chocolate with the smoothness of cheesecake. This dessert is an absolute treat for all chocolate lovers and a showstopper for any occasion! 🍫",
      date: "2023-08-15",
      imageUrl: "/assets/slide4.jpg",
     
    },
    {
      id: "5",
      title: "Heavenly Dream Cake Delight",
      description:
        "Indulge in a symphony of flavors with our Heavenly Dream Cake Recipe. Perfectly crafted to bring joy to every bite, this cake is a dream come true for every dessert lover! 🍰✨I hope this captures the essence of your delicious creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide5.jpg",
     
    },
    {
      id: "6",
      title: "Delightful Coffee Cream Cake Recipe",
      description:
        "Indulge in the perfect blend of rich coffee and creamy frosting with our Delightful Coffee Cream Cake. Perfect for any coffee and chocolate lover, this cake is an irresistible treat for all occasions to awaken your senses &  sweet cravings! ☕🍰",
      date: "2023-08-15",
      imageUrl: "/assets/slide 6.jpg",
     
    },
    {
      id: "7",
      title: "Elegant Pink Crepe Cake Recipe",
      description:
        "Indulge in the delicate charm of our Elegant Pink Crepe Cake Recipe. Perfectly crafted to bring elegance and sophistication to every occasion, this cake is a true work of art! 🍰✨I hope this captures the essence of your delicious creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide7.jpg",
     
    },
    {
      id: "8",
      title: "Delightful Strawberry Cheesecake Recipe",
      description:
        "Indulge in the sweet and tangy delight of our Delightful Strawberry Cheesecake. Perfect for any strawberry lover, this cake is a delightful treat for all occasions! 🍰✨I hope this captures the essence of your delicious creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide8(2).jpg",
     
    },
    {
      id: "9",
      title: "Charming Bento Cake Recipe",
      description:
        "Discover the delightful world of Bento Cakes with this easy and fun recipe. Perfectly portioned and irresistibly cute, these mini cakes are a sweet treat for any occasion! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide9.jpg",
     
    },
    {
      id: "10",
      title: "Death by Chocolate Recipe",
      description:
        "Indulge in the rich, decadent delight of our Death by Chocolate Recipe. Perfect for any chocolate lover, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide10.png",
     
    },
    {
      id: "11",
      title: "Tres-Leche Cake Recipe",
      description:
        "Experience the luscious, milky delight of our Tres Leches Cake, soaked in three kinds of milk and topped with a light, airy frosting. Perfect for any celebration, this irresistible dessert promises a taste of pure indulgence! 🍰🥛",
      date: "2023-08-15",
      imageUrl: "/assets/slide11.jpg",
     
    },
    {
      id: "12",
      title:"Lotus Biscoff Cheesecake Recipe",
      description:"Delight in the creamy richness of our Lotus Biscoff Cheesecake, featuring a buttery Biscoff cookie crust and a velvety cheesecake filling. This decadent dessert is a true crowd-pleaser, perfect for any special occasion or sweet craving! 🍰✨",
      date:"2023-08-15",
      imageUrl:"/assets/slide12.jpg",
     
    },
    {
      id: "13",
      title:"Fondant Cake recipe",
      description:"Discover the art of creating a stunning Fondant Cake with our easy-to-follow recipe. Perfect for any occasion, this cake is a work of art that perfectly captures the essence of your creativity! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date:"2023-08-15",
      imageUrl:"/assets/slide13.jpg",
     
    },
    {
      id: "14",
      title: "Chocolate Cake Recipe",
      description: "Indulge in the rich, decadent delight of our Chocolate Cake Recipe. Perfect for any chocolate lover, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide14.jpg",
     
    },
    {
      id: "15",
      title:"Molten Lava Cake Recipe",
      description:"Experience the gooey, chocolatey delight of our Molten Lava Cake, an indulgent treat for any chocolate lover. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date:"2023-08-15",
      imageUrl:"/assets/slide15.jpg",
     
    },
    {
     id: "16",
     title: "Wafer Cake Recipe",
     description: "Discover the light, airy delight of our Wafer Cake Recipe, featuring a delicate wafer crust and a creamy filling. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
     date: "2023-08-15",
     imageUrl: "/assets/slide16.jpg",
     author:{
      name:"John Doe"}
    },
    {
      id: "17",
      title: "Tiramisu Cake Recipe",
      description:"Indulge in the timeless elegance of our Tiramisu Cake, where rich layers of coffee-soaked sponge cake meet creamy mascarpone goodness. Perfectly balanced and irresistibly delicious, this dessert is a sophisticated treat for any occasion! 🍰☕️",
      date: "2023-08-15",
      imageUrl:"/assets/slide17.jpg",
     
    },
    {
      id: "18",
      title: "Black Forest Cake",
      description: "Experience the rich, decadent delight of our Black Forest Cake, featuring layers of dark chocolate and fresh berries. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide18.jpg",
     
    },
    {
      id: "19",
      title:"Jubilee Mousse Cake Recipe",
      description:"Celebrate with our Jubilee Mousse Cake, a light and airy delight featuring a delicate wafer crust and a creamy filling. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date:"2023-08-15",
      imageUrl:"/assets/slide19.jpg",
     

    },
    {
      id: "20",
      title:"Red Velvet Cake Recipe",
      description: "Indulge in the rich, decadent delight of our Red Velvet Cake, a decadent treat for any occasion. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide21(r).PNG",
     

    },
    {
      id: "21",
      title: "Chicken Sandwich Cake Recipe",
      description: "Experience the delightful combination of our Chicken Sandwich Cake, featuring a moist and flavorful cake with a juicy chicken filling. Perfect for any celebration, this cake is a heavenly treat for all occasions! 🍰✨I hope this captures the essence of your delightful creation! 😊",
      date: "2023-08-15",
      imageUrl: "/assets/slide20.jpg",
     
    },
  ];
  return (
    <div className="py-8 bg-gradient-to-b from-[#3B1C32] to-[#1A1A1D] font-family">
      <h1 className="text-2xl md:text-4xl text-center md:w-[65%] w-full  mx-auto font-bold text-[#FAB12F] my-8">
        &quot;Deliciously crafted recipes to elevate your culinary adventures
        and tantalize your taste buds!&quot; 🍴😊
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-8 space-y-4">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
