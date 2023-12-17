import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_Yk9Kl74m7gHsLiHVNhFplh1mThGyG0OQUIjjSyV2UvxmHKPwR2YTKCtbkdEII5tA';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get('/breeds').then(response => {
    return response.data;
  });
}
export function fetchCatByBreed(breedId) {
  console.log(breedId);
  return axios.get(`/images/search?breed_ids=${breedId}`).then(response => {
    return response.data;
  });
}
