import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import axios from "axios"


interface DeletePeopleProps {
  idPeople: number
}

export function DeletePeople({ idPeople }: DeletePeopleProps) {


  const deleteElement = () => {
    console.log(idPeople)
    const fetchUrl = `${import.meta.env.VITE_API_URL}people/${idPeople}`
    axios.delete(fetchUrl)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mr-4 hidden" id={`DeletePeople${idPeople}`} >Eliminar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" >
        <DialogHeader>
          <DialogTitle>Eliminar</DialogTitle>
          <DialogDescription>
            ¿Estas seguro que quieres eliminar este registro?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={deleteElement} variant="destructive" >Eliminar</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
