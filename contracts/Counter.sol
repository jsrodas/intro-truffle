// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter {
    uint public counter;

    constructor() {
        counter = 0;
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