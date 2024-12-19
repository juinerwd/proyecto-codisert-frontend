import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";

interface MessageDialogProps {
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: string;
}

const MessageDialog:React.FC<MessageDialogProps> = ({ isOpen, setIsOpen, title, description }) => {
    const closeDialog = () => setIsOpen(false);

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={closeDialog} variant="outline">
                        Aceptar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MessageDialog;