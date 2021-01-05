

const data = {
  
  get: async function getData(url){

    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': 'LIBRARIFY',
          'Accept': 'application/json'
        }});
      const json = await response.json();

      return json;
    }
    catch (error){
      console.log(`He fallado con ${error}`);
    }

  },

  post: async function postData(url, data){
     const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': 'LIBRARIFY',
        'Accept': 'application/json'
      }
     });

     const json = await response.json();

     return json;
  }
};


export default data;