import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatNumberWithDecimal =(num:number):string=>{
  const [int, decimal] = num.toString().split(".")
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int

}

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '') // Remove all non-word characters except whitespace and hyphens
    .replace(/\s+/g, '-') // Corrected: Replace one or more whitespace characters with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens





    const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      minimumFractionDigits: 2,
})

export function formatCurrency(amout: number){
  return CURRENCY_FORMATTER.format(amout)
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US')

export function formatNumber(number: number){
  return NUMBER_FORMATTER.format(number)
}

export const round2 = (num:number)=>Math.round((num+Number.EPSILON)*100)/100


export const generateid = ()=>
  Array.from({length:24}, () => Math.floor(Math.random()*10)).join('')
