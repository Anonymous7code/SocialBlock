const { assert } = require('chai')

const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai').use(require('chai-as-promised')).should()

contract('SocialNetwork',([deployer,author,tipper])=>{
    let socialNetwork
    before(async()=>{
        socialNetwork = await SocialNetwork.deployed()
    })
    describe('deployment',async ()=>{
        it('Deployed Successfully',async ()=>{
            
            const address = await socialNetwork.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)


        })
        it('has a name',async ()=>{
            const name = await socialNetwork.name()
            
            assert.equal(name, 'Anonymous7code Social Network')
            

        })
    })



    describe('Posts',async()=>{
        let result,postCount
        it('Creates Posts',async()=>{
            result = await socialNetwork.createPost('This is the Beginning!!',{from:author})
            postCount = await socialNetwork.postcount()
            assert.equal(postCount,1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),postCount.toNumber(),'Id is Correct')
            assert.equal(event.content,'This is the Beginning!!','Content is Correct')
            assert.equal(event.tipAmount,'0','Id is Correct')
            assert.equal(event.author,author,'Author is Correct')


            await socialNetwork.createPost('',{from:author}).should.be.rejected
        
        
        })
        // it('Displays Post',async()=>{

        // }) 
        // it('Allows to tip the Posts',async()=>{
            
        // })
    })
})