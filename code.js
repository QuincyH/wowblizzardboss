const baseURL = 'https://us.api.battle.net/wow/boss/?locale=en_US&apikey=3axazp2hnm7ntcwx6ufy9hgavndtyz3f';
let URL;

function fetchResults(e){
  console.log(e);
}

url = baseURL
console.log(url)

fetch(url)
  .then(function(result){
    //console.log(result)
    return result.json();
  }).then(function(json) {
    console.log(json)
    displayResults(json)
  
  });
 function displayResults(json){
   let boss = json.bosses
for(i=0; i < 20; i++){
  console.log(boss[i])
}
 }

//  function displayResults(i){
//    let name = i.name
//    console.log(name)
//  }

  