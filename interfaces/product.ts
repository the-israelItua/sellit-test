export interface Product {
    id: string,
    shop_id: string,
    title: string,
    handle: string | null,
    description:string,
    status: string,
    barcode: string | null,
    price: string,
    quantity: number,
    sku: null,
    brand: string | null,
    condition: string,
    charge_tax: boolean,
    gender: string,
    tags: string[],
    options: string[],
    created_at: string,
    created_time: {},
    images: {
      id: string,
      position: null,
      product_id: string,
      url: string
    }[]
  }