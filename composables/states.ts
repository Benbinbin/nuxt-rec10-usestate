export const useCounter = () => useState<number>('counter', () => 0)

export const useToggle = () => useState<boolean>('toggle', () => false)