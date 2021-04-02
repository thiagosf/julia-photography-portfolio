interface ClassesOptions {
  [key: string]: boolean | undefined
}

export default function (options: ClassesOptions): string {
  const output: string[] = []
  for (const name of Object.keys(options)) {
    const value: boolean | undefined = options[name]
    if (value) {
      output.push(name)
    }
  }
  return output.join(' ')
}
