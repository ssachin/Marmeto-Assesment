// API URL
const CART_API_URL = "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"; 

const fetchDataFromAPI = async () => {
    try {
        const apiResponse = await fetch(CART_API_URL);
        const apiData = await apiResponse.json();
        if (!apiResponse.ok) {
            throw new Error("Error while fetching data");
        }
    } catch (error) {
        console.log(error);
    }

    return apiData;
    
};


const fetchedData = async () => {
    try {
        const productsFromAPI = await fetchDataFromAPI();
        return productsFromAPI;
    } catch (error) {
        console.log(error);
    }

};
