export class Task {
  constructor(public title: string) { }
  select() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
