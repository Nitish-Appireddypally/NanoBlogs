import React from "react";
// Import your image

const IntroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discover the Beauty of Nature
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Immerse yourself in the wonders of the natural world with our
            breathtaking photo.
          </p>
          <div className="mx-auto max-w-lg">
            <img src="" alt="Nature" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
