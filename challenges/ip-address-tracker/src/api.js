const key = "at_8tDhzsXVosMm5H2VZOTMsmK7twGyg";

export default (ip_address) => {
    const api_url = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip_address}`;
    return api_url;
}
