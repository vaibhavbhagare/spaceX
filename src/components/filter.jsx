import { Button } from "react-bootstrap";

const Filter = ({
  yearList,
  selectedYear,
  handleSelectYear,
  selSuccessfulLunch,
  handleSelectLunch,
  selSuccessfulLanding,
  handleSelectLanding,
  clearFilter,
  loading,
}) => {
  return (
    <div className="card">
      <h6 className="filter-title">
        Filter{" "}
        {(selectedYear || selSuccessfulLunch || selSuccessfulLanding) && (
          <span className="clear" onClick={clearFilter}>
            Clear X
          </span>
        )}
      </h6>

      <div className="card-body">
        <div className="lunch-lbl">Lunch Year</div>
        <div className="year-list">
          {yearList && yearList.length > 0 ? (
            yearList.map((year, index) => {
              return (
                <div className="d-year" key={index + "_flt"}>
                  <Button
                    className={selectedYear === year ? "active" : ""}
                    size="sm"
                    onClick={() => handleSelectYear(year)}
                    disabled={loading}
                  >
                    {year}
                  </Button>
                </div>
              );
            })
          ) : (
            <div>
              <h6 className="flex-middle">Loading...</h6>
            </div>
          )}
        </div>
      </div>

      <div className="card-body">
        <div className="lunch-lbl">Successful Lunch</div>
        <div className="year-list">
          <div className="d-year">
            <Button
              disabled={loading}
              className={selSuccessfulLunch === "true" ? "active" : ""}
              size="sm"
              onClick={() => handleSelectLunch("true")}
            >
              True
            </Button>
          </div>
          <div className="d-year">
            <Button
              disabled={loading}
              className={selSuccessfulLunch === "false" ? "active" : ""}
              size="sm"
              onClick={() => handleSelectLunch("false")}
            >
              False
            </Button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="lunch-lbl">Successful Landing</div>
        <div className="year-list">
          <div className="d-year">
            <Button
              disabled={loading}
              className={selSuccessfulLanding === "true" ? "active" : ""}
              size="sm"
              onClick={() => handleSelectLanding("true")}
            >
              True
            </Button>
          </div>
          <div className="d-year">
            <Button
              disabled={loading}
              className={selSuccessfulLanding === "false" ? "active" : ""}
              size="sm"
              onClick={() => handleSelectLanding("false")}
            >
              False
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
