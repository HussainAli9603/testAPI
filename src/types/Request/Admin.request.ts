export interface ReqFood {
  name: string;
  price: string;
  type: string;
  size: string;
}
export interface ReqWaiter {
  fullName: string;
  contactNumber: string;
  email: string;
  password: string;
  address: string;
  description: string;
}
export interface ReqLoginWaiter {
  email: string;
  password: string;
}

export interface ReqOrder {
  waiterId: string;
  tableNumberId: string;
  foodId: string[];
  fullName: string;
  contactNumber: string;
  address: string;
  // time: string;
  // acceptORpending: string;
  totalBill: string;
}

export interface ReqTable {
  tableNumber: string;
  totalPerson: number;
}

export interface ReqWaiterOrderById {
  _id: string;
}

export interface ReqGetOrder {
  _id: string;
  time: string;
  acceptORpending: string;
}

export interface ReqDeleteFood {
  _id: string;
}










