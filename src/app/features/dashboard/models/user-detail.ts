export interface UserDetail {
  _id?: string;
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dob?: string;
  anniversary?: string;
  languages?: string[];
  spouseName?: string;
  spouseAge?: string;
  children?: Children[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Children {
  name?: string;
  age?: string;
}
