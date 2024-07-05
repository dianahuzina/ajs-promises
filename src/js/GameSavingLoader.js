import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve) => {
      read().then(data => {
        json(data).then(value => {
          setTimeout(() => {
            resolve(value);
          }, 1000);
        })
      })
    })
  }
}