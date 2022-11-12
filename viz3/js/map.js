var svg2 = d3
  .select("#usa")
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

const tooltip = d3
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

d3.csv("./csv/stateslived2.csv", function (data) {
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
    svg2
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
        if (value > 74.5 && value < 75) {
          //If value exists…
          return "rgba(152, 200, 238, 1)";
          //return color(value);
        } else if (value > 75 && value < 76) {
          return "rgba(152, 200, 238, 1)";
        } else if (value > 76 && value <= 77) {
          return "rgba(146, 196, 238, 1)";
        } else if (value > 77 && value <= 78) {
          return "rgba(97, 172, 232, 1)";
        } else if (value > 78 && value <= 79) {
          return "rgba(66, 143, 211, 1)";
        } else if (value > 79 && value <= 80) {
          return "rgba(47, 111, 178, 1)";
        } else if (value > 80 && value <= 81) {
          return "rgba(32, 85, 153, 1)";
        } else if (value > 81 && value <= 82) {
          return "rgba(22, 67, 135, 1)";
        }
      })
      .on("mouseover", function (d) {
        console.log(d.properties.name);
        tooltip
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
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.html(``).style("visibility", "hidden");
        d3.selectAll(".State").style("opacity", 1).style("stroke-width",0.3);;
      });

    svg2
      .append("circle")
      .attr("cx", 80)
      .attr("cy", 300)
      .attr("id","button1")
      .attr("r", 8)
      .style("stroke", "#fff")
      .style("stroke-width", "0.5")
      .attr("fill", "#3D71D6")
      .on("click", function () {
        newOpacity = 0.3;
        d3.selectAll("#button1").style("opacity",0);
        d3.selectAll("#circledot").style("visibility", "visible");
        d3.selectAll("#circledot").style("opacity", 1);
        d3.selectAll("#annotationtext").style("opacity", 0);
        d3.selectAll("#annotationtext2").style("opacity", 1);
        d3.selectAll("#annotation3").style("opacity", 1);
        d3.selectAll("#circles").style("opacity", 1);
      });

    svg2
      .append("line")
      .attr("x1", 75)
      .attr("y1", 298)
      .attr("id","button1")
      .attr("x2", 80)
      .attr("y2", 303)
      .style("stroke", "white")
      .style("stroke-width", 0.4);

  

    svg2
      .append("line")
      .attr("x1", 85)
      .attr("y1", 298)
      .attr("id","button1")
      .attr("x2", 80)
      .attr("y2", 303)
      .style("stroke", "white")
      .style("stroke-width", 0.4);

    var texts3 = [
      "*The top five states in life expectancy are shown in",
      "green, the bottom five are shown in yellow, and the",
      "larger the circle, the higher the ranking.",
    ];

    var text3 = svg2
      .append("text")
      .attr("x", 695)
      .attr("y", 330)
      .attr("id", "annotationtext2")
      .attr("font-size", "6")
      .attr("font-family", "Arial")
      .attr("text-anchor", "end")
      .style("fill", "#424242")
      .style("opacity", 0);

    text3
      .selectAll("tspan")
      .data(texts3)
      .enter()
      .append("tspan")
      .attr("dy", "1.5em")
      .attr("x", text3.attr("x"))
      .text(function (d) {
        return d;
      });

    svg2
      .append("rect")
      .attr("x", 700)
      .attr("y", 335)
      .attr("width", 3)
      .attr("height", 25)
      .attr("rx", 2)
      .attr("id", "annotation3")
      .style("opacity", 0)
      .attr("fill", "rgba(66, 66, 66, 1)");

    var texts = [
      "The health problems of the  ",
      "American people are becoming  ",
      "increasingly prominent. In",
      "2014, the average life expectancy ",
      "difference between states reached, ",
      "6.24 years and it is almost unable ",
      "to meet the standards of other ",
      "developed countries.",
    ];
    var text = svg2
      .append("text")
      .attr("x", 20)
      .attr("y", 150)
      .attr("id", "annotationtext")
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

    svg2
      .append("circle")
      .attr("id", "circles")
      .attr("cx", 14)
      .attr("cy", 145)
      .attr("r", 1.5)
      .attr("fill", "white")
      .style("opacity", 0);

    svg2
      .append("circle")
      .attr("id", "circles")
      .attr("cx", 14)
      .attr("cy", 180)
      .attr("r", 1.5)
      .attr("fill", "white")
      .style("opacity", 0);

    svg2
      .append("circle")
      .attr("id", "circles")
      .attr("cx", 14)
      .attr("cy", 216)
      .attr("r", 1.5)
      .attr("fill", "white")
      .style("opacity", 0);

    svg2
      .append("circle")
      .attr("id", "circles")
      .attr("cx", 14)
      .attr("cy", 251)
      .attr("r", 1.5)
      .attr("fill", "white")
      .style("opacity", 0);

    var textss = [
      "The states with the long life expectancy",
      "are concentrated in the northeastern and",
      "western regions.",
      "Hawaii had the highest life expectancy",
      "and was the only state with life expectancy",
      "of more than 81 years.",
      "Minnesota and California are close ,",
      "behind both with life expectancy over 80",
      "years.s",
      "The three neighboring states in the south",
      "have the lowest average life expectancy,",
      "all of which are less than 76 years.",
    ];
    var text2 = svg2
      .append("text")
      .attr("x", 20)
      .attr("y", 135)
      .attr("id", "annotationtext2")
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
          title: "Hawaii 80.82 Years",
          align: "right",
        },
        connector: {
          end: "none",
          type: "line",
          lineType: "vertical",
          padding: 4,
        },
        color: ["rgba(66, 66, 66, 1)"],
        size: ["10"],
        x: 447,
        y: 326,
        dy: 20,
        dx: -30,
      },
    ];
    const makeAnnotations = d3.annotation().annotations(annotations);
    svg2
      .append("g")
      .call(makeAnnotations)
      .attr("font-size", "6")
      .attr("stroke-weight", "3")
      .attr("id", "annotation3")
      .style("opacity", 0);

    const annotations2 = [
      {
        note: {
          title: "Mississippi 74.91 Years",
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
        x: 548,
        y: 275,
        dy: 20,
        dx: 90,
      },
    ];
    const makeAnnotations2 = d3.annotation().annotations(annotations2);
    svg2
      .append("g")
      .call(makeAnnotations2)
      .attr("font-size", "6")
      .attr("stroke-weight", "3")
      .attr("id", "annotation3")
      .style("opacity", 0);

    // Map the cities I have lived in!
    d3.csv("./csv/cities-livedmap.csv", function (data) {
      svg2
        .selectAll("circledot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          console.log(d.lon);
          return projection([d.lon, d.lat])[0];
        })
        .attr("cy", function (d) {
          return projection([d.lon, d.lat])[1];
        })
        .attr("r", function (d) {
          return 4;
        })
        .attr("id", function (d) {
          return "circledot";
        })
        .style("visibility", "hidden")
        .style("fill", function (d) {
          if (d.Value > 80) {
            return "rgba(10, 218, 185, 1)";
          } else {
            return "rgba(180, 253, 62, 1)";
          }
        })
        .on("mouseover", function (d) {
          tooltip.html(d.place + ":" + d.Value).style("visibility", "visible");
          d3.select(this);
        })
        .on("mousemove", function () {
          tooltip
            .style("top", event.pageY - 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          tooltip.html(``).style("visibility", "hidden");
          d3.select(this).attr("fill", "#85BCDC");
        });
    });

    // Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
  });
});

svg2
  .append("rect")
  .attr("x", -10)
  .attr("y", 110)
  .attr("width", 180)
  .attr("height", 210)
  .attr("rx", 6)
  .attr("fill", "#3D71D6");
