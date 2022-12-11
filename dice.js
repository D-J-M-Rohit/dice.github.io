function hide(){
    document.querySelector("div").classList.toggle("invisible");
}
function roll(){
    document.querySelector("div").classList.add("invisible");
    var name1  = document.getElementById("N1").value;
    var name2  = document.getElementById("N2").value;
    var x  = Math.floor(Math.random() * 6) +1;
    var y  = Math.floor(Math.random() * 6) +1;
    if(name1!==""&&name2!==""){
    document.getElementById("p1").innerHTML = name1+"'s Dice";
    document.getElementById("img1").innerHTML = "<img src='images/dice"+x+".png' alt='dice1'  ></img>";
    document.getElementById("p2").innerHTML = name2+"'s Dice";
    document.getElementById("img2").innerHTML = "<img src='images/dice"+y+".png' alt='dice2'  ></img>";
    if(x>y){
        document.getElementById("res").innerHTML=name1+" wins";
    }
    else if(x===y){
        document.getElementById("res").innerHTML="Its a Draw";
    }
    else{
        document.getElementById("res").innerHTML=name2+" wins";
    }
}
else{
    document.getElementById("res").innerHTML="<strong>Please add names to throw dices</strong>"
}

}