function arbol(numPisos) {
    for (var i = 0; i < numPisos; i++) {
      // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
      var estrellas = '*'.repeat(2 * i + 1);
      var espacios= ' '.repeat(numPisos - i);
      console.log(espacios + estrellas);
    }
  }
  
  arbol(4);