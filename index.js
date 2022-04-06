
const superbowlWin = (record) => {
    let finder = record.find(
        (object) => { 
            if (object.result === "W"){
            return object.year 
            }
        }  
    )
    //debugger
    if (finder === undefined){
        return finder
    } else {
         return finder.year
          }
}
 