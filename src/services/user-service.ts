import { User } from "../lib/users"
import apiClient from "./api-client"

class userService {
  getAllUsers() {
    const controller = new AbortController()

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    })

    return { request, cancel: () => controller.abort() }
  }

  createUser(user: User) {
    return apiClient.post<User>("/users", user)
  }

  updateUserById(user: User) {
    return apiClient.patch<User>("/users/" + user.id, user)
  }

  deleteUserById(id: number) {
    return apiClient.delete<User>("/users/" + id)
  }
}

export default new userService()
