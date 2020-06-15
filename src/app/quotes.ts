export class Quote {
  public showDetail: boolean;
  
  constructor(public category:string, public author:string,public message:string ,public name: string, public date: Date){
   
    this.showDetail=false;
  }
}
