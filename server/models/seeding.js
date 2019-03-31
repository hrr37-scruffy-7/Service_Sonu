function generatePrice() {
  let randNum = Math.floor(Math.random() * 50 + 450);
  return randNum;
}

function generateRating() {
  let randRating = Math.floor(Math.random() * 5);
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

  for (let i = 0; i <= 100; i++) {
    let rating = generateRating()
    let price = generatePrice()
    let review = propertyReview()
    seedArr.push({rating, price, review, property_id: propNums[i]})
  }
  return seedArr
}


module.exports = {
  generateSeeding
}