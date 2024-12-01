export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userAgent?: string;
}

export interface LoginDto {
  email: string;
  password: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface resetPasswordDto {
  password: string;
  verificationCode: string;
}
