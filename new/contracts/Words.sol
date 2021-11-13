pragma solidity >=0.5.0;

contract Words {
    string public word="ABC";

    function setWord(string memory _value) public {
        word=_value;
    }

    function getWord() public view returns(string memory) {
        return word;
    }

} 
