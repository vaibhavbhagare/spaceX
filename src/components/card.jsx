const CardBox = ({ cardInfo }) => {
  const handleLandSuccess = (rocket) => {
    let str = "";
    if (rocket.first_stage && rocket.first_stage.cores) {
      if (rocket.first_stage.cores.length > 0) {
        str = rocket.first_stage.cores[0].land_success;
      }
    }
    return str;
  };
  return (
    <div className="  h-100">
      <div className="card" key={cardInfo.flight_number + "card"}>
        <div className="card-body" key={cardInfo.flight_number + "body"}>
          <img
            className="card-img-main"
            src={cardInfo.links.mission_patch_small}
            alt="demo"
          />
          <h6 className="card-title" key={cardInfo.flight_number + "name"}>
            {cardInfo.mission_name} #{cardInfo.flight_number}
          </h6>
          <div>
            <h6 className="card-title-black">Mission Ids:</h6>
            <ul className="sm-text">
              {cardInfo.mission_id && cardInfo.mission_id.length > 0 ? (
                cardInfo.mission_id.map((id, i) => {
                  return <li key={id + "m_id"}>{id || "-"}</li>;
                })
              ) : (
                <li key={"m_id"}>Mission id not present.</li>
              )}
            </ul>
          </div>

          <div>
            <h6
              className="card-title-black"
              key={cardInfo.flight_number + "year"}
            >
              Launch year:{" "}
              <span className="sm-text">{cardInfo.launch_year}</span>
            </h6>
          </div>

          <div>
            <h6
              className="card-title-black"
              key={cardInfo.flight_number + "success"}
            >
              Successfully Launch:{" "}
              <span className="sm-text">
                {cardInfo.launch_success ? "True" : "False"}
              </span>
            </h6>
          </div>

          <div>
            <h6
              className="card-title-black"
              key={cardInfo.flight_number + "lading"}
            >
              Successfully Landing:{" "}
              <span className="sm-text">
                {handleLandSuccess(cardInfo.rocket) ? "True" : "False"}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
