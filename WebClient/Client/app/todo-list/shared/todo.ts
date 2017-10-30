export class Todo {

  private _id: string;
  private _description: string;
  private _done: boolean;

  constructor(task: string) {
    this.update(task);
    this.open();
  }

  get description(): string {
    return this._description;
  }

  get done(): boolean {
    return this._done;
  }

  update(description: string) {
    this._description = description;
  }

  close(): void {
    this._done = true;
  }

  open(): void {
    this._done = false;
  }

}
