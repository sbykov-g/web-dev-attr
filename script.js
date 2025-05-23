/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Device Atrributes Web API demo");

function webDeviceAttributes_getSerialNumber() {
  navigator.managed.getSerialNumber().then(p => document.getElementById("result_serial_number").innerHTML = "Serial number: " + p);
}

function webDeviceAttributes_getAll() {
  navigator.managed.getAnnotatedAssetId()
    .then(o => document.getElementById("annotated_asset_id").innerHTML = "Annotated asset id: " + o)
    .catch((error) => {
      console.log(error);
      document.getElementById("annotated_asset_id").innerHTML = "getAnnotatedAssetId ERROR: " + error.message;
    });
  
  navigator.managed.getAnnotatedLocation()
    .then(o => document.getElementById("annotated_location").innerHTML = "Annotated location: " + o)
    .catch((error) => {
      console.log(error);
      document.getElementById("annotated_location").innerHTML = "getAnnotatedLocation ERROR: " + error.message;
    });
  
  navigator.managed.getDirectoryId()
    .then(o => document.getElementById("directory_id").innerHTML = "Directory id: " + o)
    .catch((error) => {
      console.log(error);
      document.getElementById("directory_id").innerHTML = "getDirectoryId ERROR: " + error.message;
    });
  
  navigator.managed.getHostname()
    .then(o => document.getElementById("hostname").innerHTML = "Hostname: " + o)
    .catch((error) => {
      console.log(error);
      document.getElementById("hostname").innerHTML = "getHostname ERROR: " + error.message;
    });
  
  navigator.managed.getSerialNumber()
    .then(o => document.getElementById("serial_number").innerHTML = "Serial number: " + o)
    .catch((error) => {
      console.log(error);
      document.getElementById("serial_number").innerHTML = "getSerialNumber ERROR: " + error.message;
    });
}
