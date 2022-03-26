


const fetchCalls = {
  fetchData: function (endpoint) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
      .then(response => response.json())
  }
}

export default fetchCalls;
