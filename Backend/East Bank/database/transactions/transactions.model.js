import mongoose from "mongoose";

const transactionsSchema = mongoose.Schema({
    name: { type: String, required: [true] },
    CDI: { type: String, required: [true] },
    phone: { type: String, required: [true], },
    cardused: {type: String, required: [true] },
    cuotas:{type: Number, },
    metodo: {type: String, required: [true] },
    bank: {type: String, required: [true] },
    transvalue: { type: mongoose.Types.Decimal128, required: [true]},
    processed: { type: Boolean, default: false },
}, 
{ timestamps: true }
);

export default mongoose.model("transactions", transactionsSchema);
