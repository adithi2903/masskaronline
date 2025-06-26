export interface Product {
    id: number;
    name: string;
    arabicName:string;
    englishName:string;
    image: string;
    price: number;
    minWeight: string;
    description: string;
  }
  export interface CartItem {
    productId: number;
    name: string;
    quantity: number;
    addon: string;
    totalAmount: number;
    pricePerKg: number;
  }