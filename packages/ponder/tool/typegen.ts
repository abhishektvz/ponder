import { runTypeChain } from "typechain";

import type { PonderConfig } from "./configParser";

const typegen = async (config: PonderConfig) => {
  const cwd = process.cwd();

  const abiFilePaths = config.sources.map((source) => source.abiPath);

  // TODO: don't parse all the ABI files again, use the Contract.Interface we already have?
  const result = await runTypeChain({
    cwd,
    filesToProcess: abiFilePaths,
    allFiles: abiFilePaths,
    outDir: "generated/types",
    target: "ethers-v5",
  });

  return result;
};

export { typegen };
