const getAPI = (request="", payload="") => {
    if(!request|| !payload)
        return "https://restcountries.com/v3.1/all";
    switch(request){
        case "name":
            return `https://restcountries.com/v3.1/name/${payload}`;
        case "region":
            return `https://restcountries.com/v3.1/region/${payload}`;
        default:
            return "https://restcountries.com/v3.1/all";       
    }
}

export default getAPI;