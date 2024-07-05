import GameSavingLoader from './js/GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  saving
}, (error) => {
  console.log(error);
});