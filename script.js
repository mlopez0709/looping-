
for (var i = 1000; i >= 0; i--) {
      if (i % 2 === 0) {
      console.log(i);
    }
    }
    
    for (var i = 0; i <= 10000; i++) {
       if (i === 2500) {
       alert("A quarter of the way there!");
       } else if (i === 5000) {
         alert("Halfway there!");
       } else if (i === 10000) {
         alert("The loop is done!");
       }
    }
  
    const topTvShows = ["Breaking Bad", "The Expanse", "Friends", "Game of Thrones", "Stranger Things"];
    
    for (var i = 0; i < topTvShows.length; i++) {
      console.log(`My #${i + 1} favorite TV show is ${topTvShows[i]}`);
    }