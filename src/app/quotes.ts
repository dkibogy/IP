export class Quote {
    publishQuote: boolean;
  
    constructor(
      public category: string,
      public author: string,
      public message: string,
      public date: Date,
      
    ) {
      this.publishQuote = false;
    }
  }
