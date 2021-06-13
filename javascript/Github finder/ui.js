class UI{
    constructor(){
this.profile=document.querySelector('.display')
    }

showProfile(user){
 this.profile.innerHTML= `
 <div class="row">
    <div class="col s12 m5">
      <div class="card">
        <div class="card-image">
          <img src="${user.avatar_url}">
          <span class="card-title"> ${user.name}</span>
        </div>
         
        <div class="card-action">
         <ul>
        <li> <a href="${user.repos_url }">visit repos</a></li>
        <li> <a href="${user.gists_url}">visit gist</a></li>
</ul>
        
        </div>
      </div>
    </div>
    <ul class="collection ">
    <li class="collectisson-header" style="font-size: larger;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">INFO</li>
    <div class="divider"></div>
    <li class="collection-item">No of public repos: ${user.public_repos}</li>
    <li class="collection-item">No of public gists: ${user.public_gists} </li>
    <li class="collection-item">No of followers:  ${user.followers}</li>
    <li class="collection-item">No of followings: ${user.following}</li>
    <li class="collection-item"> user id: ${user.id}</li>
    <li class="collection-item">user email: ${user.email}</li>
    <li class="collection-item">user twitter: ${user.twitter_username}</li>
    <li class="collection-item"> Name of company: ${user.company}</li>
    </ul>

  </div>
            
 `
}

showAlet(msg,className){
this.clearAlert()
let s=document.createElement('div')
s.className=className
s.appendChild(document.createTextNode(msg))
const h=document.querySelector('.container')
const l=document.querySelector('.cl')
h.insertBefore(s,l)

setTimeout(() => {
    this.clearAlert()
}, 2000);
}

clearAlert (){
    let al=document.querySelector('.alert1')
    if(al){
        al.remove()
    }
}
    
 

}