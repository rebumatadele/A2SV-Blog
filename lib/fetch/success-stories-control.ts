// authenticationController.ts

import { SuccessStoriesResponse } from "@/types/success-stories-control.interface";

const BASE_URL = 'https://a2sv-backend.onrender.com'


const getTeamMember = async (): Promise<SuccessStoriesResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/success-stories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data: SuccessStoriesResponse = await response.json();
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

export {getTeamMember}