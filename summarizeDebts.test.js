const summarizeDebts = require("./index");

describe("summarizeDebts", () => {
  it("should summarize debts correctly", () => {
    const inputFilePath = "./input.csv";
    const expectedSummary = "Alex,Beatrice,120.54\nBeatrice,Alex,5.74\nBeatrice,Carl,168.08\nCarl,Alex,60.88\nCarl,Beatrice,25.30";
    const summary = summarizeDebts(inputFilePath);
    expect(summary).toEqual(expectedSummary);
  });

  it("should handle empty lines in the input file", () => {
    const inputFilePath = "./input.csv";
    const expectedSummary = "Alex,Beatrice,120.54\nBeatrice,Alex,5.74\nBeatrice,Carl,168.08\nCarl,Alex,60.88\nCarl,Beatrice,25.30";
    const summary = summarizeDebts(inputFilePath);
    expect(summary).toEqual(expectedSummary);
  });

  it("should handle invalid lines in the input file", () => {
    const inputFilePath = "./input.csv";
    const expectedSummary = "Alex,Beatrice,120.54\nBeatrice,Alex,5.74\nBeatrice,Carl,168.08\nCarl,Alex,60.88\nCarl,Beatrice,25.30";
    const summary = summarizeDebts(inputFilePath);
    expect(summary).toEqual(expectedSummary);
  });
});
