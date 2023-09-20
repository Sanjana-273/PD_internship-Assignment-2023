
const token = 'BQDscYhXLSeV5KaGQT0b9p4Wg2F6c-b6dA46r407E9bV6DeWyso5_TPNUNEc3YQ8nvoajBDXcD-ZVBrW0_8lIU1zlW9d37E6voLP4xoTtHIfFCO_jw3HRVPFXd5IF8IHvjnd6X7tjG3lupayrVJmHaMJgl3-hS9FeHKj5LaWjsXdU-uI5ZDLdPqckc9aKffdDlDFGF_JIXHdiHjtBQ0';
const artistIds = [
  '06HL4z0CvFAxyc27GXpf02',
  '0oOet2f43PA68X5RxKobEy',
  '1dVygo6tRFXC8CSWURQJq2',
  '6VuMaDnrHyPL1p4EHjYLi7',
  '0C8ZW7ezQVs4URX5aX7Kqx',
  '64KEffDW9EtZ1y2vBYgq8T',
  '3eDT9fwXKuHWFvgZaaYC5v',
  '4YRxDV8wJFPHPTeXepOstw',
  '66CXWjxzNUsdJxJ2JdwvnR',
  '3OLGltG8UPIea8sA4w0yg0'
];

const dataContainer = document.getElementById("data-container");

async function fetchArtistData(artistId) {
  const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  try {
    const response = await fetch(artistUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return null;
  }
}

async function getData() {
  try {
    const artistDataPromises = artistIds.map(fetchArtistData);
    const artistDataArray = await Promise.all(artistDataPromises);

    const artistList = document.createElement("ul");

    artistDataArray.forEach(artist => {
      if (artist) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${artist.images[0].url}" alt="${artist.name}'s Image">
          <h3>Artist Name: ${artist.name}</h3>
          <p>Follower: ${artist.followers.total}</p>
          <p>Music Kind: ${artist.genres.join(', ')}</p>
          <p>Popularity: ${artist.popularity}</p>
          
        `;
        artistList.appendChild(listItem);
      }
    });

    dataContainer.appendChild(artistList);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
