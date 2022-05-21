$("#form-control").submit(function (event) {
    event.preventDefault();
    $(".resultContainer").show();
    $(".reset").show();
    $(".jumbotron").fadeOut(200);
    $("#btn-place").fadeOut(200);

    generateEncounter();
})
 

const generateEncounter = async () => {
  let encounter = new Encounter;
  encounter.partyLevel = $("#partyLevel").val();
  encounter.partyMembers = $("#partyMembers").val();
  encounter.challengeDifficulty = $("#challengeDifficulty").val();
  encounter.monsterType = $("#monsterType").val();
  encounter.environment = $("#environment").val();
  encounter.partyXpThreshold(encounter.partyMembers, encounter.challengeDifficulty, encounter.partyLevel);
  await encounter.encounterGen();
  for (let i = 0; i < encounter.encounterArray.length; i++) {
    createCard (`https://api.open5e.com/monsters/${encounter.encounterArray[i].slug}`)
  }
}
  