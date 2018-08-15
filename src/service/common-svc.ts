import {Injectable} from "@angular/core";

@Injectable()
export class CommonSvc {

    private spinner: boolean = false;

    public getSpinner(): boolean {
      return this.spinner;
    }

    hideSpinner(): void {
      this.spinner = false;
    }

    showSpinner(): void {
      this.spinner = true;
    }
}
