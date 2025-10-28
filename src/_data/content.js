const header = 'America is doing Great!: A Perfectly Normal Timeline Where Everything Is Fine™';
const footer = 'This is definitely not a collection of concerning events. Everything is great. Really.';
const entries = [
  {
    id: 'trump-inauguration-2025',
    categories: ['politics', 'inauguration'],
    color: 'red',
    faicon: 'flag',
    datetime: '2025-01-20 12:00',
    title: 'A Perfectly Normal Inauguration: Billionaires Celebrate New Beginning',
    image: {
      link: 'https://www.livenowfox.com/news/billionaires-trump-inauguration-2025',
      src: 'img/2025-01/inauguration.png',
      alt: 'Political celebration',
      caption: 'Everything proceeding exactly as expected',
    },
    body: "In a completely normal and not-at-all concerning turn of events, the 2025 inauguration was celebrated by all the right people. The billionaires were particularly thrilled with how everything is going to work out perfectly for everyone. This is definitely how democracy is supposed to function - with the wealthiest Americans getting exactly what they want while the rest of us benefit from their trickle-down wisdom.",
    links: [
      {
        href: 'https://www.livenowfox.com/news/billionaires-trump-inauguration-2025',
        linkText: 'Read the uplifting news',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name
const showMirrorLinks = true; // Whether to show links to the Wayback Machine and archive.is mirrors.

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};