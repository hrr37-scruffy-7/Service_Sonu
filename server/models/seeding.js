function generatePrice() {
  let randNum = Math.floor(Math.random() * 50 + 450);
  return randNum;
}

function generateRating() {
  let randRating = Math.floor(Math.random() * 6);
  return randRating;
}

function propertyNum(){
  let propArr = []
  let propNum = 23958457;
  for (let i = propNum; i <= 23958556; i++) {
    propArr.push(i)
  }
  return propArr;
}

function propertyReview() {
  let randRating = Math.floor(Math.random() * 30);
  return randRating;
}

function generateSeeding() {
  let seedArr = []
  let propNums = propertyNum();

  for (let i = 0; i < 100; i++) {
    let rating = generateRating()
    let price = generatePrice()
    let review = propertyReview()
    let review_desc = generateReviews(rating);
    let desc = generateDesc();
    seedArr.push({rating, price, review, review_desc, desc, property_id: propNums[i]})
  }
  console.log(seedArr[0])
  return seedArr
}


function generateDesc() {
  let descArr = ['Private Cozy', 'Exotic', 'Comfortable', 'Noisy', 'Reasonable']
  let randIndex = Math.floor(Math.random() * 5)
  let descArr2 = ['fantasitc neighborhood', 'party center', 'downtown', 'by the beach']
  let randIndex2 = Math.floor(Math.random() * 5)
  return descArr[randIndex] + ' Room in ' + descArr2[randIndex2];
}

function generateReviews(rating) {
  let desc = ['Horrible', 'Terrible', 'Neutral', 'Great', 'Amazing', 'Wonderful'];
  return desc[rating]
}

module.exports = {
  generateSeeding
}


