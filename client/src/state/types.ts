// KPI
export interface ExpensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface Month {
  _id: string;
  expenses: number;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: string;
}


export interface Day {
  _id: string;
  expenses: number;
  revenue: number;
  date: string;
}

export interface GetKpisResponse {
  _id: string;
  __v: number;
  totalRevenue: number;
  totalProfit: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  updatedAt: string;
  createdAt: string;

}

// Product
export interface GetProductsResponse {
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>; // ObjectIDs are strings.
  createdAt: string;
  updatedAt: string;
}


// Transaction
export interface GetTransactionsResponse {
  _id: string;
  __v: number;
  buyer: number;
  amount: number;
  createdAt: string;
  updatedAt: string;
}