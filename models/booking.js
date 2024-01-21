const mongoose = require("mongoose");

// Define the schema
const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    staffName: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    dateSelected: {
      type: Date,
      required: true,
    },
    timeSelected: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
export default mongoose.models.Booking ||
  mongoose.model("Booking", appointmentSchema);
