
const canvas=d3.select(".canva");

//this is the array where i want to manipulate the height using the fetched data
var dataArray=[
    
    {Statistics:"Confirmed",width:25, height:3000, fill:"purple"},
    {Statistics:"Active",width:25, height:500, fill:"#39CCCC"},
    {Statistics:"Recorvered",width:25, height:1200, fill:"#beef00"},
    {Statistics:"Deaths",width:25, height:2000, fill:"#b11a21"},
]


//add svg element
const svg=canvas.append("svg")
//.attr('transform', `translate(${margin}, ${margin})`)
.attr("width","1000")
.attr("height","700");     
     
const rect= svg.selectAll("rect")
//these are the variables i want to use
   let newActive
   let newConfirmed
   let newRecovered
   let newDeath
   //i fetch using this code
    d3.json('https://api.covid19api.com/live/country/south-africa')  
    //.then(response => response.json())            
      .then(data => {console.log
        (data[16].Active,
          
        data[16].Confirmed,
        data[16].Recovered,
        data[16].Deaths
       )
           
        newActive=data[18].Active
        newConfirmed = data[18].Confirmed
        newDeath=data[18].Deaths
        newRecovered=data[18].Recovered
    
    
//code for drawing visualisation
    rect.data(dataArray) 
            .enter().append("rect")
            .attr("width",150)
            .attr("fill",(d)=>d.fill) 
            .attr("Statistics",(d)=>d.Statistics)
            .attr("height",function(d,i){
                return d.height/5;
            })           
                       
            .attr("x", function(d,i){
            return i*160;})

            .attr("y",function(d,i){
            return 700-(d.height/5);
           
})
})

           
            
            
     
       

         
    
      
   

    
            