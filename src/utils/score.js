/**
 * It returns a number between 0 and 1, which is the score of the student's response
 * comparing it with the activity's solution. 
 */

function score(solution, result) {
  if (solution === result) return 1;
  else {
    const activitySolution = solution.split("_");
    const responseResult = result.split("_");

    let counter = 0;
    
    for (let i = 0; i < activitySolution.length; i++) {
      if (activitySolution[i] === responseResult[i]) counter++;
    }
    return (counter / activitySolution.length);
  }
}

module.exports = { score };
