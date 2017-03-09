class SM2 {

  /**
   * Calculate interval for an item
   *
   * Calculates the interval (in days) in which to repeat the item after the
   * n:th repetition given the item's current E-factor.
   *
   * @param int time   How many times the card has been repeated
   * @param int factor The item's current E-factor
   *
   * @return float A ceiled value of the interval (in days)
   */
  getInterval(time = 1, factor = 2.5) {
    if (time < 1) {
      console.log('The number of repetitions must be 1 or higher')
    }

    let interval = 0

    if (time == 1) {
      interval = 1
    } else if (time == 2) {
      interval = 6
    } else {
      interval = this.getInterval(time - 1, factor) * factor
    }

    return Math.ceil(interval)
  }

  /**
   * Calculate the new factor of an item
   *
   * Calculates the new factor of an item based on the item's old E-factor and
   * the quality of the latest response to the item.
   *
   * @param int $oldFactor The item's old E-factor
   * @param int $quality   The quality of the response to the item
   *
   * @return float The item's new E-factor
   */
  calcNewFactor(oldFactor = 2.5, quality = 4) {
    if (quality > 5 || quality < 0) {
      console.log('Quality must be between 0 and 5')
    }

    let newFactor = oldFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

    return newFactor > 1.3 ? (newFactor < 2.5 ? newFactor : 2.5) : 1.3
  }
}

let sm2 = new SM2()
console.log(sm2.calcNewFactor(1.7000000000000002, 0));
console.log(sm2.getInterval(2, sm2.calcNewFactor(1.7000000000000002, 0)))
