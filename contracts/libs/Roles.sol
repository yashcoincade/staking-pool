// SPDX Licence-Identifier: MIT
pragma solidity 0.8.6;

import "@energyweb/iam-contracts/dist/contracts/roles/ClaimManager.sol";


library PatronsLibrary {

    function hasPatronRole(
        address _userAddress,
        address _claimManagerAddress,
        bytes32[] memory _patronRoles
    ) internal view returns (bool) {
        if (_patronRoles.length == 0) {
            return true;
        }
        ClaimManager cm = ClaimManager(_claimManagerAddress);
        for (uint i = 0; i < _patronRoles.length; i++) {
            if (cm.hasRole(_userAddress, _patronRoles[i], 0)) {
                return true;
            }
        }
        return false;
    }
}