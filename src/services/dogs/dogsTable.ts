import { axiosBaseInstance } from "@/services/axiosBaseInstance";

export class DogsService {
  public static getDogsList() {
    return axiosBaseInstance.get(
      "/v1/images/search?limit=3&page=100&order=DESC"
    );
  }
}
