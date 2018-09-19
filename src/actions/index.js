
const URL_ROOT = 'http://localhost:8000/api/mobiles/'
const URL_ROOT1 = 'http://localhost:3005/'

export function getCars(keyword){
   // console.log(`made a request with ${keyword}`)
    console.log(`${URL_ROOT1}/carsIndex?q=${keyword}`);

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keyword}`,{
    method:'GET'})
    .then(response => response.json())

    return {
         type:'SEARCH_CARS',
         payload:request
     }
}

export function getAllPhones(){
    // console.log(`made a request with ${keyword}`)
    console.log(`${URL_ROOT}`);

    const request = fetch(`${URL_ROOT}`,{
    method:'GET'})
    .then(response => response.json())

    return {
         type:'SEARCH_ALL_PHONES',
         payload:request
     }
}

export function phoneDetail(name){
    const request = fetch(`${URL_ROOT}?name=${name}`, {method:'GET'})
    .then(response => response.json())

    console.log(`${URL_ROOT}/carsIndex?id=${name}`);
   // console.log("Hiiiii" +request)
    //const request = fetch(`${URL_ROOT}`, {method:'POST',
    //    data:{
       //         firstname:"hello"}
   // } })
    //.then(response => response.json())

    return{
        type:'PHONE_DETAIL',
        payload:request
    }

}


/*
params
routerPrams
activtedRoutes
can Activate
modules
*/

