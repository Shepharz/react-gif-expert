export const getGifs = async (category, limit) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RVFPFSTq1S5OVjcafhMzUUvALg9b6bUz&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
