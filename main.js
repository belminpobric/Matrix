let myform = document.getElementById("my-form");
let txtBox = document.getElementById("textbx");
let msg = document.getElementById("message");
let mx = document.getElementById("matrix");

let matrix = new Array(10); 
  
  
for (let i = 0; i < matrix.length; i++) { 
    matrix[i] = new Array(10); 
} 
  
let h = 1; 
  
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) { 
        matrix[i][j] = h++; 
    } 
} 
  
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++)    { 
        mx.innerHTML += `${matrix[i][j]} `; 
    } 
        mx.innerHTML += "<br>"; 
}

let sum = 0;



myform.addEventListener("submit", function(e) {
    e.preventDefault();

    let x = txtBox.value;
    for (let i = 0; i < 10; i++) { 
        for (let j = 0; j < 10; j++)    {
            if(matrix[i][j]==x){
                if(i==9 || i==0 || j==0 || j==9){
                    msg.innerHTML = `Broj "${matrix[i][j]}" nema 8 brojeva koji ga okruzuju stoga ga ne ubrajamo u sumu. <br>`;
                }
                else{
                    for (let k = i-1; k < i+2; k++) { 
                        for (let g = j-1; g < j+2; g++) { 
                            sum+=matrix[k][g];
                        }
                        
                    } 
                    msg.innerHTML = `Rezultat sume je -> ${sum} <br>`;
                    sum = 0;
                }   
                
            }
        } 
    }
});

