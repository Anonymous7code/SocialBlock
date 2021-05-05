pragma solidity ^0.5.0;

contract Decentragram {
  // Code goes here...
  string public name = "Decentragram";
  
  

  //Store Images
  mapping (uint=>Image) public images;
  struct Image{
    uint id;
    string hash;
    string description;
    string tipAmmount;
    address payable author;
  }


  //Create Images

  function uploadImage() public {
    images[1] = Image(1,'abc777','Hello World','0',address(0x0));    
    
  }







  
  //Tip Images






}