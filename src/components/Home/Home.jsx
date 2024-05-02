import React from "react";
import HomeHeader from "./HomeHeader";
import BlogCard from "../Demo/BlogCard";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <h1 className="mx-0 my-10 text-xl font-bold mb-4">
        Welcome to the Home Page of NanoBlogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <BlogCard
          title="The Art of Minimalism"
          content="In a world filled with clutter, minimalism offers a refreshing approach to living. Discover how to simplify your life and find joy in the essentials."
        />
        <BlogCard
          title="Exploring the Wonders of Nature"
          content="Nature never ceases to amaze us with its beauty and complexity. Join us on a journey through breathtaking landscapes, fascinating wildlife, and the wonders of our planet."
        />
        <BlogCard
          title="Mastering the Art of Cooking"
          content="Cooking is more than just a necessity—it's an art form. Learn the secrets of culinary mastery, from basic techniques to advanced recipes that will impress even the most discerning palate."
        />
        <BlogCard
          title="The Power of Positive Thinking"
          content="Positive thinking can transform your life in profound ways. Discover how to cultivate a positive mindset, overcome challenges, and unlock your full potential."
        />
        <BlogCard
          title="The Science of Sleep"
          content="Sleep is essential for our physical and mental well-being. Delve into the science behind sleep, explore tips for improving your sleep quality, and wake up feeling refreshed every day."
        />
        <BlogCard
          title="Sustainable Living for a Better Future"
          content="Embracing sustainable living is crucial for preserving our planet for future generations. Explore eco-friendly practices, sustainable technologies, and ways to reduce your carbon footprint."
        />
        <BlogCard
          title="Unlocking Creativity: Finding Inspiration Everywhere"
          content="Creativity is all around us, waiting to be discovered. Learn how to tap into your creative potential, find inspiration in the world around you, and unleash your imagination."
        />
        <BlogCard
          title="The Joy of Travel: Exploring New Horizons"
          content="Traveling opens doors to new experiences, cultures, and perspectives. Join us on a journey to some of the most beautiful destinations around the globe and start planning your next adventure."
        />
        <BlogCard
          title="Navigating the World of Finance: Smart Money Management"
          content="In a world filled with clutter, minimalism offers a refreshing approach to living. Discover how to simplify your life and find joy in the essentials."
        />
        <BlogCard
          title="Mindfulness: Cultivating Presence in a Busy World"
          content=" Mindfulness is the practice of being present in the moment, free from distraction and judgment. Discover the benefits of mindfulness meditation, mindful living, and how to incorporate mindfulness into your daily life."
        />
      </div>
    </>
  );
};
export default Home;
