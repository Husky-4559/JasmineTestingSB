
it('should calculate the monthly rate correctly', function () {
  // ...

  const value = {
    amount: 10000,
    years: 5,
    rate: 3,
  }
  expect(calculateMonthlyPayment(value)).toEqual('179.69')
});


it("should return a result with 2 decimal places", function() {
  // ..

  const value = {
    amount: 10000,
    years: 6,
    rate: 5,
  }
  expect(calculateMonthlyPayment(value)).toEqual('161.05')
});

/// etc
