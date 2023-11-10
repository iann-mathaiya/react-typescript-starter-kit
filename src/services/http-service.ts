import apiClient from "./api-client"

interface Entity {
  id: number
}

class HttpService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll<T>() {
    const controller = new AbortController()

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    })

    return { request, cancel: () => controller.abort() }
  }

  create<T>(entity: T) {
    return apiClient.post<T>(this.endpoint, entity)
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch<T>(this.endpoint + "/" + entity.id, entity)
  }

  delete<T>(id: number) {
    return apiClient.delete<T>(this.endpoint + "/" + id)
  }
}

const createHttpService = (endpoint: string) => new HttpService(endpoint)

export default createHttpService
