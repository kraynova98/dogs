import { axiosBaseInstance } from "@/services/axiosBaseInstance";
import { AxiosPromise } from "axios";

export class DogsService {
  public static getDogsList(
    limit: number | null,
    page: number | null
  ): AxiosPromise {
    return axiosBaseInstance.get(`v1/images/search`, {
      params: { limit: limit, page: page, order: "DESC" },
    });
  }
}
