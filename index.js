

var boom1=Math.trunc((Math.random()*9))

var boom2=Math.trunc((Math.random()*9))
while (boom1==boom2){
    boom2=Math.trunc((Math.random()*9))
}
var boom3=Math.trunc((Math.random()*9))
while (boom3==boom2 || boom3==boom1){
    boom3=Math.trunc((Math.random()*9))
}
let score=1
var lastbutton=[]

var booms=[boom1,boom2,boom3]
console.log(booms);


    for(var i=0; i<9; i++){
        document.getElementById("b"+i).onclick= go 
    }
    


        function go(){
            if ((this.innerText==boom1 || this.innerText==boom2 || this.innerText==boom3) && lastbutton.length<=score-1){
                document.getElementById("img"+boom1).src="boom.jpg"
                document.getElementById("img"+boom2).src="boom.jpg"
                document.getElementById("img"+boom3).src="boom.jpg"

                
                document.getElementById("comment").innerHTML="You Lose"
                
            }
            else if (true!==lastbutton.includes(this.id) && lastbutton.length==score-1){
                

                document.getElementById("img"+this.innerText).src="score"+score+".jpg"
                score=score+1
                if (score==7){
                    document.getElementById("comment").innerHTML="You Won"
                score=6
                }
            
            if (true==lastbutton.includes(this.id)){
            lastbutton.push(this.id)
            }
            }
    
    while (true!==lastbutton.includes(this.id)){
        lastbutton.push(this.id)
    }
    }




document.getElementById("buttonreplay").onclick=play
    function play(){
        for(var i=0; i<9; i++){
            document.getElementById("img"+i).src="Gray.jpg"
        }
        boom1=Math.trunc((Math.random()*9))
        boom2=Math.trunc((Math.random()*9))
        while (boom1==boom2){
            boom2=Math.trunc((Math.random()*9))
        }
        boom3=Math.trunc((Math.random()*9))
        while (boom3==boom2 || boom3==boom1){
            boom3=Math.trunc((Math.random()*9))
        }
        document.getElementById("comment").innerHTML=""
        lastbutton=[]
        score=1
        booms=[boom1,boom2,boom3]
        console.log(booms);
}