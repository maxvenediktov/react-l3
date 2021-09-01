import React from "react";

function Menu() {
  return ( <
      div id = "prices" >
      <
      h2 > Rates < /h2> <
      p > Pay us as much as you want.The main thing is to pay: -) < /p> <
    ul className = "tariff" >
    <
    li className = "tariff-name" > Basic < /li> <
    li > < span className = "important" > 10 < /span> likes</li >
    <
    li > < span className = "important" > 10 < /span> reposts</li >
    <
    li > < span className = "important" > 10 < /span> comments</li >
    <
    li > < span className = "important" > And more important < /span> paragraph</li >
    <
    li >
    <
    p className = "price" > 25 dollars < /p> <
    p className = "period" > a day < /p> <
    /li> <
    li >
    <
    a href = "#" > Buy < /a> <
    /li> <
    /ul> <
    ul className = "tariff" >
    <
    li className = "tariff-name best" > Pro < /li> <
    li > < span className = "important" > 20 < /span> likes</li >
    <
    li > < span className = "important" > 20 < /span> reposts</li >
    <
    li > < span className = "important" > 20 < /span> comments</li >
    <
    li > < span className = "important" > Even more important < /span> paragraph</li >
    <
    li >
    <
    p className = "price" > 50 dollars < /p> <
    p className = "period" > a day < /p> <
    /li> <
    li >
    <
    a href = "#" > Buy < /a> <
    /li> <
    /ul> <
    ul className = "tariff" >
    <
    li className = "tariff-name" > Prenium < /li> <
    li > < span className = "important" > 50 < /span> likes</li >
    <
    li > < span className = "important" > 50 < /span> reposts</li >
    <
    li > < span className = "important" > 50 < /span> comments</li >
    <
    li > < span className = "important" > Super more important < /span> paragraph</li >
    <
    li >
    <
    p className = "price" > 100 dollars < /p> <
    p className = "period" > a day < /p> <
    /li> <
    li >
    <
    a href = "#" > Buy < /a> <
    /li> <
    /ul> <
    /div>
);
}

export default Menu;
