// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyOtherContract {
    uint256 private storedValue;

    function setValue(uint256 newValue) public {
        storedValue = newValue;
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}
