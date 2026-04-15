import mongoose from 'mongoose'

const statusEnum = ["AVAILABLE", "NOT_AVAILABLE", "DISCONTINUED"]

const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
        required: [true, "Name field is required"],
        
        minLength: 2,
        
        unique: true,
        
        lowercase: true,
        
        trim: true,
    },
    
    price: {
        type: Number,
        required: [true, "Price field is required"],
        min: [0, "Price field has to be a number"],
    },
    
    profitRate: {
        type: Number,
        default: 1.21,
        min: [1, "Profit rate must be greater than 1" ]
    },
    
    description: String,
    
    quantity: Number,

    
    status: {
        type: String,
        validate: {
            validator: function (value) {
                
                return statusEnum.includes(value)
            },
            
            message: props => `${props.value} nos es un estado valido`
        },
        default: statusEnum[0]
    },

    
    
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    highlighted: {
        type: Boolean,
        default: false
    },
    image: {type: String, default: null}

}, { 
  timestamps: true
})


productSchema.virtual("finalPrice").get(function () {
    return this.price * this.profitRate
})

productSchema.set("toJSON", {
    getters: true,
    setters: true,
    virtuals: true
})

export default mongoose.model("product", productSchema)