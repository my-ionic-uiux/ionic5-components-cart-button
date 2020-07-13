import { Component, OnInit } from '@angular/core';
import { CartModalPage } from '../../modals/cart-modal/cart-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
  entryComponents:[
    CartModalPage,
  ]
})
export class CartButtonComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async onClick() {
    // TODO: open modal cart page
    const modal = await this.modalController.create({
      component: CartModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'product': {
          'name': 'Product'
        },
      }
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
