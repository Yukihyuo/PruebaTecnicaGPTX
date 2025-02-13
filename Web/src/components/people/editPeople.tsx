import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import type People from "./peopleModel"
import axios from "axios"

interface EditPeopleProps {
  item: People
}

export function EditPeople({ item }: EditPeopleProps) {
  const [Data, setData] = useState({ ...item })

  const handleSubmit = () => {
    const fetchUrl = `${import.meta.env.VITE_API_URL}people/${Data.id}`
    axios.put(fetchUrl, { ...Data }).then(response => {
      console.log(response.data)
    })
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-4 hidden" id={`EditPeople${item.id}`}>Nueva Persona</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" >
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nombre" className="text-right">
                  Nombre
                </Label>
                <Input id="nombre" className="col-span-3" value={Data.nombre} onChange={({ target }) => { setData({ ...Data, nombre: target.value }) }} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="apellido_paterno" className="text-right">
                  Apellido Paterno
                </Label>
                <Input id="apellido_paterno" className="col-span-3" value={Data.apellido_paterno} onChange={({ target }) => { setData({ ...Data, apellido_paterno: target.value }) }} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="apellido_materno" className="text-right">
                  Apellido Materno
                </Label>
                <Input id="apellido_materno" className="col-span-3" value={Data.apellido_materno} onChange={({ target }) => { setData({ ...Data, apellido_materno: target.value }) }} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="direccion" className="text-right">
                  Dirección
                </Label>
                <Input id="direccion" className="col-span-3" value={Data.direccion} onChange={({ target }) => { setData({ ...Data, direccion: target.value }) }} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefono" className="text-right">
                  Teléfono
                </Label>
                <Input id="telefono" className="col-span-3" value={Data.telefono} onChange={({ target }) => { setData({ ...Data, telefono: target.value }) }} />
              </div>

            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
