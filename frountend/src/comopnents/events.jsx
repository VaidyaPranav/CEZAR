import { Link } from "react-router-dom";

let Events = () => {
  return ( <>
  <div className="events">
    <h1 className="events-title">Upcoming Events</h1>
    <div className="events-buttons">
      <Link to="/technical" className="events-button btn btn-primary">
        <i className="bi bi-cpu"></i> Technical Events
      </Link>
      <Link to="/nontechnical" className="events-button btn btn-success">
        <i className="bi bi-people"></i> Non-Technical Events
      </Link>
      <Link  to="/flashmob" className="events-button btn btn-warning">
        <i className="bi bi-music-note-beamed"></i> Flash Mob
      </Link>
      <Link  to="/cultnight" className="events-button btn btn-info">
        <i className="bi bi-lightning"></i> Cult Night
      </Link>
    </div>
  </div>
  <style jsx>{`
    .events {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .events-title {
      font-family: 'Lobster', cursive;
      font-size: 50px;
      color: white;
      margin-bottom: 20px;
    }
    .events-buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .events-button {
      padding: 10px 20px;
    }
  `}</style>
  </>)
}
export default Events;