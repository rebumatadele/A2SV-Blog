// authenticationController.ts

import { getTeamMemberResponse } from "@/types/member-control.interface";

const BASE_URL = 'http://blogapp.tryasp.net'


const getTeamMember = async (): Promise<getTeamMemberResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/members`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data: getTeamMemberResponse = await response.json();
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