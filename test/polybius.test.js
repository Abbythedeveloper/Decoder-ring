
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=>{
    it("should return false when decoding and the number of characters in the string excluding spaces is odd", ()=> {
        const actual = polybius("1245 34532", false)
        expect(actual).to.be.false
    })

    it("should encode the input into numbers", ()=> {
        const actual = polybius("ben")
        const expected = "215133"
        expect(actual).to.equal(expected)
    })

    it("should return a string when encoding", ()=> {
        const actual = polybius("ben")
        expect(actual).to.be.a("string") 
    })

    it("should maintain spaces when encoding", ()=> {
        const actual = polybius("ben love")
        const expected = "215133 13431551"
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", ()=> {
        const actual = polybius("Ben Love")
        const expected = "215133 13431551"
        expect(actual).to.equal(expected)
    })

    it("should convert both 'j' and 'i' into 42 when encoding", ()=> {
        const actual = polybius("jiji")
        const expected = "42424242"
        expect(actual).to.equal(expected)
    })

    it("should decode every 2 numbers into a letter", ()=>{
        const actual = polybius("215133", false)
        const expected = "ben"
        expect(actual).to.equal(expected)
    })

    it("should decode 42 to include both 'i' and 'j'", ()=> {
        const actual = polybius("42", false)
        expect(actual).to.include('i')
        expect(actual).to.include('j')
    })

    it("should maintain spaces when decoding", ()=> {
        const actual = polybius("215133 13431551", false)
        const expected = "ben love"
        expect(actual).to.equal(expected)
    })
})

// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false
