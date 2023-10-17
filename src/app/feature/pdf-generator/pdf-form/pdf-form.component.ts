import {Component} from '@angular/core';
import {ProductInterface} from "../interfaces/product.interface";
import {DomSanitizer} from "@angular/platform-browser";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {getOfferDocumentDefinition} from '../utils/pdf-utils';
import {OwnerInterface} from "../interfaces/owner.interface";


@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.css']
})
export class PdfFormComponent {


  public showAlert: boolean = false;

  public msgAtAlert!: string;
  products: ProductInterface[] = [];
  brand: string = '';
  model: string = '';
  trimLevels: string = '';
  price: number = 0;
  images: FileList | null = null;

  owner!: OwnerInterface;
  date: string = '';
  name: string = '';
  phone: string = '';


  constructor(
    private sanitizer: DomSanitizer,
  ) {
    this.images = null;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;


  }


  addProduct(event: Event): void {
    event.preventDefault();

    if (!this.brand || !this.model || !this.trimLevels || isNaN(this.price) || !this.images || this.images.length === 0) {
      this.msgAtAlert = 'Completați toate câmpurile și încărcați cel puțin o imagine.'
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      return;
    }
    const imageUrls: string[] = [];
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images[i];
      const imageUrl = URL.createObjectURL(image);
      imageUrls.push(imageUrl);
    }

    const product: ProductInterface = {
      id: this.products.length + 1,
      imageUrls: imageUrls,
      brand: this.brand,
      model: this.model,
      trimLevel: this.trimLevels,
      price: this.price
    };

    console.log(product)

    this.products.push(product);

    console.log(this.products);

    this.brand = '';
    this.model = '';
    this.trimLevels = '';
    this.price = 0;
    this.images = null;


  }

  getSafeURL(imageUrl: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  onFileChange(event: any): void {
    this.images = event.target.files;
  }

  async generateOfferPdf() {
    if (!this.owner) {
      this.msgAtAlert = 'Clientrul nu este setat.'
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)

    } else {
      const documentDefinition = await getOfferDocumentDefinition(this.products, this.owner);
      pdfMake.createPdf(documentDefinition).open();
    }
  }

  addOwner($event: any) {
    if (!this.phone || !this.name || !this.date) {
      this.msgAtAlert = 'Completați toate câmpurile.'
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)
      return;
    }
    this.owner = {
      phone: this.phone,
      name: this.name,
      date: this.date,
    };

  }


}
