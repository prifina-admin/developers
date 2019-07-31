pragma solidity >=0.4.22 <0.6.0;

contract DataValidation {
    address contractCreator;
    mapping (address => bool) Addresses;
    uint addressCount;

    mapping (string => bool) Checksums;
    uint checksumCount;

    constructor() public {
        contractCreator = msg.sender;
        addressCount = 0;
        checksumCount = 0;
    }

    // Authentication for contract creator
    modifier isCreator() {
        if(contractCreator != msg.sender) {
            revert("unauthorized operation");
        }
        _;
    }

    // Add new address to Addresses (Only Contract Creator)
    function setAddress(address _address) public isCreator {
        Addresses[_address] = true;
        addressCount++;
    }

    // Delete an address to Addresses (Only Contract Creator)
    function deleteAddress(address _address) public isCreator {
        Addresses[_address] = false;
        addressCount--;
    }

    // Get the length of Addresses (Only Contract Creator)
    function countAddresses() public isCreator view returns (uint) {
        return addressCount;
    }

    /*
    Is Addresses contains the given address?
    Only authenticated addresses can add data checksum to contract to prevent manipulation.
    */
    function isAuth(address _address) private view returns (bool) {
        return Addresses[_address];
    }

    // Add checksum
    function setChecksum(string memory _checksum) public {
        if(isAuth(msg.sender)) {
            Checksums[_checksum] = true;
            checksumCount++;
        } else {
            revert("address is not defined");
        }
    }

    // Delete checksum (Only Contract Creator)
    function deleteChecksum(string memory _checksum) public isCreator {
        Checksums[_checksum] = false;
        checksumCount--;
    }

    // Get the length of Checksums (Only Contract Creator)
    function countChecksums() public isCreator view returns (uint) {
        return checksumCount;
    }

    // Is Checksums contains the given checksum
    function contains(string memory _checksum) public view returns (bool) {
        return Checksums[_checksum];
    }

}