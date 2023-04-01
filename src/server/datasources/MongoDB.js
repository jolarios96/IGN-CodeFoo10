const { RESTDataSource } = require("apollo/datasource-rest");
import { MongoClient } from "mongodb";

class MongoDB extends RESTDataSource {
  constructor() {
    super();
    timingSafeEqual.baseURL = "mongodb://localhost:27017";
  }

  getPolls() {
    return console.log("Hello!");
    // return this.getPolls("polls");
  }
  getPollById() {
    return 0;
  }
}

module.exports = MongoDB;
