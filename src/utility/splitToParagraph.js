export const splitToParagraph = (paraStr) => {
  const finalArray = [];

  const individualSentences = paraStr.split(".");
  const noOfPara = Math.ceil(individualSentences.length / 5);

  let paraCounter = 0;
  for (let index = 1; index <= noOfPara; index++) {
    const combinedSentences = individualSentences.slice(
      paraCounter,
      paraCounter + 5
    );
    finalArray.push(combinedSentences);
    paraCounter += 5;
  }

  return finalArray;
};
