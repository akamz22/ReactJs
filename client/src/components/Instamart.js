// import React, { useState } from "react";

// const Section = ({ title, description, isVisible, sectionKey, toggleVisibility }) => {
//   return (
//     <div className="w-[540px] border border-black p-4 m-4">
//       <h1 className="font-bold text-xl">{title}</h1>
//       {isVisible ? (
//         <button
//           className="cursor-pointer underline"
//           onClick={() => toggleVisibility(sectionKey)}
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           className="cursor-pointer underline"
//           onClick={() => toggleVisibility(sectionKey)}
//         >
//           Show
//         </button>
//       )}
//       {isVisible && <h2>{description}</h2>}
//     </div>
//   );
// };

// const Instamart = () => {
//   const [visibleSection, setVisibleSection] = useState("about"); // Default section to "about"

//   const toggleVisibility = (sectionKey) => {
//     if (visibleSection === sectionKey) {
//       setVisibleSection(""); // Hide the section if it's currently visible
//     } else {
//       setVisibleSection(sectionKey); // Show the clicked section
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 place-items-center">
//       <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
//       <Section
//         isVisible={visibleSection === "about"}
//         sectionKey="about"
//         toggleVisibility={toggleVisibility}
//         title="Instamart About"
//         description="Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."
//       />
//       <Section
//         isVisible={visibleSection === "team"}
//         sectionKey="team"
//         toggleVisibility={toggleVisibility}
//         title="Instamart Team"
//         description="Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."
//       />
//       {/* Add more sections here */}
//     </div>
//   );
// };

// export default Instamart;
import React, { useState } from "react";

const Section = ({ title, description, isVisible, sectionKey, toggleVisibility }) => {
  return (
    <div className="w-[540px] border border-gray-300 p-4 m-4 rounded-lg shadow-md">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? (
        <button
          className="mt-2 px-4 py-1 text-sm bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600"
          onClick={() => toggleVisibility(sectionKey)}
        >
          Hide
        </button>
      ) : (
        <button
          className="mt-2 px-4 py-1 text-sm bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600"
          onClick={() => toggleVisibility(sectionKey)}
        >
          Show
        </button>
      )}
      {isVisible && (
        <p className="mt-4 text-gray-700">{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about"); // Default section to "about"

  const toggleVisibility = (sectionKey) => {
    if (visibleSection === sectionKey) {
      setVisibleSection(""); // Hide the section if it's currently visible
    } else {
      setVisibleSection(sectionKey); // Show the clicked section
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        isVisible={visibleSection === "about"}
        sectionKey="about"
        toggleVisibility={toggleVisibility}
        title="Instamart About"
        description="Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021. Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am. The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet. The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."
      />
      <Section
        isVisible={visibleSection === "team"}
        sectionKey="team"
        toggleVisibility={toggleVisibility}
        title="Instamart Team"
        description="Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021. Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am. The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet. The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."
      />
      {/* Add more sections here */}
    </div>
  );
};

export default Instamart;
