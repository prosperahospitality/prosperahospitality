import React from 'react';
import Link from "next/link";

const plans = [
  {
    name: 'Silver Plan',
    services: [
      {
        category: 'Hotel Revenue Management',
        items: [
          'OTA Optimization',
          'OTA Ranking Improvement',
          'OTA Management',
          'Inventory Management',
          'Managing Rate Disparity',
        ],
      },
      {
        category: 'Hotel Social Media Marketing',
        items: ['Social media marketing', 'Hotel Graphics'],
      },
      {
        category: 'Hotel Reputation Management',
        items: [
          'Manage Review Site (Trip Advisor, Google Review, OTA Review)',
          'Reply to guest reviews.',
        ],
      },
    ],
  },
  {
    name: 'Gold Plan',
    services: [
      {
        category: 'Hotel Revenue Management',
        items: [
          'Hotel Pricing',
          'Managing Rate Disparity',
          'Demand and supply pricing',
          'Market Segment Pricing',
          'Dynamic Pricing',
          'OTA Optimization',
          'OTA Ranking Improvement',
          'OTA Management',
          'Inventory Management',
        ],
      },
      {
        category: 'Hotel Digital Marketing',
        items: [
          'SEO friendly website',
          'Website SEO',
          'Social media marketing',
          'Hotel Brand building and Awareness',
          'Hotel Content Marketing',
          'Retargeting Marketing',
          'Hotel Photoshoot',
          'Hotel Graphics',
          'Lead generation',
        ],
      },
      {
        category: 'Hotel Reputation Management',
        items: [
          'Manage Review Site (Trip Advisor, Google Review, OTA Review)',
          'Reply to guest reviews.',
        ],
      },
    ],
  },

  {
    name: 'Platinum Plan',
    services: [
      {
        category: 'Hotel Revenue Management',
        items: [
          'Hotel Pricing',
          'Managing Rate Disparity',
          'Demand and supply pricing',
          'Market Segment Pricing',
          'Dynamic Pricing',
          'OTA Optimization',
          'OTA Ranking Improvement',
          'OTA Management',
          'Inventory Management',
        ],
      },
      {
        category: 'Hotel Digital Marketing',
        items: [
          'SEO friendly website',
          'Website SEO',
          'Social media marketing',
          "Social media paid marketing",
          "Hotel Google Ads",
          'Hotel Brand building and Awareness',
          'Hotel Content Marketing',
          'Retargeting Marketing',
          'Hotel Photoshoot',
          'Hotel Graphics',
          'Lead generation',
        ],
      },
      {
        category: 'Hotel Reputation Management',
        items: [
          'Manage Review Site (Trip Advisor, Google Review, OTA Review)',
          'Reply to guest reviews.',
        ],
      },
      {
        category: 'B2B Marketing',
        items: [
          'Connecting to Travel agent',
          'Generating bookings from B2b POS',
        ],
      },
      {
        category: 'Hotel Reservation Calls',
        items: [
          'Handing hotel calls for reservation in professional manner',
          'Tracking the old leads and follow up with guest for higher conversion',
        ],
      },
    ],
  },
];

const Prices = () => {
  return (
    <section className="w-[90%] lg:w-[80%] m-auto py-10">
      <h1 className="text-4xl font-extralight text-center text-[#006FEE]">
        Our Pricing
      </h1>
      <div className="my-10 grid gap-6 lg:flex w-full mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full h-full border border-blue-500 rounded-xl p-4 hover:text-white hover:bg-blue-500"
          >
            <h2 className="mb-4 text-center text-2xl font-extralight">{plan.name}</h2>
            {plan.services.map((service, idx) => (
              <div key={idx}>
                <p className="font-extralight ">{service.category}</p>
                <ul className="list-disc pl-5 my-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-base font-extralight">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link href={`/contact-us`} passHref>
              <div className="mt-6 inline-block px-4 py-2 border-white bg-blue-500 text-white shadow-2xl border rounded-full font-extralight tracking-wide hover:bg-blue-500 hover:text-white">
                Read more
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;