export default function prettyText(inputText: string): string[] {
  const outputText: string = '';
  const inputTextTokens: string[] = inputText.split('');
  let braceCounter: number = 0;

  inputTextTokens.forEach((token, index) => {
    if (token === '"') {
      braceCounter += 1;

      if ((braceCounter % 2) === 1) {
        return inputTextTokens[index] = '«';
      }

      else if ((braceCounter % 2) === 0) {
        return inputTextTokens[index] = '»';
      }
    }
  });

  return inputTextTokens;
}

console.log(
  prettyText(
    '"Labore sit duis aliquip aliquip cupidatat. "Laborum" incididunt sint aliquip enim ex."'
    + '"Labore sit duis aliquip aliquip cupidatat". "Laborum incididunt sint aliquip enim ex."'
  )
);