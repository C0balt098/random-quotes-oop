import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";
class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const {id, text, author} = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaApi() {
    const url = "http://localhost:3000/api/quote";
    const options = {headers: {"Content-Type": "application/json"}};

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const id = data.id;
      const text = data.text;
      const author = data.author;
      return new Quote(id, text, author);
    } catch (err) {
      console.error("Error:", err);
    }
  }
}

export default RandomQuote;
