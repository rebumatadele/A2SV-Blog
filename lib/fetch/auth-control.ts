// authenticationController.ts
import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse, ChangePasswordRequest, ChangePasswordResponse, EditProfileResponse, EditProfileRequest } from '@/types/auth-control.interface';

const BASE_URL = 'https://a2sv-backend.onrender.com'


const register = async (userDetails: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    if (response.status === 201) {
      const data: RegisterResponse = await response.json();
      return data;
    } else {
      alert(`Registration failed with status code: ${response.status}`)
      throw new Error(`Registration failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const login = async (credentials: LoginRequest): Promise<any> => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.status === 200) {
        const data: LoginResponse = await response.json();
        return data;
      } else {
        throw new Error(`Login failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const changePassword = async (
    changePasswordDetails: ChangePasswordRequest,
    token: string
  ): Promise<ChangePasswordResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/change-password`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`, // Add the token to the headers
          'Content-Type': 'application/json', // Missing Content-Type header
        },
        body: JSON.stringify(changePasswordDetails),
      });
  
      if (response.ok) {
        const data: ChangePasswordResponse = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(
          `Change password failed with status code: ${response.status} - ${errorData.message || 'Unknown error'}`
        );
      }
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  };

  const editProfile = async (
    editProfileDetains: EditProfileRequest,
    token: string):Promise <EditProfileResponse> => {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/change-password`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`, // Add the token to the headers
            'Content-Type': 'application/json', // Missing Content-Type header
          },
          body: JSON.stringify(editProfileDetains),
        });
    
        if (response.ok) {
          const data: EditProfileResponse = await response.json();
          return data;
        } else {
          const errorData = await response.json();
          throw new Error(
            `Change password failed with status code: ${response.status} - ${errorData.message || 'Unknown error'}`
          );
        }
      } catch (error) {
        console.error('Error changing password:', error);
        throw error;
      }

  }

// Named exports
export { register, login, changePassword, editProfile };
