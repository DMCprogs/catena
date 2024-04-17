const Moralis = require("moralis-v1/node");
require("dotenv").config();
const serverUrl = process.env.REACT_APP_MORALIS_URL;
const appId = process.env.REACT_APP_MORALIS_APP_ID;
const masterKey = process.env.masterKey;
let chainId = process.env.chainId || 31337;
let moralisCHainId = chainId === "31337" ? "1337" : chainId;

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
  console.log(serverUrl, appId, "AA");
  await Moralis.start({ serverUrl, appId, masterKey });

  let fileDeletedOptions = {
    chainId: moralisCHainId,
    sync_historical: true,
    topic: "FileDeleted(adress,uint)",
    address: contractAddress,
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "deletedOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "fileDeletedId",
          type: "uint256",
        },
      ],
      name: "FileDeleted",
      type: "event",
    },
    tableName: "FileDeleted",
  };

  let fileUploadedOptions = {
    chainId: moralisCHainId,
    sync_historical: true,
    address: contractAddress,
    topic: "FileUploaded(uint,string,uint,string,string,string,uin,address)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fileId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "fileHash",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fileSize",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "fileType",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "fileName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "fileDescription",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lastCheckedTimee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "uploader",
          type: "address",
        },
      ],
      name: "FileUploaded",
      type: "event",
    },
    tableName: "FileUplaoded",
  };
  let releaseOwnerFilesOptions = {
    chainId: moralisCHainId,
    sync_historical: true,
    address: contractAddress,
    topic: "ReleaseOwnerFiles(address,uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "deceasedOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "timeRelease",
          type: "uint256",
        },
      ],
      name: "ReleaseOwnerFiles",
      type: "event",
    },
    tableName: "ReleaseOwnerFiles",
  };
  let ownerPulseRefreshedOptions = {
    chainId: moralisCHainId,
    sync_historical: true,
    address: contractAddress,
    topic: "OwnerPulseRefreshed(address uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "refreshedOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "timeRefreshed",
          type: "uint256",
        },
      ],
      name: "OwnerPulseRefreshed",
      type: "event",
    },
    tableName: "OwnerPulseRefreshed",
  };

  const fileDeletedResponse = await Moralis.Cloud.run(
    "watchContractEvent",
    fileDeletedOptions,
    { useMasterKey: true }
  );
  const ownerPulsedReponse = await Moralis.Cloud.run(
    "watchContractEvent",
    ownerPulseRefreshedOptions,
    { useMasterKey: true }
  );
  const releaseOwnerFilesResponse = await Moralis.Cloud.run(
    "watchContractEvent",
    releaseOwnerFilesOptions,
    { useMasterKey: true }
  );
  const fileUploadedResponse = await Moralis.Cloud.run(
    "watchContractEvent",
    fileUploadedOptions,
    { useMasterKey: true }
  );
  if (fileDeletedResponse.success && ownerPulsedReponse && ownerPulsedReponse) {
    console.log("DB has been updated! Hooray");
  } else {
    console.log("Uh Uh");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
