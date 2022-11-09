

const analyzeArray = (arr) => {

    let average = (arr.reduce((acc,curr) => {
      return acc += curr
    },0)) / 6;
  
    let min = arr.sort((a,b) => a-b)[0];
    let max = arr[arr.length-1];
    
    return {
      average,
      min,
      max,
      length: arr.length
    }
}

export default analyzeArray