export interface LoginState {
  userId: string | null;
  username: string | null;
  oldUsername: string | null;
  tokenFromBe: string | null;
}

export interface LoginResponse {
  userId: string;
  tokenCheck: string;
}
