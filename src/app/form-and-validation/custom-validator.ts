import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Products } from './form-and-validation.component';

export class CustomValidator {
  productsList: Products[] = [];

  // Validation integer
  public static integer(formControl: FormControl): ValidationResult {
    let notInteger = null;
    const value = String(formControl.value);
    if (value !== null && value !== '' && value !== 'null') {
      notInteger = /^([1-9]\d*|0)$/.test(value);
      if (notInteger) {
        return null;
      }
    }
    return {integerInvalid: true};
  }

  // Validation maxQuantity
  public static maxQuantity(formGroup: FormGroup) {
    if (formGroup.controls.productNumber.value > formGroup.controls.product.value.maxQuantity) {
      formGroup.controls.productNumber.setErrors({ maxQuantityInvalid: true });
    } else {
      formGroup.controls.productNumber.setErrors(null);
    }
  }

  // Validation Total maxQuantity
  public static maxQuantityTotal(formArray: FormArray): ValidationResult {

    // check productNumber exist & product null case
    const arr = [];
    for (const fa of formArray.controls) {
      if (fa.value.product) {
        arr.push(fa.value);
      }
    }

    // Aggregate same products
    const m = new Map();
    const productsList: Products[] = [];

    arr.reduce((map, current) => {
      map.set(current.product, map.has(current.product) ? map.get(current.product) + current.productNumber : current.productNumber);
      return map;
    }, m).forEach(function(value, key) {
      this.push({product: key, productNumber: value});
    }, productsList);

    for (const pl of productsList) {
      if (pl.productNumber > pl.product.maxQuantity) {
        return {totalMaxQuantityInvalid: true};
      }
    }

    // return null;
  }
}

export interface ValidationResult {
  [key: string]: boolean;
}
