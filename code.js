let dropdownBosses = document.querySelector('select');
const baseURL = 'https://us.api.battle.net/wow/boss/?locale=en_US&apikey=3axazp2hnm7ntcwx6ufy9hgavndtyz3f';
let URL;

url = baseURL

fetch(url)
  .then(function (result) {
    return result.json();
  }).then(function (json) {
    let wowBosses = json.bosses;
    let wowBossInfo = json.bosses;
    for (i = 0; i < 756; i++) {
      console.log(wowBosses[i])
      document.getElementById('ddBosses').add(new Option(wowBosses[i]["name"]));
      //allow for me to go through each of the results from the API and each result represents a boss with the information

      let bossImage = document.getElementById('imageDisplay');
      let bossName = document.getElementById('nameDisplay');
      let bossHealth = document.getElementById('healthDisplay');
      let bossLevel = document.getElementById('levelDisplay');
      let bossDescription = document.getElementById('descriptionDisplay');
      document.getElementById("ddBosses").onchange = bossSelection; //when selection is made from the dropdown, then onchange processes value and starts bossSelection function
      function bossSelection() { //after function is invoked from bossSelection this loop reads back through json and grabs data connected to value selected
        for (j = 0; j < 756; j++) {
          if (wowBossInfo[j]["name"] === this.value) {
            nameDisplay.value = wowBossInfo[j]["name"];
            healthDisplay.value = wowBossInfo[j]["health"];
            levelDisplay.value = wowBossInfo[j]["level"];
            descriptionDisplay.value = wowBossInfo[j]["description"]
            for (k = 0; k < 756; k++) { // after selection is made, to apply boss attributes
              bossImage.src = "https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-" + wowBossInfo[j]['npcs'][k]['creatureDisplayId'] + ".jpg";
            }
          }
        }
      }

    }
  });