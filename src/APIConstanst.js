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
    if (launch_success) {
      queryUrl = `&launch_success=${launch_success}`;
    }
    if (launch_year) {
      queryUrl += `&launch_year=${launch_year}`;
    }
    if (land_success) {
      queryUrl += `&land_success=${land_success}`;
    }
    return baseUrl + queryUrl;
  };
}

export default APIConstants;
