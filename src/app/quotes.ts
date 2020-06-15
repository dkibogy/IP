export class Quote {
  public upvotes:number
  public downvotes:number
  public Date:Date
  constructor(public category:string, public author:string,public message:string ,public name: string){
    this.upvotes =0;
    this.downvotes =0;
    this.Date=new Date;
  }
}
