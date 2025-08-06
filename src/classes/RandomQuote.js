import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";
class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const {id, text, author} = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaApi() {
    fetch("http://localhost:3000/api/quote")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // или вставь в DOM
      })
      .catch((err) => console.error("Ошибка:", err));
  }
}

export default RandomQuote;
