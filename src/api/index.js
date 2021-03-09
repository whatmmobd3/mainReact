const KEY = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
const URL = `https://api.unsplash.com/photos/?client_id=`;

const fetchImages = async (page) => {
  const response = 
  await fetch(`${URL}${KEY}&per_page=${page}`);
  const data = await response.json()

  if(response.state > 400){
      throw new Error(data.error)

  }
  return data
};

export { fetchImages };
