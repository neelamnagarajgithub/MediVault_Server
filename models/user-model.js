import mongoose from 'mongoose';
import  validator  from 'validator';

const { Schema } = mongoose;


const InsuranceSchema = new Schema({
  provider: { type: String, required: true },
  policy_number: { type: String, required: true }
});

const MedicationSchema = new Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true }
});

const MedicalHistorySchema = new Schema({
  condition: { type: String, required: true },
  diagnosed_date: { type: Date, required: true },
  medications: [MedicationSchema]
});


const ImmunizationSchema = new Schema({
  vaccine: { type: String, required: true },
  date: { type: Date, required: true }
});

const AppointmentSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  doctor: { type: String, required: true },
  department: { type: String, required: true },
  reason: { type: String, required: true }
});

const LabResultSchema = new Schema({
  test: { type: String, required: true },
  date: { type: Date, required: true },
  result: { type: String, required: true },
  normal_range: { type: String, required: true }
});

// Define main schema
const PatientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true, validate: [validator.isEmail, "not a valid email"] },
  insurance: InsuranceSchema,
  medical_history: [MedicalHistorySchema],
  allergies: [String],
  immunizations: [ImmunizationSchema],
  appointments: [AppointmentSchema],
  lab_results: [LabResultSchema],
  urls:[String]
});




const Patient = mongoose.model('user', PatientSchema);

export default Patient;