import "./Home.css";
import logoimg from "../../assets/imghuman.png";
import imgcode from "../../assets/Coding.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logoimg} className="img-thumbnail" />
        <span className="titel">Juthathip Boonjai,</span>
        &nbsp;
        Computer Science <br /> &nbsp; &nbsp;and Software Development Innovation 
        <br /> &nbsp; &nbsp;<span className="bi bi-check-all">&nbsp;Department Student</span> <b>(CSI)</b> <br />
        &nbsp;&nbsp; <span className="bi bi-check-all">&nbsp;School of Technology</span> <b>(SIT)</b> <br />
        &nbsp;&nbsp; <span className="bi bi-check-all">&nbsp;Sripatum University</span> <b>(SPU)</b> <br />
      </div>
      <div className="home-right">
          <h3 style={{margin:"0.5rem",fontSize:"1.5rem"}} className="badge bg-secondary">My Skill</h3><br />
          &nbsp;&nbsp;&nbsp;<span className="bi bi-balloon">&nbsp;<b>Web Technologies & Framework :</b> HTML5, CSS, PHP</span><br />
          &nbsp;&nbsp;&nbsp;<span className="bi bi-balloon">&nbsp;<b>WebScripts/UI :</b>  JavaScript, TypeScript, BootStrap</span><br />
          &nbsp;&nbsp;&nbsp;<span className="bi bi-balloon">&nbsp;<b>DataBase :</b> MySQL</span><br />
          &nbsp;&nbsp;&nbsp;<span className="bi bi-balloon">&nbsp;<b>Web Debug Tools :</b> Chrome developer tools</span><br />
          &nbsp;&nbsp;&nbsp;<span className="bi bi-balloon">&nbsp;<b>Versioning and Other tools :</b> Git, GitHub, Figma</span><br />
          <img src={imgcode} className="img-code"/>
      </div>
    </div>
  );
}

export default Home;
