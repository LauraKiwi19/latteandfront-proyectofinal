

const data = {

  get: async function getData(url){
      const response = await fetch(url);
      const json = await response.json();

      return json;
  },

  post: async function postData(url, data){
     const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
     });

     const json = await response.json();

     return json;
  }
};


export default data;