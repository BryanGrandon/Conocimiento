// Function to test
function discount(number, percentage) {
  let result = (number * percentage) / 100;
  return result;
}

describe("discount", function () {
  it("10% discount of $1000 is $100", function () {
    assert.equal(discount(1000, 10), 100);
  });
  it("15% discount of $1000 is $150", function () {
    assert.equal(discount(1000, 15), 150);
  });
  it("25% discount of $1000 is $250", function () {
    assert.equal(discount(1000, 25), 250);
  });
  it("50% discount of $1000 is $500", function () {
    assert.equal(discount(1000, 50), 500);
  });
  it("75% discount of $1000 is $750", function () {
    assert.equal(discount(1000, 75), 750);
  });
});
