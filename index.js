const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
  let find = array.find(function(obj) {return obj.result === "W"})

  if (find) {
    return find.year
  }
  else {
    undefined
  }
}
