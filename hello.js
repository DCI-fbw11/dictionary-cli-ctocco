const wordData = require("./index");
const axios = require("axios");

console.log(wordData);

async function dictionaryData(main) {
  let res = await axios.get(
    `https://od-api.oxforddictionaries.com/api/v1/entries/en/${main}`,
    {
      headers: {
        Accept: "application/json",
        app_id: "e18f5d70",
        app_key: "414a554a4024c5ed85d752b249b14704"
      }
    }
  );

  // to map the first two entries
  let toBeMapped = res.data.results[0].lexicalEntries;

  //using this to get a copy of the data for view
  //let thisData = res.data;
  //  console.log(JSON.stringify(thisData));

  let wordAndTypeEntry = toBeMapped.map((entry, index) => {
    return `\n ${entry.text} (${entry.lexicalCategory})
      \n`;
  });

  console.log(wordAndTypeEntry);
  // let reduced = toBeMapped;

  // //this is to put into
  // let definition = reduced.map(things => {
  //   return things.entries[0];
  // });

  // let reducing = definition.reduce((a, b) => {
  //   return a.concat(b);
  // }, []);

  // let final = reducing.map(endKey => {
  //   return endKey.senses;
  // });

  // let secondReduce = final.reduce((a, b) => {
  //   return a.concat(b);
  // }, []);
  // console.log(secondReduce);

  // let secondFinal = secondReduce.map(secondEndKey => {
  //   return secondEndKey.short_definitions;
  // });

  // let thirdFinal = secondFinal.reduce((a, b) => {
  //   return a.concat(b);
  // }, []);

  // console.log("this is define", thirdFinal);

  // console.log(wordAndTypeEntry.join(""));
}

dictionaryData("hello");

module.exports = {
  dictionaryData
};

// let definition = toBeMapped[0].entries[0].senses[0].definitions.toString();
