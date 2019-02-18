const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log('ID work')
    var ID = document.getElementById('Character-id').value
    charactersAPI.getOneRegister(ID);
  }
  
  document.getElementById('delete-one').onclick = function(){
    var Delete = document.getElementById('delete-id').value
    charactersAPI.deleteOneRegister(Delete);
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()



    console.log('workkk')
    var ID = document.getElementById('ID').value

    var edit = {
      Name:Editname.value,
      Occupation:Editocc.value,
     Weapon: Editweapon.value,
       Checkbox:Editcheck.value,
    }
      charactersAPI.updateOneRegister(ID,edit); 
      
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault()
    
  
    var create = {
      Name:Name.value,
      Occupation:Occupation.value,
      Weapon: Weapon.value,
      Checkbox:Checkbox.value,
      }
   
    
    charactersAPI.createOneRegister(create); 
  }







})
