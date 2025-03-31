let Organizing = () => {
  return (
    <>
    <div className="container" style={{ padding: "1rem", maxWidth: "1200px", marginTop:"6rem",margin: "0 auto",display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="flex-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: "700px" }}>
        
        <div className="flex-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "2rem 0" }}>
          <div className="card mb-3" style={{ margin: "1rem auto", flex: "1 1 200px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <div className="cir">
              <img src="/hod1.jpg" style={{ width: "100%", height: "320px", objectFit: "cover" }} className="card-img" alt="..." />
            </div>
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title hod" style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Dr. S.Suresh Kumar</h5>
              <p className="card-text" id="convenor" style={{ fontWeight: "400", color: "#555", fontSize: "1.2rem" }}>Convenor,Head of the Department TT</p>
            </div>
          </div>
        </div>
        <div className="flex-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "2rem 0" }}>
          <div className="card mb-3" style={{ flex: "1 1 200px", margin: "1rem", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <div className="cir">
              <img src="/rajeshsir.jpeg" style={{ width: "100%", height: "auto", objectFit: "cover" }} className="card-img" alt="..." />
            </div>
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title hod" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>Mr. B. Rajesh</h5>
              <p className="card-text" id="convenor" style={{ fontWeight: "400", color: "#555" }}>Asst.Prof(C),Dept. of IT,JNTUH UCEJ IT</p>
            </div>
          </div>
          <div className="card mb-3" style={{ flex: "1 1 200px", margin: "1rem", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <div className="cir">
              <img src="/rajashekarsir.jpeg" style={{ width: "100%", height: "auto", objectFit: "cover" }} className="card-img" alt="..." />
            </div>
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title hod" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>Mr. T. Rajashekar</h5>
              <p className="card-text" id="convenor" style={{ fontWeight: "400", color: "#555" }}>Asst.Prof(C),Dept. of IT,JNTUH UCEJ IT</p>
            </div>
          </div>

        <div className="flex-container" style={{ maxWidth:"1200px",display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "2rem 0" }}>
          {/* Fest Coordinators Card */}
          <div className="card border-light mb-3" style={{ flex: "1 1 300px", border: "3px solid black", margin: "1rem" }}>
            <div className="card-header" style={{ borderBottom: "3px solid black", backgroundColor: "#f8f9fa" }}>Fest Coordinators</div>
            <div className="card-body" style={{ padding: "1rem" }}>
              <h5 className="card-title rvj123">P.RAMVISHWAJITHIN - <a href="tel:9573878001">9573878001</a></h5>
              <hr />
              <h5 className="card-title chandu">K.GOPI CHANDU - <a href="tel:9381258872">9381258872</a></h5>
              <hr />
              <h5 className="card-title">U.SRAVANI - <a href="tel:6300766407">6300766407</a></h5>
              {/* <h5 className="card-title">S.Sacharitha - <a href="tel:8309582012">8309582012</a></h5> */}
            </div>
          </div>

          {/* Technical Coordinators Card */}
          <div className="card border-light mb-3" style={{ flex: "1 1 300px", maxWidth:"1200px",border: "3px solid black", margin: "1rem" }}>
            <div className="card-header" style={{ borderBottom: "3px solid black", backgroundColor: "#f8f9fa" }}>Technical Coordinators</div>
            <div className="card-body" style={{ padding: "1rem" }}>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Project Expo</h5>
              <h5 className="card-title pavan">G.PavanKarthik - <a href="tel:8555985891">8555985891</a></h5>
              <h5 className="card-title gouthami">D.Gouthami - <a href="tel:7569644162">7569644162</a></h5>
              <hr />
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Code-a-thon</h5>
              <h5 className="card-title arun">T.Arun Kumar - <a href="tel:7013438187">7013438187</a></h5>
              <h5 className="card-title Slikitha">M.Slikitha - <a href="tel:6305276992">6305276992</a></h5>
              <hr />
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Quiz-Divas</h5>
              <h5 className="card-title Deepak">N.Sai Deepak - <a href="tel:6302673958">6302673958</a></h5>
              <h5 className="card-title">T.Manvitha - <a href="tel:7993568957">7993568957</a></h5>
              <hr />
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Vishleshan</h5>
              <h5 className="card-title">Ch.Sai Sri - <a href="tel:9700456333">9700456333</a></h5>
              <h5 className="card-title sandeep">R.Sandeep - <a href="tel:7893079954">7893079954</a></h5>
            </div>
          </div>

          {/* NonTechnical Coordinators Card */}
          <div className="card border-light mb-3" style={{ flex: "1 1 300px", border: "3px solid black", margin: "1rem" }}>
            <div className="card-header" style={{ borderBottom: "3px solid black", backgroundColor: "#f8f9fa" }}>NonTechnical Coordinators</div>
            <div className="card-body" style={{ padding: "1rem" }}>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Project Expo</h5>
              <h5 className="card-title pavan">G.PavanKarthik - <a href="tel:8555985891">8555985891</a></h5>
              <h5 className="card-title gouthami">D.Gouthami - <a href="tel:7569644162">7569644162</a></h5>
              <hr />
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Code-a-thon</h5>
              <h5 className="card-title arun">T.Arun Kumar - <a href="tel:7013438187">7013438187</a></h5>
              <h5 className="card-title Slikitha">M.Slikitha - <a href="tel:6305276992">6305276992</a></h5>
              <hr />
              <h5 className="card-title" style={{ fontWeight: "bold" }}>Quiz-Divas</h5>
              <h5 className="card-title Deepak">N.Sai Deepak - <a href="tel:6302673958">6302673958</a></h5>
              <h5 className="card-title">T.Manvitha - <a href="tel:7993568957">7993568957</a></h5>
              <hr />
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
    </>

  );
};

export default Organizing;

