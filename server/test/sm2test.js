const should = require('chai').should()
const sm2 = require('../lib/sm2')

describe('Testing algoritma sm2 spaced repetition', () => {
  it('Tes hasil hitung mencari hasil faktor koefisien E', () => {
    sm2.calcNewFactor(2.5, 4).should.equal(2.5)
  })

  it('Tes mendapatkan nilai interval untuk penjadwalan berikutnya berdasarkan pengkalian dengan faktor E yang didapatkan pada tes sebelumnya', () => {
    sm2.getInterval(1, 2.5).should.equal(1)
  })
})
