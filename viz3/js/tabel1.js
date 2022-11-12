// set the dimensions and margins of the graph

// set the dimensions and margins of the graph

var margin = {
    top: 40,
    right: 30,
    bottom: 40,
    left: 900,
  },
  widths = 1200 - margin.left - margin.right,
  heights = 600 - margin.top - margin.bottom;

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

///////////////////////////////////////////////////////////////
// Right part bar chart: social
//
//
//////////////////////////////////////////////////////////////

// append the svg object to the body of the page

// Parse the Data
d3.csv("./csv/health_social.csv", function (data) {
  var x = d3.scaleLinear().domain([0, 30]).range([0, widths]);
  var y = d3
    .scaleBand()
    .range([0, heights])
    .domain(
      data.map(function (d) {
        return d.Country;
      })
    )
    .padding(0.2);

  //Add tooltip element
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
    .style("color", "#fff")
    .text("a simple tooltip");

  // Add X axis
  let xAxisGenerator = d3.axisTop(x);
  // Customizations using the axis generator
  xAxisGenerator.ticks(4);
  xAxisGenerator.tickValues([0, 10, 20, 30]);
  xAxisGenerator.tickSize(heights);
  let xAxis = svg
    .append("g")
    .attr("transform", "translate(0,535)")
    .call(xAxisGenerator);
  // Customizations using the axis after it is called
  xAxis.select(".domain").remove();
  xAxis
    .selectAll(".tick:not(:first-of-type) line")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("opacity", "0.5")
    .attr("stroke-dasharray", "5");

  //Add Bars
  svg
    .selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0))
    .attr("y", function (d) {
      return y(d.Country) + 20;
    })
    .attr("width", function (d) {
      return x(d.Social);
    })
    .attr("height", y.bandwidth())
    .attr("fill", "#85BCDC")

    .on("mouseover", function (d, i) {
      tooltip.html(d.Country+":"+d.Social).style("visibility", "visible");
      d3.select(this).attr("fill", shadeColor("#85BCDC", -25));
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

  svg
    .append("g")
    .append("line")
    .attr("x1", 220)
    .attr("y1", 10)
    .attr("x2", 220)
    .attr("id", "aveline")
    .attr("y2", 550)
    .style("opacity", 0)
    .style("stroke", "black")
    .style("stroke-width", 1.5);

    svg
    .append("g")
    .append("circle")
    .attr("x1", 220)
    .attr("y1", 10)
    .attr("x2", 220)
    .attr("id", "aveline")
    .attr("y2", 550)
    .style("opacity", 0)
    .style("stroke", "black")
    .style("stroke-width", 1.5);

  svg
    .append("text")
    .attr("x", 200)
    .attr("y", 560)
    .attr("id", "annotationlinetext2")
    .attr("font-size", "12")
    .attr("font-family", "Marion")
    .style("display", "flex")
    .style("fill", "black")
    .text("AVE: 24.9%")
    .style("opacity", 0);




  svg
    .append("text")
    .attr("x", -180)
    .attr("y", 560)
    .attr("id", "annotationlinetext2")
    .attr("font-size", "12")
    .attr("font-family", "Marion")
    .style("display", "flex")
    .style("fill", "black")
    .text("AVE: 10.7%")
    .style("opacity", 0);

  // Add Y axis
  svg
    .append("g")
    .call(d3.axisLeft(y).tickSize(0))
    .attr("transform", "translate(-38,20)")
    .call((g) => g.select(".domain").remove())
    .style("text-anchor", "middle")
    .style("font-family", "system-ui");
});

////////////////////////////////////////////////////////////////////
//left part bar chart: Health
//
//
//
///////////////////////////////////////////////////////////////////

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz2")
  .append("svg")
  //.attr("preserveAspectRatio", "xMidYMid meet")
  //.attr("viewBox", "-300 -50 1800 800")
  .attr("width", widths + margin.left + margin.right)
  .attr("height", heights + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("./csv/health_social.csv", function (data) {
  var x = d3.scaleLinear().domain([0, 30]).range([0, widths]);
  var y = d3
    .scaleBand()
    .range([0, heights])
    .domain(
      data.map(function (d) {
        return d.Country;s
      })
    )
    .padding(0.2);

  //Add tooltip element
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
    .style("color", "#fff")
    .text("a simple tooltip");

  //Add Bars
  svg
    .selectAll("myRect2")
    .data(data)
    .enter()
    .append("rect")
    .attr("transform", "translate(-80,0)rotate(0)scale(-1 1)")
    .attr("x", x(0))
    .attr("y", function (d) {
      return y(d.Country) + 20;
    })
    .attr("width", function (d) {
      return x(d.Health);
    })
    .attr("height", y.bandwidth())
    .attr("fill", "#1D5094")

    .on("mouseover", function (d, i) {
      tooltip.html(d.Country+":"+d.Health).style("visibility", "visible");
      d3.select(this).attr("fill", shadeColor("#1D5094", -25));
    })
    .on("mousemove", function () {
      tooltip
        .style("top", event.pageY - 10 + "px")
        .style("left", event.pageX + 10 + "px");
    })
    .on("mouseout", function () {
      tooltip.html(``).style("visibility", "hidden");
      d3.select(this).attr("fill", "#1D5094");
    });
  svg
    .append("g")
    .append("circle")
    .attr("id", "aveline")
    .attr("cx", -240)
    .attr("opacity", "0")
    .attr("cy", 525)
    .attr("r", 6)
    .attr("fill", "black");


    svg
    .append("g")
    .append("line")
    .attr("x1", -174)
    .attr("y1", 10)
    .attr("x2", -174)
    .attr("id", "aveline")
    .attr("y2", 550)
    .style("stroke", "black")
    .style("opacity", 0)
    .style("stroke-width", 1.5);

  svg
    .append("g")
    .append("line")
    .attr("x1", -240)
    .attr("y1", 525)
    .attr("x2", -320)
    .attr("id", "aveline")
    .attr("y2", 525)
    .style("opacity", 0)
    .style("stroke", "black")
    .style("stroke-width", 0.5);
  svg
    .append("rect")
    .attr("x", -486)
    .attr("y", 515)
    .attr("width", 180)
    .attr("id", "aveline")
    .attr("height", 20)
    .style("opacity", 0)
    .style("fill", "black")
    .style("stroke-width", 0.5);
  svg
    .append("text")
    .attr("x", -480)
    .attr("y", 525)
    .attr("id", "aveline")
    .attr("font-size", "10")
    .attr("font-family", "Marion")
    .style("display", "flex")
    .style("fill", "white")
    .text("US has the highest health care spending")
    .style("opacity", 0);

  // Add X axis
  let xAxisGenerator = d3.axisTop(x);
  xAxisGenerator.ticks(3);
  xAxisGenerator.tickValues([0, 10, 20]);
  xAxisGenerator.tickSize(heights);
  let xAxis = svg
    .append("g")
    .attr("transform", `translate(0,${0})`)
    .attr("transform", "translate(-80,535)rotate(0)scale(-1 1)")
    .call(xAxisGenerator);
  // Customizations using the axis after it is called
  xAxis.select(".domain").remove();
  xAxis
    .selectAll(".tick:not(:first-of-type) line")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("opacity", "0.5")
    .attr("stroke-dasharray", "5");
  xAxis
    .selectAll(".tick text")
    .attr("transform", "translate(0,0)rotate(0)scale(-1 1)");
});

svg
  .append("circle")
  .attr("cx", -280)
  .attr("cy", -30)
  .attr("r", 6)
  .attr("fill", "#1D5094")
  .style("opacity", 1);

svg
  .append("text")
  .attr("x", -260)
  .attr("y", -27)
  .attr("fill", "#000000")
  .attr("font-size", "15")
  .attr("font-family", "Marion")
  .text("Spending on Health Care (% of GDP)")
  .style("opacity", 1);

svg
  .append("circle")
  .attr("cx", 20)
  .attr("cy", -30)
  .attr("r", 6)
  .attr("fill", "#91C3DF")
  .style("opacity", 1);

svg
  .append("text")
  .attr("x", 40)
  .attr("y", -27)
  .attr("fill", "black")
  .attr("font-size", "15")
  .attr("font-family", "Marion")
  .text("Spending on Social Program (% of GDP)")
  .style("opacity", 1);

var textlines = [
  "Statistically, all 22 developed countries ",
  "spend more on social programmes than on",
  "health care. In 2014, the average share of ",
  "social programmes in GDP was 14.2% ",
  "higher than that of health care. In Italy, ",
  "6.24 years and it is almost unable ",
  "the proportion was even as high as 19.7%.",
];

var textline = svg
  .append("text")
  .attr("x", -800)
  .attr("y", 80)
  .attr("id", "annotationlinetext")
  .attr("font-size", "17")
  .attr("font-family", "Marion")
  .style("display", "flex")
  .style("fill", "black")
  .style("opacity", 1);

textline
  .selectAll("tspan")
  .data(textlines)
  .enter()
  .append("tspan")
  .attr("dy", "1.7em")
  .attr("x", textline.attr("x"))
  .text(function (d) {
    return d;
  });

var textlines2 = [
  "Americans spend a far higher percentage",
  "of GDP on health care(18%) than any ",
  "other country, even almost twice as much ",
  "as Japan(9.53%). But this high  ",
  "expenditure has yet to result in their  ",
  "abnormal proportion of US spending on ",
  "health care and social programmes may ",
  "also be one of the reasons for the difficulty",
  "in increasing life expectancy in the US.",
];

var textline2 = svg
  .append("text")
  .attr("x", -800)
  .attr("y", 80)
  .attr("id", "annotationlinetext2")
  .attr("font-size", "17")
  .attr("font-family", "Marion")
  .style("display", "flex")
  .style("fill", "black")
  .style("opacity", 0);

textline2
  .selectAll("tspan")
  .data(textlines2)
  .enter()
  .append("tspan")
  .attr("dy", "1.7em")
  .attr("x", textline2.attr("x"))
  .text(function (d) {
    return d;
  });

svg
  .append("circle")
  .attr("cx", -670)
  .attr("id", "linebutton")
  .attr("opacity", "1")
  .attr("cy", 350)
  .attr("r", 12)
  .style("stroke", "black")
  .style("stroke-width", "0.7")
  .attr("fill", "white")
  .on("click", function () {
    newOpacity = 0.3;
    d3.selectAll("#annotationlinetext").style("opacity", "0");
    d3.selectAll("#aveline").style("opacity", "1");
    d3.selectAll("#annotationlinetext2").style("opacity", "1");
    d3.selectAll("#linebutton").style("opacity", "0");
  });

svg
  .append("line")
  .attr("x1", -676)
  .attr("y1", 348)
  .attr("x2", -670)
  .attr("id", "linebutton")
  .attr("y2", 354)
  .style("stroke", "black")
  .style("stroke-width", 0.5);

svg
  .append("line")
  .attr("x1", -664)
  .attr("y1", 348)
  .attr("x2", -670)
  .attr("id", "linebutton")
  .attr("y2", 354)
  .style("stroke", "black")
  .style("stroke-width", 0.5);
