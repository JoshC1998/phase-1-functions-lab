
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42); 
  }
  function distanceFromHqInFeet(blocks) {
    const blockLengthInFeet = 264;
    return Math.abs(blocks - 42) * blockLengthInFeet;
  }
  function distanceTravelledInFeet(block1,block2) {
    const blockLengthInFeet = 264;
    return Math.abs(block1 - block2) * blockLengthInFeet;
}
function calculatesFarePrice(start, destination) {
  const totalDistance = Math.abs(destination - start) * 264;
  if (totalDistance < 400) {
    return 0;
  } else if (totalDistance > 400 && totalDistance < 2000) {
    return (totalDistance - 400) * 0.02;
  } else if (totalDistance < 2500 && totalDistance > 2000) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

