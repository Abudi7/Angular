import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiServices: ApiService) { }
  // getProducts = (url: string, params: any)
}
