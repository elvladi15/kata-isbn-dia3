const formatErr = "Not in correct format.";
describe("10-digit ISBN", () => {
  it('Validate that "1-8887-9997-8" is valid.', () => {
    assert.equal(isbnValidator("1-8887-9997-8"), true);
  });
  it('Validate that "1 8887 9997 8" is valid.', () => {
    assert.equal(isbnValidator("1 8887 9997 8"), true);
  });
  it('Validate that "1-8887 9997-8" is NOT in correct format.', () => {
    assert.equal(isbnValidator("1-8887 9997-8"), formatErr);
  });
  it('Validate that "1-8A87-9997-8" is NOT in correct format.', () => {
    assert.equal(isbnValidator("1-8A87-9997-8"), formatErr);
  });
  it('Validate that "0-3129-3033-X" is valid.', () => {
    assert.equal(isbnValidator("0-3129-3033-X"), true);
  });
  it('Validate that "0-3129-3033-x" is NOT in correct format.', () => {
    assert.equal(isbnValidator("0-3129-3033-x"), formatErr);
  });
  it('Validate that "" is NOT in correct format.', () => {
    assert.equal(isbnValidator(""), formatErr);
  });
  it('Validate that "4-2221-7685-X" is NOT valid.', () => {
    assert.equal(isbnValidator("4-2221-7685-X"), false);
  });
});
describe("13-digit ISBN", () => {
  it('Validate that "978-0-3129-3033-2" is valid.', () => {
    assert.equal(isbnValidator("978-0-3129-3033-2"), true);
  });
  it('Validate that "978 0 3129 3033 2" is valid.', () => {
    assert.equal(isbnValidator("978 0 3129 3033 2"), true);
  });
  it('Validate that "978 0-3129 3033 2" is NOT valid format.', () => {
    assert.equal(isbnValidator("978 0-3129 3033 2"), formatErr);
  });
  it('Validate that "" is NOT valid format.', () => {
    assert.equal(isbnValidator(""), formatErr);
  });
  it('Validate that "978 0 3129 3033 A" is NOT valid format.', () => {
    assert.equal(isbnValidator("978 0 3129 3033 A"), formatErr);
  });
  it('Validate that "564-1-4562-6743-1" is NOT valid.', () => {
    assert.equal(isbnValidator("564-1-4562-6743-1"), false);
  });
  it('Validate that "922-7-2621-0876-1" is NOT valid.', () => {
    assert.equal(isbnValidator("922-7-2621-0876-1"), false);
  });
});
