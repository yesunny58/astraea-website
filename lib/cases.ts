import { cases } from "@/data/cases"

export function getCases() {
  return cases
}

export function getCaseById(id: string) {
  return cases.find((item) => item.id === id)
}

export function getCasesByCategory(category: string) {
  return cases.filter((item) => item.category === category)
}