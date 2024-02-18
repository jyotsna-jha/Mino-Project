    // Leaflet Map 
    const key = 'DPeytGXTs5DU9As7z62J';

    const map = L.map('map').setView([27.6938263, 85.3213987], 15);

    const mtLayer = L.maptilerLayer({
    apiKey: key,
    style: "f333b8a3-3867-44c9-8695-f2d1dd7f5dea", //optional
    }).addTo(map); 

        