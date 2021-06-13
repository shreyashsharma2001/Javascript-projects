class Github{

constructor(){
    this.client_id='09c6a3280342374c0ea6'
    this.client_secret='bb0542973f02a868959bf248c88f6163332ed9ff'
}


    async getUsers(user){
let getProfile=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

let getData=await getProfile.json()
return{
    getData
}  
    }

     
} 