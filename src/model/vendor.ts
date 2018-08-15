
export class Vendor {
  public _id: string;
  private address: string;
  private alternateNumber: number;
  private area: string;
  private createdDate: string;
  private contactNumber: number;
  private contactPersonName: string;
  private email: string;
  private note: string;
  private name: string;
  private updatedDate: string;
  private verified: boolean = false;

  public getId(): string {
    return this._id;
  }
  public setId(_id): void {
    this._id = _id;
  }
  public getAddress(): string {
    return this.address;
  }
  public setAddress(address): void {
    this.address = address;
  }

  public getAlternateNumber(): number {
    return this.alternateNumber;
  }
  public setAlternateNumber(alternateNumber): void {
    this.alternateNumber = alternateNumber;
  }

  public getArea(): string {
    return this.area;
  }
  public setArea(area): void {
    this.area = area;
  }

  public getCreatedDate(): Date {
    return new Date(this.createdDate);
  }

  public getContactNumber(): number {
    return this.contactNumber;
  }
  public setContactNumber(contactNumber): void {
    this.contactNumber = contactNumber;
  }

  public getContactPersonName(): string {
    return this.contactPersonName;
  }
  public setContactPersonName(contactPersonName): void {
    this.contactPersonName = contactPersonName;
  }

  public getEmail(): string {
    return this.email;
  }
  public setEmail(email): void {
    this.email = email;
  }

  public getNote(): string {
    return this.note;
  }
  public setNote(note): void {
    this.note = note;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name): void {
    this.name = name;
  }
  public getVerified(): boolean {
    return this.verified;
  }
  public setVerified(verified): void {
    this.verified = verified;
  }

  public getInputList(): any {
    return [
      {label: 'Company Name',       ngModel: 'name',            type: 'input', dataType: 'text' , required: true },
      {label: 'Contact Number',     ngModel: 'contactNumber',   type: 'input', dataType: 'tel' , required: true},
      {label: 'Alternate Number',   ngModel: 'alternateNumber', type: 'input', dataType: 'tel' , required: false},
      {label: 'Email',              ngModel: 'email',           type: 'input', dataType: 'text' , required: false},
      {label: 'Address',            ngModel: 'address',         type: 'textarea', dataType: 'text' , required: true},
      {label: 'Area',               ngModel: 'area',            type: 'input',    dataType: 'text' , required: true},
      {label: 'Contact Person Name',ngModel: 'contactPersonName', type: 'input',  dataType: 'text' , required: false},
      {label: 'Website',            ngModel: 'website',         type: 'input',    dataType: 'text' , required: false},
      {label: 'Other',              ngModel: 'note',            type: 'textarea', dataType: 'text' , required: false}
    ];
  }
}
