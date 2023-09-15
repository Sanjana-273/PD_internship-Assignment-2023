// Client 
const token = 'BQBudYKQi7QKpWVy7uPhs5ZNSwd_1PO0jeOAu7LW8rZZI8gRP7HCmEzIWmo8lnf3K-prd8MUr2-pmWth0dQUq5YBE-y6JDW5eW0crZRgEhRtUvZ_J26X-MeayLyC3N3dx0Xmc2Hcn3RRdOwXQK7Xo6Yw7M9M_YrHLjk-TnALQ7_IHCyYhyHIB4QvNzvDHdDn9ePkt_4aGzMf0l6y-46tTSZEG8gukOThnK2mSXS5F52PUanqqFjH59QkmF1V2luh-qJMiftRSrkJM8fiRNJvaxyE';
const url = "https://api.spotify.com/v1/artists?ids=06HL4z0CvFAxyc27GXpf02%2C0oOet2f43PA68X5RxKobEy%2C1dVygo6tRFXC8CSWURQJq2%2c6VuMaDnrHyPL1p4EHjYLi7%2c0C8ZW7ezQVs4URX5aX7Kqx%2c64KEffDW9EtZ1y2vBYgq8T%2c3eDT9fwXKuHWFvgZaaYC5v%2c4YRxDV8wJFPHPTeXepOstw%2c66CXWjxzNUsdJxJ2JdwvnR%2c3OLGltG8UPIea8sA4w0yg0"

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
})

async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        
        // Get the data-container element
        const dataContainer = document.getElementById("data-container");

        // Create an HTML structure to display the data (modify as needed)
        const artistList = document.createElement("ul");

        // Loop through the data and create list items for each artist
        data.artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = `Artist Name: ${artist.name}, Popularity: ${artist.popularity}`;
            artistList.appendChild(listItem);
        });

        // Append the artistList to the data-container
        dataContainer.appendChild(artistList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData()


