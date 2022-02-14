import httpClient from './httpClient'

const STORES_URL = '/assets/stores/stores.json';

// Get categories
const getStores = () => httpClient.get(STORES_URL);

export {
    getStores
}