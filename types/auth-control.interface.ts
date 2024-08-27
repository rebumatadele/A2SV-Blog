// authenticationController.interface.ts
  export interface RegisterRequest {
    email : string,
    password : string,
    name: string
  }
  
  export interface RegisterResponse {
    userId: string,
    token: string
  }
  
 export interface EditProfileResponse {
  message: string;
  body: {
    _id: string,
    name: string,
    email: string,
    password: string,
    image: string,
    role: string,
    __v: number
  }
 }
 export interface EditProfileRequest {
  name: string,
  email: string,
  image: string
 }

  export interface LoginRequest {
    userName: string;
    password: string;
  }
  
  export interface LoginResponse {
    
    user: string,
    userName: string,
    userRole: string,
    userEmail: string,
    userProfile: string,
    token: string
  }
  export interface ChangePasswordRequest {
    password: string;
    newPassword: string;
  }
  
  export interface ChangePasswordResponse {
    message: string
  }  