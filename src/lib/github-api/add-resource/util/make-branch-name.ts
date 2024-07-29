export const makeBranchName = () => {
  const result = crypto.randomUUID();
  result.replace("-", "");
  return result;
};
