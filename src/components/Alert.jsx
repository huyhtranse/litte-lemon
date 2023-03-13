import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <div>
      <div>
        <div>
          <div>
            {isSuccess ? "All good!" : "Oops!"}
          </div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
