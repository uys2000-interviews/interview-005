
export class Example {
  header?: string
  url!: string
  method!: "GET" | "POST" | "PUT" | "DELETE"
  id!: number
  role: string | undefined
  capabilities: string | undefined
}
export class UserRequestClass {
  role: number | undefined
  capabilities: Array<string> | undefined
}