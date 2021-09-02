export interface SaveUpdateResFood {
  _id: string;
  name: string;
  price: string;
  type: string;
  size: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResWaiter {
  _id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  password: string;
  address: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResOrder {
  _id: string;
  waiterId: string;
  tableNumberId: string;
  foodId: string[];
  fullName: string;
  contactNumber: string;
  address: string;
  time: string;
  acceptORpending: string;
  totalBill: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResTable {
  _id: string;
  tableNumber: string;
  totalPerson: number;
  createdAt: string;
  updatedAt: string;
}








