export class ProductModel{
    constructor(
        public productId: String,
        public productName: String,
        public productCode: String,
        public releaseDate: String,
        public description: String,
        public price: String,
        public starRating: String,
        public imageUrl: String){}
}