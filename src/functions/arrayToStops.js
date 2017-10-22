
function arrayToStops(array){
  console.log(array.length);
  let stopsElemnts = [];
  if(Array.isArray(array)){
    for(let i = 0; i< array.length; i++){
      stopsElemnts.push(<p><i className="fa fa-long-arrow-right space" aria-hidden="true"></i> array[i]</p>);
    }
    return stopsElemnts;
  }
};

export default arrayToStops;
