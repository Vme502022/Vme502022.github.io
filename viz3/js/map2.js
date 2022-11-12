var svg3 = d3
  .select("#usa2")
  .append("svg")
  .attr("preserveAspectRatio", "xMidYMid meet")
  .attr("viewBox", "0 0 800 400");

var width = 800;
var height = 500;

var projection = d3.geo
  .albersUsa()
  .translate([width * 0.63, height*0.46]) // translate to center of screen
  .scale([420]); // scale things down so see entire US

var path = d3.geo
  .path() // path generator that will convert GeoJSON to SVG paths
  .projection(projection); // tell path generator to use albersUsa projection

const tooltip2 = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .style("padding", "5px")
  .style("background", "rgba(0,0,0,0.6)")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("color", "#fff");

d3.csv("./csv/stateslived3.csv", function (data) {
  d3.json("./csv/us-states.json", function (json) {
    // Loop through each state data value in the .csv file
    for (var i = 0; i < data.length; i++) {
      // Grab State Name
      var dataState = data[i].state;

      // Grab data value
      var dataValue = data[i].visited;

      // Find the corresponding state inside the GeoJSON
      for (var j = 0; j < json.features.length; j++) {
        var jsonState = json.features[j].properties.name;
        if (dataState == jsonState) {
          // Copy the data value into the JSON
          json.features[j].properties.visited = dataValue;

          // Stop looking through the JSON
          break;
        }
      }
    }
    svg3
      .selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", function (d) {
        return "State";
      })
      .style("stroke", "#fff")
      .style("stroke-width", "0.3")
      .style("fill", function (d) {
        // Get data value
        var value = d.properties.visited;
        console.log(value);
        if (value > 3 && value < 4) {
          //If value exists…
          return "#DBDBDB";
          //return color(value);
        } else if (value >= 4 && value < 5) {
          return "#C3C3C3";
        } else if (value >=5 && value <= 6) {
          return "#A6A6A6";
        } else if (value > 6 && value <= 7) {
          return "#8D8D8D";
        } else if (value > 7 && value <= 8) {
          return "#737373";
        } else if (value > 8 && value <= 9) {
          return "#585858";
        } else if (value > 9 && value <=10) {
          return "#2A2A2A";
        }
      })
      .on("mouseover", function (d) {
        console.log(d.properties.name);
        tooltip2
          .html(d.properties.name + ":" + d.properties.visited)
          .style("visibility", "visible");
        d3.selectAll(".State").transition().duration(200).style("opacity", 0.9);
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", 1)
          .style("stroke", "white")
          .style("stroke-width",1);
      })
      .on("mousemove", function () {
        tooltip2
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip2.html(``).style("visibility", "hidden");
        d3.selectAll(".State").style("opacity", 1).style("stroke-width",0.3);;
      });

    svg3
      .append("circle")
      .attr("cx", 80)
      .attr("cy", 317)
      .attr("r", 8)
      .attr("id","button2")
      .style("stroke", "#fff")
      .style("stroke-width", "0.5")
      .attr("fill", "#464646")
      .on("click", function () {
        newOpacity = 0.3;
        d3.selectAll("#button2").style("opacity", 0);
        d3.selectAll("#circledot2").style("visibility", "visible");
        d3.selectAll("#circledot2").style("opacity", 1);
        d3.selectAll("#annotationmap2").style("opacity", 0);
        d3.selectAll("#annotationmap3").style("opacity", 1);
        d3.selectAll("#annotationmap4").style("opacity", 1);
      });

    svg3
      .append("line")
      .attr("x1", 75)
      .attr("y1", 315)
      .attr("x2", 80)
      .attr("id","button2")
      .attr("y2", 320)
      .style("stroke", "white")
      .style("stroke-width", 0.4);

  

    svg3
      .append("line")
      .attr("x1", 85)
      .attr("y1", 315)
      .attr("id","button2")
      .attr("x2", 80)
      .attr("y2", 320)
      .style("stroke", "white")
      .style("stroke-width", 0.4);


    var texts = [
      "The trend in %change in life   ",
      "expectancy by state from 1980  ",
      "to 2014 is similar to the trend",
      "in life expectancy values, and ",
      "from previous socioeconomic ",
      "analyses, it is speculated that ",
      "the factors responsible for the ",
      "large differences may be ",
      "poverty, race, and behavioral",
      "factors such as poor diet and",
      "infrequent exercise."
    ];
    var text = svg3
      .append("text")
      .attr("x", 20)
      .attr("y", 130)
      .attr("id", "annotationmap2")
      .attr("font-size", "10")
      .attr("font-family", "Marion")
      .style("display", "flex")
      .style("fill", "white")
      .style("opacity", 1);

    text
      .selectAll("tspan")
      .data(texts)
      .enter()
      .append("tspan")
      .attr("dy", "1.5em")
      .attr("x", text.attr("x"))

      .text(function (d) {
        return d;
      });


    var textss = [
      "The state with the largest increase in ",
      "life expectancy was New York, in the ",
      "northeast, and the state with the lowest ",
      "%change in life expectancy was",
      "Oklahoma, in the south-central US. ",
      "Historically, many states in the South",
      "have had concentrated poverty, as well",
      "as legacy issues of racism and ",
      "discrimination. In addition, according",
      "to background research, in some",
      "southern states, the lack of affordable",
      "health care may be one of the reasons ",
      "for the low %change in life expectancy",
      "of local people.",
    ];
    var text2 = svg3
      .append("text")
      .attr("x", 20)
      .attr("y", 135)
      .attr("id", "annotationmap3")
      .attr("font-size", "8")
      .attr("font-family", "Marion")
      .style("display", "flex")
      .style("fill", "white")
      .style("opacity", 0);

    text2
      .selectAll("tspan")
      .data(textss)
      .enter()
      .append("tspan")
      .attr("dy", "1.5em")
      .attr("x", text.attr("x"))

      .text(function (d) {
        return d;
      });

    const annotations = [
      {
        note: {
          title: "Lowest Oklahoma 3.38%",
          align: "right",
        },
        connector: {
          end: "none",
          type: "line",
          lineType: "vertical",
          padding: 10,
        },
        color: ["rgba(66, 66, 66, 1)"],
        size: ["10"],
        x: 512,
        y: 252,
        dy: 20,
        dx: -120,
      },
    ];
    const makeAnnotations = d3.annotation().annotations(annotations);
    svg3
      .append("g")
      .call(makeAnnotations)
      .attr("font-size", "6")
      .attr("stroke-weight", "3")
      .attr("id", "annotationmap4")
      .style("opacity", 0);

    const annotations2 = [
      {
        note: {
          title: "Highest NewYork 9.8%",
          align: "left",
        },
        connector: {
          end: "none",
          type: "line",
          lineType: "vertical",
          padding: 10,
        },
        color: ["rgba(66, 66, 66, 1)"],
        size: ["10"],
        x: 628,
        y: 207,
        dy: 80,
        dx: 0,
      },
    ];
    const makeAnnotations2 = d3.annotation().annotations(annotations2);
    svg3
      .append("g")
      .call(makeAnnotations2)
      .attr("font-size", "6")
      .attr("stroke-weight", "3")
      .attr("id", "annotationmap4")
      .style("opacity", 0);

    // Map the cities I have lived in!
    d3.csv("./csv/cities-lived4.csv", function (data) {
      svg3
        .selectAll("circledot2")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          console.log(projection(d.lon,d.lat));
          return projection([d.lon, d.lat])[0];
        })
        .attr("cy", function (d) {

          return projection([d.lon, d.lat])[1];
        })
        .attr("r", function (d) {
          return 4;
        })
        .attr("id", function (d) {
          return "circledot2";
        })
        .style("visibility", "hidden")
        .style("fill", function (d) {
          if (d.Value == 9.8) {
            return "#3DD68D";
          } else if(d.Value==3.38) {
            return "#3D71D6";
          }
        })
        .on("mouseover", function (d) {
          tooltip2.html(d.place + ":" + d.Value).style("visibility", "visible");
          d3.select(this);
        })
        .on("mousemove", function () {
          tooltip2
            .style("top", event.pageY - 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          tooltip2.html(``).style("visibility", "hidden");
          d3.select(this).attr("fill", "#85BCDC");
        });
    });

    // Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
  });
});

svg3
  .append("rect")
  .attr("x", -10)
  .attr("y", 110)
  .attr("width", 180)
  .attr("height", 230)
  .attr("rx", 6)
  .attr("fill", "#464646");
