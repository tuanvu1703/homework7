class MyClass {
    #x = 0; 
  
    #incX() { 
      this.#x++;
      console.log(this.#x); 
    }
  
    
    increaseX() {
      this.#incX(); 
    }
  
    setX(x) { 
      this.#x = x;
    }
  
    getX() { 
      return this.#x;
    }
  }
  
  const m = new MyClass();
  m.increaseX(); 
  console.log(m.getX()); 
  
