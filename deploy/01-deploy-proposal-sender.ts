import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { deploy3 } from "../scripts/deploy";
import { contracts } from "../constants";

const contractName = "InterchainProposalSender";
const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { gateway, gasService } = contracts[hre.network.name];
  await deploy3(hre, contractName, "testv1", [gateway, gasService]);
};

deploy.tags = [contractName];
deploy.dependencies = ["Deployer"];

export default deploy;
