import {Schema,model,models} from "mongoose"

// export interface IProduct extends Document {
//     id: string;
//     product: {
//       hairimage: any; // Assuming you don't have a specific schema for hair image
//       hairtitle: string;
//       hairdescription: string;
//       hairprize: any; // Assuming you want to store prize as a string
//     };
//   }



  const productSchema:Schema  = new Schema({
    id: {
      type: String,
      required: true,
      unique: true // Ensures no duplicate product IDs
    },
    product: {
      type: Object,
      required: true,
      properties: {
        hairimage: {
          type:Object , // Assuming hairimage is a URL or file path
        },
        hairtitle: {
          type: String,
          required: true,
        },
        hairdescription: {
          type: String,
          required: true,
        },
        hairprize: {
          type: String, // Assuming hairprize is a numeric value without the "$" symbol
          required: true,
        },
      },
    },
  });



const Product = models['Product'] || model('Product', productSchema, 'Product');

// const Product =  mongoose.models.Product || mongoose.model('Product',productSchema);

export default Product