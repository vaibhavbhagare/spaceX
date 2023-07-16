import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import APIConstants from "../APIConstanst";
import Filter from "./filter";
import CardBox from "./card";
import CustomSpinner from "./customSpinner";
import { useNavigate, useParams } from "react-router-dom";

function MainDashboard() {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selSuccessfulLunch, setSelSuccessfulLunch] = useState(null);
  const [selSuccessfulLanding, setSelSuccessfulLanding] = useState(null);
  let navigate = useNavigate();

  const { year, lunch, landing } = useParams();

  useEffect(() => {
    if (year || lunch || landing) {
      year && setSelectedYear(year || null);
      lunch && setSelSuccessfulLunch(lunch || null);
      landing && setSelSuccessfulLanding(landing || null);
    } else {
      getDefaultData();
    }
  }, []);

  useEffect(() => {
    if (selectedYear || selSuccessfulLunch || selSuccessfulLanding) {
      navigateOnSelect();
      onFilterAPICall();
    }
  }, [selectedYear, selSuccessfulLunch, selSuccessfulLanding]);

  const getDefaultData = () => {
    const baseURL = APIConstants.getDefaultData(100);
    setLoading(true);
    axios.get(baseURL).then((response) => {
      setLoading(false);
      if (response.data && response.data.length > 0) {
        const resList = response.data;
        setCardList(resList);
      }
    });
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  };

  const handleSelectLunch = (value) => {
    setSelSuccessfulLunch(value);
  };

  const handleSelectLanding = (value) => {
    setSelSuccessfulLanding(value);
  };

  const onFilterAPICall = () => {
    const baseURL = APIConstants.getFilteredData(
      100,
      selSuccessfulLunch,
      selectedYear,
      selSuccessfulLanding
    );
    setLoading(true);
    axios.get(baseURL).then((response) => {
      if (response.data && response.data.length > 0) {
        const resList = response.data;
        setCardList(resList);
      } else {
        setCardList([]);
      }
      setLoading(false);
    });
  };

  const clearFilter = () => {
    setSelectedYear(null);
    setSelSuccessfulLunch(null);
    setSelSuccessfulLanding(null);
    getDefaultData();
    navigate("/");
  };

  const navigateOnSelect = () => {
    navigate(
      `/dashboard/${selectedYear}/${selSuccessfulLunch}/${selSuccessfulLanding}`
    );
  };

  return (
    <div className="App">
      <Container>
        <h4 className="fw-bold">SpaceX Lunch Programs</h4>

        <Row>
          <Col lg="2">
            <Filter
              yearList={APIConstants.yearList}
              selectedYear={selectedYear}
              handleSelectYear={handleSelectYear}
              selSuccessfulLunch={selSuccessfulLunch}
              handleSelectLunch={handleSelectLunch}
              selSuccessfulLanding={selSuccessfulLanding}
              handleSelectLanding={handleSelectLanding}
              clearFilter={clearFilter}
              loading={loading}
            />
          </Col>
          <Col lg="10">
            <Row>
              {cardList && cardList.length > 0 ? (
                cardList.map((cardInfo) => {
                  return (
                    <Col lg="3" md="3" key={cardInfo.flight_number + "col"}>
                      <CardBox cardInfo={cardInfo} />
                    </Col>
                  );
                })
              ) : (
                <div>
                  {loading ? (
                    <h1 className="flex-middle">Loading...</h1>
                  ) : (
                    <h6 className="flex-middle">No data found(s).</h6>
                  )}
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      {loading && <CustomSpinner />}
    </div>
  );
}

export default MainDashboard;
