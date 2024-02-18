

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('destination-location');
    const suggestionsList = document.getElementById('suggestions');

    // Function to make a request to the GraphHopper API and get location suggestions
    async function getLocationSuggestions(query) {
        const apiKey = '8e95a1e4-6d07-488c-8f23-d95874da0c18';
        const endpoint = 'https://graphhopper.com/api/1/geocode';

        const response = await fetch(`${endpoint}?q=${query}&key=${apiKey}`);
        const data = await response.json();

        const nepalSuggestions = data.hits.filter(hit => hit.countrycode === 'NP');

        return nepalSuggestions.map(hit => hit.name);
    }

    // Function to update the suggestions list based on user input
    async function updateSuggestions() {
        const query = searchInput.value.trim();

        if (query.length === 0) {
            suggestionsList.style.display = 'none';
            return;
        }

        const suggestions = await getLocationSuggestions(query);

        if (suggestions.length > 0) {
            suggestionsList.innerHTML = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
            suggestionsList.style.display = 'block';
        } else {
            suggestionsList.style.display = 'none';
        }
    }

    // Event listener for input changes
    searchInput.addEventListener('input', updateSuggestions);

    // Event listener to handle suggestion selection
    suggestionsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            suggestionsList.style.display = 'none';           
        }
        
    });
    
  });









