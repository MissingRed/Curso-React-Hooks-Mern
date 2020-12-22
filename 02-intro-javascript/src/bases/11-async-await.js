const getImagen = async () => {
  try {
    const apiKey = "00g5clyoowBa7l8rQQn7d55kpztlnKwD";
    const res = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await res.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.warn(error);
  }
};

getImagen();
