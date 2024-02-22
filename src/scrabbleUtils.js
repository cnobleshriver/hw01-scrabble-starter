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
  const pointsMap = {
    '*': 0,
    'e': 1,
    'a': 1,
    'i': 1,
    'o': 1,
    'n': 1,
    'r': 1,
    't': 1,
    'l': 1,
    's': 1,
    'u': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10
  };
  let totalPoints = 0;
  for(let char of word) {
    if (char in pointsMap) {
      totalPoints += pointsMap[char]
    }
  }
  return totalPoints;
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
  let res = [];
  for (let word of dictionary) {
    if (canConstructWord(availableTiles, word)) {
      res.push(word);
    }
  }
  return res;
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
