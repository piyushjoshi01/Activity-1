import request from "./request";

class AuthService {
  ENDPOINT = "users";

  public async signup(data: any): Promise<any> {
    const url = `${this.ENDPOINT}/register`;
    return request.post<any>(url, data).then((res: { data: any }) => {
      return res.data;
    });
  }

  public async login(data: any): Promise<any> {
    const url = `${this.ENDPOINT}/login`;
    return request.post<any>(url, data).then((res) => {
      return res.data;
    });
  }

  public async getUsers(): Promise<any> {
    const url = `${this.ENDPOINT}/getUsers`;
    return request.post<any>(url).then((res) => {
      return res.data;
    });
  }
}
const authService = new AuthService();

export default authService;
