import mongoose from "mongoose"
import { loadType } from "mongoose-currency"

const { Schema } = mongoose;
loadType(mongoose);

const daySchema = new Schema({
  date: String,
  revenue: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
  expenses: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
},
  { toJson: { getters: true } }
);

const monthSchema = new Schema({
  month: String,
  revenue: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
  expenses: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
  operationalExpenses: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
  nonOperationalExpenses: {
    type: Number,
    currency: "USD",    // can be customised here
    get: (v) => v / 100
  },
},
  { toJson: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      currency: "USD",    // can be customised here
      get: (v) => v / 100
    },
    totalRevenue: {
      type: Number,
      currency: "USD",    // can be customised here
      get: (v) => v / 100
    },
    totalExpenses: {
      type: Number,
      currency: "USD",    // can be customised here
      get: (v) => v / 100
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        currency: "USD",    // can be customised here
        get: (v) => v / 100
      }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  }, 
   { timestamps: true, toJson: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;