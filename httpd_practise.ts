// Use of Json Server via Axios

import axios from "axios"

let getEmployees = () => {
    let promise: any = axios.get('http://localhost:3000/testData')
    promise.then((response) => console.log('get all employess : ',response.data));
    promise.catch((error) => console.log(error));

}

let getEmployee = (id:number) => {
    let promise: any = axios.get('http://localhost:3000/testData/'+id)
    promise.then((response) => console.log(response.data));
    promise.catch((error) => console.log(error));

}

let addEmployee = (empObj) => {
    let promise: any = axios.post('http://localhost:3000/testData/', empObj)
    promise.then((response)=> console.log('Data saved successfully, response: ', response.data))
    promise.catch((error)=> console.log('Data saving failed, with reason: ', error.response))

    console.log('Checking employess')
    getEmployee(empObj.id)
}

getEmployees()
// addEmployee({"id":1, "name": "Avneesh"})
addEmployee({"id":4, "name": "Avneesh"})
// addEmployee({"id":3, "name": "Avneesh"})