// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other nonalphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).

describe("caesar", ()=> {
    it("should return false if shift value isn't present", ()=>{
        const actual = caesar("ben")
        expect(actual).to.be.false
    })
    
    it("should return false if shift value is equal to 0", ()=>{
        const actual = caesar("ben", 0)
        expect(actual).to.be.false
    })

    it("should return false if shift value is less than -25", ()=>{
        const actual = caesar("ben", -28)
        expect(actual).to.be.false
    })

    it("should return false if shift value is greater than 25", ()=>{
        const actual = caesar("ben", 28)
        expect(actual).to.be.false
    })
    /////////////////////////////////////////////////////////////////////////////////////
    it("should return the input encoded by letters shifting", ()=>{
        const actual = caesar("ben", 3)
        const expected = "ehq"
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces and other nonalphabetic symbols in the message", ()=>{
        const actual = caesar("ben love", 3)
        const expected = "ehq oryh"
        expect(actual).to.equal(expected)  
    })

    it("should ignore capital letters", ()=>{
        const actual = caesar("BeN", 3)
        const expected = "ehq"
        expect(actual).to.equal(expected)  
    })

    it("should handle encoding shifts that go past the end of the alphabet",()=>{
        const actual = caesar("yes", 3)
        const expected = "bhv"
        expect(actual).to.equal(expected)
    })

    it("should handle decoding shifts that go past the end of the alphabet",()=>{
        const actual = caesar("jxjx", -3, false)
        const expected = "mama"
        expect(actual).to.equal(expected)
    })
})


