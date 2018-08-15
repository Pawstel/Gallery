const fs = require('fs');

const JPpop = require('./Populator.js');

const prefixes = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Madam', 'Master', 'Prince', 'Princess', 'Duke', 'Baron'];

const firstNames = ['Demarcus', 'Rose', 'Curtis', 'Dean', 'Neil', 'Hortense', 'Ines', 'Kariane', 'Darrick', 'Yesenia', 'Constance', 'Cicero', 'Angelina', 'Roosevelt', 'Julia', 'Mark', 'Zakary', 'Ernestina', 'Darlene', 'Cleve', 'John', 'Roberta', 'Edythe', 'Jonatan', 'Joan', 'Summer', 'Berniece', 'Marcelina', 'Dejon', 'Sydnie', 'Malvina', 'Royal', 'Eula', 'Jannie', 'Felicity', 'Randall', 'Jovanny', 'Breana', 'Berenice', 'Earnest', 'Chris', 'Yvette', 'Miller', 'Else', 'Cali', 'Monty', 'Donald', 'Camille', 'Jadon', 'Sharon', 'Jordane', 'Timothy', 'Ron', 'Colby', 'Emery', 'Rusty', 'Brendon', 'Kacey', 'Drake', 'Joelle', 'Alfred', 'Raleigh', 'Arlo', 'Camille', 'Giles', 'Kariane', 'Adelle', 'Lucinda', 'Rickie', 'Darien', 'Rod', 'Kassandra', 'Rosanna', 'Melyssa', 'Amari', 'Arne', 'Efrain', 'Nicole', 'Gordon', 'Isobel', 'Karli', 'Josue', 'Tanya', 'Amber', 'Earnestine', 'Catharine', 'Anabelle', 'Kristy', 'Elise', 'Lance', 'Marvin', 'Christophe', 'Paul', 'Phoebe', 'Carlotta', 'Robbie', 'Dave', 'Zula', 'Yadira', 'Holly'];

const lastNames = ['Farrells', 'DuBuques', 'Kiehns', 'Swaniawskis', 'Markss', 'Murrays', 'Wests', 'Leschs', 'Kautzers', 'Rippins', 'McClures', 'Nicolass', 'Beers', 'Roobs', 'Thiels', 'Boscos', 'Kuvaliss', 'Quitzons', 'Doyles', 'Fadels', 'Gislasons', 'Kassulkes', 'Haleys', 'Runtes', 'Monahans', 'Goldners', 'Hyatts', 'Wolffs', 'Beattys', 'Tromps', 'Friesens', 'Mertzs', 'Rolfsons', 'Wills', 'Simoniss', 'Nikolauss', 'Kleins', 'Mosciskis', 'Rosenbaums', 'McKenzies', 'Yosts', 'Powlowskis', 'Cummeratas', 'Lefflers', 'Baileys', 'Kesslers', 'Keelings', 'Daviss', 'Corkerys', 'Doyles', 'Feests', 'Champlins', 'Bashirians', 'Stokess', 'Schadens', 'Effertzs', 'Robertss', 'Stoltenbergs', 'Dickenss', 'Simoniss', 'Carters', 'D\'Amores', 'VonRuedens', 'Dibberts', 'Bergnaums', 'Hageness', 'McClures', 'Mayerts', 'Heathcotes', 'Bogans', 'Dachs', 'Hyatts', 'Buckridges', 'Stoltenbergs', 'Oberbrunners', 'Abshires', 'Grahams', 'Gulgowskis', 'Boyers', 'Lemkes', 'Schroeders', 'Donnellys', 'Pfeffers', 'Starks', 'Williamsons', 'Greenfelders', 'Weissnats', 'Hamills', 'Walkers', 'Schmelers', 'Haleys', 'Zemlaks', 'Tromps', 'Ziemanns', 'Wuckerts', 'Hartmanns', 'Grahams', 'Shanahans', 'Bergstroms', 'Mertzs'];

const locations = ['Ashy Pawstel', 'Black Pawstel', 'Blue Pawstel', 'Gray Pawstel', 'Green Pawstel', 'Icy Pawstel', 'Lemon Pawstel', 'Mango Pawstel', 'Orange Pawstel', 'Purple Pawstel', 'Red Pawstel', 'Salmon Pawstel', 'White Pawstel', 'Yellow Pawstel', 'Agreeable Pawstel', 'Ambitious Pawstel', 'Brave Pawstel', 'Calm Pawstel', 'Delightful Pawstel', 'Eager Pawstel', 'Faithful Pawstel', 'Gentle Pawstel', 'Happy Pawstel', 'Jolly Pawstel', 'Kind Pawstel', 'Lively Pawstel', 'Nice Pawstel', 'Obedient Pawstel', 'Polite Pawstel', 'Proud Pawstel', 'Silly Pawstel', 'Thankful Pawstel', 'Victorious Pawstel', 'Witty Pawstel', 'Wonderful Pawstel', 'Zealous Pawstel', 'Big Pawstel', 'Colossal Pawstel', 'Fat Pawstel', 'Gigantic Pawstel', 'Great Pawstel', 'Huge Pawstel', 'Immense Pawstel', 'Large Pawstel', 'Little Pawstel', 'Mammoth Pawstel', 'Massive Pawstel', 'Microscopic Pawstel', 'Miniature Pawstel', 'Petite Pawstel', 'Puny Pawstel', 'Scrawny Pawstel', 'Short Pawstel', 'Small Pawstel', 'Tall Pawstel', 'Teeny Pawstel', 'Tiny Pawstel', 'Ancient Pawstel', 'Brief Pawstel', 'Early Pawstel', 'Fast Pawstel', 'Futuristic Pawstel', 'Late Pawstel', 'Long Pawstel', 'Modern Pawstel', 'Old Pawstel', 'Old-fashioned Pawstel', 'Prehistoric Pawstel', 'Quick Pawstel', 'Rapid Pawstel', 'Short Pawstel', 'Slow Pawstel', 'Swift Pawstel', 'Young Pawstel', 'Breezy Pawstel', 'Cool Pawstel', 'Cuddly Pawstel', 'Damp Pawstel', 'Fluffy Pawstel', 'Warm Pawstel', 'Wooden Pawstel', 'Acidic Pawstel', 'Bitter Pawstel', 'Cool Pawstel', 'Creamy Pawstel', 'Delicious Pawstel', 'Disgusting Pawstel', 'Fresh Pawstel', 'Greasy Pawstel', 'Juicy Pawstel', 'Hot Pawstel', 'Moldy Pawstel', 'Nutritious Pawstel', 'Nutty Pawstel', 'Putrid Pawstel', 'Rancid Pawstel', 'Ripe Pawstel', 'Rotten Pawstel', 'Salty Pawstel', 'Savory Pawstel'];

var wstream = fs.createWriteStream('data1.csv');

const createCSV = () => {
  // fileName = fileName || 'data.csv';
  // writer.pipe(fs.createWriteStream(fileName));
  // for (let i = 0; i < 10000000; i += 1) {
  //   writer.write({ username: faker.name.lastName() });
  // }
  // for (let i = 0; i < 5000000; i += 1) {
  //   let prefixRand = Math.floor(Math.random() * prefixes.length);
  //   let firstRand = Math.floor(Math.random() * firstNames.length);
  //   let lastRand = Math.floor(Math.random() * lastNames.length);
  //   let locationRand = Math.floor(Math.random() * locations.length);
  //   writer.write({ username: prefixes[prefixRand] + firstNames[firstRand] + lastNames[lastRand] + locations[locationRand], id: i + 1 });
  // }
  // for (let i = 0; i < 1; i += 1) {
  //   for (let j = 0; j < 1; j += 1) {
  //     for (let k = 0; k < 1; k += 1) {
  let totalImgCounter = 1;
  for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {


        for (let l = 0; l < 25; l += 1) {
          let idxCalc = 1 + (/*RUNS:*/ 0 * 2500000) + (l) + (k * 25) + (j * (lastNames.length * 25)) + (i * (firstNames.length * (lastNames.length * 25))); // ${idxCalc},

          let imgRuns = Math.ceil(Math.random() * 15);
          if(imgRuns < 6) {
            let rnJesus = Math.floor(Math.random() * 10);
            if(rnJesus) { imgRuns *= 2;}
          }
          let imgArr = [];
          for(let m = totalImgCounter; m < totalImgCounter + imgRuns; m++) {
            imgArr.push(m);
          }
          JPpop.populateListingPhotos(idxCalc, imgArr)
          totalImgCounter += imgRuns;
          // console.log(`${idxCalc}|'${prefixes[i]} ${firstNames[j]} ${lastNames[k]} ${locations[l]}'|${JPpop.populateListings(idxCalc)}`);
          // console.log(idxCalc);
          // console.log(currentListing)
          // wstream.write(`${}\n`);
          // console.log(JPpop.populateUsers(idxCalc));
          // console.log(JPpop.populateLists(idxCalc));
          // console.log(JPpop.populateListingsLists(idxCalc));
          // JPpop.populateListingPhotos(idxCalc);
        }
      }
    }
  }

  // for (let i = 0; i < 1; i += 1) {
  //   for (let j = 0; j < 1; j += 1) {
  //     for (let k = 0; k < 1; k += 1) {
  for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {
        for (let l = 25; l < 50; l += 1) {
          let idxCalc = 1 + (/*RUNS:*/ 1 * 2500000) + (l % 25) + (k * 25) + (j * (lastNames.length * 25)) + (i * (firstNames.length * (lastNames.length * 25))); // ${idxCalc},

          let imgRuns = Math.ceil(Math.random() * 15);
          if(imgRuns < 6) {
            let rnJesus = Math.floor(Math.random() * 10);
            if(rnJesus) { imgRuns *= 2;}
          }
          let imgArr = [];
          for(let m = totalImgCounter; m < totalImgCounter + imgRuns; m++) {
            imgArr.push(m);
          }
          JPpop.populateListingPhotos(idxCalc, imgArr)
          totalImgCounter += imgRuns;
          // console.log(`${idxCalc}|'${prefixes[i]} ${firstNames[j]} ${lastNames[k]} ${locations[l]}'|${JPpop.populateListings(idxCalc)}`);
        }
      }
    }
  }
  for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {
        for (let l = 50; l < 75; l += 1) {
          let idxCalc = 1 + (/*RUNS:*/ 2 * 2500000) + (l % 25) + (k * 25) + (j * (lastNames.length * 25)) + (i * (firstNames.length * (lastNames.length * 25))); // ${idxCalc},

          let imgRuns = Math.ceil(Math.random() * 15);
          if(imgRuns < 6) {
            let rnJesus = Math.floor(Math.random() * 10);
            if(rnJesus) { imgRuns *= 2;}
          }
          let imgArr = [];
          for(let m = totalImgCounter; m < totalImgCounter + imgRuns; m++) {
            imgArr.push(m);
          }
          JPpop.populateListingPhotos(idxCalc, imgArr)
          totalImgCounter += imgRuns;

          console.log(`${idxCalc}|'${prefixes[i]} ${firstNames[j]} ${lastNames[k]} ${locations[l]}'|${JPpop.populateListings(idxCalc)}`);
        }
      }
    }
  }
  // for (let i = 0; i < 1; i += 1) {
  //   for (let j = 0; j < 1; j += 1) {
  //     for (let k = 0; k < 1; k += 1) {
  for (let i = 0; i < prefixes.length; i += 1) {
    for (let j = 0; j < firstNames.length; j += 1) {
      for (let k = 0; k < lastNames.length; k += 1) {
        for (let l = 75; l < 100; l += 1) {
          let idxCalc = 1 + (/*RUNS:*/ 3 * 2500000) + (l % 25) + (k * 25) + (j * (lastNames.length * 25)) + (i * (firstNames.length * (lastNames.length * 25))); // ${idxCalc},

          let imgRuns = Math.ceil(Math.random() * 15);
          if(imgRuns < 6) {
            let rnJesus = Math.floor(Math.random() * 10);
            if(rnJesus) { imgRuns *= 2;}
          }
          let imgArr = [];
          for(let m = totalImgCounter; m < totalImgCounter + imgRuns; m++) {
            imgArr.push(m);
          }
          JPpop.populateListingPhotos(idxCalc, imgArr)
          totalImgCounter += imgRuns;

          console.log(`${idxCalc}|'${prefixes[i]} ${firstNames[j]} ${lastNames[k]} ${locations[l]}'|${JPpop.populateListings(idxCalc)}`);
        }
      }
    }
  }
  // writer.end();
  // console.log('Done');
};

createCSV();


  // populateUsers : populateUsers,
  // populateLists : populateLists,
  // populateListings : populateListings,
  // populateListingsLists : populateListingsLists,
  // populateListingPhotos : populateListingPhotos