import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SendCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full'>Send</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send SOL</DialogTitle>
          <DialogDescription>
            Enter the public key of the recipient to send SOL.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="Recievers Public Key"
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-between">
          <div className="flex items-center space-x-2 w-full">
            <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                SOL Amount
                </Label>
                <Input
                id="link"
                placeholder="SOL Amount"
                />
            </div>
          </div>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
                Send SOL
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
