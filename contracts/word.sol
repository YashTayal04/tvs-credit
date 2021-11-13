pragma solidity >=0.5.0;

contract Word {
  string public word="ABC";
  //  uint256 public blocknumber;
  //   uint256 public blockdifficulty;
  //   uint256 public timestamp;
  //   uint256 public Gp;

    // function Word (string initialWord) public {
    //     word = initialWord;
    // }

    function setWord (string newWord) public {
      word = newWord;
      //  blocknumber = block.number;
      //   blockdifficulty = block.difficulty;
      //   timestamp = block.timestamp;
      //   Gp = tx.gasprice;
    }
    function getWord() public returns(string word){
      return word;
    }

} 
