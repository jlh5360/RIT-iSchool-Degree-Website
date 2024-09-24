//Define the proxy server URL
const proxyServer = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";
// const proxyServer = "http://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";
//The 2 different proxies!
//http://solace.ist.rit.edu/~dsbics/proxy/
//https://people.rit.edu/~dsbics/proxy/


//getData goes out and hits the REST API
//endpoint - which data I want - ex: "about/" or "people/"
//Define a function to fetch data from the API using the provided endpoint
async function getData(endpoint) {
    const res = await fetch(`${proxyServer}${endpoint}`);   //Fetch data from the API using the proxy server
    return await res.json();   //Parse the response as JSON and return
}

//Export the getData function
export default getData;