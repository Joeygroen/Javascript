var diceValues = [1, 1, 1, 1, 1];
const canThrow = [true,true,true,true,true,true,true,true,true,true,true,true,true];
const canThrowP2 = [true,true,true,true,true,true,true,true,true,true,true,true,true];
const canRoll = [true,true,true,true,true];
const dice = [0,0,0,0,0,0];
const upperScore = [0,0,0,0,0,0]
const upperScoreP2 = [0,0,0,0,0,0]
// var dices = [0,0,0,0,0,0];
let switchspeler = false;
let scoreOnes = 0; 
let scoreTwos = 0;
let scoreThrees = 0;
let scoreFours = 0;
let scoreFives = 0;
let scoreSixes = 0;
let scoreOnes2 = 0;
let scoreTwos2 = 0;
let scoreThrees2 = 0;
let scoreFours2 = 0;
let scoreFives2 = 0;
let scoreSixes2 = 0;
let fullHousePunt = 0;
let countDiceTotalThree = 0;
let countDiceTotalFour = 0;
let smallStraightPunt = 0;
let bigStraightPunt = 0;
let yahtzeePunt = 0;
let chancePunt = 0;
var number = 0;
let bonusPunt = 0;
let uppertotaal = 0;
let lowertotaal = 0;
let endtotaal = 0;
let scoreThreeOf =0;
let scoreFourOf =0;
let scoreFullHouse =0;
let scoreKlein =0;
let scoreGroot =0;
let scoreYahtzee =0;
let scoreChance =0;
let bonusPunt2 = 0;
let uppertotaal2 = 0;
let lowertotaal2 = 0;
let endtotaal2 = 0;
let scoreThreeOf2 =0;
let scoreFourOf2 =0;
let scoreFullHouse2 =0;
let scoreKlein2 =0;
let scoreGroot2 =0;
let scoreYahtzee2 =0;
let scoreChance2 =0;

//Naam van speler 1 opslaan
function submitBtn(){
    let name1 = document.getElementById("naam1");
    let naam1 = name1.value;
    document.getElementById("naam1").remove();
    document.getElementById("speler1").innerHTML = naam1;
    // document.getElementById("submit").disabled = true;
}

//Naam van speler 2 opslaan
function submitBtn2(){
    let name2 = document.getElementById("naam2");
    let naam2 = name2.value;
    document.getElementById("naam2").remove();
    document.getElementById("speler2").innerHTML = naam2;
    // document.getElementById("submit2").disabled = true;
}

let ogen1 = 1;
let ogen2 = 1;
let ogen3 = 1;
let ogen4 = 1;
let ogen5 = 1;

//Rol de dobbelstenen
function rollDice() {
    // for (var i = 0; i < 5; i++) {
    //     if (!diceHeld[i]) {
    //         diceValues[i] = Math.floor(Math.random() * 6) + 1;
    //         updateDiceImage(i + 1, diceValues[i]);
    //     }
    // }
    if(canRoll[0] == true){
        ogen1 = Math.floor(Math.random() * 6) + 1;
    }if(canRoll[1] == true){
        ogen2 = Math.floor(Math.random() * 6) + 1;
    }if(canRoll[2] == true){
        ogen3 = Math.floor(Math.random() * 6) + 1;
    }if(canRoll[3] == true){
        ogen4 = Math.floor(Math.random() * 6) + 1;
    }if(canRoll[4] == true){
        ogen5 = Math.floor(Math.random() * 6) + 1;
    }

    //diceValues.push(ogen1,ogen2,ogen3,ogen4,ogen5);
    diceValues[0] = ogen1;
    diceValues[1] = ogen2;
    diceValues[2] = ogen3;
    diceValues[3] = ogen4;
    diceValues[4] = ogen5;

    for(i = 0;i < 5; i++){
        updateDiceImage(i + 1, diceValues[i]);
    }
    
    number++;
    if(number == 3){
        document.getElementById("rollcount").disabled = true;
    }
    console.log(diceValues);
    countDiceValue();

    if(canThrow[0] == true){document.getElementById("scoreOnes").innerHTML = upperScore[0];}
    if(canThrow[1] == true){document.getElementById("scoreTwos").innerHTML = upperScore[1];}
    if(canThrow[2] == true){document.getElementById("scoreThrees").innerHTML = upperScore[2];}
    if(canThrow[3] == true){document.getElementById("scoreFours").innerHTML = upperScore[3];}
    if(canThrow[4] == true){document.getElementById("scoreFives").innerHTML = upperScore[4];}
    if(canThrow[5] == true){document.getElementById("scoreSixes").innerHTML = upperScore[5];}
    if(canThrow[6] == true){document.getElementById("3ofaKind").innerHTML = countDiceTotalThree;}
    if(canThrow[7] == true){document.getElementById("4ofaKind").innerHTML = countDiceTotalFour;}
    if(canThrow[8] == true){document.getElementById("fullHouse").innerHTML = fullHousePunt;}
    if(canThrow[9] == true){document.getElementById("klein").innerHTML = smallStraightPunt;}
    if(canThrow[10] == true){document.getElementById("groot").innerHTML = bigStraightPunt;}
    if(canThrow[11] == true){document.getElementById("yahtzee").innerHTML = yahtzeePunt;}
    if(canThrow[12] == true){document.getElementById("chance").innerHTML = chancePunt;}

    if(canThrowP2[0] == true){document.getElementById("scoreOnes2").innerHTML = upperScore[0];}
    if(canThrowP2[1] == true){document.getElementById("scoreTwos2").innerHTML = upperScore[1];}
    if(canThrowP2[2] == true){document.getElementById("scoreThrees2").innerHTML = upperScore[2];}
    if(canThrowP2[3] == true){document.getElementById("scoreFours2").innerHTML = upperScore[3];}
    if(canThrowP2[4] == true){document.getElementById("scoreFives2").innerHTML = upperScore[4];}
    if(canThrowP2[5] == true){document.getElementById("scoreSixes2").innerHTML = upperScore[5];}
    if(canThrowP2[6] == true){document.getElementById("3ofaKind2").innerHTML = countDiceTotalThree;}
    if(canThrowP2[7] == true){document.getElementById("4ofaKind2").innerHTML = countDiceTotalFour;}
    if(canThrowP2[8] == true){document.getElementById("fullHouse2").innerHTML = fullHousePunt;}
    if(canThrowP2[9] == true){document.getElementById("klein2").innerHTML = smallStraightPunt;}
    if(canThrowP2[10] == true){document.getElementById("groot2").innerHTML = bigStraightPunt;}
    if(canThrowP2[11] == true){document.getElementById("yahtzee2").innerHTML = yahtzeePunt;}
    if(canThrowP2[12] == true){document.getElementById("chance2").innerHTML = chancePunt;}
    document.getElementById("numberDisplay").innerHTML = number;
    console.log(dice);
}

//Bereken de dobbelsteen nummers
function countDiceValue() {
    for(i = 0; i < 6; i++){
        dice[i] = diceValues.filter(num => num == i + 1).length;
    }
    upperScore[0] = dice[0] * 1;
    upperScore[1] = dice[1] * 2;
    upperScore[2] = dice[2] * 3;
    upperScore[3] = dice[3] * 4;
    upperScore[4] = dice[4] * 5;
    upperScore[5] = dice[5] * 6;

    upperScoreP2[0] = dice[0] * 1;
    upperScoreP2[1] = dice[1] * 2;
    upperScoreP2[2] = dice[2] * 3;
    upperScoreP2[3] = dice[3] * 4;
    upperScoreP2[4] = dice[4] * 5;
    upperScoreP2[5] = dice[5] * 6;

    isThreeOfAKind();
    isFourOfAKind();
    isFullHouse();
    kleineStraat();
    groteStraat();
    yahtzee();
    Chance();
}
    // let count = 0;
    // for (var i = 0; i < diceValues.length; i++) {
    //     if (diceValues[i] === value) {
    //         count++;
    //     }
    // }
    // return count;

//Hou dobbelstenen vast of laat ze los
function toggleHold(diceNumber) {
    var diceImage = document.getElementById('dice' + diceNumber);
    if(canRoll[diceNumber -1] == false){
        canRoll[diceNumber-1] = true;
    }else{canRoll[diceNumber-1] = false;}
    if(canRoll[diceNumber -1] == false){diceImage.style.opacity = '0.5';}
    if(canRoll[diceNumber -1] == true){diceImage.style.opacity = '1';}

    // var index = diceNumber -1;
    // var diceImage = document.getElementById('dice' + diceNumber);
    // if (diceHeld[index]) {
    //     diceImage.style.opacity = '0.5';// Change opacity to indicate held status
    // } else {
    //     diceImage.style.opacity = '1'; // Restore opacity if released
    // }
}

//Update de dice image
function updateDiceImage(diceNumber, diceValue) {
    var diceImage = document.getElementById('dice' + diceNumber);
    diceImage.src = 'Dice-' + diceValue + '.png';
}

//Verander van speler
function switchPlayer(){
    document.getElementById("rollcount").disabled = false;
    number = 0;
    document.getElementById("numberDisplay").innerHTML = 0;
    resetDice();
}

//Reset dice
function resetDice() {
    diceValues = [4, 1, 3, 1, 6];
    canRoll[0] = true;
    canRoll[1] = true;
    canRoll[2] = true;
    canRoll[3] = true;
    canRoll[4] = true;
    for (var i = 0; i < 5; i++) {
        updateDiceImage(i + 1, diceValues[i]);
        var diceImage = document.getElementById('dice' + (i + 1));
        diceImage.style.opacity = '1'; // Restore opacity of all dice
    }
}

//Tel het totaal van boven op
function countTotaal(){
    uppertotaal = scoreOnes + scoreTwos + scoreThrees + scoreFours + scoreFives + scoreSixes;
    if(uppertotaal >= 63){bonusPunt = 35}
    lowertotaal = scoreThreeOf + scoreFourOf + scoreFullHouse + scoreKlein + scoreGroot + scoreYahtzee + scoreChance;
    endtotaal = uppertotaal + bonusPunt + lowertotaal;
    document.getElementById("totaal1").innerHTML = uppertotaal;
    document.getElementById("Bonus").innerHTML = bonusPunt;
    document.getElementById("lowertotaal").innerHTML = lowertotaal;
    document.getElementById("endtotaal").innerHTML = endtotaal;
}

function countTotaal2(){
    uppertotaal2 = scoreOnes2 + scoreTwos2 + scoreThrees2 + scoreFours2 + scoreFives2 + scoreSixes2;
    if(uppertotaal2 >= 63){bonusPunt2 = 35}
    lowertotaal2 = scoreThreeOf2 + scoreFourOf2 + scoreFullHouse2 + scoreKlein2 + scoreGroot2 + scoreYahtzee2 + scoreChance2;
    endtotaal2 = uppertotaal2 + bonusPunt2 + lowertotaal2;
    document.getElementById("totaal2").innerHTML = uppertotaal2;
    document.getElementById("Bonus2").innerHTML = bonusPunt2;
    document.getElementById("lowertotaal2").innerHTML = lowertotaal2;
    document.getElementById("endtotaal2").innerHTML = endtotaal2;
}

//P1 scores kiezen
function choosePoint1(){
    scoreOnes = upperScore[0];
    document.getElementById("scoreOnes").innerHTML = scoreOnes;
    canThrow[0] = false;
    document.getElementById("choose1").remove();
    countTotaal();
}
function choosePoint2(){
    scoreTwos = upperScore[1];
    document.getElementById("scoreTwos").innerHTML = scoreTwos;
    canThrow[1] = false;
    document.getElementById("choose2").remove();
    countTotaal();
}
function choosePoint3(){
    scoreThrees = upperScore[2];
    document.getElementById("scoreThrees").innerHTML = scoreThrees;
    canThrow[2] = false;
    document.getElementById("choose3").remove();
    countTotaal();
}
function choosePoint4(){
    scoreFours = upperScore[3];
    document.getElementById("scoreFours").innerHTML = scoreFours;
    canThrow[3] = false;
    document.getElementById("choose4").remove();
    countTotaal();
}
function choosePoint5(){
    scoreFives = upperScore[4];
    document.getElementById("scoreFives").innerHTML = scoreFives;
    canThrow[4] = false;
    document.getElementById("choose5").remove();
    countTotaal();
}
function choosePoint6(){ 
    scoreSixes = upperScore[5];
    document.getElementById("scoreSixes").innerHTML = scoreSixes;
    canThrow[5] = false;
    document.getElementById("choose6").remove();
    countTotaal();
}

//P2 scores kiezen
function choosePoint1_2(){
    scoreOnes2 = upperScoreP2[0];
    document.getElementById("scoreOnes2").innerHTML = scoreOnes2;
    canThrowP2[0] = false;
    document.getElementById("choose1-2").remove();
    countTotaal2();
}
function choosePoint2_2(){
    scoreTwos2 = upperScoreP2[1];
    document.getElementById("scoreTwos2").innerHTML = scoreTwos2;
    canThrowP2[1] = false;
    document.getElementById("choose2-2").remove();
    countTotaal2();
}
function choosePoint3_2(){
    scoreThrees2 = upperScoreP2[2];
    document.getElementById("scoreThrees2").innerHTML = scoreThrees2;
    canThrowP2[2] = false;
    document.getElementById("choose3-2").remove();
    countTotaal2();
}
function choosePoint4_2(){
    scoreFours2 = upperScoreP2[3];
    document.getElementById("scoreFours2").innerHTML = scoreFours2;
    canThrowP2[3] = false;
    document.getElementById("choose4-2").remove();
    countTotaal2();
}
function choosePoint5_2(){
    scoreFives2 = upperScoreP2[4];
    document.getElementById("scoreFives2").innerHTML = scoreFives2;
    canThrowP2[4] = false;
    document.getElementById("choose5-2").remove();
    countTotaal2();
}
function choosePoint6_2(){ 
    scoreSixes2 = upperScoreP2[5];
    document.getElementById("scoreSixes2").innerHTML = scoreSixes2;
    canThrowP2[5] = false;
    document.getElementById("choose6-2").remove();
    countTotaal2();
}

//scores onder
function isThreeOfAKind(){
    countDiceTotalThree = 0;
    for(i = 0; i <6; i++){
        if(dice[i] >= 3){
            countDiceTotalThree = upperScore[0] + upperScore[1] + upperScore[2] + upperScore[3] + upperScore[4] + upperScore[5];
        }
    }
    //document.getElementById("3ofaKind").innerHTML = countDiceTotalThree;
}

function isFourOfAKind(){
    countDiceTotalFour = 0;
    for(i = 0; i <6; i++){
        if(dice[i] >= 4){
            countDiceTotalFour = upperScore[0] + upperScore[1] + upperScore[2] + upperScore[3] + upperScore[4] + upperScore[5];
        }
    }
    //document.getElementById("4ofaKind").innerHTML = countDiceTotalFour;
}

function isFullHouse() {
    fullHousePunt = 0;
    for(i = 0; i < 6; i++){
        for(j = 0; j < 5; j++){
            if(dice[i] == 3 && dice[j] == 2){fullHousePunt = 25}
            if(dice[i] == 2 && dice[j] == 3){fullHousePunt = 25}
        }
    }
    //document.getElementById("fullHouse").innerHTML = fullHousePunt;
}

function kleineStraat(){
    diceValues.sort();
    if(dice[0]&&dice[1]&&dice[2]&&dice[3] || dice[1]&&dice[2]&&dice[3]&&dice[4] || dice[2]&&dice[3]&&dice[4]&&dice[5]){smallStraightPunt = 30;}else{smallStraightPunt = 0;}
    //document.getElementById("klein").innerHTML = smallStraightPunt;
}

function groteStraat(){
    diceValues.sort();
    if(dice[0]&&dice[1]&&dice[2]&&dice[3]&&dice[4] || dice[1]&&dice[2]&&dice[3]&&dice[4]&&dice[5]){bigStraightPunt= 40;}else{bigStraightPunt = 0;}
    //document.getElementById("groot").innerHTML = bigStraightPunt;
}

function yahtzee() {
    yahtzeePunt = 0;
    // Check of alle dobbelstenen gelijk zijn
    for(i = 0; i < 6; i++) {
        if(dice[i] == 5){yahtzeePunt = 50;}}
    //document.getElementById("yahtzee").innerHTML = yahtzeePunt;
}
function Chance(){
    chancePunt = upperScore[0] + upperScore[1] + upperScore[2] + upperScore[3] + upperScore[4] + upperScore[5];
    //document.getElementById("chance").innerHTML = chancePunt;
}

//scores onder kiezen speler 1
function choose3Kind(){
    scoreThreeOf = countDiceTotalThree;
    document.getElementById("3ofaKind").innerHTML = scoreThreeOf;
    canThrow[6] = false;
    document.getElementById("choose3Kind").remove();
    countTotaal();
}

function choose4Kind(){
    scoreFourOf = countDiceTotalFour;
    document.getElementById("4ofaKind").innerHTML = scoreFourOf;
    canThrow[7] = false;
    document.getElementById("choose4Kind").remove();
    countTotaal();
}

function chooseFullHouse(){
    scoreFullHouse = fullHousePunt;
    document.getElementById("fullHouse").innerHTML = scoreFullHouse;
    canThrow[8] = false;
    document.getElementById("chooseFullHouse").remove();
    countTotaal();

}
function chooseKlein(){ 
    scoreKlein = smallStraightPunt;
    document.getElementById("klein").innerHTML = scoreKlein;
    canThrow[9] = false;
    document.getElementById("chooseKlein").remove();
    countTotaal();
}

function chooseGroot(){ 
    scoreGroot = bigStraightPunt;
    document.getElementById("groot").innerHTML = scoreGroot;
    canThrow[10] = false;
    document.getElementById("chooseGroot").remove();
    countTotaal();
}

function chooseYahtzee(){
    scoreYahtzee = yahtzeePunt;
    document.getElementById("yahtzee").innerHTML = scoreYahtzee;
    canThrow[11] = false;
    document.getElementById("chooseYahtzee").remove();
    countTotaal();
}

function chooseChance(){
    scoreChance = chancePunt;
    document.getElementById("chance").innerHTML = scoreChance;
    canThrow[12] = false;
    document.getElementById("chooseChance").remove();
    countTotaal();
}

//Score kiezen speler 2
function choose3Kind2(){
    scoreThreeOf2 = countDiceTotalThree;
    document.getElementById("3ofaKind2").innerHTML = scoreThreeOf2;
    canThrowP2[6] = false;
    document.getElementById("choose3Kind2").remove();
    countTotaal2();
}

function choose4Kind2(){
    scoreFourOf2 = countDiceTotalFour;
    document.getElementById("4ofaKind2").innerHTML = scoreFourOf2;
    canThrowP2[7] = false;
    document.getElementById("choose4Kind2").remove();
    countTotaal2();
}

function chooseFullHouse2(){
    scoreFullHouse2 = fullHousePunt;
    document.getElementById("fullHouse2").innerHTML = scoreFullHouse2;
    canThrowP2[8] = false;
    document.getElementById("chooseFullHouse2").remove();
    countTotaal2();

}
function chooseKlein2(){ 
    scoreKlein2 = smallStraightPunt;
    document.getElementById("klein2").innerHTML = scoreKlein2;
    canThrowP2[9] = false;
    document.getElementById("chooseKlein2").remove();
    countTotaal2();
}

function chooseGroot2(){ 
    scoreGroot2 = bigStraightPunt;
    document.getElementById("groot2").innerHTML = scoreGroot2;
    canThrowP2[10] = false;
    document.getElementById("chooseGroot2").remove();
    countTotaal2();
}

function chooseYahtzee2(){
    scoreYahtzee2 = yahtzeePunt;
    document.getElementById("yahtzee2").innerHTML = scoreYahtzee2;
    canThrowP2[11] = false;
    document.getElementById("chooseYahtzee2").remove();
    countTotaal2();
}

function chooseChance2(){
    scoreChance2 = chancePunt;
    document.getElementById("chance2").innerHTML = scoreChance2;
    canThrowP2[12] = false;
    document.getElementById("chooseChance2").remove();
    countTotaal2();
}