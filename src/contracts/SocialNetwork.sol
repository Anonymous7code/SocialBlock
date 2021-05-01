pragma solidity ^0.5.0;

contract SocialNetwork {
    string public name;
    uint256 public postcount = 0;
    mapping(uint256 => Posts) public posts;

    struct Posts {
        uint256 idl;
        string content;
        uint256 tipAmount;
        address author;
    }

    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address author
    );
    constructor() public {
        name = "Anonymous7code Social Network";
    }

    function createPost(string memory _content) public {
        require(bytes(_content).length > 0);
        
        postcount++;
        posts[postcount] = Posts(postcount, _content, 0, msg.sender);
        emit PostCreated(postcount, _content, 0, msg.sender);
    }
}
