import useFetch from 'hooks/useFetch';

export default function useCategories(){
  return useFetch('http://18.130.120.189/api/categories');
}
