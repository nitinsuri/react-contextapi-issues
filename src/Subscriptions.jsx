import React from 'react';

export default function Subscriptions() {
  const data = [
    {
      category: 'Entertainment',
      description:
        "Paramount+ is an American subscription video on-demand over-the-top streaming service owned by Paramount Global. The service's content is drawn primarily from the libraries of CBS, Nickelodeon, MTV, Comedy Central, BET, the Smithsonian Channel, Showtime, and Paramount Pictures.",
      featured: false,
      name: 'Paramanount+',
    },
    {
      category: 'Entertainment',
      description:
        'Apple TV+ is an American subscription over-the-top streaming service owned by Apple. The service launched on November 1, 2019, and it offers a selection of original production film and television series called Apple Originals.',
      featured: false,
      name: 'Apple TV+',
    },
    {
      category: 'Entertainment',
      description:
        'AHayu is an American-owned global over-the-top subscription video on-demand streaming television service. Hayu is the first all-reality subscription video-on-demand streaming service of its kind.',
      featured: false,
      name: 'Hayu',
    },
    {
      category: 'Entertainment',
      description:
        'MGM+, is an American premium cable and satellite television network owned by the MGMPlus Entertainment subsidiary of Metro-Goldwyn-Mayer, which is itself a subsidiary of Amazon MGM Studios.',
      featured: false,
      name: 'MGM+',
    },
    {
      category: 'Entertainment',
      description:
        'BritBox is a British over-the-top video on demand streaming service founded by the BBC and ITV plc which operates in eight countries across Australia, Europe, North America, and South Africa.',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'category',
      description: 'description',
      featured: false,
      name: 'britbox',
    },
  ];

  return (
    <ul>
      {data.map((item) => {
        return (
          <li>
            <div>{item.name}</div>
            <div>{item.category}</div>
            <div>{item.description}</div>
          </li>
        );
      })}
    </ul>
  );
}
