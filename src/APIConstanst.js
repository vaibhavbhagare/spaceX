class APIConstants {
  static getDefaultData = (limit) =>
    `https://api.spaceXdata.com/v3/launches?limit=${limit}`;

  static getFilteredData = (
    limit,
    launch_success,
    launch_year,
    land_success
  ) => {
    let baseUrl = `https://api.spaceXdata.com/v3/launches?limit=${limit}`;
    let queryUrl = "";
    if (launch_success && launch_success !== "null") {
      queryUrl = `&launch_success=${launch_success}`;
    }
    if (launch_year && launch_year !== "null") {
      queryUrl += `&launch_year=${launch_year}`;
    }
    if (land_success && land_success !== "null") {
      queryUrl += `&land_success=${land_success}`;
    }
    return baseUrl + queryUrl;
  };

  static yearList = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
}

export default APIConstants;
