$.ajax({
    url:"https://restcountries.eu/rest/v2/all",
    type:"get",
    
    success:function(data){
        var rs = "";
        var c = 0;
        for(i in data){
           rs += "<tr>";
           c += 1 ;
           rs += "<td>"+c+"</td>";
           rs += "<td class='country-name'>"+data[i].name+"</td>";
           rs += "<td>"+data[i].capital+"</td>";
           rs += "<td>"+data[i].population+"</td>";
           rs += "<td><ol>";
           for(j in data[i].borders){
               rs += "<li>"+data[i].borders[j]+"</li>";
           }
           rs+= "</ol></td>";
           rs += "<td><img src='"+data[i].flag+"' style='height:50px;width=2000px;'></td>";
           rs += "</tr>";
        }
        
        document.getElementById("result").innerHTML = rs;
    }
    
})