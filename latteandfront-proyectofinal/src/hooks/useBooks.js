import useFetch from 'hooks/useFetch';

export default function useBooks() {
  return useFetch('http://18.130.120.189/api/books');
}