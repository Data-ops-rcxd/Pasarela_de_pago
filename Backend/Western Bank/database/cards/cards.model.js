import mongoose from "mongoose";

function validateCreditCard(value) {
  if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value)) {
    return false;
  }
  const prefix = value.substr(0, 4);
  const chosenBrand = this.cardbrand.toLowerCase();
  if (
    (chosenBrand === "visa" && prefix.startsWith("4")) ||
    (chosenBrand === "mastercard" &&
      ["51", "52", "53", "54", "55"].includes(prefix.substring(0, 2))) ||
    (chosenBrand === "american express" &&
      ["34", "37"].includes(prefix.substring(0, 2)))
  ) {
    return true;
  }
  return false;
}

function validateCVV(value) {
  return /^[0-9]{3}$/.test(value);
}

function validateExpDate(value) {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  if (selectedDate < currentDate) {
    return false;
  }
  return true;
}

const cardSchema = mongoose.Schema(
  {
    card: {
      type: String,
      validate: {
        validator: validateCreditCard,
        message: "Invalid credit card number or doesn't match with brand",
      },
      required: [true],
      unique: [true],
    },
    cardbrand: {
      type: String,
      enum: ["Visa", "Mastercard", "American Express"],
      required: [true],
    },
    cvv: {
      type: Number,
      validate: {
        validator: validateCVV,
        message: "CCV must be a 3 digit number...",
      },
      required: [true],
    },
    bank: {
      type: String,
      default: "Western Bank",
    },
    expdate: {
      type: Date,
      validate: {
        validator: validateExpDate,
        message: "Invalid Exp Date",
      },
      required: [true],
    },
    useremail: { type: String, required: [true] },
    isDisable: { type: Boolean, default: [false] },
  },
  { timestamps: true }
);

export default mongoose.model("cards", cardSchema);
