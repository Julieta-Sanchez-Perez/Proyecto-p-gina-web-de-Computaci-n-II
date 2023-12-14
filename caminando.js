//train.onload

train.onload= function() {   
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 1.2 + 'px';

      if (timePassed > 1000) clearInterval(timer);

    }, 10);
  }