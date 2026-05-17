import { services } from "@/data/services"

export function getServices() {
  return services
}

export function getServiceById(id: string) {
  return services.find((item) => item.id === id)
}