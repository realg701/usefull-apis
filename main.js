// An example script for redirecting users from USA to https://google.com/
// and users from Canada to https://google.ca/

// ip-api endpoint URL
// we need only the countryCode, but you can request more fields
// see http://ip-api.com/docs/api:json for documentation
const endpoint =
  "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    if (response.status !== "success") {
      console.log("query failed: " + response.message);
      return;
    }
    // Redirect
    if (response.countryCode == "PK") {
      window.location.replace("https://google.com/");
      return response;
    }
    if (response.countryCode == "CA") {
      window.location.replace("https://google.ca/");
    }
  }
};

xhr.open("GET", endpoint, true);
xhr.send();

const fetchApi = async () => {
  const response = await fetch(
    `https://api.linkedin.com/v2/people/(id:{abdul-haseeb-qadir-6283a9275})`
  );
  const data = response.json();

  console.log(data, response);
};

// fetchApi();
