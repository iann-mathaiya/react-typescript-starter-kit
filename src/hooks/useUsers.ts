import { User } from "../lib/users"
import { useEffect, useState } from "react"
import UserService from "../services/user-service"
import { AxiosError, CanceledError } from "../services/api-client"

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const { request, cancel } = UserService.getAll<User>()

    request
      .then((response) => {
        setUsers(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError((error as AxiosError).message)
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => cancel()
  }, [])

  return { users, error, isLoading, setUsers, setError }
}
