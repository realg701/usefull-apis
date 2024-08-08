// An example script for redirecting users from USA to https://google.com/
// and users from Canada to https://google.ca/

// ip-api endpoint URL
// we need only the countryCode, but you can request more fields
// see http://ip-api.com/docs/api:json for documentation
// var endpoint =
//   "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     var response = JSON.parse(this.responseText);
//     if (response.status !== "success") {
//       console.log("query failed: " + response.message);
//       return;
//     }
//     // Redirect
//     if (response.countryCode == "PK") {
//       //   console.log(response.city);
//       //   return response.city;
//     }
//   }
// };

// xhr.open("GET", endpoint, true);
// xhr.send();

// let fetchRes = fetch(endpoint);

// FetchRes is the promise to resolve
// it by using.then() method
// const city = fetchRes
//   .then((res) => res.json())
//   .then((d) => {
//     return d.city;
//   });

// console.log(city);
// let miro;
// async function foo() {
//   const res = await fetch(endpoint);
//   const result = await res.json();
//   miro = result.city;
//   return miro;
// }
// console.log(foo());

// async function fetchData() {
//   let response = await fetch(endpoint);
//   let data = await response.json();
//   data = JSON.stringify(data);
//   data = JSON.parse(data);
//   return data;
// }

// async function main() {
//   let abc = await fetchData();
//   let city = abc.city;
//   return city;
// }

// console.log(main());

// An example script for redirecting users from USA to https://google.com/
// and users from Canada to https://google.ca/

// ip-api endpoint URL
// we need only the countryCode, but you can request more fields
// see http://ip-api.com/docs/api:json for documentation
// var endpoint =
//   "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     var response = JSON.parse(this.responseText);
//     if (response.status !== "success") {
//       console.log("query failed: " + response.message);
//       return;
//     }
//     // Redirect
//     if (response.countryCode == "PK") {
//       window.location.replace("https://google.com/");
//       return response;
//     }
//     if (response.countryCode == "CA") {
//       window.location.replace("https://google.ca/");
//     }
//   }
// };

// xhr.open("GET", endpoint, true);
// xhr.send();

// console.log();
let endpoint =
  "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";

async function GetData() {
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
} // call the function

console.log(GetData());

async function GetData() {
  const request = await fetch(endpoint, { method: "GET" });
  const response = await request.json();
  console.log(response);
}

GetData(); // call the function

// var endpoint =
//       "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";

//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         var response = JSON.parse(this.responseText);
//         if (response.status !== "success") {
//           console.log("query failed: " + response.message);
//           return;
//         }
//         // Redirect
//         if (response.city != "Ontario") {
//           console.log("You're not from Ontario");
//           window.location.replace("/");
//         }
//       }
//     };

//     xhr.open("GET", endpoint, true);
//     xhr.send();
