import React from 'react';
import SubscriptionList from './SubscriptionList';

export default function Subscriptions() {
  const data = [
    {
      category: 'Entertainment',
      description:
        "Paramount+ is an American subscription video on-demand over-the-top streaming service owned by Paramount Global. The service's content is drawn primarily from the libraries of CBS, Nickelodeon, MTV, Comedy Central, BET, the Smithsonian Channel, Showtime, and Paramount Pictures.",
      featured: true,
      name: 'Paramanount+',
    },
    {
      category: 'Children',
      description:
        'Apple TV+ is an American subscription over-the-top streaming service owned by Apple. The service launched on November 1, 2019, and it offers a selection of original production film and television series called Apple Originals.',
      featured: true,
      name: 'Apple TV+',
    },
    {
      category: 'Business',
      description:
        'AHayu is an American-owned global over-the-top subscription video on-demand streaming television service. Hayu is the first all-reality subscription video-on-demand streaming service of its kind.',
      featured: true,
      name: 'Hayu',
    },
    {
      category: 'Educational',
      description:
        'MGM+, is an American premium cable and satellite television network owned by the MGMPlus Entertainment subsidiary of Metro-Goldwyn-Mayer, which is itself a subsidiary of Amazon MGM Studios.',
      featured: true,
      name: 'MGM+',
    },
    {
      category: 'Documentary',
      description:
        'BritBox is a British over-the-top video on demand streaming service founded by the BBC and ITV plc which operates in eight countries across Australia, Europe, North America, and South Africa.',
      featured: true,
      name: 'britbox',
    },
    {
      category: 'Science',
      description:
        'CTV Sci-Fi Channel is a Canadian English-language discretionary specialty channel owned by Bell Media subsidairy of BCE Inc.. The channel primarily broadcasts speculative fiction and related programming.',
      featured: true,
      name: 'CTV Sci-Fi',
    },
    {
      category: 'Entertainment',
      description:
        "Paramount+ is an American subscription video on-demand over-the-top streaming service owned by Paramount Global. The service's content is drawn primarily from the libraries of CBS, Nickelodeon, MTV, Comedy Central, BET, the Smithsonian Channel, Showtime, and Paramount Pictures.",
      featured: false,
      name: 'Paramanount+',
    },
    {
      category: 'Children',
      description:
        'Apple TV+ is an American subscription over-the-top streaming service owned by Apple. The service launched on November 1, 2019, and it offers a selection of original production film and television series called Apple Originals.',
      featured: false,
      name: 'Apple TV+',
    },
    {
      category: 'Business',
      description:
        'AHayu is an American-owned global over-the-top subscription video on-demand streaming television service. Hayu is the first all-reality subscription video-on-demand streaming service of its kind.',
      featured: false,
      name: 'Hayu',
    },
    {
      category: 'Educational',
      description:
        'MGM+, is an American premium cable and satellite television network owned by the MGMPlus Entertainment subsidiary of Metro-Goldwyn-Mayer, which is itself a subsidiary of Amazon MGM Studios.',
      featured: false,
      name: 'MGM+',
    },
    {
      category: 'Documentary',
      description:
        'BritBox is a British over-the-top video on demand streaming service founded by the BBC and ITV plc which operates in eight countries across Australia, Europe, North America, and South Africa.',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'Science',
      description:
        'CTV Sci-Fi Channel is a Canadian English-language discretionary specialty channel owned by Bell Media subsidairy of BCE Inc.. The channel primarily broadcasts speculative fiction and related programming.',
      featured: false,
      name: 'CTV Sci-Fi',
    },
    {
      category: 'Entertainment',
      description:
        "Paramount+ is an American subscription video on-demand over-the-top streaming service owned by Paramount Global. The service's content is drawn primarily from the libraries of CBS, Nickelodeon, MTV, Comedy Central, BET, the Smithsonian Channel, Showtime, and Paramount Pictures.",
      featured: false,
      name: 'Paramanount+',
    },
    {
      category: 'Children',
      description:
        'Apple TV+ is an American subscription over-the-top streaming service owned by Apple. The service launched on November 1, 2019, and it offers a selection of original production film and television series called Apple Originals.',
      featured: false,
      name: 'Apple TV+',
    },
    {
      category: 'Business',
      description:
        'AHayu is an American-owned global over-the-top subscription video on-demand streaming television service. Hayu is the first all-reality subscription video-on-demand streaming service of its kind.',
      featured: false,
      name: 'Hayu',
    },
    {
      category: 'Educational',
      description:
        'MGM+, is an American premium cable and satellite television network owned by the MGMPlus Entertainment subsidiary of Metro-Goldwyn-Mayer, which is itself a subsidiary of Amazon MGM Studios.',
      featured: false,
      name: 'MGM+',
    },
    {
      category: 'Documentary',
      description:
        'BritBox is a British over-the-top video on demand streaming service founded by the BBC and ITV plc which operates in eight countries across Australia, Europe, North America, and South Africa.',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'Science',
      description:
        'CTV Sci-Fi Channel is a Canadian English-language discretionary specialty channel owned by Bell Media subsidairy of BCE Inc.. The channel primarily broadcasts speculative fiction and related programming.',
      featured: false,
      name: 'CTV Sci-Fi',
    },
    {
      category: 'Entertainment',
      description:
        "Paramount+ is an American subscription video on-demand over-the-top streaming service owned by Paramount Global. The service's content is drawn primarily from the libraries of CBS, Nickelodeon, MTV, Comedy Central, BET, the Smithsonian Channel, Showtime, and Paramount Pictures.",
      featured: false,
      name: 'Paramanount+',
    },
    {
      category: 'Children',
      description:
        'Apple TV+ is an American subscription over-the-top streaming service owned by Apple. The service launched on November 1, 2019, and it offers a selection of original production film and television series called Apple Originals.',
      featured: false,
      name: 'Apple TV+',
    },
    {
      category: 'Business',
      description:
        'AHayu is an American-owned global over-the-top subscription video on-demand streaming television service. Hayu is the first all-reality subscription video-on-demand streaming service of its kind.',
      featured: false,
      name: 'Hayu',
    },
    {
      category: 'Educational',
      description:
        'MGM+, is an American premium cable and satellite television network owned by the MGMPlus Entertainment subsidiary of Metro-Goldwyn-Mayer, which is itself a subsidiary of Amazon MGM Studios.',
      featured: false,
      name: 'MGM+',
    },
    {
      category: 'Documentary',
      description:
        'BritBox is a British over-the-top video on demand streaming service founded by the BBC and ITV plc which operates in eight countries across Australia, Europe, North America, and South Africa.',
      featured: false,
      name: 'britbox',
    },
    {
      category: 'Science',
      description:
        'CTV Sci-Fi Channel is a Canadian English-language discretionary specialty channel owned by Bell Media subsidairy of BCE Inc.. The channel primarily broadcasts speculative fiction and related programming.',
      featured: false,
      name: 'CTV Sci-Fi',
    },
  ];

  const categories = data.map(item => {
    return item.category
  })
  const uniqueCategories = Array.from(new Set([...categories].sort()));
  const featuredItems = data.filter(item => item.featured)

  const filterButtonOnClickHandler = (e) => console.log(e.target.childNodes[0]);

  return (
    <>
      <SubscriptionList items={featuredItems} title={featuredItems[0].category} />
      <nav>
        {
          uniqueCategories.map(item => <button key={Math.random()} onClick={e => filterButtonOnClickHandler(e)}>{item}</button>)
        }
      </nav>
    </>
  );
}
