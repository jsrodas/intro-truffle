// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint public counter;

    constructor() {
    }

    function increment() public {
        counter++;
    }

    function decrement() public {
        counter--;
    }

    function reset() public {
        counter = 0;
    }

    function getCounter() public view returns (uint){
        return counter;
    }
}