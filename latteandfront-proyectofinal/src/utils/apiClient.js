

const data = {

  // get: function getData(url)

  // {
  // fetch(url)
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => console.log(`Ha sucedido un error: ${error}`));
  
  
  // },
  
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