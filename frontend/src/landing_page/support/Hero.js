import React from "react";

function Hero() {
  return (
    <section className="container -fluid " id="supporthero">
      <div className="p-5 " id="supportwrapper">
        <h4>Support portal</h4>
        <a href="">Track Tickets</a>
        </div>
        <div className="row p-3 m-3">
          <div className="col-6 p-3 ">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              placeholder="
Eg: how do i activate F&O, why is my order getting rejected ..."
            /><br/>
            <a href=" ">Track account opening </a>
            <a href=" "> Track segment activation </a>
            <a href=" "> Intraday margins </a>
            <a href=" "> Kite user manual</a>
          </div>
          <div className="col-6 ">
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href=" ">Track account opening </a> <br/></li>
                <li><a href=" "> Track segment activation </a></li>
            </ol>
            
          </div>
        </div>
      
    </section>
  );
}

export default Hero;
