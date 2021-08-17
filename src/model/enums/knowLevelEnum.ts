export class KnowLevel {
  /* eslint no-useless-constructor: "off" */
  constructor (
    public level: string,
    public know: number
  ) {
  }
}

export const defaultLevel = 'red'

export const knowLevels: Array<KnowLevel> = [
  new KnowLevel('red', 0),
  new KnowLevel('yellow', 85),
  new KnowLevel('green', 95)
]

export function getLevel (know?: number): string {
  let result = defaultLevel
  if (know) {
    for (let i = 1; i < knowLevels.length; i++) {
      const knowLevel = knowLevels[i]
      if (know * 100 >= knowLevel.know) {
        result = knowLevel.level
      } else {
        break
      }
    }
  }
  return result
}
