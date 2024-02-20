// This module contains utility functions for the scrabble game.

// This imports the dictionary of scrabble words.
import { dictionary } from "./dictionary.js";

/**
 * This function checks whether a given word can be constructed with the
 * available tiles. The availableTiles object should not be modified.
 *
 * @param {object} availableTiles The available tiles to use.
 * @param {string} word The word to check.
 * @returns {boolean} Returns true if the word can be constructed with the given
 *                    tiles; false otherwise.
 */
function canConstructWord(availableTiles, word) {
  // TASK #2: Word Checker
  for (let char of word) {
    if (char in availableTiles) {
      if (availableTiles[char] >= 1) {
        availableTiles[char] -= 1;
      } else {
        return false;
      }
    } else if ('*' in availableTiles) {
      if (availableTiles['*'] >= 1) {
        availableTiles['*'] -= 1;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

/**
 * We define the base score of a word the score obtained by adding each letter's
 * score, without taking board position into account. This function will compute
 * and return the base score of a given word.
 *
 * @param {string} word The word to compute a base score for.
 * @returns {number} The base score of the given word.
 */
function baseScore(word) {
  // TASK #3: Base Score Calculator



  // Replace the line below with your implementation.
  throw new Error('Not implemented');
}

/**
 * Finds and returns every word from the dictionary that can be constructed with
 * the given tiles.
 *
 * @param {object} availableTiles The available tiles to use.
 * @returns {string[]} The words that can be constructed with the given tiles.
 */
function possibleWords(availableTiles) {
  // TASK #4: Possible Words



  // Replace the line below with your implementation.
  throw new Error('Not implemented');
}

/**
 * Finds and returns the word(s) with the highest base score from the
 * dictionary, given a set of available tiles.
 *
 * @param {object} availableTiles The available tiles to use.
 * @returns {string[]} The words with the highest base score.
 */
function bestPossibleWords(availableTiles) {
  // TASK #5: Best Possible Words



  // Replace the line below with your implementation.
  throw new Error('Not implemented');
}

// This exports our public functions.
export { canConstructWord, baseScore, possibleWords, bestPossibleWords };
