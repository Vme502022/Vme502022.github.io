// set the dimensions and margins of the graph
var margin = { top: 10, right: 100, bottom: 80, left: 30 },
  width = 1200 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg4 = d3
  .select("#my_dataviz1")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./csv/table2.csv", function (data) {
  // List of groups (here I have one group per column)
  var allGroup = ["valueA", "valueB", "valueC"];

  // add the options to the button

  // Add X axis --> it is a date format
  var x = d3
    .scaleLinear()
    .domain(
      d3.extent(data, function (d) {
        return d.time;
      })
    )
    .range([0, 750]);
  let axis = d3.axisBottom(x);
  axis.ticks(20);
  svg4
    .append("g")
    .attr("transform", "translate(400," + height + ")")
    .call(axis);

  // Add Y axis
  var y = d3.scaleLinear().domain([62, 82]).range([height, 200]);
  svg4.append("g").call(d3.axisLeft(y)).attr("transform", "translate(400,0)");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("id", "AUS")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.AUS);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 400)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("visibility","visible")
    .attr("fill", "#DDE6EF")

  svg4
    .append("circle")
    .attr("cx", 400)
    .attr("cy", 550)
    .attr("id","AUSC")
    .attr("visibility","visible")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#AUS").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#AUS").style("stroke", "steelblue");
    });


  svg4
    .append("text")
    .attr("x", 410)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("AUS")
    .attr("color", "#474747")


  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "AUT")
    
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.AUT);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 450)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");

  svg4
    .append("circle")
    .attr("cx", 450)
    .attr("cy", 550)
    .attr("r", 6)
    .attr("id","AUTC")
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#AUT").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#AUT").style("stroke", "steelblue");
    });
  svg4
    .append("text")
    .attr("x", 460)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("AUT")
    .attr("fill", "#474747");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("id", "BEL")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.BEL);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 500)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF")
  svg4
    .append("circle")
    .attr("id","BELC")
    .attr("cx", 500)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#BEL").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#BEL").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 510)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("BEL")
    .attr("fill", "#474747");

 

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "CAN")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.CAN);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 550)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 550)
    .attr("cy", 550)
    .attr("id","CANC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")

    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#CAN").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#CAN").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 560)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("CAN")
    .attr("fill", "#474747");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "DNK")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.DNK);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 600)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 600)
    .attr("cy", 550)
    .attr("id","DNKC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#DNK").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#DNK").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 610)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("DNK")
    .attr("fill", "#474747");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "FIN")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.FIN);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 650)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 650)
    .attr("cy", 550)
    .attr("id","FINC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#FIN").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#FIN").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 660)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("FIN")
    .attr("fill", "#474747");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("id", "FRA")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.FRA);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 700)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 700)
    .attr("id","FRAC")
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#FRA").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#FRA").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 710)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("FRA")
    .attr("fill", "#474747");


  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "DEU")
    
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.DEU);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 750)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 750)
    .attr("cy", 550)
    .attr("r", 6)
    .attr("id","DEUC")
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#DEU").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#DEU").style("stroke", "steelblue");
    });
  svg4
    .append("text")
    .attr("x", 760)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("DEU");


  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "GRC")
    
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.GRC);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 800)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 800)
    .attr("id","GRCC")
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#GRC").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#GRC").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 810)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("GRC");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "ISL")
    
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.ISL);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 850)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 850)
    .attr("cy", 550)
    .attr("id","ISLC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#ISL").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#ISL").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 860)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("ISL");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "IRL")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.IRL);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 900)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 900)
    .attr("id","IRLC")
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#IRL").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#IRL").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 910)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("IRL");


  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "ITA")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.ITA);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 950)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 950)
    .attr("cy", 550)
    .attr("id","ITAC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#ITA").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#ITA").style("stroke", "steelblue");
    });
 
  svg4
    .append("text")
    .attr("x", 960)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("ITA");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("id", "JPN")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.JPN);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 1000)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#2543BD")
  svg4
    .append("circle")
    .attr("cx", 1000)
    .attr("id","JPNC")
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#JPN").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#JPN").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 1010)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("JPN");

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "LUX")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.LUX);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 1050)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 1050)
    .attr("id","LUXC")
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#LUX").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#LUX").style("stroke", "steelblue");
    });
  

  svg4
    .append("text")
    .attr("x", 1060)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("LUX");
  svg4
    .append("path")
    .datum(data)
    .attr("id", "NLD")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.NLD);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 1100)
    .attr("cy", 550)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 1100)
    .attr("cy", 550)
    .attr("id","NLDC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#NLD").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#NLD").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 1110)
    .attr("y", 554)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("NLD");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "NOR")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.NOR);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 570)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 570)
    .attr("cy", 580)
    .attr("id","NORC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#NOR").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#NOR").style("stroke", "steelblue");
    });



  svg4
    .append("text")
    .attr("x", 580)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("NOR");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "PRT")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.PRT);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 620)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 620)
    .attr("cy", 580)
    .attr("id","PRTC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#PRT").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#PRT").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 630)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("PRT");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("opacity", 1)
    .attr("stroke-width", 1.5)
    .attr("id", "ESP")
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.ESP);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 670)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 670)
    .attr("id","ESPC")
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#ESP").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#ESP").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 680)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("ESP");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "SWE")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.SWE);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 720)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 720)
    .attr("cy", 580)
    .attr("r", 6)
    .attr("id","SWEC")
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#SWE").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#SWE").style("stroke", "steelblue");
    });
 
  svg4
    .append("text")
    .attr("x", 730)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("SWE");

  var lines2 = [
    "From 1960 to 2014, there has been an",
    "overall upward trend in average human ",
    "life expectancy worldwide. Life expectancy ",
    "in the 22 OECD developed countries   ",
    "shown in the chart rose from an average of  ",
    "69.05 (1960) to 81.8 (2014), an increase of ",
    "18.46%.",
  ];

  var line2 = svg4
    .append("text")
    .attr("x", 20)
    .attr("y", 200)
    .attr("id", "inetext2")
    .attr("font-size", "17")
    .attr("font-family", "Marion")
    .style("display", "flex")
    .style("fill", "black")
    .style("opacity", 1);

  line2
    .selectAll("tspan")
    .data(lines2)
    .enter()
    .append("tspan")
    .attr("dy", "1.7em")
    .attr("x", line2.attr("x"))
    .text(function (d) {
      return d;
    });

  var lines3 = [
    "It is worth noting that as of 2014, life ",
    "expectancy in the United States is only ",
    "78.8, while Japan, which has the highest ",
    "life expectancy, has reached 83.7. At the  ",
    "same time, overall life expectancy in the ",
    "United States has only increased by  ",
    "12.73%, far below the average growth rate",
    "in developed countries.",
  ];

  var line3 = svg4
    .append("text")
    .attr("x", 20)
    .attr("y", 200)
    .attr("id", "linetext2")
    .attr("font-size", "17")
    .attr("font-family", "Marion")
    .style("display", "flex")
    .style("fill", "black")
    .style("opacity", 0);

  line3
    .selectAll("tspan")
    .data(lines3)
    .enter()
    .append("tspan")
    .attr("dy", "1.7em")
    .attr("x", line3.attr("x"))
    .text(function (d) {
      return d;
    });

  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "CHE")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.CHE);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 770)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("cx", 770)
    .attr("cy", 580)
    .attr("id","CHEC")
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#CHE").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#CHE").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 780)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("CHE");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("id", "GBR")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.GBR);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 820)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#DDE6EF");
  svg4
    .append("circle")
    .attr("id","GBRC")
    .attr("cx", 820)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#GBR").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#GBR").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 830)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("GBR");
  svg4
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("id", "USA")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.time) + 400;
        })
        .y(function (d) {
          return y(d.USA);
        })
    );
    svg4
    .append("circle")
    .attr("cx", 870)
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#EA3223")

  svg4
    .append("circle")
    .attr("cx", 870)
    .attr("id","USAC")
    .attr("cy", 580)
    .attr("r", 6)
    .style("stroke", "#fff")
    .style("stroke-width", "0.5")
    .attr("fill", "#474747")
    .on("mouseover", function (d) {
      d3.select(this).attr("fill","#2140C4");
      d3.selectAll("path").style("opacity",0.2);
      d3.selectAll("#USA").style("stroke", "black").style("opacity",1);
    })
    .on("mouseout", function () {
    d3.select(this).attr("fill", "#474747");
    d3.selectAll("path").style("opacity",1);
    d3.selectAll("#USA").style("stroke", "steelblue");
    });

  svg4
    .append("text")
    .attr("x", 880)
    .attr("y", 584)
    .style("stroke", "black")
    .attr("font-size", "10")
    .text("USA");

  svg4
    .append("circle")
    .attr("cx", 160)
    .attr("id", "linebutton2")
    .attr("opacity", "1")
    .attr("cy", 500)
    .attr("r", 12)
    .style("stroke", "black")
    .style("stroke-width", "0.7")
    .attr("fill", "white")
    .on("click", function () {
      d3.selectAll("#inetext2").style("opacity", "0");
      d3.selectAll("#linetext").style("opacity", "0");
      d3.selectAll("#AUS").style("opacity","0.2");
      d3.selectAll("#AUT").style("opacity","0.2");
      d3.selectAll("#BEL").style("opacity","0.2");
      d3.selectAll("#CAN").style("opacity","0.2");
      d3.selectAll("#DNK").style("opacity","0.2");
      d3.selectAll("#FIN").style("opacity","0.2");
      d3.selectAll("#FRA").style("opacity","0.2");
      d3.selectAll("#DEU").style("opacity","0.2");
      d3.selectAll("#GRC").style("opacity","0.2");
      d3.selectAll("#ISL").style("opacity","0.2");
      d3.selectAll("#IRL").style("opacity","0.2");
      d3.selectAll("#ITA").style("opacity","0.2");
      d3.selectAll("#LUX").style("opacity","0.2");
      d3.selectAll("#NLD").style("opacity","0.2");
      d3.selectAll("#NOR").style("opacity","0.2");
      d3.selectAll("#PRT").style("opacity","0.2");
      d3.selectAll("#ESP").style("opacity","0.2");
      d3.selectAll("#SWE").style("opacity","0.2");
      d3.selectAll("#CHE").style("opacity","0.2");
      d3.selectAll("#GBR").style("opacity","0.2");
      

      d3.selectAll("#AUSC").attr("visibility","hidden");
      d3.selectAll("#AUTC").attr("visibility","hidden");
      d3.selectAll("#BELC").attr("visibility","hidden");
      d3.selectAll("#CANC").attr("visibility","hidden");
      d3.selectAll("#DNKC").attr("visibility","hidden");
      d3.selectAll("#FINC").attr("visibility","hidden");
      d3.selectAll("#FRAC").attr("visibility","hidden");
      d3.selectAll("#DEUC").attr("visibility","hidden");
      d3.selectAll("#GRCC").attr("visibility","hidden");
      d3.selectAll("#ISLC").attr("visibility","hidden");
      d3.selectAll("#IRLC").attr("visibility","hidden");
      d3.selectAll("#ITAC").attr("visibility","hidden");
      d3.selectAll("#LUXC").attr("visibility","hidden");
      d3.selectAll("#NLDC").attr("visibility","hidden");
      d3.selectAll("#NORC").attr("visibility","hidden");
      d3.selectAll("#PRTC").attr("visibility","hidden");
      d3.selectAll("#ESPC").attr("visibility","hidden");
      d3.selectAll("#SWEC").attr("visibility","hidden");
      d3.selectAll("#CHEC").attr("visibility","hidden");
      d3.selectAll("#GBRC").attr("visibility","hidden");
      d3.selectAll("#JPNC").attr("visibility","hidden");
      d3.selectAll("#USAC").attr("visibility","hidden");

      d3.select("#JPN").style("stroke", "#2140C4").style("opacity","1").style("stroke-width",3);
      d3.select("#USA").style("stroke", "red").style("opacity","1").style("stroke-width",3);
      d3.selectAll("#linetext2").style("opacity", "1");
      d3.selectAll("#linebutton2").style("opacity", "0");
    });

  svg4
    .append("line")
    .attr("x1", 154)
    .attr("y1", 498)
    .attr("x2", 160)
    .attr("id", "linebutton2")
    .attr("y2", 503)
    .style("stroke", "black")
    .style("opacity", 1)
    .style("stroke-width", 0.5);

  svg4
    .append("rect")
    .attr("x", 1070)
    .attr("y", 120)
    .attr("width", 80)
    .attr("id", "linetext2")
    .attr("height", 20)
    .style("opacity", 0)
    .style("fill", "black")
    .style("stroke-width", 0.5);

  svg4

    .append("text")
    .attr("x", 1090)
    .attr("y", 135)
    .attr("id", "linetext2")
    .style("opacity", 0)
    .style("fill", "white")
    .attr("font-size", "10")
    .text("JAP: 83.37");
  svg4
    .append("line")
    .attr("x1", 1150)
    .attr("y1", 180)
    .attr("x2", 1150)
    .attr("id", "linetext2")
    .style("opacity", 0)
    .attr("y2", 120)
    .style("stroke", "black");

  svg4
    .append("circle")
    .attr("cx", 1150)
    .attr("cy", 180)
    .attr("r", "6")
    .style("opacity", 0)
    .attr("id", "linetext2")
    .style("fill", "black");

    
  svg4
    .append("rect")
    .attr("x", 1070)
    .attr("y", 310)
    .attr("width", 80)
    .attr("id", "linetext2")
    .attr("height", 20)
    .style("opacity", 0)
    .style("fill", "black")
    .style("stroke-width", 0.5);

  svg4

    .append("text")
    .attr("x", 1090)
    .attr("y", 325)
    .attr("id", "linetext2")
    .style("opacity", 0)
    .style("fill", "white")
    .attr("font-size", "10")
    .text("USA: 78.8");
  svg4
    .append("line")
    .attr("x1", 1150)
    .attr("y1", 250)
    .attr("x2", 1150)
    .attr("id", "linetext2")
    .style("opacity", 0)
    .attr("y2", 310)
    .style("stroke", "black");

  svg4
    .append("circle")
    .attr("cx", 1150)
    .attr("cy", 250)
    .attr("r", "6")
    .style("opacity", 0)
    .attr("id", "linetext2")
    .style("fill", "black");

  svg4
    .append("line")
    .attr("x1", 166)
    .attr("y1", 498)
    .attr("x2", 160)
    .attr("id", "linebutton2")
    .attr("y2", 503)
    .style("stroke", "black")
    .style("stroke-width", 0.5);
});
