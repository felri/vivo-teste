const JOB_MAXIMUM_HOURS = 8;

const getItems = ({items}) => {
  let auxItems = [...items]
  let jobs = []
  let sum = 0;

  for(let i = 0; i < auxItems.length; i++) {
    const hours = parseInt(auxItems[i]['Tempo estimado'].split(" ")[0])

    //check if hours is larger than maximum, negative or not a number
    //remove it and ignore job
    if(hours > JOB_MAXIMUM_HOURS || hours < 0 || Number.isNaN(hours)) {
      //remove item from array
      auxItems.splice(i, 1) 
      //decrease index because of array.splice
      i--
    } else if(sum + hours <= JOB_MAXIMUM_HOURS) {
      //add to the jobs array
      jobs.push(auxItems[i]['ID']);
      //add hours to the total sum
      sum += hours;
      //remove item from array
      auxItems.splice(i, 1) 
      //decrease index because of array.splice
      i--
    }
  }
  //check if still exists other items inside the array
  if(auxItems.length > 0) {
    //recursive with the rest
    const children = getItems({items: auxItems})
    //add the two arrays together 
    // jobs = [1,2] [3,4]
    jobs = ([jobs, ...children])
  } else jobs = [jobs]

  return jobs
}

const checkErrorsArray = ({array}) => {
  try {
    for(let item of array) {
      if(
        !item["ID"] ||
        !item["Descrição"] ||
        !item["Data Máxima de conclusão"] ||
        !item["Tempo estimado"]
      ) return true
    }
  } catch(e) {
    return true
  }
}

export default ({array}) => {
  if(!checkErrorsArray({array})) {
    //sort by date
    const sorted = array.sort(function(a,b){
      return new Date(a['Data Máxima de conclusão']) - new Date(b['Data Máxima de conclusão']) ;
    });
    return getItems({items: sorted, master: true})
  } else console.log('error')
}
