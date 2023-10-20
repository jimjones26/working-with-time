import { writable } from 'svelte/store';
import type { DataItem } from './DataItemInterface';

const _dataStore = () => {
  const { set, update, subscribe } = writable([{}])

  return {
    subscribe,
    set: (data: Array<DataItem>) => set(data),
    update: (item: DataItem) => update((currentState: any) => {
      currentState.csvData.push(item)
      return { ...currentState }
    })
  }
}

export const dataStore = _dataStore();