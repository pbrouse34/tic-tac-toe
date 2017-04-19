
var pturn=true;
var player;
var computer;
var winning_combos=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
var move_count = 0;
var a = [null,null,null,null,null,null,null,null,null];
var choice = 0;
var move=0;
var remaining = [1,2,3,4,5,6,7,8,9]
var computerArr = [];
var playerArr = [];
$("#board").hide();

$('.letter').on('click',function(){

  player = $(this).attr("value");
  if(player =="X"){
   computer = "O";
 }
 else{
  computer = "X";
}
$('#choice').fadeOut(1000);
$('#board').delay(1001).fadeIn(1500);
}); 
$(document).ready(function(){

 startGame();
});

function startGame(){

 playerMove();
 
}

function playerMove(){
  if(pturn===true){

    $(".space").on('click', function(){
     pturn =false;
     choice = parseInt($(this).attr('id'));
     if(scanArr(choice)){
      $("#"+choice).html(player).removeClass("space").addClass('taken');
      playerArr.push(choice);
      a[choice-1] = player;

      move_count+=1;

      if(checkWin(playerArr)){
       $('#win').html("<h2> You Win! </h2>");
       setTimeout(resetGame,500);
     }
     else{

      computerMove();
    }

  } 
  
})
  }

}



function computerMove(){
  if(nextWins()){
   if(scanArr(move)){
     computerArr.push(move);
     console.log(computerArr);
     setTimeout(function(){
       $('#' + move).html(computer);
       move_count +=1;
       a[move-1]=computer;  $('#'+move).removeClass("space").addClass('taken');
       if(checkWin(computerArr)){
         $('#win').html("<h2>You lose!</h2>");

         setTimeout(resetGame,1000);
       }

     },100) 
     pturn = true;
     playerMove();
   }
   else{
    computerMove();
  }
}
else if(checkBlock()){
 if(scanArr(move)){
   computerArr.push(move);
   console.log(computerArr);
   setTimeout(function(){
     $('#' + move).html(computer);
     move_count +=1;
     a[move-1]=computer;  $('#'+move).removeClass("space").addClass('taken');
     if(checkWin(computerArr)){
       $('#win').html("<h2>You lose!</h2>");

       setTimeout(resetGame,1000);
     }

   },100) 
   pturn = true;
   playerMove();
 }
 else{
  computerMove();
}
}
else{
  randomMove();
}
}

function checkWin(arr){
  for(i=0; i<winning_combos.length; i++){
    count = 0;
    for(j=0;j<3; j++){
      if(arr.indexOf(winning_combos[i][j]) != -1){
        count +=1; 
        if(count == 3){
          return true;
        }
      }
    }
    if(remaining.length == 0){
      $("#win").html("<h2> Draw!</h2>");
      setTimeout(resetGame,1000);
    }
  }
}

function scanArr(val){
 if(remaining.indexOf(val) > -1){

   remaining = remaining.filter(function(num){
     return num != val;
   })
   
   return true;
 }
 else{
   return false;
 }
}

function resetGame(){
  winning_combos=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
  move_count = 0;
  a = [null,null,null,null,null,null,null,null,null];
  choice = 0;
  move=0;
  remaining = [1,2,3,4,5,6,7,8,9]
  computerArr = [];
  playerArr = [];
  $('.row1 ,.row2, .row3').html("").addClass('space').removeClass('taken');
  $('#win').html("");

}

function randomMove(){
 move = remaining[Math.floor(Math.random() * remaining.length)];
 
 if(scanArr(move)){
   computerArr.push(move);
   console.log(computerArr);
   setTimeout(function(){
     $('#' + move).html(computer);
     move_count +=1;
     a[move-1]=computer;  $('#'+move).removeClass("space").addClass('taken');
     if(checkWin(computerArr)){
       $('#win').html("<h2>You lose!</h2>");

       setTimeout(resetGame,1000);
     }

   },100) 
   pturn = true;
   playerMove();
 }
 else{
  computerMove();
}
}

function checkBlock(){
  if(move_count ==1 && a[4]==null){
   move =5;
   return true;
 }
 else if(a[0]== player && a[1] == player && a[2]==null){
  move = 3;
  return true;
}
else if(a[0] ==player && a[1]==null && a[2]==player){
  move = 2;
  return true;
}
else if(a[0]==null && a[1]==player && a[2]==player){
  move = 1; 
  return true;
}
else if(a[3]==null && a[4]==player && a[5]==player){
  move = 4; 
  return true;
}
else if(a[3]==player && a[4]==null && a[5]==player){
  move = 5; 
  return true;
}
else if(a[3]==player && a[4]==player && a[5]==null){
  move = 6; 
  return true;
}
else if(a[6]==player && a[7]==player && a[8]==null){
  move = 9; 
  return true;
}
else if(a[6]==player && a[7]==null && a[8]==player){
  move = 8; 
  return true;
}
else if(a[6]==null && a[7]==player && a[8]==player){
  move = 7; 
  return true;
}
else if(a[6]==player && a[7]==player && a[8]==null){
  move = 9; 
  return true;
}
else if(a[0]==player && a[3]==player && a[6]==null){
  move = 7; 
  return true;
}
else if(a[0]==player && a[3]==null && a[6]==player){
  move = 4; 
  return true;
}
else if(a[0]==null && a[3]==player && a[6]==player){
  move = 1; 
  return true;
}
else if(a[1]==player && a[4]==player && a[7]==null){
  move = 8; 
  return true;
}
else if(a[1]==player && a[4]==null && a[7]==player){
  move = 5; 
  return true;
}
else if(a[1]==null && a[4]==player && a[7]==player){
  move = 2; 
  return true;
}
else if(a[2]==player && a[5]==player && a[8]==null){
  move = 9; 
  return true;
}
else if(a[2]==player && a[5]==null && a[8]==player){
  move = 6; 
  return true;
}
else if(a[2]==null && a[5]==player && a[8]==player){
  move = 3; 
  return true;
}
else if(a[0]==player && a[4]==player && a[8]==null){
  move = 9; 
  return true;
}
else if(a[0]==player && a[4]==null && a[8]==player){
  move = 5; 
  return true;
}
else if(a[0]==null && a[4]==player && a[8]==player){
  move = 1; 
  return true;
}
else if(a[2]==player && a[4]==player && a[6]==null){
  move = 7; 
  return true;
}
else if(a[2]==player && a[4]==null && a[6]==player){
  move = 5; 
  return true;
}
else if(a[2]==null && a[4]==player && a[6]==player){
  move = 3; 
  return true;
}
  else if(a[0]==player && a[8]==player && a[5]==null){
  move = 6;
  return true;
}
else if(a[2]==player && a[6]==player && a[3]==null){
  move = 4;
  return true;
}
  else if(a[6] == player && a[1] == player && a[0]==null){
  move = 1;
  return true;
}
else if(a[8] == player && a[1] == player && a[2]==null){
  move = 3;
  return true;
}
else if(a[2] == player && a[7] == player && a[8]==null){
  move = 9;
  return true;
}
else if(a[0] == player && a[7] == player && a[6]==null){
  move = 7;
  return true;
}

}

function nextWins(){
 if(move_count==1 && a[4]==null){
  move=5;
  return true;
}


else if(a[0]== computer && a[1] == computer && a[2]==null){
  move = 3;
  return true;
}
else if(a[0] ==computer && a[1]==null && a[2]==computer){
  move = 2;
  return true;
}
else if(a[0]==null && a[1]==computer && a[2]==computer){
  move = 1; 
  return true;
}
else if(a[3]==null && a[4]==computer && a[5]==computer){
  move = 4; 
  return true;
}
else if(a[3]==computer && a[4]==null && a[5]==computer){
  move = 5; 
  return true;
}
else if(a[3]==computer && a[4]==computer && a[5]==null){
  move = 6; 
  return true;
}
else if(a[6]==computer && a[7]==computer && a[8]==null){
  move = 9; 
  return true;
}
else if(a[6]==computer && a[7]==null && a[8]==computer){
  move = 8; 
  return true;
}
else if(a[6]==null && a[7]==computer && a[8]==computer){
  move = 7; 
  return true;
}
else if(a[6]==computer && a[7]==computer && a[8]==null){
  move = 9; 
  return true;
}
else if(a[0]==computer && a[3]==computer && a[6]==null){
  move = 7; 
  return true;
}
else if(a[0]==computer && a[3]==null && a[6]==computer){
  move = 4; 
  return true;
}
else if(a[0]==null && a[3]==computer && a[6]==computer){
  move = 1; 
  return true;
}
else if(a[1]==computer && a[4]==computer && a[7]==null){
  move = 8; 
  return true;
}
else if(a[1]==computer && a[4]==null && a[7]==computer){
  move = 5; 
  return true;
}
else if(a[1]==null && a[4]==computer && a[7]==computer){
  move = 2; 
  return true;
}
else if(a[2]==computer && a[5]==computer && a[8]==null){
  move = 9; 
  return true;
}
else if(a[2]==computer && a[5]==null && a[8]==computer){
  move = 6; 
  return true;
}
else if(a[2]==null && a[5]==computer && a[8]==computer){
  move = 3; 
  return true;
}
else if(a[0]==computer && a[4]==computer && a[8]==null){
  move = 9; 
  return true;
}
else if(a[0]==computer && a[4]==null && a[8]==computer){
  move = 5; 
  return true;
}
else if(a[0]==null && a[4]==computer && a[8]==computer){
  move = 1; 
  return true;
}
else if(a[2]==computer && a[4]==computer && a[6]==null){
  move = 7; 
  return true;
}
else if(a[2]==computer && a[4]==null && a[6]==computer){
  move = 5; 
  return true;
}
else if(a[2]==null && a[4]==computer && a[6]==computer){
  move = 3; 
  return true;
}

}

// THIS WORKS. DO NOT TOUCH!!!!
