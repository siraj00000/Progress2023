export interface ApiResponse {
  data: {
    success: boolean;
    token: string;
    message: string;
    data?: any;
  };
}

export interface ApiErrorResponse {
  response: any;
}

export interface UploadResponse {
  data: {
    success: boolean;
    token: string;
    message: string;
  };
}
