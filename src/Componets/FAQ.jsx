import React from "react";

const FAQ = () => {
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <h3 className="text-4xl font-bold p-5 text-center mb-4">Frequently Asked Questions (FAQ)</h3>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        How can I start learning a new language?
        </div>
        <div className="collapse-content">
          <p>To begin, simply log in or register on the platform. Once logged in, head over to the "Start Learning" page, where you'll find lessons organized into easy-to-follow sections. Click on any lesson to explore vocabulary and practice.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is this app free to use?
        </div>
        <div className="collapse-content">
          <p>Yes! Our app is free to use. You can access vocabulary lessons, tutorials, and additional resources without any cost.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I use the app on my mobile device?
        </div>
        <div className="collapse-content">
          <p>Absolutely! Our website is fully responsive, meaning it works seamlessly on desktops, tablets, and mobile devices.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
