import { Example } from "@/constructors/Example"
export const example: Example = {
  header: "",
  url: "",
  method: "GET",
  id: 0,
  role: "",
  capabilities: "",
}
export const examples: Example[] = [
  {
    header: "Get All Users",
    url: "users",
    method: "GET",
    id: 0,
    role: "",
    capabilities: ""
  },
  {
    header: "Get One User",
    url: "users/:id",
    method: "GET",
    id: 7,
    role: "",
    capabilities: ""
  },
  {
    header: "Add One User",
    url: "users",
    method: "POST",
    id: 0,
    role: "Admin",
    capabilities: "ManageUsers, ManageBusinessUnits, EditData"
  },
  {
    header: "Update One User",
    url: "users/:id",
    method: "PUT",
    id: 1,
    role: "Admin",
    capabilities: "ManageUsers, ManageBusinessUnits, EditData"
  },
  {
    header: "Update One User",
    url: "users/:id",
    method: "DELETE",
    id: 1,
    role: "",
    capabilities: ""
  }
]
export const result: unknown = {}