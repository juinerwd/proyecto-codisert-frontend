import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog"; // Asegúrate de importar correctamente desde ShadCN

type ModalViewerProps = {
    fileUrl: string; // URL de la imagen o PDF
};

const ModalViewer: React.FC<ModalViewerProps> = ({ fileUrl }) => {
    const [textBtn, setTextBtn] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const typeImage = ["jpg", "jpeg", "png"];
    const typeDocument = ["pdf", "doc", "docx"];
    let fileType;

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    if (typeImage.filter((img) => fileUrl.includes(img))) {
        setTextBtn("Ver Imagen")
        fileType = "image";
    }else if (typeDocument.filter((doc) => fileUrl.includes(doc))) {
        setTextBtn("Ver documento")
    }else{
        setTextBtn("Ver documento")
    }

    return (
        <>
            {/* Botón para abrir el modal */}
            <button
                onClick={handleOpen}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                {textBtn}
            </button>

            {/* Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>Vista Previa</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center items-center">
                        {fileType === "image" ? (
                            <img
                                src={fileUrl}
                                alt="Vista Previa"
                                className="max-w-full max-h-[80vh] rounded"
                            />
                        ) : (
                            <iframe
                                src={fileUrl}
                                className="w-full h-[80vh]"
                                title="Vista Previa PDF"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ModalViewer;
