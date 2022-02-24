export interface User {
  id: number;
  code: string;
  username: string;
  full_name: string;
  date_of_birth: string;
  email: string;
  address: string;
  phone: string;
  avatar: string;
  is_actived: boolean;
  location_id: number;
}

export interface LoginData {
  token: string;
  refresh_token: string;
  user_info: User;
  message?: string;
}

// TODO: change data -> user_info
export interface RegisterData {
  data: User;
  message?: string;
}
