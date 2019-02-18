class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then(res=>{
      console.log('fullList',res.data)
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(res=>{
      console.log('getId',res.data)
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }

  createOneRegister (obj) {
    axios.post(`${this.BASE_URL}/characters`,obj).then (res=>{
      console.log('new Info',res.data)
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }

  updateOneRegister (id,obj) {
    axios.patch(`${this.BASE_URL}/characters/${id}`,obj).then (res=>{
      console.log('Edit',res)
      document.getElementById("edit-character-form").reset();
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`).then(res =>{
      console.log('delete',res.data)
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }
}
