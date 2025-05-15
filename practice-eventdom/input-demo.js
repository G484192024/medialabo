function greeting() {
    console.log('こんにちは');
  }

  let b = document.querySelector('button#print');

  b.addEventListener('click', greeting);