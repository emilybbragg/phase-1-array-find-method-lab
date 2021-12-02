// returns undefined if the record has no win objects

function superbowlWin(record){
   const win = record.find(object => object.result === "W")
   if (win){
    return win.year
}   else {
    return undefined
}
}


// if we find a win:
    //   return the win's year
    // else 
    //   return win (undefined)