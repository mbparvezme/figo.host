import { currencies } from "./constant";
import { readable, writable } from 'svelte/store';

export const currentCurrency = writable(currencies[0])
export const online = writable(true)

export const whmcsLink = readable("https://my.figo.host/")
export const priceDropdownUpdater = writable(false)
export let minHostingPrice = writable(0)
export let minDomainPrice = writable(0)