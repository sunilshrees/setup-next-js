// "use client";

// import React, { useEffect } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { useModalContext } from "./modal-context";
// import { cn } from "@/lib/utils";

// export const Modal: React.FC = () => {
//   const { modals, closeModal } = useModalContext();

//   if (modals.length === 0) return null;

//   return (
//     <>
//       {modals.map((modal, index) => {
//         const { component: Component, props } = modal;

//         return (
//           <Dialog key={index} open={true}>
//             <DialogContent
//               style={{
//                 maxWidth: modal.maxWidth || "auto",
//               }}
//               onInteractOutside={(e) => e.preventDefault()}
//               onEscapeKeyDown={(e) => e.preventDefault()}
//               className={cn("p-0 border-none z-[300]", props?.className)}
//             >
//               <Component {...props} closeModal={closeModal} />
//             </DialogContent>
//           </Dialog>
//         );
//       })}
//     </>
//   );
// };
"use client";

import React from "react";
import ReactModal from "react-modal"; // Explicitly import ReactModal
import { useModalContext } from "./modal-context";
import { cn } from "@/lib/utils";

// Fix TypeScript issue by casting ReactModal to a valid JSX component
const Modals: React.FC<ReactModal.Props> =
  ReactModal as unknown as React.FC<ReactModal.Props>;

export const Modal: React.FC = () => {
  const { modals, closeModal } = useModalContext(); // Getting the modals state and closeModal function from the context

  if (modals.length === 0) return null; // If no modals, don't render anything

  return (
    <>
      {modals.map((modal, index) => {
        const { component: Component, props } = modal; // Destructure modal component and properties

        return (
          <Modals
            key={index} // Unique key for each modal
            isOpen={true} // Control the modal open state
            onRequestClose={closeModal} // Close modal on overlay click or Esc press
            className={cn(
              "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg max-h-[80vh] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200  sm:rounded-lg overflow-y-scroll",
              modal.className
            )}
            overlayClassName={cn(
              "fixed inset-0 bg-black/80 z-[300]",
              modal.overlayClassName
            )}
            shouldCloseOnOverlayClick={true} // Close modal if clicked outside
            shouldCloseOnEsc={true} // Close modal on Esc key press
            ariaHideApp={false} // Disable app element hiding for accessibility (this is optional, based on your need)
          >
            <Component {...props} closeModal={closeModal} />
          </Modals>
        );
      })}
    </>
  );
};
