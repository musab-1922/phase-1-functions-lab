function distanceFromHqInBlocks(blocks) {
    const hq = 42; // Scuber's headquarters location
    let distance = Math.abs(blocks - hq); // Calculate distance in blocks
    return distance;
  }
 
  function distanceFromHqInFeet(blocks) {
    const blockLength = 264; // Number of feet per block
    let distanceInBlocks = distanceFromHqInBlocks(blocks); // Calculate distance in blocks using the distanceFromHqInBlocks function
    let distanceInFeet = distanceInBlocks * blockLength; // Convert distance to feet
    return distanceInFeet;
  } 

  function distanceTravelledInFeet(startBlock, endBlock) {
    let distanceInBlocks = Math.abs(startBlock - endBlock); // Calculate distance in blocks
    let distanceInFeet = distanceInBlocks * 264; // Convert distance to feet
    if (startBlock > endBlock) { // If destination is below start block
      distanceInFeet = distanceInBlocks * 264; // Calculate distance in feet
    }
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination); // Calculate distance travelled in feet
    let fare = 0; // Initialize fare
    if (distanceInFeet <= 400) { // If distance is less than or equal to 400 feet
      fare = 0; // No charge
    } else if (distanceInFeet <= 2000) { // If distance is between 400 and 2000 feet
      fare = (distanceInFeet - 400) * 0.02; // Charge 2 cents per foot after first 400 feet
    } else if (distanceInFeet <= 2500) { // If distance is between 2000 and 2500 feet
      fare = 25; // Flat rate of $25
    } else { // If distance is greater than 2500 feet
      fare = 'cannot travel that far'; // Cannot travel that far
    }
    return fare;
  }


  