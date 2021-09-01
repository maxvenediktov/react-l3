import React from "react";
import Member1 from "../images/member1.jpg";
import Member2 from "../images/member2.jpg";
import Member3 from "../images/member3.jpg";
import Member4 from "../images/member4.jpg";

function Team () {
  return (
    <div id="team">
      <h2>Team</h2>
      <p>You shouldn't bend under the changing world</p>
      <div className="member">
        <img src={Member1}/>
        <h3>John Dimm</h3>
        <p className="position">Director</p>
        <p className="description">
          I love to create high-tech products and bring them to new markets.
        </p>
        <a href="mailto:hello@hwschool.online">Text me</a>
      </div>
      <div className="member">
        <img src={Member2}/>
        <h3>Stella Notel</h3>
        <p className="position">Designer</p>
        <p className="description">
         I can't imagine my life without design, it hurts me when I see something ugly.
        </p>
        <a href="mailto:hello@hwschool.online">Text me</a>
      </div>
      <div className="member">
        <img src={Member3}/>
        <h3>Josef Hendriks</h3>
        <p className="position">Security Director</p>
        <p className="description">
          A fly won't slip by me, let alone a hacker via WiFi.
        </p>
        <a href="mailto:hello@hwschool.online">Text me</a>
      </div>
      <div className="member">
        <img src={Member4}/>
        <h3>Karl Smith</h3>
        <p className="position">Front-end developer</p>
        <p className="description">
          I love front-end development and create products that people use.
        </p>
        <a href="mailto:hello@hwschool.online">Text me</a>
      </div>
    </div>
  );
}

export default Team;
