import { useEffect, useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import FileStorage from "../FileStorage.json";
import { useLocation } from "react-router";
import Web3 from "web3";

export default function SellNFT() {
  const [formParams, setFormParams] = useState({
    name: "",
    description: "",
    price: "",
    file: null,
  });
  const [fileData, setFileData] = useState(null);
  const ethers = require("ethers");
  const [message, updateMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    let loadWeb3 = async () => {
      console.log("ASCA");
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        console.log(window.web3);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        console.log(window.web3);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    };
    loadWeb3();
  }, []);

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    setFormParams({ ...formParams, file: e.target.files[0] });
    //check for file extension
  }

  //This function uploads the metadata to IPFS
  async function uploadMetadataToIPFS() {
    const { name, description } = formParams;
    //Make sure that none of the fields are empty
    if (!name || !description || !formParams.file) return;

    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(formParams.file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response);
        console.log("pooper", formParams.file.type);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        updateMessage("Please wait.. uploading (upto 5 mins)");

        //Pull the deployed contract instance
        let contract = new ethers.Contract(
          FileStorage.address,
          FileStorage.abi,
          signer
        );
        // string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription
        let transaction = await contract.uploadFile(
          response,
          formParams.file.size,
          formParams.file.type,
          formParams.name,
          formParams.description
        );

        let txRes = await transaction.wait();
        //console.log(txRes);
      }
    } catch (e) {
      console.log("Error during file upload", e);
    }

    // string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription
  }

  async function listNFT(e) {
    e.preventDefault();

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      //After adding your Hardhat network to your metamask, this code will get providers and signers

      alert("Successfully listed your NFT!");
      updateMessage("");
      setFormParams({ name: "", description: "", file: {} });
      //   window.location.replace("/");
    } catch (e) {
      alert("Upload error" + e);
    }
  }

  return (
    <div className="">
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
          <h3 className="text-center font-bold text-purple-500 mb-8">
            Upload your NFT to the marketplace
          </h3>
          <div className="mb-4">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              NFT Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Axie#4563"
              onChange={(e) =>
                setFormParams({ ...formParams, name: e.target.value })
              }
              value={formParams.name}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="description"
            >
              NFT Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              id="description"
              type="text"
              placeholder="Axie Infinity Collection"
              value={formParams.description}
              onChange={(e) =>
                setFormParams({ ...formParams, description: e.target.value })
              }
            ></textarea>
          </div>

          <div>
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input type={"file"} onChange={OnChangeFile}></input>
          </div>
          <br></br>
          <div className="text-green text-center">{message}</div>
          <button
            onClick={listNFT}
            className="font-bold mt-10 w-full bg-purple-500 text-white rounded p-2 shadow-lg"
          >
            List NFT
          </button>
        </form>
      </div>
    </div>
  );
}
