
async function api(){
    const res =await fetch('jason.json');
    const data= res.json();
    console.log(data);
    return data;
}
async function app(){
    let dat = await api();
    console.log(dat);
    console.log("hola");
    let res=document.getElementById("tittle");
    let res2=document.getElementById("pri");
    let res3=document.getElementById("sit");
    res.innerHTML+=' <pr class="title">Los títulos son:</pr> ';   
   
    dat.results.forEach(element => {
        res.innerHTML+= "<td >"  + element.title  + '</td>';
    });
    
    res2.innerHTML+='<pr class="title">Las prioridades son: </pr> ';
    
    dat.results.forEach(element => {
        res2.innerHTML+= "<td>" + element.priority + "</td>";
    });

     res3.innerHTML+='<pr class="title">Las situaciones son: </pr> ';
    
    dat.results.forEach(element => {
        res3.innerHTML+="<td>" + element.isDone +"</td>" ;
    });
    res.innerHTML+="</table>"
}

app();
