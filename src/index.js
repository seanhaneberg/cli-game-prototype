// module.exports = require('@oclif/command')
import command from '@oclif/command';
import style from "./main.css";

const printLog = () => {
  console.log(`I'm a silly entry point`);
};

printLog();