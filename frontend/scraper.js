const axios = require("axios");
const cheerio = require("cheerio");

// Find album blocks
// album block: [data-slide-position-display="###"]
//  title: .c-gallery-vertical-album__title, split by , or '
//  artist: title split by the last comma or first '
//  year: .c-gallery-vertical-album__subtitle, split by ,
//  label: year split by ,
//  description: .c-gallery-vertical-album__description
//  artURL: src of .c-gallery-vertical-album__image

// Model Data:
// {"rank": 500,
// "title": "Funeral",
// "artist": "Arcade Fire",
// "year": 2004,
// "label": "Merge",
// "description": "slkfjsdlfjs",
// "artUrl":"https://sdfsdfsfds"
// }

// Loop through albums and identify elements
let albumList = [];
const getAlbums = async () => {
  try {
    const { data } = await axios.get(
      "https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/"
    );
    const $ = cheerio.load(data);

    // Get all albums on current page
    $(".c-gallery-vertical-album").each((_idx, el) => {
      let rank = $(el).$(c - gallery - vertical - album__number);
      let subtitle = $(el).$(c - gallery - vertical - album__title);
      let artist = subtitle.split(",")[0]; // could have multiple
      let title = subtitle.split(",")[-1];
      let labelYear = $(el).$(c - gallery - vertical - album__subtitle);
      let label = subtitle.split(",")[0]; // could have multiple
      let year = labelYear.split(",")[-1];
      let description = $(el).$(c - gallery - vertical - album__description);
      let coverURL = $(el).$(c - gallery - vertical - album__image + src);
      let albumDeets = {
        rank: rank,
        title: title,
        artist: artist,
        year: year,
        label: label,
        description: description,
        artUrl: coverURL,
      };
      albumList.push(albumDeets);
    });

    return albumList;
  } catch (error) {
    throw error;
  }
};

getAlbums().then((albumList) => console.log(albumList));

// Add data to array
albumList.push();
