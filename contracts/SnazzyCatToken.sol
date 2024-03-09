// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract SnazzyCatToken is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("SnazzyCat", "SNZY") ERC20Permit("SnazzyCat") {
        _mint(msg.sender, 100_000_000_000 * 10 ** decimals());
    }
}