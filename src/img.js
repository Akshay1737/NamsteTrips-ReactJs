import fetch from "node-fetch";
import sharp from "sharp";

const images = {
  heroImages: {
    main: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
  },
  destinationImages: {
    santorini: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
    bali: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800"
    // add the rest...
  }
  // add other categories...
};

async function downloadAndConvert(url, filename) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  await sharp(Buffer.from(buffer))
    .png()
    .toFile(filename);
  console.log(`Saved ${filename}`);
}

(async () => {
  for (const category in images) {
    const items = images[category];
    for (const name in items) {
      const url = items[name];
      const filename = `${name}.png`;
      await downloadAndConvert(url, filename);
    }
  }
})();
