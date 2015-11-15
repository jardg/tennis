import $ from 'jquery';
import {init} from '/../app/UI.js';
import * as playerTest from '../utils/generatePlayersforTesting.js';
  init();
  //playerTest.generatePlayersIncreasingRankwithN(256);
  playerTest.generatePlayerswithRandomRanks(8,5);
