let Cultnight = () => {
  return ( <>
    <div id="flashmob" className="container" style={{
      backgroundColor: "#212529",
      padding: "20px",
      marginTop: "1.2rem",
      color:"white",
      borderRadius: "10px",
      boxShadow: "5px 5px 10px 0 rgba(0,0,0,0.1)"
    }}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div id="mob_title" className="para2" style={{  fontSize: "2.3rem",marginLeft:"3rem", color: "#FFC107" }}>
          Cult Night
        </div>
        <img
          id="video-content"
          style={{
            border: "3px solid #FFC107",
            width: "100%",
            height: "auto",
            maxWidth: "800px",
          }}
          src="./cultnight1.jpeg"
         
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        />
      </div>
      <br />
      <p className="para3" style={{ fontSize: "20px", color: "white" }}>
      "Cult night" typically refers to an event or gathering centered around the celebration or exploration of cult films, music, or other cultural phenomena. Participants often dress up as characters from cult classics, engage in themed activities, and indulge in shared appreciation for niche or underground cultural icons.
      </p>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ9P17C3KgSwsO-6OobQ4TNB5IeQdJWPWFXqbWty61kqxLkQ/viewform?embedded=true" className="btn btn-primary vish btn-dark" style={{backgroundColor: "#FFC107", color: "black", borderRadius: "10px", padding: "10px 20px"}}>Register</a>
      </div>
    </div>

  </>)
}
export default Cultnight;