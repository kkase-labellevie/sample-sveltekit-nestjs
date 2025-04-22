import { writable } from 'svelte/store'

export const count = writable(0)

export const increment = () => {
  count.update((n) => n + 1)
}

export const decrement = () => {
  count.update((n) => n - 1)
}

export const reset = () => {
  count.set(0)
}
