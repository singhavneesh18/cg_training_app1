"use strict";
// Use of Json Server via Axios
exports.__esModule = true;
var axios_1 = require("axios");
var getEmployees = function () {
    var promise = axios_1["default"].get('http://localhost:3000/testData');
    promise.then(function (response) { return console.log('get all employess : ', response.data); });
    promise["catch"](function (error) { return console.log(error); });
};
var getEmployee = function (id) {
    var promise = axios_1["default"].get('http://localhost:3000/testData/' + id);
    promise.then(function (response) { return console.log(response.data); });
    promise["catch"](function (error) { return console.log(error); });
};
var addEmployee = function (empObj) {
    var promise = axios_1["default"].post('http://localhost:3000/testData/', empObj);
    promise.then(function (response) { return console.log('Data saved successfully, response: ', response.data); });
    promise["catch"](function (error) { return console.log('Data saving failed, with reason: ', error.response); });
    console.log('Checking employess');
    getEmployee(empObj.id);
};
getEmployees();
// addEmployee({"id":1, "name": "Avneesh"})
addEmployee({ "id": 4, "name": "Avneesh" });
// addEmployee({"id":3, "name": "Avneesh"})
