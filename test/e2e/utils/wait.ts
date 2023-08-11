import { Contract, ethers } from 'ethers';

export const waitProposalExecuted = (
  sourceChain: string,
  sourceAddress: string,
  caller: string,
  payload: string,
  executorContract: Contract,
) =>
  new Promise((resolve, reject) => {
    executorContract.on(
      executorContract.filters.ProposalExecuted(
        ethers.utils.keccak256(
          ethers.utils.defaultAbiCoder.encode(
            ['string', 'string', 'bytes', 'bytes'],
            [sourceChain, sourceAddress, caller, payload],
          ),
        ),
      ),
      (payloadHash) => {
        resolve(payloadHash);
      },
    );
  });
2585;
